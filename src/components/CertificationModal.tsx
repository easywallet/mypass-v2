"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { certifications } from "@/data/certifications";
import { ShieldCheck, Lock, CheckCircle2, FileText, Download, X } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

interface CertificationModalProps {
  certId: string | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CertificationModal({ certId, isOpen, onClose }: CertificationModalProps) {
  const [mounted, setMounted] = useState(false);
  const [pdfError, setPdfError] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reseta o erro do PDF quando muda o certificado
  useEffect(() => {
    setPdfError(false);
  }, [certId]);

  if (!mounted || !certId) return null;

  const cert = certifications[certId];
  if (!cert) return null;

  const Icon = cert.icon === "Lock" ? Lock : cert.icon === "ShieldCheck" ? ShieldCheck : FileText;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[800px] w-[95vw] sm:w-full p-0 bg-[#0a0a14] border-[#1e293b] rounded-[21px] gap-0 overflow-y-auto max-h-[90vh] custom-scrollbar shadow-2xl">
        {/* Adicionado o DialogTitle Visually Hidden para acessibilidade */}
        <DialogTitle className="sr-only">
          Certificado: {cert.badge}
        </DialogTitle>

        {/* HEADER */}
        <div className="p-8 sm:p-10 border-b border-[#1e293b] flex flex-col items-center text-center relative">
          <DialogPrimitive.Close className="absolute right-6 top-6 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-6 w-6 text-slate-400 hover:text-white transition-colors" />
            <span className="sr-only">Fechar</span>
          </DialogPrimitive.Close>

          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
            style={{ backgroundColor: `${cert.accentColor}15`, border: `1px solid ${cert.accentColor}30` }}
          >
            <Icon className="w-8 h-8" style={{ color: cert.accentColor }} />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-50 mb-4">{cert.badge}</h2>

          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full mb-6" style={{ backgroundColor: `${cert.accentColor}15`, border: `1px solid ${cert.accentColor}30` }}>
            <CheckCircle2 className="w-4 h-4" style={{ color: cert.accentColor }} />
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: cert.accentColor }}>{cert.status}</span>
          </div>

          <div className="text-slate-400 text-sm">
            <span className="text-slate-300 font-medium">{cert.emissor}</span> • {cert.data}
            {cert.acreditacao && <><br />{cert.acreditacao}</>}
          </div>
        </div>

        {/* RESUMO EXECUTIVO */}
        <div className="p-8 sm:p-10 border-b border-[#1e293b]">
          <h3 className="text-lg font-semibold text-slate-50 mb-4">O Que é Este Certificado</h3>
          <p className="text-slate-400 leading-relaxed whitespace-pre-line text-[15px]">
            {cert.resumoExecutivo}
          </p>
        </div>

        {/* MÉTRICAS */}
        <div className="p-8 sm:p-10 border-b border-[#1e293b] bg-[#05050a]">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {cert.metricas.map((metrica, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-[28px] font-bold mb-1" style={{ color: cert.accentColor }}>
                  {metrica.value}
                </span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {metrica.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* O QUE SIGNIFICA PARA VOCÊ */}
        <div className="p-8 sm:p-10 border-b border-[#1e293b]">
          <div
            className="p-6 rounded-xl bg-[#0f0f1f]"
            style={{ borderLeft: `4px solid ${cert.accentColor}` }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-3">
              O que isso significa na prática
            </h3>
            <p className="text-slate-300 leading-relaxed text-[15px]">
              {cert.oqueSIgnifica}
            </p>
          </div>
        </div >

        {/* DOCUMENTO ORIGINAL (PDF) */}
        < div className="p-8 sm:p-10 border-b border-[#1e293b] bg-[#05050a]" >
          <h3 className="text-lg font-semibold text-slate-50 mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-slate-400" />
            Documento Original
          </h3>

          <div className="w-full h-[400px] border border-[#1e293b] rounded-xl overflow-hidden bg-[#0f0f1f] relative">
            {!pdfError ? (
              <iframe
                src={cert.pdfFile}
                className="w-full h-full"
                title={`Certificado ${cert.badge}`}
                onError={() => setPdfError(true)}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                <FileText className="w-12 h-12 text-slate-600 mb-4" />
                <p className="text-slate-400 mb-4">Pré-visualização do PDF indisponível neste navegador.</p>
                <a
                  href={cert.pdfFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition font-medium flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Baixar PDF Original
                </a>
              </div>
            )}
          </div>
        </div >

        {/* FOOTER */}
        < div className="p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6" >
          <div className="text-xs text-slate-500 text-center md:text-left leading-relaxed max-w-sm">
            Certificação emitida por {cert.emissor} em nome da FaceTec, Inc. <br />
            MyPass possui autorização formal da FaceTec para exibição deste documento.
          </div>

          <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4">
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-xl border border-[#1e293b] text-slate-300 hover:bg-[#1e293b] hover:text-white transition font-medium text-sm flex-1 sm:flex-none text-center"
            >
              Fechar
            </button>
            <a
              href={cert.pdfFile}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl text-[#05050a] transition font-bold text-sm flex items-center justify-center gap-2 flex-1 sm:flex-none"
              style={{ background: `linear-gradient(135deg, ${cert.accentColor}, ${cert.accentColor}cc)` }}
            >
              <Download className="w-4 h-4" />
              Baixar Oficial
            </a>
          </div >
        </div >

      </DialogContent >
    </Dialog >
  );
}
