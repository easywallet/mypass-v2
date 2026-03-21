'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { 
  Users, CheckCircle2, XCircle, LogOut, Loader2, 
  Copy, Check, Clock, ExternalLink, ShieldCheck
} from 'lucide-react';

export default function AdminSandboxDashboard() {
  const [activeTab, setActiveTab] = useState<'pending' | 'approved' | 'revoked'>('pending');
  const [leads, setLeads] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/admin/leads');
      if (res.status === 401) {
        return router.push('/admin/login');
      }
      const data = await res.json();
      setLeads(data || []);
    } catch (err) {
      console.error('Erro ao buscar leads:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  const approveLead = async (id: string) => {
    setIsProcessing(id);
    try {
      const res = await fetch('/api/admin/approve-sandbox', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });
      if (res.ok) {
        await fetchLeads();
      } else {
        alert('Erro ao aprovar lead.');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsProcessing(null);
    }
  };

  const revokeLead = async (id: string) => {
    if (!confirm('Deseja realmente revogar este token? O acesso será interrompido imediatamente.')) {
        return;
    }
    setIsProcessing(id);
    try {
      const res = await fetch('/api/admin/revoke-sandbox', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });
      if (res.ok) {
        await fetchLeads();
      } else {
        alert('Erro ao revogar token.');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsProcessing(null);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const stats = {
    pending: leads.filter(l => !l.aprovado && !l.sandbox_token).length,
    approved: leads.filter(l => l.aprovado === true).length,
    revoked: leads.filter(l => l.aprovado === false && l.sandbox_token === null && l.approved_at !== null).length
  };

  const filteredLeads = leads.filter(l => {
    if (activeTab === 'pending') return !l.aprovado && !l.sandbox_token;
    if (activeTab === 'approved') return l.aprovado === true;
    if (activeTab === 'revoked') return l.aprovado === false && l.sandbox_token === null && l.approved_at !== null;
    return false;
  });

  return (
    <main className="min-h-screen bg-[#0a0f1e] text-slate-200 selection:bg-[#00d4ff33] pb-12 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        
        {/* Header Admin */}
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-6">
            <Image 
                src="/images/logo-white.png" 
                alt="MyPass Logo" 
                width={130} 
                height={32} 
                className="h-8 w-auto object-contain"
                priority
            />
            <span className="h-6 w-[1px] bg-[#ffffff15]" />
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d4ff08] border border-[#00d4ff20]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-pulse" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#00d4ff]">Gestão de Tokens</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex flex-col items-end">
                <span className="text-xs font-bold text-white uppercase tracking-tight">Área Administrativa</span>
                <span className="text-[10px] text-slate-500">v2.1.0-build</span>
            </div>
            <button 
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#ffffff05] border border-[#ffffff10] text-sm font-semibold text-slate-400 hover:text-white hover:bg-[#ffffff10] transition-all"
            >
                <LogOut size={16} />
                <span>Sair</span>
            </button>
          </div>
        </header>

        {/* Dashboard Grid - KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <StatCard 
            label="Pendentes de Análise" 
            value={stats.pending} 
            icon={<Clock className="text-amber-400" />} 
            color="border-amber-400/20"
            bgColor="bg-amber-400/5"
          />
          <StatCard 
            label="Whitelist Ativa" 
            value={stats.approved} 
            icon={<CheckCircle2 className="text-[#00d4ff]" />} 
            color="border-[#00d4ff20]"
            bgColor="bg-[#00d4ff05]"
          />
          <StatCard 
            label="Tokens Revogados" 
            value={stats.revoked} 
            icon={<XCircle className="text-red-400" />} 
            color="border-red-400/20"
            bgColor="bg-red-400/5"
          />
        </div>

        {/* List Section */}
        <div className="bg-[#ffffff03] border border-[#ffffff08] rounded-2xl overflow-hidden backdrop-blur-sm shadow-2xl">
          {/* Tabs Navigation */}
          <div className="flex border-b border-[#ffffff10] px-6 pt-6 bg-[#ffffff02]">
            {(['pending', 'approved', 'revoked'] as const).map((tab) => (
              <button 
                key={tab} 
                onClick={() => setActiveTab(tab)}
                className={`pb-4 px-8 text-[11px] font-bold uppercase tracking-[0.1em] transition-all relative ${activeTab === tab ? 'text-[#00d4ff]' : 'text-slate-500 hover:text-slate-300'}`}
              >
                {tab === 'pending' ? 'Leads Pendentes' : tab === 'approved' ? 'Whitelist Ativa' : 'Histórico Revogados'}
                {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00d4ff] shadow-[0_0_15px_#00d4ff80]" />
                )}
              </button>
            ))}
          </div>

          <div className="p-0">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-32 gap-4">
                <Loader2 className="animate-spin text-[#00d4ff]" size={40} />
                <span className="text-slate-400 text-sm font-medium animate-pulse">Sincronizando Banco de Dados...</span>
              </div>
            ) : filteredLeads.length === 0 ? (
              <div className="text-center py-32 bg-[#ffffff01]">
                <Users size={64} className="mx-auto text-slate-800 mb-6" />
                <h3 className="text-slate-400 font-medium">Nenhum registro encontrado nesta categoria</h3>
                <p className="text-slate-600 text-xs mt-2 italic px-6">Tente alternar entre as abas superiores para visualizar outros status.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="text-[10px] uppercase font-bold text-slate-500 tracking-widest border-b border-[#ffffff05]">
                      <th className="py-5 px-8">Desenvolvedor / Lead</th>
                      <th className="py-5 px-8">Empresa e Identificação</th>
                      <th className="py-5 px-8">Métricas / Token</th>
                      <th className="py-5 px-8 text-right">Ações Rápidas</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#ffffff04]">
                    {filteredLeads.map((lead) => (
                      <tr key={lead.id} className="group hover:bg-[#ffffff02] transition-colors">
                        <td className="py-5 px-8">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00d4ff20] to-transparent flex items-center justify-center font-bold text-[#00d4ff] text-xs">
                                {lead.nome.charAt(0).toUpperCase()}
                            </div>
                            <div>
                                <div className="font-bold text-white text-sm group-hover:text-[#00d4ff] transition-colors">{lead.nome}</div>
                                <div className="text-slate-500 text-[11px] mt-1">{lead.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-5 px-8">
                          <div className="flex items-center gap-2 mb-1">
                            <Building2 size={13} className="text-[#00d4ff]" />
                            <div className="text-slate-300 font-semibold text-sm">{lead.empresa}</div>
                          </div>
                          <div className="flex items-center gap-2">
                             <span className="text-[#ffffff40] text-[10px] font-mono tracking-tighter">CNPJ: {lead.cnpj}</span>
                             <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-[#ffffff08] text-slate-500 border border-[#ffffff10] uppercase font-bold">{lead.segmento}</span>
                          </div>
                        </td>
                        <td className="py-5 px-8">
                          {lead.sandbox_token ? (
                            <div className="flex flex-col gap-1.5">
                                <div className="flex items-center gap-2 group/token">
                                    <code className="text-[11px] font-mono text-[#00d4ff] bg-[#00d4ff08] px-2 py-1 rounded border border-[#00d4ff15]">
                                        {lead.sandbox_token.substring(0, 16)}...
                                    </code>
                                    <button 
                                        onClick={() => copyToClipboard(lead.sandbox_token, lead.id)}
                                        className="text-slate-500 hover:text-white transition-colors"
                                        title="Copiar Token"
                                    >
                                        {copiedId === lead.id ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                                    </button>
                                </div>
                                <div className="flex items-center gap-1.5 text-[9px] text-slate-600 font-bold uppercase italic">
                                    <Clock size={10} />
                                    Aprovado em {new Date(lead.approved_at).toLocaleDateString('pt-BR')} por {lead.approved_by?.split('@')[0]}
                                </div>
                            </div>
                          ) : (
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-1.5 text-amber-500 font-bold text-[10px] uppercase">
                                    <Clock size={12} />
                                    Aguardando Análise Tech
                                </div>
                                <div className="text-[9px] text-slate-600">Criado em {new Date(lead.created_at).toLocaleDateString('pt-BR')}</div>
                            </div>
                          )}
                        </td>
                        <td className="py-5 px-8 text-right">
                          {activeTab === 'pending' ? (
                            <button 
                                onClick={() => approveLead(lead.id)}
                                disabled={!!isProcessing}
                                className="inline-flex items-center gap-2 bg-[#00d4ff10] text-[#00d4ff] border border-[#00d4ff30] hover:bg-[#00d4ff] hover:text-[#05050a] px-5 py-2 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(0,212,255,0.05)] disabled:opacity-50"
                            >
                                {isProcessing === lead.id ? (
                                    <>
                                        <Loader2 size={14} className="animate-spin" />
                                        <span>ENVIANDO...</span>
                                    </>
                                ) : (
                                    <>
                                        <ShieldCheck size={14} />
                                        <span>APROVAR</span>
                                    </>
                                )}
                            </button>
                          ) : activeTab === 'approved' ? (
                            <button 
                                onClick={() => revokeLead(lead.id)}
                                disabled={!!isProcessing}
                                className="p-2.5 bg-red-500/10 rounded-xl border border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-lg"
                                title="Revogar Token"
                            >
                                {isProcessing === lead.id ? <Loader2 size={16} className="animate-spin" /> : <XCircle size={16} />}
                            </button>
                          ) : (
                            <div className="text-[10px] text-red-500/50 font-bold uppercase italic flex items-center justify-end gap-1">
                                <ShieldAlert size={12} />
                                <span>Token Invalidado</span>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function StatCard({ label, value, icon, color, bgColor }: any) {
  return (
    <div className={`bg-[#ffffff03] p-7 rounded-2xl border ${color} flex items-center justify-between shadow-lg backdrop-blur-md`}>
      <div>
        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-2">{label}</p>
        <div className="flex items-baseline gap-2">
            <h3 className="text-4xl font-bold text-white tracking-tighter">{value}</h3>
            <span className="text-[10px] text-slate-600 font-bold uppercase">Cadastros</span>
        </div>
      </div>
      <div className={`p-4 ${bgColor} rounded-2xl shadow-inner`}>
        {React.cloneElement(icon, { size: 28 })}
      </div>
    </div>
  );
}
