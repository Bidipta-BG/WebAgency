import React from 'react';

export const metadata = {
    title: 'Privacy Policy | Hanuman Ji Puja',
    description: 'Privacy Policy for Hanuman Ji Puja application.',
    robots: {
        index: true,
        follow: true,
    }
};

const PrivacyPolicyPage = () => {
    return (
        <main className="min-h-screen bg-white text-slate-900 py-16 px-6 sm:px-12">
            <div className="max-w-3xl mx-auto">
                <header className="mb-12 border-b border-slate-200 pb-8">
                    <h1 className="text-3xl font-bold mb-2">Privacy Policy for Hanuman Ji Puja</h1>
                    <p className="text-slate-500">Last Updated: February 7, 2026</p>
                </header>

                <div className="space-y-8 leading-relaxed">
                    <section>
                        <p>
                            <strong>Axom IT Lab</strong> ("we", "us", or "our") operates the <strong>Hanuman Ji Puja</strong> mobile application (the "Service").
                        </p>
                        <p className="mt-4">
                            This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-4">1. Information Collection and Use</h2>
                        <p>We do not collect any personal information.</p>
                        <p className="mt-4">
                            Our application is designed to be fully functional offline. We do not require you to create an account, provide an email address, or share any personal identity details to use the Service.
                        </p>

                        <h3 className="text-lg font-semibold mt-6 mb-2">Types of Data Collected:</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Personal Data:</strong> None. We do not collect names, phone numbers, email addresses, or any other personally identifiable information.</li>
                            <li><strong>Usage Data:</strong> None. We do not use third-party analytics (like Google Analytics or Firebase) to track your behavior within the app.</li>
                            <li><strong>Location Data:</strong> None. We do not track your GPS or network location.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-4">2. Media and Files</h2>
                        <p>The Service requests the following permissions to provide specific features:</p>
                        <div className="mt-4 p-4 bg-slate-50 border-l-4 border-slate-300 italic">
                            Media Library / Storage: This permission is used solely to allow you to save (download) wallpapers from the app to your device's gallery. We do not access, read, or upload any other photos or files from your device.
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-4">3. Third-Party Services</h2>
                        <p>We do not use any third-party services that collect information used to identify you.</p>
                        <ul className="list-disc pl-5 mt-4 space-y-1">
                            {/* <li>No Advertisements.</li> */}
                            <li>No Social Media login integrations.</li>
                            <li>No Payment processors (the app is currently free).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-4">4. Security</h2>
                        <p>
                            The security of your data is important to us, but remember that no method of transmission over the internet, or method of electronic storage is 100% secure. However, since we do not collect or transmit any data from your device, your personal privacy remains local to your device.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-4">5. Changes to This Privacy Policy</h2>
                        <p>
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-4">6. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us:</p>
                        <p className="mt-4">
                            By email: <a href="mailto:support@axomitlab.com" className="text-blue-600 hover:underline">support@axomitlab.com</a>
                        </p>
                    </section>

                    <footer className="pt-12 mt-12 border-t border-slate-100 text-slate-400 text-sm">
                        <p>© 2026 Axom IT Lab | All Rights Reserved.</p>
                    </footer>
                </div>
            </div>
        </main>
    );
};

export default PrivacyPolicyPage;
