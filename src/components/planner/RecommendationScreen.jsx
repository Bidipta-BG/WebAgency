import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { getReadableAnswers } from '../../engines/questionFlowController';
import { generateQuotationPDF } from '../../utils/generateQuotationPDF';

const RecommendationScreen = ({ recommendation, managementType, answers, selectedIndustry, contactInfo, isEditMode, onUpdateQuotation, isUpdating, onBack }) => {
  const [billingMode, setBillingMode] = useState('monthly'); // 'monthly' or 'annual'
  const [isGenerating, setIsGenerating] = useState(false);
  const [fixedPrices, setFixedPrices] = useState({
    setupFee: '',
    monthly: '',
    annual: '',
    handover: ''
  });
  const { packageName, pricing, features, reasons, isCustom } = recommendation;
  
  const isHandover = managementType === 'handover';
  const formatPrice = (price) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
  const calcGst = (price) => Math.round(price * 1.18);

  const renderPrice = (priceObj) => {
    if (priceObj?.na) return 'N/A';
    if (priceObj?.fixed) return formatPrice(priceObj.fixed);
    return `${formatPrice(calcGst(priceObj.min))} – ${formatPrice(calcGst(priceObj.max))}`;
  };

  const renderBase = (priceObj) => {
    if (priceObj?.na) return '';
    if (priceObj?.fixed) return `(Base price: ${formatPrice(Math.round(priceObj.fixed / 1.18))})`;
    return `(Includes 18% GST. Base price: ${formatPrice(priceObj.min)} – ${formatPrice(priceObj.max)})`;
  };

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      const readableAnswers = getReadableAnswers(answers, selectedIndustry);
      await generateQuotationPDF({
        readableAnswers,
        contactInfo,
        recommendation,
        managementType,
        selectedIndustry
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  if (isCustom) {
    return (
      <div className="max-w-3xl mx-auto w-full animate-fade-in text-center py-10">
        <div className="inline-block px-4 py-1.5 bg-yellow-500/20 text-yellow-400 font-bold rounded-full text-sm mb-4">
          🤝 Let's Talk Details
        </div>
        <h2 className="text-4xl font-extrabold text-white tracking-tight mb-4">
          Your Request is Unique
        </h2>
        <p className="text-xl text-slate-400 mb-8">
          Based on your answers, your requirements are highly customized. Our technical team will review your answers and contact you within 24 hours with a tailored proposal.
        </p>
        <button 
          className="px-10 py-4 bg-accent text-white rounded-xl font-bold text-lg hover:bg-accent-bright shadow-lg shadow-accent/25 transition-all"
          onClick={() => window.location.href = "/"}
        >
          Return to Homepage
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto w-full animate-fade-in">
      <div className="text-center mb-10">
        <div className="inline-block px-4 py-1.5 bg-green-500/20 text-green-400 font-bold rounded-full text-sm mb-4">
          🎉 Your Website Plan is Ready
        </div>
        <h2 className="text-4xl font-extrabold text-white tracking-tight capitalize">
          The {packageName} Package
        </h2>
        <p className="text-xl text-slate-400 mt-3">Tailored perfectly for your business goals.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Reasons & Features */}
        <div className="space-y-8">
          <div className="bg-surface-highlight/50 rounded-xl shadow-sm border border-white/10 p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <span className="bg-accent/20 text-accent p-2 rounded-lg mr-3">💡</span>
              Why We Recommended This
            </h3>
            <ul className="space-y-3">
              {reasons.map((r, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-accent mr-2 mt-0.5">•</span>
                  <span className="text-slate-300">{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface-highlight/50 rounded-xl shadow-sm border border-white/10 p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <span className="bg-green-500/20 text-green-400 p-2 rounded-lg mr-3">📦</span>
              What's Included
            </h3>
            <ul className="space-y-3">
              {features.map((f, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-300">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Pricing */}
        <div>
          <div className="bg-gradient-to-br from-indigo-900 to-indigo-800 rounded-2xl shadow-xl p-8 text-white sticky top-8">
            <h3 className="text-2xl font-bold mb-6">Investment Summary</h3>
            
            {/* Setup Fee */}
            <div className="mb-8 border-b border-indigo-700 pb-6">
              <p className="text-indigo-200 text-sm font-medium mb-1">One-time Setup Fee</p>
              <div className="text-3xl font-bold">
                {renderPrice(pricing.setupFee)}
              </div>
              <div className="mt-3">
                <span className="text-indigo-100 text-sm font-semibold bg-indigo-950/60 px-3 py-1.5 rounded-md border border-indigo-400/30 inline-block">
                  {renderBase(pricing.setupFee)}
                </span>
              </div>
              <p className="text-indigo-300 text-xs mt-3">Paid before development begins. Refundable per our refund policy.</p>
            </div>

            {/* Recurring / Handover */}
            {isHandover ? (
              <div className="mb-8">
                <p className="text-indigo-200 text-sm font-medium mb-1">Source Code Handover Fee</p>
                <div className="text-3xl font-bold text-green-400">
                  {renderPrice(pricing.handover)}
                </div>
                <div className="mt-3">
                  <span className="text-indigo-100 text-sm font-semibold bg-indigo-950/60 px-3 py-1.5 rounded-md border border-indigo-400/30 inline-block">
                    {renderBase(pricing.handover)}
                  </span>
                </div>
                <p className="text-indigo-300 text-xs mt-3">One-time payment upon completion. You own and host everything.</p>
              </div>
            ) : (
              <div className="mb-8">
                <div className="flex bg-indigo-950/50 p-1 rounded-lg mb-5 w-max">
                  <button
                    onClick={() => setBillingMode('monthly')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${billingMode === 'monthly' ? 'bg-indigo-600 text-white' : 'text-indigo-300 hover:text-white'}`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingMode('annual')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${billingMode === 'annual' ? 'bg-indigo-600 text-white' : 'text-indigo-300 hover:text-white'}`}
                  >
                    Annual <span className="bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded ml-1 uppercase font-bold">2 Mo Free</span>
                  </button>
                </div>

                <p className="text-indigo-200 text-sm font-medium mb-1">
                  {billingMode === 'monthly' ? 'Monthly Management Fee' : 'Annual Management Fee'}
                </p>
                <div className="text-3xl font-bold text-green-400">
                  {billingMode === 'monthly' ? renderPrice(pricing.monthly) : renderPrice(pricing.annual)}
                  <span className="text-lg text-indigo-300 font-normal"> / {billingMode === 'monthly' ? 'mo' : 'yr'}</span>
                </div>
                {((billingMode === 'monthly' && !pricing.monthly?.na) || (billingMode === 'annual' && !pricing.annual?.na)) && (
                  <div className="mt-3">
                    <span className="text-indigo-100 text-sm font-semibold bg-indigo-950/60 px-3 py-1.5 rounded-md border border-indigo-400/30 inline-block">
                      {billingMode === 'monthly' ? renderBase(pricing.monthly) : renderBase(pricing.annual)}
                    </span>
                  </div>
                )}
                <p className="text-indigo-300 text-xs mt-3">Includes hosting, maintenance, and support.</p>
              </div>
            )}

            {isEditMode && (
              <div className="mb-8 pt-6 border-t border-indigo-700/50">
                <h4 className="text-amber-500 font-bold mb-4 flex items-center gap-2">
                  SALES OVERRIDE (Set Final Fixed Price)
                </h4>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs text-indigo-300 block mb-1">Final Setup Fee (Incl. 18% GST)</label>
                    <input 
                      type="number" 
                      value={fixedPrices.setupFee} 
                      onChange={e => setFixedPrices(p => ({...p, setupFee: e.target.value}))}
                      className="w-full bg-indigo-950 border border-indigo-800 rounded px-3 py-2 text-white focus:outline-none focus:border-amber-500" 
                      placeholder={`e.g. ${pricing?.setupFee?.min || ''}`}
                    />
                  </div>
                  {isHandover ? (
                    <div>
                      <label className="text-xs text-indigo-300 block mb-1">Final Handover Fee (Incl. 18% GST)</label>
                      <input 
                        type="number" 
                        value={fixedPrices.handover} 
                        onChange={e => setFixedPrices(p => ({...p, handover: e.target.value}))}
                        className="w-full bg-indigo-950 border border-indigo-800 rounded px-3 py-2 text-white focus:outline-none focus:border-amber-500" 
                        placeholder={`e.g. ${pricing?.handover?.min || ''}`}
                      />
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs text-indigo-300 block mb-1">Final Monthly (Incl. 18% GST)</label>
                        <input 
                          type="number" 
                          value={fixedPrices.monthly} 
                          onChange={e => setFixedPrices(p => ({...p, monthly: e.target.value}))}
                          className="w-full bg-indigo-950 border border-indigo-800 rounded px-3 py-2 text-white focus:outline-none focus:border-amber-500" 
                          placeholder={`e.g. ${pricing?.monthly?.min || ''}`}
                        />
                      </div>
                      <div>
                        <label className="text-xs text-indigo-300 block mb-1">Final Annual (Incl. 18% GST)</label>
                        <input 
                          type="number" 
                          value={fixedPrices.annual} 
                          onChange={e => setFixedPrices(p => ({...p, annual: e.target.value}))}
                          className="w-full bg-indigo-950 border border-indigo-800 rounded px-3 py-2 text-white focus:outline-none focus:border-amber-500" 
                          placeholder={`e.g. ${pricing?.annual?.min || ''}`}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            <button 
              onClick={handleDownload}
              disabled={isGenerating}
              className={`w-full py-4 mt-6 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center transition-all ${
                isGenerating 
                  ? 'bg-indigo-800 text-indigo-400 cursor-not-allowed' 
                  : 'bg-white text-indigo-900 hover:bg-gray-100 hover:scale-[1.02]'
              }`}
            >
              {isGenerating ? (
                <>
                  <div className="w-5 h-5 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin mr-3"></div>
                  Generating PDF...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5 mr-2" />
                  Download Quotation (PDF)
                </>
              )}
            </button>

            {isEditMode && (
              <>
                <button
                  onClick={() => onUpdateQuotation(fixedPrices)}
                  disabled={isUpdating || isGenerating}
                  className={`w-full py-4 mt-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center transition-all border-2 border-amber-500/50 ${
                    isUpdating || isGenerating
                      ? 'bg-amber-900/50 text-amber-500/50 cursor-not-allowed'
                      : 'bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 hover:scale-[1.02]'
                  }`}
                >
                  {isUpdating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-amber-500 border-t-transparent rounded-full animate-spin mr-3"></div>
                      Updating Database...
                    </>
                  ) : (
                    'Update Customer Quotation'
                  )}
                </button>
                
                <button
                  onClick={onBack}
                  disabled={isUpdating || isGenerating}
                  className={`w-full py-3 mt-3 rounded-xl font-medium text-base transition-all text-indigo-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 ${
                    (isUpdating || isGenerating) && 'opacity-50 cursor-not-allowed'
                  }`}
                >
                  ← Go Back & Edit Answers
                </button>
              </>
            )}

            <div className="mt-6 text-center text-xs text-indigo-300/80">
              <p>Prices are estimates and include 18% GST.</p>
              <details className="mt-2 cursor-pointer">
                <summary className="hover:text-indigo-200 transition-colors focus:outline-none">View Refund Policy</summary>
                <p className="mt-2 text-left bg-indigo-950/50 p-3 rounded text-[11px] leading-relaxed">
                  <strong>Setup Fee Refund:</strong> Full refund if cancelled before work begins. Partial refund (Setup fee minus work completed) if requested within the first half of the agreed delivery window. No refund after the first half of the delivery window.<br/><br/>
                  <strong>Management Fee:</strong> Non-refundable once the month/year has started.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationScreen;
