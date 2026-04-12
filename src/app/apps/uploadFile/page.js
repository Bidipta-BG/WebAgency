"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
    UploadCloud,
    Link as LinkIcon,
    Copy,
    CheckCircle2,
    AlertCircle,
    Loader2,
    FolderOpen,
    FileImage,
    X
} from 'lucide-react';
import { uploadFileToS3 } from '../../../services/api';

export default function S3UploadDashboard() {
    const router = useRouter();
    const [file, setFile] = useState(null);
    const [folder, setFolder] = useState('');
    const [isDragging, setIsDragging] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [uploadResult, setUploadResult] = useState(null);
    const [status, setStatus] = useState({ type: '', message: '' });
    const fileInputRef = useRef(null);

    // Auth Check
    useEffect(() => {
        const isAuth = sessionStorage.getItem('axom_admin_auth');
        if (!isAuth) {
            router.push('/leads/admin/login');
        }
    }, [router]);

    const showStatus = (type, message) => {
        setStatus({ type, message });
        setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    };

    const handleDragOver = useCallback((e) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            setFile(e.dataTransfer.files[0]);
            setUploadResult(null); // Reset prev result
        }
    }, []);

    const handleFileSelect = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
            setUploadResult(null); // Reset prev result
        }
    };

    const removeFile = () => {
        setFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleUpload = async () => {
        if (!file) {
            showStatus('error', 'Please select a file first.');
            return;
        }

        setIsLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const res = await uploadFileToS3(file, folder);

            if (res.success) {
                showStatus('success', 'File uploaded successfully!');
                setUploadResult(res.data);
                setFile(null); // Clear pending file
            } else {
                showStatus('error', res.message || 'Error uploading file.');
            }
        } catch (error) {
            showStatus('error', 'Failed to connect to the server.');
        } finally {
            setIsLoading(false);
        }
    };

    const copyToClipboard = () => {
        if (uploadResult?.fileUrl) {
            navigator.clipboard.writeText(uploadResult.fileUrl);
            showStatus('success', 'URL copied to clipboard!');
        }
    };

    // Format file size
    const formatBytes = (bytes, decimals = 2) => {
        if (!+bytes) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white font-sans p-4 md:p-8">
            <div className="max-w-4xl mx-auto flex flex-col gap-8">

                {/* Header */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl font-extrabold tracking-tight flex items-center gap-3">
                        <UploadCloud className="w-10 h-10 text-emerald-400" />
                        Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600">Media Library</span>
                    </h1>
                    <p className="text-slate-400">Upload assets to S3 and generate direct links for your applications.</p>
                </div>

                {/* Status Toast */}
                <div className="h-14 relative z-20">
                    <AnimatePresence>
                        {status.message && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className={`absolute left-0 right-0 p-4 rounded-xl flex items-center gap-3 border shadow-xl ${status.type === 'success'
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

                <div className="grid md:grid-cols-[1fr_350px] gap-8">
                    {/* Main Uploader Area */}
                    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden">

                        <div className="space-y-6">
                            {/* Folder Selection */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                                    <FolderOpen className="w-4 h-4 text-emerald-500" />
                                    Target Folder (Optional)
                                </label>
                                <input
                                    type="text"
                                    value={folder}
                                    onChange={(e) => setFolder(e.target.value)}
                                    placeholder="e.g., shivji-puja, srikrishna-puja, hanumanji-puja"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder:text-slate-600"
                                />
                                <p className="text-xs text-slate-500">If left blank, files upload to the root directory.</p>
                            </div>

                            {/* Dropzone */}
                            <div
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                                onClick={() => fileInputRef.current?.click()}
                                className={`relative border-2 border-dashed rounded-2xl p-10 transition-all flex flex-col items-center justify-center gap-4 cursor-pointer min-h-[250px]
                                    ${isDragging ? 'border-emerald-500 bg-emerald-500/5' : 'border-slate-700 bg-slate-950/50 hover:bg-slate-800/50'}
                                    ${file ? 'border-indigo-500/30 bg-indigo-500/5' : ''}
                                `}
                            >
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileSelect}
                                    className="hidden"
                                />

                                {!file ? (
                                    <>
                                        <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shadow-lg">
                                            <UploadCloud className="w-8 h-8 text-slate-400" />
                                        </div>
                                        <div className="text-center">
                                            <p className="text-sm font-medium mb-1">Click to browse or drag & drop</p>
                                            <p className="text-xs text-slate-500">Supports JPG, PNG, PDF, MP4, and more.</p>
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
                                            <FileImage className="w-8 h-8" />
                                        </div>
                                        <p className="font-semibold text-white max-w-[200px] truncate" title={file.name}>{file.name}</p>
                                        <p className="text-xs text-slate-400 mt-1">{formatBytes(file.size)}</p>

                                        <button
                                            onClick={(e) => { e.stopPropagation(); removeFile(); }}
                                            className="absolute top-4 right-4 p-1.5 bg-slate-900/80 rounded-full text-slate-400 hover:text-red-400 hover:bg-slate-800 transition"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Action Button */}
                            <button
                                onClick={handleUpload}
                                disabled={!file || isLoading}
                                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${!file || isLoading
                                        ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                                        : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-0.5'
                                    }`}
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Uploading to S3...
                                    </>
                                ) : (
                                    <>
                                        <UploadCloud className="w-5 h-5" />
                                        Confirm & Upload
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Results Panel */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 pl-2">Upload Result</h3>

                        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 min-h-[350px] shadow-lg flex flex-col justify-center">
                            {!uploadResult ? (
                                <div className="text-center text-slate-500 opacity-50 flex flex-col items-center gap-3">
                                    <LinkIcon className="w-8 h-8" />
                                    <p className="text-sm">Final URL will appear here</p>
                                </div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center text-center space-y-6"
                                >
                                    <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center">
                                        <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                                    </div>

                                    <div>
                                        <h4 className="font-semibold mb-1">Upload Successful</h4>
                                        <p className="text-xs text-slate-400 truncate max-w-[250px]" title={uploadResult.originalName}>
                                            {uploadResult.originalName}
                                        </p>
                                    </div>

                                    <div className="w-full space-y-2">
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider text-left block">Direct S3 Link</label>
                                        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs text-emerald-400 font-mono break-all max-h-24 overflow-y-auto text-left relative group">
                                            {uploadResult.fileUrl}

                                            <div className="sticky bottom-0 right-0 float-right bg-slate-950/80 backdrop-blur-sm p-1 ml-2">
                                                <button
                                                    onClick={copyToClipboard}
                                                    className="p-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg shadow-sm transition"
                                                >
                                                    <Copy className="w-3.5 h-3.5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Context Badge */}
            <div className="max-w-4xl mx-auto mt-12 text-center text-slate-600 text-[10px] tracking-widest uppercase">
                Axom IT Lab Global Uploader &copy; 2026
            </div>
        </div>
    );
}
