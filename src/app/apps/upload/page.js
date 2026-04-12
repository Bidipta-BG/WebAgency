"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Upload, 
    Image as ImageIcon, 
    FolderPlus, 
    Star, 
    ChevronRight, 
    CheckCircle2, 
    AlertCircle, 
    Loader2,
    ArrowLeft,
    Plus,
    Trash2,
    Share2,
    Download,
    Layers
} from 'lucide-react';
import { 
    getAppGallery, 
    createAppCategory, 
    createAppImage, 
    createAppHeroSection 
} from '../../../services/api';

const APPS = [
    { 
        id: 'shivji-puja', 
        name: 'Shivji Puja', 
        icon: '🔱', 
        color: 'from-blue-600 to-indigo-900',
        bg: 'bg-slate-950',
        accent: 'text-blue-400',
        borderColor: 'border-blue-500/30'
    },
    { 
        id: 'hanumanji-puja', 
        name: 'Hanumanji Puja', 
        icon: '🚩', 
        color: 'from-orange-600 to-red-900',
        bg: 'bg-orange-950',
        accent: 'text-orange-400',
        borderColor: 'border-orange-500/30'
    },
    { 
        id: 'srikrishna-aarti', 
        name: 'Sri Krishna Aarti', 
        icon: '🪈', 
        color: 'from-emerald-600 to-teal-900',
        bg: 'bg-emerald-950',
        accent: 'text-emerald-400',
        borderColor: 'border-emerald-500/30'
    }
];

