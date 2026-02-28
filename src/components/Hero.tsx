"use client";

import React from 'react';

import Image from 'next/image';

const HeroVisual = () => (
  <div className="relative w-full max-w-4xl mx-auto h-[500px] md:h-[700px] mt-12 group">
    {/* Animated glow background behind the face */}
    <div className="absolute inset-0 bg-emerald-500/10 blur-[120px] rounded-full animate-pulse-slow" />

    <div className="relative w-full h-full flex items-center justify-center">
      <Image
        src="/assets/images/hero-face.png"
        alt="Identidade Determinística MyPass"
        fill
        className="object-contain opacity-90 drop-shadow-[0_0_80px_rgba(34,211,238,0.2)]"
        priority
      />

      {/* Scanning effect Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent absolute top-0 animate-scan shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
      </div>

      {/* Futuristic Floating Data Nodes */}
      <div className="absolute top-1/4 -left-10 glass p-3 rounded-lg border-cyan-500/30 animate-float hidden md:block">
        <div className="text-[8px] font-mono text-cyan-400 uppercase mb-1">Topological Hash</div>
        <div className="text-[10px] font-mono text-white">0x82...f9a</div>
      </div>

      <div className="absolute bottom-1/4 -right-10 glass p-3 rounded-lg border-emerald-500/30 animate-float-delayed hidden md:block">
        <div className="text-[8px] font-mono text-emerald-400 uppercase mb-1">Liveness Verify</div>
        <div className="text-[10px] font-mono text-white">99.99% MATCH</div>
      </div>
    </div>

    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
  </div>
);

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[140px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-10 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
            Enterprise v2.0 Global Standard
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1.1] animate-fade-in">
          <span className="text-gradient block">Identidade Determinística.</span>
          <span className="text-white">A Única Chave In-Clonável.</span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed animate-fade-in delay-200">
          Reconhecimento biométrico 3D de nível governamental com proteção contra
          injeção de sinal certificada pela <span className="text-emerald-400 font-semibold underline decoration-emerald-400/30 underline-offset-4">Praetorian Security</span>.
          Zero fricção, 100% integridade.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24 animate-fade-in delay-300">
          <button className="group relative px-8 py-5 bg-white text-slate-950 font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_20px_50px_rgba(255,255,255,0.15)] overflow-hidden">
            <span className="relative z-10">Solicitar Enterprise Demo</span>
            <div className="absolute inset-0 bg-emerald-400 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          <button className="px-8 py-5 glass text-white font-bold rounded-xl glass-hover hover:scale-105 transition-all duration-300">
            Ver Sandbox Dev
          </button>
        </div>

        <HeroVisual />

        {/* Trust Bar */}
        <div className="mt-20 pt-12 border-t border-white/5 animate-fade-in delay-500">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-10">
            Infraestrutura Confiada por Segmentos Críticos
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-40 grayscale hover:opacity-100 transition-all duration-700">
            <span className="text-xl md:text-2xl font-black text-slate-300 tracking-tighter">CROWDSTRIKE</span>
            <span className="text-xl md:text-2xl font-black text-slate-300 tracking-tighter">PALANTIR</span>
            <span className="text-xl md:text-2xl font-black text-slate-300 tracking-tighter">SENTINELONE</span>
            <span className="text-xl md:text-2xl font-black text-slate-300 tracking-tighter">ZSCALER</span>
            <span className="text-xl md:text-2xl font-black text-slate-300 tracking-tighter">LOCKHEED MARTIN</span>
          </div>
        </div>
      </div>
    </section>
  );
};
