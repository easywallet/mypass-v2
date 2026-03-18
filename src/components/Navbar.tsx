"use client";

import React from 'react';

export const Navbar = () => (
    <nav className="fixed top-0 inset-x-0 z-50 px-5 py-5 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between glass px-8 py-5 rounded-[21px] border-white/5 shadow-[0_13px_34px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-3">
                <img
                    src="/assets/logos/mypass-logo-new.png"
                    alt="MyPass Logo - Identidade Digital Soberana"
                    style={{ height: '74px', width: 'auto' }}
                    className="drop-shadow-[0_0_13px_rgba(52,211,153,0.2)] object-contain"
                // Note: The total glass container height is ~114px (40px py-5 + 74px inner). 
                // 74 / 114 = 64.9%. Setting to 74px hits exactly the 65% target for the head.
                />
            </div>

            <div className="hidden md:flex items-center gap-13">
                <a href="#jornada" className="text-[10px] font-black uppercase tracking-[0.21em] text-slate-400 hover:text-white transition-colors duration-300">Como Funciona</a>
                <a href="#casos-de-uso" className="text-[10px] font-black uppercase tracking-[0.21em] text-slate-400 hover:text-white transition-colors duration-300">Casos de Uso</a>
                <a href="#developer-portal" className="text-[10px] font-black uppercase tracking-[0.21em] text-slate-400 hover:text-white transition-colors duration-300">Desenvolvedores</a>
                <a href="/docs" className="text-[10px] font-black uppercase tracking-[0.21em] text-slate-400 hover:text-white transition-colors duration-300">Docs</a>
                <a href="#compliance" className="text-[10px] font-black uppercase tracking-[0.21em] text-slate-400 hover:text-white transition-colors duration-300">Certificações</a>
            </div>

            <button className="px-8 py-3 bg-white text-slate-950 text-[10px] font-black uppercase tracking-[0.13em] rounded-xl hover:bg-slate-200 transition-all shadow-[0_5px_13px_rgba(255,255,255,0.1)]">
                Portal
            </button>
        </div>
    </nav>
);