export default function AppUploadDashboard() {
    const router = useRouter();
    const [currentApp, setCurrentApp] = useState(APPS[0]);
    const [activeTab, setActiveTab] = useState('category'); // category, image, hero
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });
    const [galleryData, setGalleryData] = useState(null);

    // Form States
    const [categoryForm, setCategoryForm] = useState({
        title: '',
        slug: '',
        thumbnailUrl: '',
        isActive: true,
        order: 1
    });

    const [imageForm, setImageForm] = useState({
        imageUrl: '',
        shares: 0,
        downloads: 0,
        globalIndex: 1,
        categories: '',
        isTrending: false,
        isHero: false
    });

    const [heroForm, setHeroForm] = useState({
        title: '',
        slug: '',
        isActive: true,
        order: 1,
        imageIds: []
    });

    // Auth Check
    useEffect(() => {
        const isAuth = sessionStorage.getItem('axom_admin_auth');
        if (!isAuth) {
            router.push('/leads/admin/login');
        }
    }, [router]);

    // Load Gallery Data for dropdowns
    useEffect(() => {
        loadGallery();
    }, [currentApp]);

    const loadGallery = async () => {
        try {
            const data = await getAppGallery(currentApp.id);
            setGalleryData(data);
        } catch (error) {
            console.error("Failed to load gallery data");
        }
    };

    const handleAppChange = (app) => {
        setCurrentApp(app);
        setStatus({ type: '', message: '' });
    };

    const showStatus = (type, message) => {
        setStatus({ type, message });
        setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    };

    const handleCategorySubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await createAppCategory(currentApp.id, categoryForm);
            if (res.success) {
                showStatus('success', 'Category created successfully!');
                setCategoryForm({ title: '', slug: '', thumbnailUrl: '', isActive: true, order: categoryForm.order + 1 });
                loadGallery();
            } else {
                showStatus('error', res.message || 'Failed to create category');
            }
        } catch (error) {
            showStatus('error', 'API Connection Error');
        } finally {
            setIsLoading(false);
        }
    };

    const handleImageSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await createAppImage(currentApp.id, imageForm);
            if (res.success) {
                showStatus('success', 'Image uploaded successfully!');
                setImageForm({ ...imageForm, imageUrl: '', globalIndex: imageForm.globalIndex + 1 });
            } else {
                showStatus('error', res.message || 'Failed to upload image');
            }
        } catch (error) {
            showStatus('error', 'API Connection Error');
        } finally {
            setIsLoading(false);
        }
    };

    const handleHeroSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await createAppHeroSection(currentApp.id, heroForm);
            if (res.success) {
                showStatus('success', 'Hero Section created successfully!');
                setHeroForm({ title: '', slug: '', isActive: true, order: heroForm.order + 1, imageIds: [] });
            } else {
                showStatus('error', res.message || 'Failed to create hero section');
            }
        } catch (error) {
            showStatus('error', 'API Connection Error');
        } finally {
            setIsLoading(false);
        }
    };

    const toggleImageId = (id) => {
        setHeroForm(prev => ({
            ...prev,
            imageIds: prev.imageIds.includes(id) 
                ? prev.imageIds.filter(i => i !== id) 
                : [...prev.imageIds, id]
        }));
    };

    return (
        <div className={`min-h-screen ${currentApp.bg} text-white transition-colors duration-500 font-sans p-4 md:p-8`}>
            {/* Header */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight mb-2">
                        App <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">Uploader</span>
                    </h1>
                    <p className="text-slate-400">Manage content for your devotional applications.</p>
                </div>

                <div className="flex bg-slate-900/50 backdrop-blur-xl p-1.5 rounded-2xl border border-slate-800">
                    {APPS.map((app) => (
                        <button
                            key={app.id}
                            onClick={() => handleAppChange(app)}
                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                                currentApp.id === app.id 
                                ? `bg-gradient-to-br ${app.color} text-white shadow-lg shadow-black/20` 
                                : 'text-slate-400 hover:text-white hover:bg-slate-800'
                            }`}
                        >
                            <span className="text-lg">{app.icon}</span>
                            <span className="hidden md:block">{app.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            <main className="max-w-6xl mx-auto grid lg:grid-cols-[280px_1fr] gap-8">
                {/* Sidebar Navigation */}
                <div className="space-y-4">
                    <div className="bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-800 overflow-hidden">
                        {[
                            { id: 'category', label: 'Add Category', icon: FolderPlus },
                            { id: 'image', label: 'Upload Image', icon: ImageIcon },
                            { id: 'hero', label: 'Hero Section', icon: Star },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full flex items-center justify-between px-5 py-4 transition-all ${
                                    activeTab === tab.id 
                                    ? `bg-white/5 ${currentApp.accent}` 
                                    : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <tab.icon className="w-5 h-5" />
                                    <span className="font-medium">{tab.label}</span>
                                </div>
                                {activeTab === tab.id && <ChevronRight className="w-4 h-4" />}
                            </button>
                        ))}
                    </div>

                    {/* Quick Stats Panel */}
                    <div className="bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-800 p-5 space-y-4">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">Current Library</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-400">Categories</span>
                                <span className="font-mono">{galleryData?.categories?.length || 0}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-slate-400">Total Images</span>
                                <span className="font-mono">
                                    {galleryData?.categories?.reduce((acc, cat) => acc + (cat.items?.length || 0), 0) || 0}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Form Area */}
                <div className="relative">
                    {/* Status Toast */}
                    <AnimatePresence>
                        {status.message && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className={`absolute -top-16 left-0 right-0 p-4 rounded-xl flex items-center gap-3 border shadow-xl z-20 ${
                                    status.type === 'success' 
                                    ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
                                    : 'bg-red-500/10 border-red-500/20 text-red-400'
                                }`}
                            >
                                {status.type === 'success' ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                                <span className="font-medium">{status.message}</span>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-slate-900/60 backdrop-blur-2xl rounded-3xl border border-slate-800 p-8 shadow-2xl"
                    >
                        {activeTab === 'category' && (
                            <form onSubmit={handleCategorySubmit} className="space-y-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${currentApp.color}`}>
                                        <FolderPlus className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold">New Category</h2>
                                        <p className="text-slate-400 text-sm">Organize your images into groups.</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">Title</label>
                                        <input 
                                            required
                                            type="text"
                                            value={categoryForm.title}
                                            onChange={(e) => setCategoryForm({...categoryForm, title: e.target.value})}
                                            className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                                            placeholder="e.g. Lord Shiva"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">Slug</label>
                                        <input 
                                            required
                                            type="text"
                                            value={categoryForm.slug}
                                            onChange={(e) => setCategoryForm({...categoryForm, slug: e.target.value})}
                                            className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                                            placeholder="lord-shiva"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Thumbnail URL</label>
                                    <input 
                                        required
                                        type="url"
                                        value={categoryForm.thumbnailUrl}
                                        onChange={(e) => setCategoryForm({...categoryForm, thumbnailUrl: e.target.value})}
                                        className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                                        placeholder="https://..."
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-6 items-end">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">Display Order</label>
                                        <input 
                                            type="number"
                                            value={categoryForm.order || ''}
                                            onChange={(e) => setCategoryForm({...categoryForm, order: parseInt(e.target.value)})}
                                            className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="flex items-center gap-3 pb-3">
                                        <input 
                                            type="checkbox"
                                            id="catActive"
                                            checked={categoryForm.isActive}
                                            onChange={(e) => setCategoryForm({...categoryForm, isActive: e.target.checked})}
                                            className="w-5 h-5 rounded border-slate-700 bg-slate-800 text-blue-500 focus:ring-blue-500/20"
                                        />
                                        <label htmlFor="catActive" className="text-sm font-medium text-slate-300 cursor-pointer">Live & Visible</label>
                                    </div>
                                </div>

                                <button 
                                    disabled={isLoading}
                                    type="submit"
                                    className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${
                                        isLoading ? 'bg-slate-800 text-slate-500 cursor-not-allowed' : `bg-gradient-to-r ${currentApp.color} text-white hover:shadow-xl hover:-translate-y-0.5 shadow-lg active:scale-95`
                                    }`}
                                >
                                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Plus className="w-5 h-5" />}
                                    Create Category
                                </button>
                            </form>
                        )}

                        {activeTab === 'image' && (
                            <form onSubmit={handleImageSubmit} className="space-y-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${currentApp.color}`}>
                                        <ImageIcon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold">Upload Image</h2>
                                        <p className="text-slate-400 text-sm">Add high-quality visuals to your app.</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Select Category</label>
                                    <select 
                                        required
                                        value={imageForm.categories}
                                        onChange={(e) => setImageForm({...imageForm, categories: e.target.value})}
                                        className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all appearance-none"
                                    >
                                        <option value="">Choose a category...</option>
                                        {galleryData?.categories?.map(cat => (
                                            <option key={cat.id || cat._id} value={cat.id || cat._id}>{cat.title}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Image URL</label>
                                    <input 
                                        required
                                        type="url"
                                        value={imageForm.imageUrl}
                                        onChange={(e) => setImageForm({...imageForm, imageUrl: e.target.value})}
                                        className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                                        placeholder="https://..."
                                    />
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300 flex items-center gap-1.5"><Share2 className="w-3.5 h-3.5"/> Shares</label>
                                        <input 
                                            type="number"
                                            value={imageForm.shares || ''}
                                            onChange={(e) => setImageForm({...imageForm, shares: parseInt(e.target.value)})}
                                            className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-3 py-2 text-white outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300 flex items-center gap-1.5"><Download className="w-3.5 h-3.5"/> Downloads</label>
                                        <input 
                                            type="number"
                                            value={imageForm.downloads || ''}
                                            onChange={(e) => setImageForm({...imageForm, downloads: parseInt(e.target.value)})}
                                            className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-3 py-2 text-white outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300 flex items-center gap-1.5"><Layers className="w-3.5 h-3.5"/> Global Index</label>
                                        <input 
                                            type="number"
                                            value={imageForm.globalIndex || ''}
                                            onChange={(e) => setImageForm({...imageForm, globalIndex: parseInt(e.target.value)})}
                                            className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-3 py-2 text-white outline-none"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3 justify-center">
                                        <div className="flex items-center gap-2">
                                            <input 
                                                type="checkbox"
                                                id="imgTrending"
                                                checked={imageForm.isTrending}
                                                onChange={(e) => setImageForm({...imageForm, isTrending: e.target.checked})}
                                                className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-blue-500"
                                            />
                                            <label htmlFor="imgTrending" className="text-xs text-slate-300">Trending</label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input 
                                                type="checkbox"
                                                id="imgHero"
                                                checked={imageForm.isHero}
                                                onChange={(e) => setImageForm({...imageForm, isHero: e.target.checked})}
                                                className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-blue-500"
                                            />
                                            <label htmlFor="imgHero" className="text-xs text-slate-300">Hero Sec</label>
                                        </div>
                                    </div>
                                </div>

                                <button 
                                    disabled={isLoading}
                                    type="submit"
                                    className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${
                                        isLoading ? 'bg-slate-800 text-slate-500 cursor-not-allowed' : `bg-gradient-to-r ${currentApp.color} text-white hover:shadow-xl hover:-translate-y-0.5`
                                    }`}
                                >
                                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Upload className="w-5 h-5" />}
                                    Upload Image
                                </button>
                            </form>
                        )}

                        {activeTab === 'hero' && (
                            <form onSubmit={handleHeroSubmit} className="space-y-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${currentApp.color}`}>
                                        <Star className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold">Hero Section</h2>
                                        <p className="text-slate-400 text-sm">Create high-visibility collections.</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">Title</label>
                                        <input 
                                            required
                                            type="text"
                                            value={heroForm.title}
                                            onChange={(e) => setHeroForm({...heroForm, title: e.target.value})}
                                            className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
                                            placeholder="e.g. Maha Shivratri Special"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">Slug</label>
                                        <input 
                                            required
                                            type="text"
                                            value={heroForm.slug}
                                            onChange={(e) => setHeroForm({...heroForm, slug: e.target.value})}
                                            className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
                                            placeholder="maha-shivratri"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-medium text-slate-300 flex items-center justify-between">
                                        <span>Select Images for collection</span>
                                        <span className="text-xs text-slate-500">{heroForm.imageIds.length} selected</span>
                                    </label>
                                    
                                    <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-4 max-h-[300px] overflow-y-auto grid grid-cols-2 md:grid-cols-3 gap-3">
                                        {galleryData?.categories?.flatMap(c => c.items || []).length > 0 ? (
                                            galleryData.categories.flatMap(c => c.items || []).map((img, idx) => (
                                                <div 
                                                    key={`${img.id || img._id}-${idx}`}
                                                    onClick={() => toggleImageId(img.id || img._id)}
                                                    className={`relative rounded-xl overflow-hidden aspect-video border-2 cursor-pointer transition-all ${
                                                        heroForm.imageIds.includes(img.id || img._id)
                                                        ? 'border-blue-500 ring-2 ring-blue-500/20'
                                                        : 'border-transparent hover:border-slate-600'
                                                    }`}
                                                >
                                                    <img src={img.imageUrl} alt="" className="w-full h-full object-cover" />
                                                    <div className={`absolute inset-0 flex items-center justify-center transition-opacity ${
                                                        heroForm.imageIds.includes(img.id || img._id) ? 'bg-blue-600/40 opacity-100' : 'bg-black/40 opacity-0'
                                                    }`}>
                                                        <CheckCircle2 className="text-white w-6 h-6" />
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="col-span-full py-12 text-center text-slate-500 text-sm">
                                                No images found. Upload some images first.
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6 items-end">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">Display Order</label>
                                        <input 
                                            type="number"
                                            value={heroForm.order || ''}
                                            onChange={(e) => setHeroForm({...heroForm, order: parseInt(e.target.value)})}
                                            className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-white outline-none"
                                        />
                                    </div>
                                    <div className="flex items-center gap-3 pb-3">
                                        <input 
                                            type="checkbox"
                                            id="heroActive"
                                            checked={heroForm.isActive}
                                            onChange={(e) => setHeroForm({...heroForm, isActive: e.target.checked})}
                                            className="w-5 h-5 rounded border-slate-700 bg-slate-800 text-blue-500"
                                        />
                                        <label htmlFor="heroActive" className="text-sm font-medium text-slate-300 cursor-pointer">Active</label>
                                    </div>
                                </div>

                                <button 
                                    disabled={isLoading || heroForm.imageIds.length === 0}
                                    type="submit"
                                    className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${
                                        isLoading || heroForm.imageIds.length === 0 ? 'bg-slate-800 text-slate-500 cursor-not-allowed' : `bg-gradient-to-r ${currentApp.color} text-white hover:shadow-xl hover:-translate-y-0.5`
                                    }`}
                                >
                                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Star className="w-5 h-5" />}
                                    Create Hero Section
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </main>

            {/* Bottom Credit */}
            <div className="max-w-6xl mx-auto mt-12 text-center text-slate-600 text-[10px] tracking-widest uppercase">
                Axom IT Lab Internal Tool &copy; 2026
            </div>
        </div>
    );
}
