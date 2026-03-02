"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

export function DireitosTitularesForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        tipo: "",
        nome: "",
        email: "",
        cpf: "",
        descricao: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/lgpd-request", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setSuccess(true);
                setFormData({ tipo: "", nome: "", email: "", cpf: "", descricao: "" });
            } else {
                alert("Ocorreu um erro. Tente novamente ou envie um email para dpo@mypass.com.br");
            }
        } catch (e) {
            console.error(e);
            alert("Erro de conexão ao enviar solicitação.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="not-prose bg-[#0a0a14] border border-[#1e293b] rounded-3xl p-8 md:p-12">
            {success ? (
                <div className="flex flex-col items-center justify-center text-center space-y-6 py-12 animate-in zoom-in duration-500">
                    <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                        <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold text-white mb-2">Protocolo Registrado</h4>
                        <p className="text-slate-400 max-w-sm mx-auto legal-text">
                            Sua requisição de Direitos de Titular foi cifrada e enviada à mesa do nosso DPO. Você receberá atualizações no email informado em breve.
                        </p>
                    </div>
                    <button
                        onClick={() => setSuccess(false)}
                        className="text-emerald-400 font-bold uppercase tracking-widest text-[10px] mt-4 hover:text-emerald-300"
                    >
                        Realizar Nova Requisição
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                            Natureza da Solicitação
                        </label>
                        <select
                            required
                            value={formData.tipo}
                            onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 appearance-none bg-[#0f0f1f]"
                        >
                            <option value="" disabled>Selecione um direito...</option>
                            <option value="Acesso aos dados coletados">Confirmação e Acesso aos Dados</option>
                            <option value="Correção de dados incompletos">Correção de Dados</option>
                            <option value="Anonimização, bloqueio ou eliminação (Direito ao Esquecimento)">Direito ao Esquecimento (Exclusão Purgada)</option>
                            <option value="Portabilidade dos dados para outro fornecedor">Portabilidade de Dados (JSON Export)</option>
                            <option value="Revogação do consentimento">Revogação Mútua de Consentimento</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Nome Completo</label>
                            <input
                                type="text" required placeholder="Ex: Maria Souza"
                                value={formData.nome} onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">CPF</label>
                            <input
                                type="text" required placeholder="000.000.000-00"
                                value={formData.cpf} onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 font-mono"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">E-mail para Contato (Retorno DPO)</label>
                        <input
                            type="email" required placeholder="maria.souza@email.com"
                            value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Detalhes do Pedido</label>
                        <textarea
                            required rows={4} placeholder="Especifique qualquer contexto adicional essencial para o cumprimento direto da solicitação..."
                            value={formData.descricao} onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 resize-none"
                        />
                    </div>

                    <button
                        type="submit" disabled={loading}
                        className="w-full h-14 bg-emerald-500 text-slate-950 font-black rounded-xl hover:bg-emerald-400 transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-2"
                    >
                        {loading ? (
                            <><Loader2 className="w-4 h-4 animate-spin" /> Transmitindo à Central...</>
                        ) : (
                            <><Send className="w-4 h-4" /> Registrar Solicitação Formal</>
                        )}
                    </button>

                    <p className="text-center text-[10px] tracking-widest uppercase text-slate-600 font-bold mt-4">
                        Protegido por SSL/TLS. Os dados deste formulário são usados estritamente para localização dos registros.
                    </p>
                </form>
            )}
        </div>
    );
}
