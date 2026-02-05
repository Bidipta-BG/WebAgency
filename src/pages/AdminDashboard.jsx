import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Users, Calculator, TrendingUp, Search, Calendar, Phone, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { getLeads, updateLead } from '../services/api';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [leads, setLeads] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLead, setSelectedLead] = useState(null); // For editing status

    useEffect(() => {
        const isAuth = localStorage.getItem('axom_admin_auth');
        if (!isAuth) {
            navigate('/leads/admin/login');
        } else {
            loadLeads();
        }
    }, [navigate]);

    const loadLeads = async () => {
        setIsLoading(true);
        try {
            const data = await getLeads();
            // Ensure data is an array
            setLeads(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Failed to load leads");
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('axom_admin_auth');
        navigate('/leads/admin/login');
    };

    const handleStatusUpdate = async (id, status) => {
        try {
            await updateLead(id, { followupStatus: status });
            // Optimistic update
            setLeads(leads.map(l => l._id === id ? { ...l, followupStatus: status } : l));
            setSelectedLead(null);
        } catch (error) {
            alert("Failed to update status");
        }
    };

    // Derived Stats
    const totalLeads = leads.length;
    const totalEstimates = leads.filter(l => l.formType === 'estimate').length;
    const connectedLeads = leads.filter(l => l.isCustomerConnected).length;
    const conversionRate = totalLeads > 0 ? Math.round((connectedLeads / totalLeads) * 100) : 0;

    const filteredLeads = leads.filter(lead =>
        lead.leadInfo?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.leadInfo?.email?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            {/* Navbar */}
            <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="font-bold text-xl tracking-tight">Axom<span className="text-accent">Admin</span></div>
                    <div className="flex items-center gap-4">
                        <div className="relative hidden md:block">
                            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                            <input
                                type="text"
                                placeholder="Search leads..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="bg-slate-900 border border-slate-700 rounded-full pl-10 pr-4 py-1.5 text-sm focus:outline-none focus:border-accent w-64"
                            />
                        </div>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                        >
                            <LogOut className="w-4 h-4" />
                            Logout
                        </button>
                    </div>
                </div>
            </nav>

            {/* Content */}
            <main className="max-w-7xl mx-auto px-6 py-8">
                <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Lead Overview</h1>
                        <p className="text-slate-400">Manage your inquiries and estimates.</p>
                    </div>
                    <button onClick={loadLeads} className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                        Refresh Data
                    </button>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                        <div className="flex items-center gap-3 text-emerald-400 mb-2">
                            <Users className="w-5 h-5" />
                            <span className="font-semibold">Total Leads</span>
                        </div>
                        <p className="text-3xl font-bold">{totalLeads}</p>
                    </div>
                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                        <div className="flex items-center gap-3 text-accent mb-2">
                            <Calculator className="w-5 h-5" />
                            <span className="font-semibold">Estimates</span>
                        </div>
                        <p className="text-3xl font-bold">{totalEstimates}</p>
                    </div>
                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                        <div className="flex items-center gap-3 text-purple-400 mb-2">
                            <TrendingUp className="w-5 h-5" />
                            <span className="font-semibold">Connected</span>
                        </div>
                        <p className="text-3xl font-bold">{connectedLeads} <span className="text-sm font-normal text-slate-500">({conversionRate}%)</span></p>
                    </div>
                </div>

                {/* Leads Table */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-950 text-slate-400 uppercase text-xs font-semibold">
                                <tr>
                                    <th className="px-6 py-4">Client</th>
                                    <th className="px-6 py-4">Type</th>
                                    <th className="px-6 py-4">Value</th>
                                    <th className="px-6 py-4">Date</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800">
                                {isLoading ? (
                                    <tr>
                                        <td colSpan="6" className="px-6 py-12 text-center text-slate-500">
                                            Loading leads...
                                        </td>
                                    </tr>
                                ) : filteredLeads.length === 0 ? (
                                    <tr>
                                        <td colSpan="6" className="px-6 py-12 text-center text-slate-500">
                                            No leads found.
                                        </td>
                                    </tr>
                                ) : (
                                    filteredLeads.map((lead) => (
                                        <tr key={lead._id} className="hover:bg-slate-800/50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="font-medium text-white">{lead.leadInfo?.name || 'Unknown'}</div>
                                                <div className="text-slate-500 text-xs">{lead.leadInfo?.email}</div>
                                                <div className="text-slate-500 text-xs">{lead.leadInfo?.phone}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${lead.formType === 'estimate'
                                                    ? 'bg-blue-500/10 text-blue-400'
                                                    : 'bg-purple-500/10 text-purple-400'
                                                    }`}>
                                                    {lead.formType === 'estimate' ? 'Estimate' : 'Contact'}
                                                </span>
                                                {lead.selection?.projectType && (
                                                    <div className="text-xs text-slate-400 mt-1 capitalize">{lead.selection.projectType.replace('_', ' ')}</div>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 font-mono text-slate-300">
                                                {lead.quotation?.finalTotal
                                                    ? `₹${lead.quotation.finalTotal.toLocaleString()}`
                                                    : '-'
                                                }
                                            </td>
                                            <td className="px-6 py-4 text-slate-400">
                                                {new Date(lead.createdAt || Date.now()).toLocaleDateString()}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium border ${lead.followupStatus === 'Contacted' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                                        lead.followupStatus === 'Lost' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
                                                            lead.followupStatus === 'Pending' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : // Added condition for Pending
                                                                'bg-amber-500/10 text-amber-400 border-amber-500/20'
                                                    }`}>
                                                    {lead.followupStatus === 'Contacted' ? <CheckCircle className="w-3 h-3" /> :
                                                        lead.followupStatus === 'Lost' ? <AlertCircle className="w-3 h-3" /> :
                                                            lead.followupStatus === 'Pending' ? <Clock className="w-3 h-3" /> : // Added icon for Pending
                                                                <Clock className="w-3 h-3" />}
                                                    {lead.followupStatus || 'Pending'}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <select
                                                        className="bg-slate-950 border border-slate-700 text-slate-300 text-xs rounded px-2 py-1 focus:outline-none focus:border-accent"
                                                        value={lead.followupStatus || ''}
                                                        onChange={(e) => handleStatusUpdate(lead._id, e.target.value)}
                                                    >
                                                        <option value="">Set Status</option>
                                                        <option value="Pending">Pending</option>
                                                        <option value="Contacted">Contacted</option>
                                                        <option value="In Progress">In Progress</option>
                                                        <option value="Converted">Converted</option>
                                                        <option value="Lost">Lost</option>
                                                    </select>
                                                </div>
                                                {lead.isCustomerConnected && (
                                                    <div className="mt-1 text-[10px] text-emerald-500 flex items-center justify-end gap-1">
                                                        <Phone className="w-3 h-3" /> Connected
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
