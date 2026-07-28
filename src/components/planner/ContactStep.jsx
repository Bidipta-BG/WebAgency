import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { contactFields } from '../../data/common-questions';

const ContactStep = ({ contactInfo, setContactInfo, onSubmit, onBack, isSubmitting }) => {
  const [errors, setErrors] = useState({});

  const getIsInternational = () => {
    if (!contactInfo.mobile) return false;
    try {
      const phoneStr = contactInfo.mobile.startsWith('+') ? contactInfo.mobile : '+' + contactInfo.mobile;
      const parsed = parsePhoneNumberFromString(phoneStr);
      return parsed && parsed.country && parsed.country !== 'IN';
    } catch (e) {
      return false;
    }
  };
  
  const isInternational = getIsInternational();

  const validate = () => {
    const newErrors = {};
    
    contactFields.forEach(field => {
      if (field.required && !contactInfo[field.id]) {
        newErrors[field.id] = "This field is required";
      }
    });

    if (contactInfo.mobile && contactInfo.mobile.length < 7) {
      newErrors.mobile = "Please enter a valid phone number";
    }

    if (contactInfo.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactInfo.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!isInternational && !contactInfo.preferredCallTime) {
      newErrors.preferredCallTime = "Please select a preferred call time";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit();
    }
  };

  return (
    <div className="max-w-2xl mx-auto w-full animate-fade-in-up">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white">Where should we send your estimate?</h2>
        <p className="text-lg text-slate-400 mt-2">Just a few details so we know who we're talking to.</p>
      </div>

      <div className="bg-surface-highlight/50 rounded-xl shadow-sm border border-white/10 p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {contactFields.map(field => (
              <div key={field.id} className={field.id === 'businessName' ? 'md:col-span-2' : ''}>
                <label className="block text-sm font-medium text-slate-300 mb-1">
                  {field.label} {field.required && <span className="text-red-400">*</span>}
                </label>
                {field.id === 'mobile' ? (
                  <PhoneInput
                    country={'in'}
                    value={contactInfo[field.id] || ''}
                    onChange={(phone) => {
                        setContactInfo({...contactInfo, [field.id]: phone});
                        if (errors[field.id]) setErrors({...errors, [field.id]: undefined});
                    }}
                    enableSearch={true}
                    disableSearchIcon={true}
                    containerClass="w-full relative"
                    inputClass={`!w-full !bg-surface-muted !border ${errors[field.id] ? '!border-red-500 focus:!border-red-500' : '!border-white/10 focus:!border-accent'} !rounded-lg !text-white !outline-none !transition-all !h-[48px] !pl-14 !text-base`}
                    buttonClass="!bg-transparent !border-none !left-2 hover:!bg-surface !rounded-lg !transition-colors"
                    dropdownClass="!bg-surface-muted !text-slate-200 !border-surface-highlight !rounded-xl !shadow-2xl !mt-2 custom-phone-dropdown"
                    searchClass="!bg-surface !text-white !border-surface-highlight !rounded-lg !p-2 !w-[90%] !mx-2 !my-2"
                    searchStyle={{margin: '0', width: '90%'}}
                  />
                ) : (
                  <input
                    type={field.type}
                    value={contactInfo[field.id] || ''}
                    onChange={(e) => {
                        setContactInfo({...contactInfo, [field.id]: e.target.value});
                        if (errors[field.id]) setErrors({...errors, [field.id]: undefined});
                    }}
                    className={`w-full px-4 py-3 rounded-lg border bg-surface-muted text-white placeholder-slate-500 ${
                      errors[field.id] ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' : 'border-white/10 focus:border-accent focus:ring-1 focus:ring-accent'
                    } outline-none transition-all`}
                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                  />
                )}
                {errors[field.id] && <p className="text-red-500 text-sm mt-1">{errors[field.id]}</p>}
              </div>
            ))}
            
            {/* Preferred Call Time Dropdown */}
            {!isInternational && (
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">
                  Choose the best time slot so that our team can contact you <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <select
                    value={contactInfo.preferredCallTime || ''}
                    onChange={(e) => setContactInfo({...contactInfo, preferredCallTime: e.target.value})}
                    className={`w-full px-4 py-3 rounded-lg border bg-surface-muted text-white appearance-none ${
                      errors.preferredCallTime ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' : 'border-white/10 focus:border-accent focus:ring-1 focus:ring-accent'
                    } outline-none transition-all`}
                  >
                    <option value="" disabled>Select a time window...</option>
                    <option value="07:00 AM - 09:00 AM">07:00 AM - 09:00 AM</option>
                    <option value="09:00 AM - 11:00 AM">09:00 AM - 11:00 AM</option>
                    <option value="11:00 AM - 01:00 PM">11:00 AM - 01:00 PM</option>
                    <option value="01:00 PM - 03:00 PM">01:00 PM - 03:00 PM</option>
                    <option value="03:00 PM - 05:00 PM">03:00 PM - 05:00 PM</option>
                    <option value="05:00 PM - 07:00 PM">05:00 PM - 07:00 PM</option>
                    <option value="07:00 PM - 09:00 PM">07:00 PM - 09:00 PM</option>
                    <option value="09:00 PM - 11:00 PM">09:00 PM - 11:00 PM</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                    <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
                {errors.preferredCallTime && <p className="text-red-500 text-sm mt-1">{errors.preferredCallTime}</p>}
              </div>
            )}
          </div>

          <div className="flex justify-between items-center mt-10 border-t pt-8">
            <button 
              type="button"
              onClick={onBack}
              disabled={isSubmitting}
              className="px-6 py-3 text-slate-400 font-medium hover:text-white transition-colors disabled:opacity-50"
            >
              ← Back
            </button>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-accent text-white rounded-lg font-bold hover:bg-accent-bright shadow-lg hover:shadow-accent/30 transition-all flex items-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                'See My Estimate →'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactStep;
