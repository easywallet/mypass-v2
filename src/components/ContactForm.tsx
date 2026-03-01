"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle2, ShieldCheck, Code2, ArrowRight } from "lucide-react";

const FormField = ({ label, type = "text", placeholder, options }: { label: string, type?: string, placeholder?: string, options?: string[] }) => (
    <div className="space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">{label}</label>
        {options ? (
            <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all appearance-none cursor-pointer">
                <option value="" disabled selected className="bg-slate-900">{placeholder}</option>
                {options.map(opt => <option key={opt} value={opt} className="bg-slate-900">{opt}</option>)}
            </select>
        ) : (
            <input
                type={type}
                placeholder={placeholder}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all font-medium"
            />
        )}
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

export const ContactForm = () => {
                        </div >
                    </div >
                </div >
            </div >
        </section >
    );
};
