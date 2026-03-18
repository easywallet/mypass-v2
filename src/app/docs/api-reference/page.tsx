"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ShieldCheck, Info, ExternalLink } from 'lucide-react';
import './swagger-custom.css';

// SwaggerUI must be loaded dynamically on the client
const SwaggerUI = dynamic(() => import('swagger-ui-react'), { 
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-cyan-400"></div>
    </div>
  )
});

export default function ApiReferencePage() {
  return (
    <main className="min-h-screen bg-[#0a0f1e] selection:bg-cyan-400/30">
      <Navbar />

      <div className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Environment Banner */}
          <div className="mb-8 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-400/20 flex items-center justify-center text-cyan-400">
                <Info className="w-4 h-4" />
              </div>
              <div>
                <p className="text-white font-bold text-sm tracking-tight">
                  Você está acessando a API Reference MyPass
                </p>
                <p className="text-cyan-400/70 text-[11px] font-medium uppercase tracking-wider">
                  Ambiente: Production · Server: facetec.easypay.com.br
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-emerald-400 text-[10px] font-black uppercase tracking-widest">Ativo</span>
              </div>
              <a 
                href="https://facetec.easypay.com.br/docs/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest"
              >
                External Swagger
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Swagger UI Container */}
          <div className="glass rounded-3xl border-white/5 overflow-hidden shadow-2xl">
            <div className="p-2 md:p-4">
              <SwaggerUI url="/openapi.json" />
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3 text-slate-500 text-xs justify-center lg:justify-start">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Conformidade com a LGPD e biometria iBeta Nível 4</span>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
