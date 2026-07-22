import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import FoundationQuestions from './FoundationQuestions';
import IndustrySelector from './IndustrySelector';
import PlannerStep from './PlannerStep';
import ContactStep from './ContactStep';
import LoadingScreen from './LoadingScreen';
import RecommendationScreen from './RecommendationScreen';

import { getVisibleQuestions, getReadableAnswers } from '../../engines/questionFlowController';
import { calculateScore } from '../../engines/scoringEngine';
import { getPackage } from '../../engines/packageEngine';
import { buildRecommendation } from '../../engines/recommendationEngine';
import { submitEstimate, getLead } from '../../services/api';
import { salesQuestions } from '../../data/sales-questions';

const PlannerShell = () => {
  const [currentStep, setCurrentStep] = useState(-1);
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [answers, setAnswers] = useState({});
  const [salesAnswers, setSalesAnswers] = useState({});
  const [contactInfo, setContactInfo] = useState({});
  const [recommendation, setRecommendation] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editId, setEditId] = useState(null);
  const [isInitializing, setIsInitializing] = useState(true);
  
  const plannerRef = useRef(null);

  // Initialize edit mode if requested
  useEffect(() => {
    const initEditMode = async () => {
      try {
        const searchParams = new URLSearchParams(window.location.search);
        const editLeadId = searchParams.get('edit');
        if (editLeadId) {
          setEditId(editLeadId);
          const leadData = await getLead(editLeadId);
          if (leadData) {
            setAnswers(leadData.answers || {});
            if (leadData.salesAnswers) setSalesAnswers(leadData.salesAnswers);
            setSelectedIndustry(leadData.industry || '');
            setContactInfo({
              ownerName: leadData.leadInfo?.name || '',
              email: leadData.leadInfo?.email || '',
              mobile: leadData.leadInfo?.phone || '',
              businessName: leadData.leadInfo?.businessName || '',
              city: leadData.leadInfo?.city || '',
              preferredCallTime: leadData.leadInfo?.preferredCallTime || ''
            });
            // Jump straight to Step -1 but fully hydrated
            setCurrentStep(-1);
          }
        }
      } catch (error) {
        console.error("Failed to initialize edit mode:", error);
      } finally {
        setIsInitializing(false);
      }
    };
    initEditMode();
  }, []);

  // Auto-scroll to top of planner when step changes
  useEffect(() => {
    if (plannerRef.current) {
      // Small delay ensures DOM has updated before scrolling
      setTimeout(() => {
        plannerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  }, [currentStep]);

  // Handle answering a question
  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  // Get questions for current step
  const visibleQuestions = getVisibleQuestions(answers, currentStep, selectedIndustry);
  
  // Check if current step is fully answered
  const isCurrentStepValid = () => {
    if (currentStep === -1) return answers.Q0A && answers.Q0B;
    if (currentStep === 0) return !!selectedIndustry;
    // For Steps 1, 2, 3
    if (currentStep >= 1 && currentStep <= 3) {
      return visibleQuestions.every(q => {
        if (!q.required) return true;
        const ans = answers[q.id];
        if (Array.isArray(ans)) return ans.length > 0;
        return !!ans;
      });
    }
    return true;
  };

  const handleNext = () => {
    if (currentStep === 3 && !editId) {
      setCurrentStep(5);
    } else if (currentStep < 7) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep === 5 && !editId) {
      setCurrentStep(3);
    } else if (currentStep > -1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmitContact = async () => {
    setCurrentStep(6); // Show loading screen
  };

  const handleLoadingComplete = async () => {
    try {
      // 1. Calculate final score
      const score = calculateScore(answers, selectedIndustry, salesAnswers);
      
      // 2. Get package pricing
      const pkgResult = getPackage(score, answers, selectedIndustry, salesAnswers);
      
      let finalRec;
      if (pkgResult) {
        // 3. Build features and reasons
        const { features, reasons } = buildRecommendation(answers, pkgResult, selectedIndustry);
        finalRec = {
          ...pkgResult,
          features,
          reasons,
          isCustom: false
        };
      } else {
        // Fallback for "Others" industry - map their budget answers to the pricing object
        const setupMap = {
          'budget-setup-5k': { min: 0, max: 5000 },
          'budget-setup-10k': { min: 5000, max: 10000 },
          'budget-setup-15k': { min: 10000, max: 15000 },
          'budget-setup-20k': { min: 15000, max: 20000 },
          'budget-setup-30k': { min: 20000, max: 30000 },
          'budget-setup-30k-plus': { min: 30000, max: 50000 }
        };
        const monthlyMap = {
          'budget-monthly-500': { min: 0, max: 500 },
          'budget-monthly-1k': { min: 500, max: 1000 },
          'budget-monthly-1500': { min: 1000, max: 1500 },
          'budget-monthly-2k': { min: 1500, max: 2000 },
          'budget-monthly-2500': { min: 2000, max: 2500 },
          'budget-monthly-3k': { min: 2500, max: 3000 },
          'budget-monthly-3k-plus': { min: 3000, max: 5000 }
        };

        const customPricing = (answers.Q4 && answers.Q5) ? {
          setupFee: setupMap[answers.Q4] || { min: 0, max: 0 },
          monthly: monthlyMap[answers.Q5] || { min: 0, max: 0 },
          annual: { na: true },
          handover: { na: true }
        } : null;

        finalRec = {
          packageName: "Custom Build",
          score,
          pricing: customPricing,
          features: [],
          reasons: [],
          isCustom: true
        };
      }
      
      setRecommendation(finalRec);

      // 4. Submit to Backend (ONLY if not in edit mode)
      if (!editId) {
        const payload = {
          formType: 'industry-planner',
          industry: selectedIndustry,
          buildType: answers.Q0A,
          managementType: answers.Q0B,
          leadInfo: {
            name: contactInfo.ownerName,
            email: contactInfo.email || '',
            phone: contactInfo.mobile,
            businessName: contactInfo.businessName,
            city: contactInfo.city,
            preferredCallTime: contactInfo.preferredCallTime
          },
          answers,
          salesAnswers,
          readableAnswers: getReadableAnswers(answers, selectedIndustry),
          recommendation: {
            package: finalRec.packageName,
            complexityScore: finalRec.score,
            paymentPlan: answers.Q0B === 'handover' ? 'handover' : 'monthly',
            pricing: finalRec.pricing || 'Custom Pricing',
            features: finalRec.features,
            reasons: finalRec.reasons
          },
          refundPolicy: {
            deliveryWindowDays: answers.QCS3 === '7-days' ? 7 : answers.QCS3 === '15-days' ? 15 : answers.QCS3 === '30-days' ? 30 : 60,
            refundDeadlineDays: answers.QCS3 === '7-days' ? 3 : answers.QCS3 === '15-days' ? 7 : answers.QCS3 === '30-days' ? 15 : 30,
            refundEligible: true
          }
        };
        await submitEstimate(payload);
      }
      
    } catch (error) {
      console.error("Error submitting lead:", error);
      // Even if API fails, show user the result
    } finally {
      setCurrentStep(7); // Show results
    }
  };

  const handleUpdateLead = async (fixedPrices = {}) => {
    if (!editId || !recommendation) return;
    
    setIsSubmitting(true);
    try {
      let updatedPricing = recommendation.pricing ? JSON.parse(JSON.stringify(recommendation.pricing)) : 'Custom Pricing';
      
      // Override pricing with fixed values if sales agent provided them
      if (updatedPricing !== 'Custom Pricing') {
        if (fixedPrices.setupFee) updatedPricing.setupFee = { fixed: Number(fixedPrices.setupFee) };
        if (fixedPrices.monthly) updatedPricing.monthly = { fixed: Number(fixedPrices.monthly) };
        if (fixedPrices.annual) updatedPricing.annual = { fixed: Number(fixedPrices.annual) };
        if (fixedPrices.handover) updatedPricing.handover = { fixed: Number(fixedPrices.handover) };

        // If sales rep provided monthly but NOT annual, mark annual as N/A
        if (fixedPrices.monthly && !fixedPrices.annual) {
          updatedPricing.annual = { na: true };
        }
        // If sales rep provided annual but NOT monthly, mark monthly as N/A
        else if (fixedPrices.annual && !fixedPrices.monthly) {
          updatedPricing.monthly = { na: true };
        }
      }
      const payload = {
        formType: 'industry-planner',
        industry: selectedIndustry,
        buildType: answers.Q0A,
        managementType: answers.Q0B,
        leadInfo: {
          name: contactInfo.ownerName,
          email: contactInfo.email || '',
          phone: contactInfo.mobile,
          businessName: contactInfo.businessName,
          city: contactInfo.city,
          preferredCallTime: contactInfo.preferredCallTime
        },
        answers,
        salesAnswers,
        readableAnswers: getReadableAnswers(answers, selectedIndustry),
        recommendation: {
          package: recommendation.packageName,
          complexityScore: recommendation.score,
          paymentPlan: answers.Q0B === 'handover' ? 'handover' : 'monthly',
          pricing: updatedPricing,
          features: recommendation.features,
          reasons: recommendation.reasons
        },
        refundPolicy: {
          deliveryWindowDays: answers.QCS3 === '7-days' ? 7 : answers.QCS3 === '15-days' ? 15 : answers.QCS3 === '30-days' ? 30 : 60,
          refundDeadlineDays: answers.QCS3 === '7-days' ? 3 : answers.QCS3 === '15-days' ? 7 : answers.QCS3 === '30-days' ? 15 : 30,
          refundEligible: true
        }
      };

      await submitEstimate(payload, editId);
      
      // Update local state so the UI and PDF generator use the new prices immediately
      setRecommendation(prev => ({
        ...prev,
        pricing: updatedPricing
      }));

      alert('Quotation successfully updated in the database!');
    } catch (error) {
      console.error("Error updating lead:", error);
      alert('Failed to update quotation.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Step renderer
  const renderStep = () => {
    switch (currentStep) {
      case -1:
        return <FoundationQuestions answers={answers} onAnswer={handleAnswer} onNext={handleNext} isSalesMode={!!editId} />;
      case 0:
        return <IndustrySelector selectedIndustry={selectedIndustry} onSelect={setSelectedIndustry} onNext={handleNext} onBack={handleBack} />;
      case 1:
        return <PlannerStep title="About Your Business" subtext="Help us understand your setup." questions={visibleQuestions} answers={answers} onAnswer={handleAnswer} onNext={handleNext} onBack={handleBack} isNextDisabled={!isCurrentStepValid()} isSalesMode={!!editId} />;
      case 2:
        return <PlannerStep title="Your Goals" subtext="What do you want to achieve?" questions={visibleQuestions} answers={answers} onAnswer={handleAnswer} onNext={handleNext} onBack={handleBack} isNextDisabled={!isCurrentStepValid()} isSalesMode={!!editId} />;
      case 3:
        return <PlannerStep title="Current Situation" subtext="What assets do you already have?" questions={visibleQuestions} answers={answers} onAnswer={handleAnswer} onNext={handleNext} onBack={handleBack} isNextDisabled={!isCurrentStepValid()} isSalesMode={!!editId} />;
      case 4:
        return <PlannerStep title="Internal Sales Refinement" subtext="Add-ons and modifiers (Customer will not see this)" questions={salesQuestions} answers={salesAnswers} onAnswer={(q, v) => setSalesAnswers(p => ({...p, [q]: v}))} onNext={handleNext} onBack={handleBack} isNextDisabled={false} isSalesMode={true} />;
      case 5:
        return <ContactStep contactInfo={contactInfo} setContactInfo={setContactInfo} onSubmit={handleSubmitContact} onBack={handleBack} isSubmitting={isSubmitting} />;
      case 6:
        return <LoadingScreen onComplete={handleLoadingComplete} isEditMode={!!editId} />;
      case 7:
        return <RecommendationScreen 
          recommendation={recommendation} 
          managementType={answers.Q0B} 
          answers={answers} 
          selectedIndustry={selectedIndustry} 
          contactInfo={contactInfo} 
          isEditMode={!!editId}
          onUpdateQuotation={handleUpdateLead}
          isUpdating={isSubmitting}
          onBack={() => setCurrentStep(editId ? 4 : 3)}
        />;
      default:
        return null;
    }
  };

  if (isInitializing) {
    return (
      <div className="min-h-screen bg-surface-muted flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-400">Loading Customer Profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div id="calculator" ref={plannerRef} className="min-h-screen bg-surface-muted py-12 px-4 sm:px-6 lg:px-8 font-sans text-primary selection:bg-accent selection:text-white flex flex-col items-center justify-center pt-24 relative">
      {editId && (
        <div className="absolute top-4 w-full flex justify-center z-10">
          <div className="bg-amber-500/10 border border-amber-500/20 text-amber-500 font-bold px-4 py-1.5 rounded-full text-xs shadow-lg shadow-black/20 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            SALES EDIT MODE ACTIVE
          </div>
        </div>
      )}
      <div className="w-full max-w-5xl">
        {/* Progress Bar (hidden on -1 and 5+) */}
        {currentStep >= 0 && currentStep < 5 && (
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex justify-between text-xs font-semibold text-slate-400 mb-2 px-1">
              <span>Industry</span>
              <span>About</span>
              <span>Goals</span>
              <span>Assets</span>
              <span>Contact</span>
            </div>
            <div className="h-2 w-full bg-surface-highlight rounded-full overflow-hidden flex">
              {[0, 1, 2, 3, 4].map(stepIndex => (
                <div 
                  key={stepIndex} 
                  className={`h-full flex-1 border-r border-white/5 transition-colors duration-500 ${
                    currentStep >= stepIndex ? 'bg-accent' : 'bg-transparent'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
        
        {renderStep()}

        {/* Not sure escape hatch — visible on all steps except loading & results */}
        {currentStep !== 6 && currentStep !== 7 && (
          <div className="flex justify-center mt-10">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm transition-colors"
            >
              <span>Not sure what you need?</span>
              <span className="underline underline-offset-2 group-hover:text-accent transition-colors">Talk to us directly &rarr;</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlannerShell;
