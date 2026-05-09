"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    BookOpen,
    PlusCircle,
    CheckCircle2,
    AlertCircle,
    Loader2,
    RefreshCw,
    Database,
    FileText,
    Languages
} from 'lucide-react';

const GET_API_URL = 'https://api.thevibecoderagency.online/api/srikrishna-aarti/granth/bg/verses';
const POST_API_URL = 'https://api.thevibecoderagency.online/api/srikrishna-aarti/granth/verse';

export default function VersesAdmin() {
    const [verses, setVerses] = useState([]);
    const [isLoadingList, setIsLoadingList] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    // Form states matching exact API schema
    const [formData, setFormData] = useState({
        verseId: '',
        bookId: 'bg',
        chapterIndex: 1,
        index: 1,
        chapterText: '',
        chapterTextHi: '',
        sans: '',
        enText: '',
        enMeaning: '',
        enExplanation: '',
        enLessons: '',
        hiText: '',
        hiMeaning: '',
        hiExplanation: '',
        hiLessons: '',
        timer: 180
    });

    const showStatus = (type, message) => {
        setStatus({ type, message });
        setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    };

    const fetchVerses = async () => {
        setIsLoadingList(true);
        try {
            const res = await fetch(GET_API_URL);
            if (!res.ok) throw new Error('Failed to fetch');
            const data = await res.json();
            // Aligning with new API response format: { bookId: "bg", totalVerses: X, verses: [...] }
            setVerses(data?.verses || []);
        } catch (error) {
            console.error(error);
            showStatus('error', 'Failed to load verses from API.');
        } finally {
            setIsLoadingList(false);
        }
    };

    useEffect(() => {
        fetchVerses();
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
            verseId: formData.verseId,
            bookId: formData.bookId,
            chapterIndex: formData.chapterIndex,
            index: formData.index,
            chapterText: formData.chapterText,
            chapterTextHi: formData.chapterTextHi,
            sans: formData.sans,
            en: {
                text: formData.enText,
                meaning: formData.enMeaning,
                explanation: formData.enExplanation,
                lessons: formData.enLessons
            },
            hi: {
                text: formData.hiText,
                meaning: formData.hiMeaning,
                explanation: formData.hiExplanation,
                lessons: formData.hiLessons
            },
            timer: formData.timer
        };

        try {
            const res = await fetch(POST_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!res.ok) throw new Error('API submission failed');
            
            showStatus('success', 'Verse added/updated successfully!');
            // Reset form partially or fully if desired
            setFormData(prev => ({
                ...prev,
                verseId: '', sans: '', enText: '', enMeaning: '', enExplanation: '', enLessons: '', hiText: '', hiMeaning: '', hiExplanation: '', hiLessons: '', index: prev.index + 1
            }));
            fetchVerses();
        } catch (error) {
            showStatus('error', error.message || 'Error submitting data.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const selectVerseForEdit = (verse) => {
        setFormData({
            verseId: verse.id || verse.verseId || '',
            bookId: verse.bookId || 'bg',
            chapterIndex: verse.chapterIndex || 1,
            index: verse.index || 1,
            chapterText: verse.chapter || verse.chapterText || '',
            chapterTextHi: verse.chapterHi || verse.chapterTextHi || '',
            sans: verse.sans || '',
            enText: verse.en?.text || '',
            enMeaning: verse.en?.meaning || '',
            enExplanation: verse.en?.explanation || '',
            enLessons: verse.en?.lessons || '',
            hiText: verse.hi?.text || '',
            hiMeaning: verse.hi?.meaning || '',
            hiExplanation: verse.hi?.explanation || '',
            hiLessons: verse.hi?.lessons || '',
            timer: verse.timer || 180
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white font-sans p-4 md:p-8">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
                {/* Header */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl font-extrabold tracking-tight flex items-center gap-3">
                        <BookOpen className="w-10 h-10 text-orange-400" />
                        Bhagavad Gita <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">Admin Panel</span>
                    </h1>
                    <p className="text-slate-400">Add or update verses for book: <span className="font-bold text-amber-500">bg</span></p>
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
                    {/* Add/Update Form Area */}
                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl relative h-fit">
                        <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
                            <div className="flex items-center gap-2 text-orange-400 font-bold">
                                <PlusCircle className="w-5 h-5" />
                                {formData.verseId ? `Edit Verse: ${formData.verseId}` : 'Add New Verse'}
                            </div>
                            <button 
                                type="button"
                                onClick={() => setFormData({ verseId: '', bookId: 'bg', chapterIndex: 1, index: 1, chapterText: '', chapterTextHi: '', sans: '', enText: '', enMeaning: '', enExplanation: '', enLessons: '', hiText: '', hiMeaning: '', hiExplanation: '', hiLessons: '', timer: 180 })}
                                className="text-xs bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg text-slate-300 transition-colors"
                            >
                                Clear Form
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 block">Verse ID</label>
                                    <input type="text" name="verseId" required value={formData.verseId} onChange={handleInputChange} placeholder="bg_01_07" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none text-sm" />
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 block">Ch Index</label>
                                    <input type="number" name="chapterIndex" required value={formData.chapterIndex} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none text-sm" />
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 block">Verse Index</label>
                                    <input type="number" name="index" required value={formData.index} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none text-sm" />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 block">Chapter (EN)</label>
                                    <input type="text" name="chapterText" required value={formData.chapterText} onChange={handleInputChange} placeholder="Chapter 1, Verse 7" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none text-sm" />
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 block">Chapter (HI)</label>
                                    <input type="text" name="chapterTextHi" required value={formData.chapterTextHi} onChange={handleInputChange} placeholder="अध्याय १, श्लोक ७" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none text-sm" />
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 block">Timer (sec)</label>
                                    <input type="number" name="timer" required value={formData.timer} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none text-sm" />
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 block">Sanskrit Text</label>
                                <textarea name="sans" required rows={3} value={formData.sans} onChange={handleInputChange} placeholder="अस्माकं तु विशिष्टा..." className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all placeholder:text-slate-700" />
                            </div>

                            <div className="grid grid-cols-2 gap-6 mt-4">
                                {/* English Section */}
                                <div className="space-y-3 bg-slate-950/50 p-4 rounded-2xl border border-slate-800/50">
                                    <div className="flex items-center gap-2 text-orange-400 font-bold text-sm mb-2"><Languages className="w-4 h-4"/> English Translation</div>
                                    <textarea name="enText" placeholder="Text" value={formData.enText} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white outline-none focus:border-orange-500 text-xs" rows={2}/>
                                    <textarea name="enMeaning" placeholder="Meaning" value={formData.enMeaning} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white outline-none focus:border-orange-500 text-xs" rows={2}/>
                                    <textarea name="enExplanation" placeholder="Explanation" value={formData.enExplanation} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white outline-none focus:border-orange-500 text-xs" rows={2}/>
                                    <textarea name="enLessons" placeholder="Lessons" value={formData.enLessons} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white outline-none focus:border-orange-500 text-xs" rows={2}/>
                                </div>
                                
                                {/* Hindi Section */}
                                <div className="space-y-3 bg-slate-950/50 p-4 rounded-2xl border border-slate-800/50">
                                    <div className="flex items-center gap-2 text-amber-500 font-bold text-sm mb-2"><Languages className="w-4 h-4"/> Hindi Translation</div>
                                    <textarea name="hiText" placeholder="अनुवाद (Text)" value={formData.hiText} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white outline-none focus:border-orange-500 text-xs" rows={2}/>
                                    <textarea name="hiMeaning" placeholder="अर्थ (Meaning)" value={formData.hiMeaning} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white outline-none focus:border-orange-500 text-xs" rows={2}/>
                                    <textarea name="hiExplanation" placeholder="व्याख्या (Explanation)" value={formData.hiExplanation} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white outline-none focus:border-orange-500 text-xs" rows={2}/>
                                    <textarea name="hiLessons" placeholder="सीख (Lessons)" value={formData.hiLessons} onChange={handleInputChange} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white outline-none focus:border-orange-500 text-xs" rows={2}/>
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
                                    <><Loader2 className="w-5 h-5 animate-spin" /> Saving...</>
                                ) : (
                                    <><Database className="w-5 h-5" /> Save Verse</>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Fetch & Display Area */}
                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col h-[calc(100vh-12rem)] min-h-[850px]">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                                <FileText className="w-5 h-5 text-amber-500" />
                                Existing Verses ({verses.length})
                            </h2>
                            <button
                                onClick={fetchVerses}
                                disabled={isLoadingList}
                                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 transition-colors"
                                title="Refresh List"
                            >
                                <RefreshCw className={`w-4 h-4 ${isLoadingList ? 'animate-spin' : ''}`} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                            {isLoadingList && verses.length === 0 ? (
                                <div className="text-center py-10 text-slate-500">
                                    <Loader2 className="w-8 h-8 animate-spin mx-auto mb-3 text-amber-500/50" />
                                    Loading verses...
                                </div>
                            ) : verses.length === 0 ? (
                                <div className="text-center py-10 text-slate-500">
                                    No verses found for book &apos;bg&apos;.
                                </div>
                            ) : (
                                verses.map((item, index) => (
                                    <div key={item.id || item.verseId || index} className="bg-slate-950 border border-slate-800/60 p-5 rounded-2xl hover:border-slate-700 transition-all group">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="font-bold text-lg text-orange-100 flex items-center gap-2">
                                                    {item.chapter || item.chapterText}
                                                </h3>
                                                <p className="text-xs text-amber-500 font-medium mt-0.5">{item.chapterHi || item.chapterTextHi}</p>
                                            </div>
                                            <div className="flex flex-col items-end gap-2">
                                                <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-1 rounded-lg font-mono">ID: {item.id || item.verseId}</span>
                                                <button 
                                                    onClick={() => selectVerseForEdit(item)}
                                                    className="opacity-0 group-hover:opacity-100 text-[10px] bg-orange-600 hover:bg-orange-500 text-white px-3 py-1.5 rounded-lg transition-all"
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                        </div>
                                        
                                        <p className="text-slate-300 text-sm font-medium mb-4 mt-3 leading-relaxed border-l-2 border-orange-500/50 pl-3">
                                            {item.sans}
                                        </p>
                                        
                                        <div className="grid grid-cols-1 gap-4 text-xs text-slate-400 bg-slate-900/50 p-4 rounded-xl border border-slate-800/30">
                                            {item.en && (
                                                <div className="space-y-2 border-b border-slate-800/50 pb-3">
                                                    <span className="font-bold text-slate-300 uppercase tracking-widest text-[10px] bg-slate-800 px-2 py-1 rounded">English</span>
                                                    <p><span className="text-orange-500/70 font-bold">Text:</span> <span className="line-clamp-2">{item.en.text}</span></p>
                                                    <p><span className="text-orange-500/70 font-bold">Meaning:</span> <span className="line-clamp-2">{item.en.meaning}</span></p>
                                                </div>
                                            )}
                                            {item.hi && (
                                                <div className="space-y-2">
                                                    <span className="font-bold text-slate-300 uppercase tracking-widest text-[10px] bg-slate-800 px-2 py-1 rounded">Hindi</span>
                                                    <p><span className="text-amber-500/70 font-bold">Text:</span> <span className="line-clamp-2">{item.hi.text}</span></p>
                                                    <p><span className="text-amber-500/70 font-bold">Meaning:</span> <span className="line-clamp-2">{item.hi.meaning}</span></p>
                                                </div>
                                            )}
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
