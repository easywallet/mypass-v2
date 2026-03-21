'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Lock, ShieldCheck, Mail, Key, Loader2 } from 'lucide-react';

export default function AdminLoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const res = await fetch('/api/admin/auth', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                router.push('/admin/sandbox');
            } else {
                setError(data.error || 'Credenciais inválidas');
            }
        } catch (err) {
            setError('Erro ao conectar com o servidor');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#0a0f1e] flex flex-col items-center justify-center p-4 selection:bg-[#00d4ff33]">
            {/* Background Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#00d4ff05] rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00d4ff03] rounded-full blur-[120px]" />
            </div>

            <div className="w-full max-w-md relative z-10 animate-fade-in">
                {/* Logo & Header */}
                <div className="text-center mb-8">
                    <div className="flex justify-center mb-6">
                        <Image 
                            src="/images/logo-white.png" 
                            alt="MyPass Logo" 
                            width={160} 
                            height={40} 
                            className="h-9 w-auto object-contain"
                            priority
                        />
                    </div>
                    
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffffff08] border border-[#ffffff15] mb-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-pulse" />
                        <span className="text-[10px] uppercase font-bold tracking-wider text-[#94a3b8]">
                            Área Administrativa
                        </span>
                    </div>
                </div>

                {/* Login Card */}
                <div className="bg-[#ffffff03] border border-[#ffffff10] backdrop-blur-xl rounded-2xl p-8 shadow-2xl overflow-hidden relative group">
                    {/* Top Glow Edge */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00d4ff30] to-transparent" />
                    
                    <h1 className="text-xl font-semibold text-white mb-1">Acesso Restrito</h1>
                    <p className="text-[#94a3b8] text-sm mb-8">Identifique-se para gerenciar o ecossistema MyPass.</p>

                    <form onSubmit={handleLogin} className="space-y-6">
                        {/* Email Field */}
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-[#64748b] uppercase tracking-wider ml-1">E-mail</label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#475569] group-focus-within:text-[#00d4ff] transition-colors">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="admin@mypass.com.br"
                                    className="w-full bg-[#ffffff05] border border-[#ffffff10] rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-[#334155] focus:outline-none focus:border-[#00d4ff40] focus:ring-1 focus:ring-[#00d4ff20] transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-[#64748b] uppercase tracking-wider ml-1">Senha</label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#475569] group-focus-within:text-[#00d4ff] transition-colors">
                                    <Key className="w-4 h-4" />
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full bg-[#ffffff05] border border-[#ffffff10] rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-[#334155] focus:outline-none focus:border-[#00d4ff40] focus:ring-1 focus:ring-[#00d4ff20] transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 flex items-center gap-3 animate-shake">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                <span className="text-red-400 text-xs font-medium">{error}</span>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-[#00d4ff] to-[#0080ff] hover:from-[#00e3ff] hover:to-[#0090ff] text-white font-bold py-3.5 rounded-xl shadow-lg shadow-[#00d4ff20] transition-all transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group overflow-hidden"
                        >
                            {isLoading ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                <>
                                    <span>ENTRAR</span>
                                    <Lock className="w-4 h-4 transition-transform group-hover:translate-y-[-1px]" />
                                </>
                            )}
                        </button>
                    </form>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-[#475569] text-xs">
                        &copy; 2026 MyPass Infrastructure. Todos os direitos reservados.
                    </p>
                </div>
            </div>

            <style jsx global>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-4px); }
                    75% { transform: translateX(4px); }
                }
                .animate-fade-in {
                    animation: fade-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                }
                .animate-shake {
                    animation: shake 0.3s ease-in-out;
                }
            `}</style>
        </main>
    );
}
