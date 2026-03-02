import { ShieldCheck, Lock, type LucideIcon } from "lucide-react";

export interface CertificationMetric {
    label: string;
    value: string;
}

export interface Certification {
    id: string;
    badge: string;
    accentColor: string;
    icon: string | LucideIcon;
    emissor: string;
    acreditacao?: string;
    responsavel?: string;
    padrao?: string;
    data: string;
    vigencia?: string;
    status: string;
    pdfFile: string;
    resumoExecutivo: string;
    metricas: CertificationMetric[];
    oqueSIgnifica: string;
}

export const certifications: Record<string, Certification> = {
    "ibeta-level-1": {
        id: "ibeta-level-1",
        badge: "iBeta Level 1",
        accentColor: "#00d4ff",
        icon: "ShieldCheck",
        emissor: "iBeta Quality Assurance",
        acreditacao: "NIST/NVLAP Lab Code: 200962",
        padrao: "ISO/IEC 30107-3",
        data: "20 de Agosto de 2018",
        status: "Vigente",
        pdfFile: "/certs/ibeta-level-1.pdf",
        resumoExecutivo: `O iBeta Level 1 é o teste independente mais reconhecido do mundo para detecção de ataques de apresentação (PAD) em sistemas biométricos. Conduzido pelo laboratório NIST/NVLAP-acreditado iBeta Quality Assurance, o teste simulou ~1.500 ataques com fotos e vídeos de alta qualidade em smartphones reais (iPhone 6S e Galaxy Note 5).
    
A tecnologia FaceTec — integrada à MyPass — resistiu a 100% dos ataques, atingindo taxa de sucesso de invasão de 0% (IAMPR: 0%).`,
        metricas: [
            { label: "Ataques Tentados", value: "~1.500" },
            { label: "Ataques Bem-Sucedidos", value: "0" },
            { label: "Taxa de Invasão (IAMPR)", value: "0%" },
            { label: "Espécies de Ataque", value: "6" },
            { label: "Plataformas Testadas", value: "iOS + Android" }
        ],
        oqueSIgnifica: `Para o decisor de compliance: este certificado atesta que a MyPass não pode ser enganada por fotos ou vídeos — os ataques mais comuns usados por fraudadores para burlar onboarding financeiro.`
    },

    "ibeta-level-2": {
        id: "ibeta-level-2",
        badge: "iBeta Level 2",
        accentColor: "#00d4ff",
        icon: "ShieldCheck",
        emissor: "iBeta Quality Assurance",
        acreditacao: "NIST/NVLAP Lab Code: 200962",
        padrao: "ISO/IEC 30107-3",
        data: "7 de Fevereiro de 2019",
        status: "Vigente",
        pdfFile: "/certs/ibeta-level-2.pdf",
        resumoExecutivo: `O iBeta Level 2 é o teste mais rigoroso dentro do padrão ISO/IEC 30107-3. Ele vai além de fotos e vídeos: usa artefatos físicos sofisticados — bonecas realistas, máscaras de látex, máscaras de resina e máscaras de silicone de até USD 300 cada — que conseguem enganar o Face ID do iPhone.
    
A tecnologia FaceTec resistiu a todos os 1.800 ataques com 6 espécies de artefatos diferentes, atingindo APCER de 0%.`,
        metricas: [
            { label: "Ataques Tentados", value: "1.800" },
            { label: "Ataques Bem-Sucedidos", value: "0" },
            { label: "APCER", value: "0%" },
            { label: "Espécies de Artefato", value: "6" },
            { label: "Custo dos Artefatos", value: "Até USD 300" }
        ],
        oqueSIgnifica: `Para o decisor de compliance: máscaras de silicone realistas conseguem desbloquear o Face ID do iPhone — mas não enganam a MyPass. Esta é a diferença entre biometria 2D comum e Liveness Detection 3D.`
    },

    "praetorian-level-4": {
        id: "praetorian-level-4",
        badge: "Praetorian Level 4",
        accentColor: "#10b981",
        icon: "Lock",
        emissor: "Praetorian Security, Inc.",
        responsavel: "Peter Deros — Practice Manager",
        data: "27 de Agosto de 2025",
        vigencia: "Julho 30 a Agosto 19, 2025",
        status: "Vigente — 2025",
        pdfFile: "/certs/praetorian-level-4.pdf",
        resumoExecutivo: `O teste Praetorian Level 4 vai além do padrão ISO: simula ataques de engenharia reversa, adulteração de payload e descriptografia dos FaceScans 3D — técnicas usadas por grupos criminosos organizados para burlar sistemas de identidade bancária.
    
Especialistas da Praetorian passaram 200 horas (3 semanas) tentando forçar uma resposta de "Liveness Success" adulterando os dados internos do SDK. Resultado: 0 vulnerabilidades críticas, 0 altas, 0 médias. APCER: 0%.`,
        metricas: [
            { label: "Horas de Teste", value: "200h" },
            { label: "Vulnerabilidades Críticas", value: "0" },
            { label: "Vulnerabilidades Altas", value: "0" },
            { label: "Vulnerabilidades Médias", value: "0" },
            { label: "APCER", value: "0%" },
            { label: "SDKs Testados", value: "iOS · Android · Browser · Server" }
        ],
        oqueSIgnifica: `Para o CISO: Level 4 é o nível que grupos de crime organizado utilizam. É o ataque que nenhum sistema 2D resiste. A MyPass é a única plataforma brasileira com certificação Level 4 vigente (2025).`
    },

    "praetorian-blackbox": {
        id: "praetorian-blackbox",
        badge: "Praetorian Pentest",
        accentColor: "#10b981",
        icon: "Lock",
        emissor: "Praetorian Security, Inc.",
        responsavel: "Peter Deros — Practice Manager",
        data: "9 de Setembro de 2025",
        status: "Vigente — 2025",
        pdfFile: "/certs/praetorian-blackbox.pdf",
        resumoExecutivo: `Teste de penetração blackbox independente cobrindo Application Penetration Test e Mobile Penetration Test do FaceTec SDK. A Praetorian teve acesso completo ao SDK como um atacante externo e avaliou toda a superfície de ataque da aplicação e mobile.
    
Resultado final: 0 Critical, 0 High, 0 Medium, 0 Low — apenas 1 Informational (sem impacto de segurança).`,
        metricas: [
            { label: "Tipo de Teste", value: "Blackbox — sem acesso ao código" },
            { label: "Vulnerabilidades Críticas", value: "0" },
            { label: "Vulnerabilidades Altas", value: "0" },
            { label: "Cobertura", value: "App + Mobile SDK" },
            { label: "Data", value: "Set 2025" }
        ],
        oqueSIgnifica: `Para auditores de TI: um pentest blackbox simula exatamente o que um hacker real faria — sem conhecimento interno. Zero vulnerabilidades exploráveis encontradas.`
    }
};
