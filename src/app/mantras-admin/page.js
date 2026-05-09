"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Music,
    Image as ImageIcon,
    PlusCircle,
    CheckCircle2,
    AlertCircle,
    Loader2,
    RefreshCw,
    Database,
    FileText
} from 'lucide-react';

const API_URL = 'https://api.thevibecoderagency.online/api/srikrishna-aarti/mantras';

export default function MantrasAdmin() {
    const [mantras, setMantras] = useState([]);
    const [isLoadingList, setIsLoadingList] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    // Form states matching exact API schema
    const [formData, setFormData] = useState({
        title: '',
        sans: '',
        enBenefit: '',
        hiBenefit: '',
        enDetails: '',
        hiDetails: '',
        count: 108,
        image: '',
        music: ''
    });

    const showStatus = (type, message) => {
        setStatus({ type, message });
        setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    };

    const fetchMantras = async () => {
        setIsLoadingList(true);
        try {
            const res = await fetch(API_URL);
            if (!res.ok) throw new Error('Failed to fetch');
            const data = await res.json();
            // Aligning with new API response format: { success: true, data: [...] }
            setMantras(data?.data || []);
        } catch (error) {
            console.error(error);
            showStatus('error', 'Failed to load mantras from API.');
        } finally {
            setIsLoadingList(false);
        }
    };

    useEffect(() => {
        fetchMantras();
    }, []);

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'number' ? Number(value) : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        const payload = {
            title: formData.title,
            sans: formData.sans,
            benefit: {
                en: formData.enBenefit,
                hi: formData.hiBenefit
            },
            details: {
                en: formData.enDetails,
                hi: formData.hiDetails
            },
            count: formData.count,
            image: formData.image,
            music: formData.music
        };

        try {
            const res = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!res.ok) throw new Error('API submission failed');
            
            showStatus('success', 'Mantra added successfully!');
            // Reset form
            setFormData({
                title: '', sans: '', enBenefit: '', hiBenefit: '', enDetails: '', hiDetails: '', count: 108, image: '', music: ''
            });
            fetchMantras();
        } catch (error) {
            showStatus('error', error.message || 'Error submitting data.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white font-sans p-4 md:p-8">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
                {/* Header */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl font-extrabold tracking-tight flex items-center gap-3">
                        <Database className="w-10 h-10 text-orange-400" />
                        Mantra <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">Admin Panel</span>
                    </h1>
                    <p className="text-slate-400">Manage your Mantras API directly from this dashboard.</p>
                </div>

                {/* Status Toast */}
                <div className="h-14 relative z-20">
                    <AnimatePresence>
                        {status.message && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className={`absolute left-0 right-0 p-4 rounded-xl flex items-center gap-3 border shadow-xl ${
                                    status.type === 'success'
                                        ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                                        : 'bg-red-500/10 border-red-500/20 text-red-400'
                                }`}
                            >
                                {status.type === 'success' ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                                <span className="font-medium text-sm">{status.message}</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Add Form Area */}
                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl relative">
                        <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4 text-orange-400 font-bold">
                            <PlusCircle className="w-5 h-5" />
                            Add New Mantra
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 block">Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        required
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        placeholder="Hare Krishna Maha Mantra"
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 block">Count</label>
                                    <input
                                        type="number"
                                        name="count"
                                        required
                                        value={formData.count}
                                        onChange={handleInputChange}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 block">Sanskrit Text (sans)</label>
                                <textarea
                                    name="sans"
                                    required
                                    rows={3}
                                    value={formData.sans}
                                    onChange={handleInputChange}
                                    placeholder="हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे..."
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all placeholder:text-slate-700"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="text-sm font-semibold text-slate-300">English Data</div>
                                    <textarea name="enBenefit" placeholder="Benefit (EN)" value={formData.enBenefit} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500 text-sm" rows={2}/>
                                    <textarea name="enDetails" placeholder="Details (EN)" value={formData.enDetails} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500 text-sm" rows={2}/>
                                </div>
                                <div className="space-y-4">
                                    <div className="text-sm font-semibold text-slate-300">Hindi Data</div>
                                    <textarea name="hiBenefit" placeholder="Benefit (HI)" value={formData.hiBenefit} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500 text-sm" rows={2}/>
                                    <textarea name="hiDetails" placeholder="Details (HI)" value={formData.hiDetails} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500 text-sm" rows={2}/>
                                </div>
                            </div>

                            <div className="space-y-4 pt-2 border-t border-slate-800">
                                <div className="relative">
                                    <ImageIcon className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                                    <input type="text" name="image" placeholder="Image URL (e.g., https://...)" value={formData.image} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-12 pr-4 py-3 text-white outline-none focus:border-orange-500 text-sm" />
                                </div>
                                <div className="relative">
                                    <Music className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                                    <input type="text" name="music" placeholder="Music URL (.mp3)" value={formData.music} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-12 pr-4 py-3 text-white outline-none focus:border-orange-500 text-sm" />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 mt-6 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                                    isSubmitting
                                        ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                                        : 'bg-orange-600 hover:bg-orange-500 text-white shadow-lg hover:shadow-orange-500/20 hover:-translate-y-0.5'
                                }`}
                            >
                                {isSubmitting ? (
                                    <><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</>
                                ) : (
                                    <><PlusCircle className="w-5 h-5" /> Post Mantra</>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Fetch & Display Area */}
                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col h-full max-h-[850px]">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                                <FileText className="w-5 h-5 text-amber-500" />
                                Existing Mantras
                            </h2>
                            <button
                                onClick={fetchMantras}
                                disabled={isLoadingList}
                                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 transition-colors"
                                title="Refresh List"
                            >
                                <RefreshCw className={`w-4 h-4 ${isLoadingList ? 'animate-spin' : ''}`} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                            {isLoadingList && mantras.length === 0 ? (
                                <div className="text-center py-10 text-slate-500">
                                    <Loader2 className="w-8 h-8 animate-spin mx-auto mb-3 text-amber-500/50" />
                                    Loading mantras...
                                </div>
                            ) : mantras.length === 0 ? (
                                <div className="text-center py-10 text-slate-500">
                                    No mantras found.
                                </div>
                            ) : (
                                mantras.map((item, index) => (
                                    <div key={item._id || item.id || index} className="bg-slate-950 border border-slate-800/60 p-4 rounded-2xl hover:border-slate-700 transition-all">
                                        <h3 className="font-bold text-lg text-orange-100 mb-1 flex justify-between items-start">
                                            <span>{item.title}</span>
                                            <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-1 rounded-lg">Count: {item.count}</span>
                                        </h3>
                                        <p className="text-slate-300 text-sm font-medium mb-4 mt-2 leading-relaxed">
                                            {item.sans}
                                        </p>
                                        <div className="grid grid-cols-1 gap-3 text-xs text-slate-400 bg-slate-900/50 p-3 rounded-xl border border-slate-800/30">
                                            {item.benefit && (
                                                <div className="space-y-1 border-b border-slate-800/50 pb-2">
                                                    <span className="font-semibold text-slate-300 uppercase tracking-widest text-[10px]">Benefits</span>
                                                    <p><span className="text-orange-500/70 font-bold">EN:</span> {item.benefit.en}</p>
                                                    <p><span className="text-amber-500/70 font-bold">HI:</span> {item.benefit.hi}</p>
                                                </div>
                                            )}
                                            {item.details && (
                                                <div className="space-y-1">
                                                    <span className="font-semibold text-slate-300 uppercase tracking-widest text-[10px]">Details</span>
                                                    <p><span className="text-orange-500/70 font-bold">EN:</span> {item.details.en}</p>
                                                    <p><span className="text-amber-500/70 font-bold">HI:</span> {item.details.hi}</p>
                                                </div>
                                            )}
                                            
                                            {/* Media Links */}
                                            <div className="flex gap-4 mt-2 pt-2 border-t border-slate-800/50">
                                                {item.image && (
                                                    <a href={item.image} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors">
                                                        <ImageIcon className="w-3 h-3" /> Image
                                                    </a>
                                                )}
                                                {item.music && (
                                                    <a href={item.music} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors">
                                                        <Music className="w-3 h-3" /> Audio
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
