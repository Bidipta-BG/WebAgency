import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, ArrowRight, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminLogin = () => {
    const [passcode, setPasscode] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    // HARDCODED SECRET for Client-Side Protection
    const SECRET_KEY = "AxomAdmin2026";

    const handleLogin = (e) => {
        e.preventDefault();
        if (passcode === SECRET_KEY) {
            localStorage.setItem('axom_admin_auth', 'true');
            navigate('/leads/dashboard');
        } else {
            setError(true);
            setTimeout(() => setError(false), 2000);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl"
            >
                <div className="flex justify-center mb-8">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center border border-accent/20">
                        <Lock className="w-6 h-6 text-accent" />
                    </div>
                </div>

                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-white mb-2">Restricted Access</h1>
                    <p className="text-slate-400 text-sm">AxomITLab Internal Dashboard</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <input
                            type="password"
                            value={passcode}
                            onChange={(e) => setPasscode(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors text-center tracking-widest"
                            placeholder="Enter Passcode"
                            autoFocus
                        />
                    </div>

                    {error && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center justify-center gap-2 text-red-400 text-sm bg-red-400/10 p-2 rounded-lg"
                        >
                            <AlertCircle className="w-4 h-4" />
                            <span>Access Denied</span>
                        </motion.div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-accent hover:bg-accent-bright text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-accent/20 flex items-center justify-center gap-2"
                    >
                        <span>Unlock Dashboard</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <a href="/" className="text-slate-600 hover:text-white text-xs transition-colors">Return to Website</a>
                </div>
            </motion.div>
        </div>
    );
};

export default AdminLogin;
