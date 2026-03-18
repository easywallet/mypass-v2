"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle2, ShieldCheck, Code2, ArrowRight } from "lucide-react";

const FormField = ({ label, type = "text", placeholder, options, value, onChange, onBlur, error, required }: {
    label: string,
    type?: string,
    placeholder?: string,
    options?: string[],
    value?: string,
    onChange?: (e: any) => void,
    onBlur?: (e: any) => void,
    error?: string,
    required?: boolean
}) => (
    <div className="space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">{label}</label>
        {options ? (
            <select
                required={required}
                value={value}
                onChange={onChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all appearance-none cursor-pointer"
            >
                <option value="" disabled className="bg-slate-900">{placeholder}</option>
                {options.map(opt => <option key={opt} value={opt} className="bg-slate-900">{opt}</option>)}
            </select>
        ) : (
            <input
                required={required}
                type={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all font-medium"
            />
        )}
        {error && <p className="text-[11px] font-bold text-amber-400">{error}</p>}
    </div>
);

const CheckboxField = ({ label, checked, onChange }: { label: string, checked: boolean, onChange: (val: boolean) => void }) => (
    <label className="flex items-center gap-3 group cursor-pointer">
        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${checked ? 'bg-cyan-500 border-cyan-400' : 'border-white/10 bg-white/5 group-hover:bg-white/10'
            }`}>
            {checked && <div className="w-2.5 h-2.5 rounded-sm bg-slate-950" />}
        </div>
        <span className={`text-xs transition-colors ${checked ? 'text-white font-bold' : 'text-slate-400 group-hover:text-white'}`}>{label}</span>
        <input type="checkbox" className="hidden" checked={checked} onChange={(e) => onChange(e.target.checked)} />
    </label>
);

// ─── Helpers de Validação ────────────────────────────────────────────────────

const PERSONAL_DOMAINS = [
    'gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com',
    'yahoo.com.br', 'hotmail.com.br', 'live.com', 'icloud.com',
    'bol.com.br', 'uol.com.br', 'terra.com.br', 'ig.com.br'
];

const validateCorporateEmail = (email: string): string => {
    const domain = email.split('@')[1]?.toLowerCase() ?? '';
    if (domain && PERSONAL_DOMAINS.includes(domain))
        return 'Use um e-mail corporativo. E-mails pessoais não são aceitos.';
    return '';
};

// Máscara CNPJ: XX.XXX.XXX/XXXX-XX
const formatCNPJ = (value: string): string => {
    const d = value.replace(/\D/g, '').slice(0, 14);
    return d
        .replace(/(\d{2})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1/$2')
        .replace(/(\d{4})(\d{1,2})/, '$1-$2');
};

// Validação CNPJ — Algoritmo Módulo 11
const validateCNPJ = (cnpj: string): boolean => {
    const d = cnpj.replace(/\D/g, '');
    if (d.length !== 14 || /^(\d)\1+$/.test(d)) return false;
    const calc = (s: string, len: number): number => {
        let sum = 0, pos = len - 7;
        for (let i = len; i >= 1; i--) {
            sum += +s[len - i] * pos--;
            if (pos < 2) pos = 9;
        }
        return sum % 11 < 2 ? 0 : 11 - (sum % 11);
    };
    return calc(d, 12) === +d[12] && calc(d, 13) === +d[13];
};

// ─────────────────────────────────────────────────────────────────────────────

export const ContactForm = () => {
    const [activeForm, setActiveForm] = useState<'b2b' | 'dev'>('b2b');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    // Validation error states
    const [b2bEmailError, setB2bEmailError] = useState('');
    const [devEmailError, setDevEmailError] = useState('');
    const [cnpjError, setCnpjError] = useState('');

    // Form States
    const [b2bData, setB2bData] = useState({ nome: '', email: '', empresa: '', cargo: '', segmento: '', mensagem: '' });
    const [devData, setDevData] = useState({
        nome: '',
        email: '',
        empresa: '',
        cnpj: '',
        github: '',
        segmento: '',
        integracoes: [] as string[]
    });

    const handleB2bSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/enterprise-contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(b2bData)
            });

            if (res.ok) {
                setSuccess(true);
                setB2bData({ nome: '', email: '', empresa: '', cargo: '', segmento: '', mensagem: '' });
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleDevSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Barreira de validação — impede POST com dados inválidos
        const emailErr = validateCorporateEmail(devData.email);
        if (emailErr) {
            setDevEmailError(emailErr);
            return;
        }
        if (!validateCNPJ(devData.cnpj)) {
            setCnpjError('CNPJ inválido. Verifique e tente novamente.');
            return;
        }

        setLoading(true);
        try {
            const res = await fetch('/api/developer-signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...devData,
                    tipos_integracao: devData.integracoes
                })
            });

            if (res.ok) {
                setSuccess(true);
                setDevData({ nome: '', email: '', empresa: '', cnpj: '', github: '', segmento: '', integracoes: [] });
                setCnpjError('');
                setDevEmailError('');
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const toggleIntegration = (type: string) => {
        setDevData(prev => ({
            ...prev,
            integracoes: prev.integracoes.includes(type)
                ? prev.integracoes.filter(t => t !== type)
                : [...prev.integracoes, type]
        }));
    };

    return (
        <section id="contato-enterprise" className="py-34 px-6 relative overflow-hidden bg-slate-950">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-[10px] font-black uppercase tracking-[.4em] text-emerald-400 mb-6">
                        Get in touch
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
                        Vamos Iniciar a Jornada.
                    </h3>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Escolha o canal de atendimento ideal para a sua necessidade e fale com nosso time de especialistas.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">

                    {/* Left Side: Context & Testimonial */}
                    <div className="flex flex-col justify-center">
                        <div className="space-y-12">
                            <div className="relative glass p-8 rounded-3xl border-l-4 border-l-emerald-400">
                                <p className="text-base italic text-slate-300 mb-8 prose-body">
                                    "A MyPass removeu completamente o risco de Account Takeover na nossa plataforma de Wealth Management. Em menos de 2 segundos, validamos identidades com precisão absoluta."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-emerald-400">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-white">Case disponível mediante NDA</div>
                                        <div className="text-xs text-slate-500 font-bold uppercase tracking-tight">Fintech Tier 1, Brasil</div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8 mt-8">
                                <div>
                                    <div className="text-3xl md:text-4xl font-black text-emerald-400 tracking-tighter mb-2">
                                        {"<"} 2s
                                    </div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-relaxed">
                                        Velocidade de<br />Autenticação
                                    </div>
                                </div>
                                <div className="border-l border-white/10 pl-8">
                                    <div className="text-3xl md:text-4xl font-black text-emerald-400 tracking-tighter mb-2">
                                        100%
                                    </div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-relaxed">
                                        Bloqueio<br />Anti-Injeção
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Dual Forms */}
                    <div className="relative group">
                        {/* Form Selection Tabs */}
                        <div className="flex gap-4 mb-8">
                            <button
                                type="button"
                                onClick={() => { setActiveForm('b2b'); setSuccess(false); }}
                                className={`flex-1 py-4 px-6 rounded-2xl border transition-all flex items-center justify-center gap-3 font-black uppercase tracking-widest text-[10px] ${activeForm === 'b2b'
                                    ? 'bg-emerald-500 border-emerald-400 text-slate-950 shadow-[0_10px_20px_rgba(16,185,129,0.2)]'
                                    : 'bg-white/5 border-white/10 text-slate-500 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                <ShieldCheck className="w-4 h-4" />
                                Enterprise (B2B)
                            </button>
                            <button
                                type="button"
                                onClick={() => { setActiveForm('dev'); setSuccess(false); }}
                                className={`flex-1 py-4 px-6 rounded-2xl border transition-all flex items-center justify-center gap-3 font-black uppercase tracking-widest text-[10px] ${activeForm === 'dev'
                                    ? 'bg-cyan-500 border-cyan-400 text-slate-950 shadow-[0_10px_20px_rgba(6,182,212,0.2)]'
                                    : 'bg-white/5 border-white/10 text-slate-500 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                <Code2 className="w-4 h-4" />
                                Developers
                            </button>
                        </div>

                        <div className="glass p-10 md:p-12 rounded-[34px] border-white/5 relative">
                            {success ? (
                                <div className="h-[450px] flex flex-col items-center justify-center text-center space-y-6 animate-in zoom-in-95 duration-500">
                                    <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                                        <CheckCircle2 className="w-10 h-10" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold text-white mb-2">Solicitação Recebida!</h4>
                                        <p className="text-slate-400 max-w-xs mx-auto">
                                            Nosso time analisará seus dados e entrará em contato em até 1 dia útil.
                                        </p>
                                    </div>
                                    <Button
                                        variant="link"
                                        onClick={() => setSuccess(false)}
                                        className="text-emerald-400 font-bold uppercase tracking-widest text-[10px]"
                                    >
                                        Enviar outra solicitação
                                    </Button>
                                </div>
                            ) : activeForm === 'b2b' ? (
                                <form onSubmit={handleB2bSubmit} className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FormField
                                            label="Nome Completo"
                                            placeholder="Ex: João Silva"
                                            required
                                            value={b2bData.nome}
                                            onChange={e => setB2bData({ ...b2bData, nome: e.target.value })}
                                        />
                                        <FormField
                                            label="E-mail Corporativo"
                                            placeholder="exemplo@empresa.com"
                                            type="email"
                                            required
                                            value={b2bData.email}
                                            onChange={e => setB2bData({ ...b2bData, email: e.target.value })}
                                            onBlur={e => setB2bEmailError(validateCorporateEmail(e.target.value))}
                                            error={b2bEmailError}
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FormField
                                            label="Empresa"
                                            placeholder="Sua organização"
                                            required
                                            value={b2bData.empresa}
                                            onChange={e => setB2bData({ ...b2bData, empresa: e.target.value })}
                                        />
                                        <FormField
                                            label="Cargo"
                                            placeholder="Selecione seu cargo"
                                            options={["CEO", "CTO", "CISO", "Head de Produto", "Diretor", "Outro"]}
                                            required
                                            value={b2bData.cargo}
                                            onChange={e => setB2bData({ ...b2bData, cargo: e.target.value })}
                                        />
                                    </div>
                                    <FormField
                                        label="Segmento"
                                        placeholder="Selecione o setor"
                                        options={["Fintech", "Saúde", "Eventos", "Varejo", "Educação", "GovTech", "Outro"]}
                                        required
                                        value={b2bData.segmento}
                                        onChange={e => setB2bData({ ...b2bData, segmento: e.target.value })}
                                    />
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Mensagem</label>
                                        <textarea
                                            rows={4}
                                            placeholder="Como podemos ajudar sua operação?"
                                            required
                                            value={b2bData.mensagem}
                                            onChange={e => setB2bData({ ...b2bData, mensagem: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all resize-none"
                                        />
                                    </div>
                                    <Button disabled={loading} type="submit" className="w-full h-14 bg-emerald-500 text-slate-950 font-black rounded-xl hover:bg-emerald-400 transition-all shadow-xl uppercase tracking-widest text-xs">
                                        {loading ? "Processando..." : "Solicitar Demo Enterprise"}
                                        {!loading && <ArrowRight className="ml-2 w-4 h-4" />}
                                    </Button>
                                </form>
                            ) : (
                                <form onSubmit={handleDevSubmit} className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FormField
                                            label="Nome Completo"
                                            placeholder="João Silva"
                                            required
                                            value={devData.nome}
                                            onChange={e => setDevData({ ...devData, nome: e.target.value })}
                                        />
                                        <FormField
                                            label="E-mail Corporativo"
                                            placeholder="exemplo@empresa.com"
                                            type="email"
                                            required
                                            value={devData.email}
                                            onChange={e => setDevData({ ...devData, email: e.target.value })}
                                            onBlur={e => setDevEmailError(validateCorporateEmail(e.target.value))}
                                            error={devEmailError}
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FormField
                                            label="Empresa"
                                            placeholder="Sua organização"
                                            required
                                            value={devData.empresa}
                                            onChange={e => setDevData({ ...devData, empresa: e.target.value })}
                                        />
                                        <FormField
                                            label="GitHub username (opcional)"
                                            placeholder="@username"
                                            value={devData.github}
                                            onChange={e => setDevData({ ...devData, github: e.target.value })}
                                        />
                                    </div>

                                    {/* CNPJ DA EMPRESA — campo obrigatório para rastreabilidade jurídica */}
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">CNPJ DA EMPRESA</label>
                                        <input
                                            required
                                            type="text"
                                            inputMode="numeric"
                                            value={devData.cnpj}
                                            onChange={e => setDevData({ ...devData, cnpj: formatCNPJ(e.target.value) })}
                                            onBlur={() => {
                                                if (devData.cnpj && !validateCNPJ(devData.cnpj)) {
                                                    setCnpjError('CNPJ inválido. Verifique e tente novamente.');
                                                } else {
                                                    setCnpjError('');
                                                }
                                            }}
                                            placeholder="00.000.000/0001-00"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all font-medium"
                                        />
                                        {cnpjError && <p className="text-[11px] font-bold text-amber-400">{cnpjError}</p>}
                                    </div>

                                    <FormField
                                        label="Segmento"
                                        placeholder="Selecione o setor"
                                        required
                                        options={["Fintech", "Saúde", "Eventos", "Varejo", "Educação", "GovTech", "Outro"]}
                                        value={devData.segmento}
                                        onChange={e => setDevData({ ...devData, segmento: e.target.value })}
                                    />

                                    <div className="space-y-4">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Tipo de Integração</label>
                                        <div className="grid grid-cols-2 gap-4">
                                            <CheckboxField label="KYC" checked={devData.integracoes.includes('KYC')} onChange={() => toggleIntegration('KYC')} />
                                            <CheckboxField label="Pagamento Facial" checked={devData.integracoes.includes('Pagamento Facial')} onChange={() => toggleIntegration('Pagamento Facial')} />
                                            <CheckboxField label="Controle de Acesso" checked={devData.integracoes.includes('Controle de Acesso')} onChange={() => toggleIntegration('Controle de Acesso')} />
                                            <CheckboxField label="Onboarding" checked={devData.integracoes.includes('Onboarding')} onChange={() => toggleIntegration('Onboarding')} />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <Button disabled={loading} type="submit" className="w-full h-14 bg-cyan-500 text-slate-950 font-black rounded-xl hover:bg-cyan-400 transition-all shadow-[0_20px_40px_rgba(6,182,212,0.2)] uppercase tracking-widest text-xs">
                                            {loading ? "Processando..." : "Solicitar Acesso ao Sandbox"}
                                            {!loading && <ArrowRight className="ml-2 w-4 h-4" />}
                                        </Button>
                                        <p className="text-center text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                                            Acesso aprovado em até 1 dia útil. Sem cartão de crédito.
                                        </p>
                                    </div>
                                </form>
                            )}

                            <p className="mt-8 text-center text-[9px] text-slate-600 font-bold uppercase tracking-widest leading-relaxed">
                                Ao enviar, você concorda com nossos Termos de Compliance e <span className="text-emerald-400">LGPD</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
