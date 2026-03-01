"use client";

import React from 'react';

import Image from 'next/image';

const HeroVisual = () => (
  <div className="relative w-full max-w-4xl mx-auto h-[500px] md:h-[700px] mt-12 group">
    {/* Animated glow background behind the face */}
    <div className="absolute inset-0 bg-emerald-500/10 blur-[120px] rounded-full animate-pulse-slow" />

    <div className="relative w-full h-full flex items-center justify-center">
      <Image
        src="/assets/images/hero-face.webp"
        alt="Validação Biométrica 3D da MyPass - Tecnologia Determinística"
        fill
        className="object-contain opacity-90 drop-shadow-[0_0_80px_rgba(34,211,238,0.2)]"
        priority
        loading="eager"
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
    <section className="relative pt-55 pb-20 px-6 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[140px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-10 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
            Identidade Digital Soberana
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1.1] animate-fade-in text-balance">
          <span className="text-gradient block">Seu Rosto. Seu Token.</span>
          <span className="text-white">Seu Controle.</span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed animate-fade-in delay-200">
          Uma validação biométrica de <span className="text-emerald-400 font-semibold underline decoration-emerald-400/30 underline-offset-4">Nível 4</span>.
          Reconhecida em qualquer banco, hospital ou evento no Brasil. 100% Determinística.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24 animate-fade-in delay-300">
          <a href="#contato-enterprise" className="group relative px-8 py-5 bg-white text-slate-950 font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_20px_50px_rgba(255,255,255,0.15)] overflow-hidden flex items-center justify-center">
            <span className="relative z-10 text-sm">Solicitar Demo Enterprise</span>
            <div className="absolute inset-0 bg-emerald-400 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a href="#developer-portal" className="px-8 py-5 glass text-white font-bold rounded-xl glass-hover hover:scale-105 transition-all duration-300 text-sm">
            Acessar Sandbox Dev
          </a>
        </div>

        <HeroVisual />

        {/* Trust Bar - Technical Badges */}
        <div className="mt-20 pt-12 border-t border-white/5 animate-fade-in delay-500">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-10">
            Certificação Técnica & Conformidade
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {[
              "FaceTec Certified Partner",
              "Praetorian Level 4 & 5",
              "iBeta ISO 30107-3",
              "LGPD · Privacy by Design",
              "PIX BACEN 2026 Ready"
            ].map((badge) => (
              <div key={badge} className="px-4 py-2 rounded-lg border border-white/5 bg-white/5 backdrop-blur-sm group hover:border-emerald-500/30 transition-colors">
                <span className="text-[10px] font-black text-slate-300 tracking-tighter group-hover:text-emerald-400 transition-colors whitespace-nowrap">
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
