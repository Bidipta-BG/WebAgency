import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, FileText } from 'lucide-react';

const LegalModal = ({ isOpen, onClose, activeTab }) => {
    // Prevent background scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="bg-surface rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden shadow-2xl flex flex-col border border-white/10"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-white/10">
                        <div className="flex items-center gap-2">
                            {activeTab === 'privacy' ? <Shield className="w-5 h-5 text-accent" /> : <FileText className="w-5 h-5 text-accent" />}
                            <h2 className="text-xl font-bold text-white">
                                {activeTab === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
                            </h2>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Scrollable Content */}
                    <div className="p-6 overflow-y-auto leading-relaxed text-slate-400 space-y-4">
                        {activeTab === 'privacy' ? (
                            <>
                                <p><strong>Last Updated: January 2026</strong></p>
                                <p>At AxomITLab, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information.</p>

                                <h3 className="text-lg font-bold text-primary pt-4">1. Information We Collect</h3>
                                <p>We collect information you provide directly to us, such as when you fill out our cost estimator form, request a consultation, or communicate with us via email. This may include your name, email address, phone number, and project details.</p>

                                <h3 className="text-lg font-bold text-primary pt-4">2. How We Use Your Information</h3>
                                <p>We use the information we collect to:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Provide, maintain, and improve our services.</li>
                                    <li>Process your requests and send you estimates.</li>
                                    <li>Communicate with you about updates, promotions, and news.</li>
                                </ul>

                                <h3 className="text-lg font-bold text-primary pt-4">3. Data Security</h3>
                                <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>

                                <h3 className="text-lg font-bold text-primary pt-4">4. Contact Us</h3>
                                <p>If you have any questions about this Privacy Policy, please contact us at <strong>privacy@axomitlab.com</strong>.</p>
                            </>
                        ) : (
                            <>
                                <p><strong>Last Updated: January 2026</strong></p>
                                <p>Welcome to AxomITLab. By accessing or using our websites and services, you agree to be bound by these Terms of Service.</p>

                                <h3 className="text-lg font-bold text-primary pt-4">1. Scope of Services</h3>
                                <p>AxomITLab provides software development, UI/UX design, and consulting services. The specific scope of work will be defined in individual project agreements.</p>

                                <h3 className="text-lg font-bold text-primary pt-4">2. Payments & EMI</h3>
                                <p>We offer flexible payment terms, including EMI options. Failure to make payments on time may result in the suspension of services or project handover delays. Code ownership is transferred only upon full payment or completion of the agreed tenure.</p>

                                <h3 className="text-lg font-bold text-primary pt-4">3. Intellectual Property</h3>
                                <p>Unless otherwise agreed, AxomITLab retains ownership of the underlying code frameworks until the final handover. Clients are granted a license to use the software during the development and maintenance period.</p>

                                <h3 className="text-lg font-bold text-primary pt-4">4. Limitation of Liability</h3>
                                <p>AxomITLab shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of our services.</p>
                            </>
                        )}
                    </div>

                    {/* Footer Actions */}
                    <div className="p-6 border-t border-white/10 bg-surface-muted flex justify-end">
                        <button
                            onClick={onClose}
                            className="bg-accent hover:bg-accent-bright text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-lg shadow-accent/20"
                        >
                            Understood
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default LegalModal;
