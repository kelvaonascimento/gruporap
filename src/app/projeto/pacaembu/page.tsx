"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Briefcase,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Building2,
  Wrench,
  CheckCircle2,
  FileText,
  ArrowRight,
  BarChart3,
  Layers,
  TrendingDown,
  Hammer,
  HardHat,
  Award,
  Camera,
  ShieldAlert,
  AlertTriangle,
  XCircle,
} from "lucide-react";

import { pacaembu, brand } from "@/lib/data";
import { Logo } from "@/components/logo";
import { WizardNav } from "@/components/wizard-nav";
import { SectionReveal } from "@/components/section-reveal";
import { AnimatedCounter } from "@/components/animated-counter";
import { AnimatedProgress } from "@/components/animated-progress";

// ── Constants ──────────────────────────────────────────────
const TOTAL_STEPS = 13;
const BRAND_RED = "#DB253D";

const STEP_LABELS = [
  "Capa",
  "Introdução",
  "Imagens",
  "Plantas",
  "Situação Atual",
  "Escopo",
  "Incluso",
  "Organograma",
  "Cronograma",
  "Proposta",
  "Reengenharia",
  "Obras RAP",
  "Certificações",
];

// ── Animation Variants ────────────────────────────────────
const pageVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.95,
  }),
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function InfoCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-zinc-800/60 bg-zinc-900/40 p-4">
      <div className="mt-0.5 shrink-0">{icon}</div>
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">{label}</p>
        <p className="mt-1 text-sm leading-relaxed text-zinc-200">{value}</p>
      </div>
    </div>
  );
}

// ============================================
// STEP 1: CAPA
// ============================================
function CoverStep() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="absolute inset-0 z-0">
        <Image src="/images/pacaembu/page1_img1.jpeg" alt="Complexo Pacaembu" fill className="object-cover opacity-30" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/80 to-zinc-950" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="flex justify-center">
          <Logo variant="full" color="white" className="h-16 md:h-20" />
        </motion.div>

        <motion.div className="mt-2 h-px w-24 bg-gradient-to-r from-transparent via-[#DB253D] to-transparent" initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} />

        <motion.div className="mt-10 space-y-4" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">Modernização do</h1>
          <motion.p className="text-2xl font-light text-[#DB253D] md:text-4xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}>
            Complexo Pacaembu
          </motion.p>
        </motion.div>

        <motion.div className="mt-8 space-y-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.8 }}>
          <p className="text-lg font-medium text-zinc-300">{pacaembu.type}</p>
          <p className="text-sm text-zinc-500">{pacaembu.date}</p>
        </motion.div>

        {/* Selos de certificação */}
        <motion.div className="mt-10 flex items-center justify-center gap-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }}>
          <div className="flex items-center gap-3 rounded-xl border border-zinc-700/40 bg-zinc-900/50 px-4 py-3 backdrop-blur-sm">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
              <Image src="/images/pacaembu/page50_img1.png" alt="SiAC PBQP-H Nível A" fill className="object-cover" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">SiAC PBQP-H</p>
              <p className="text-[10px] text-zinc-400">Nível A</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-zinc-700/40 bg-zinc-900/50 px-4 py-3 backdrop-blur-sm">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
              <Image src="/images/pacaembu/page50_img2.jpeg" alt="ISO 9001" fill className="object-cover" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">ISO 9001</p>
              <p className="text-[10px] text-zinc-400">Gestão da Qualidade</p>
            </div>
          </div>
        </motion.div>

        <motion.div className="mt-10 flex flex-col items-center gap-2 text-zinc-500" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.8 }}>
          <span className="text-xs uppercase tracking-widest">Deslize para continuar</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><ChevronDown className="h-5 w-5" /></motion.div>
        </motion.div>
      </div>
    </div>
  );
}

// ============================================
// STEP 2: INTRODUÇÃO
// ============================================
function IntroducaoStep() {
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-24">
      <SectionReveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-[#DB253D]">Introdução</p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Modernização do Complexo Pacaembu</h2>
      </SectionReveal>

      <SectionReveal delay={0.15}>
        <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-800/60">
          <div className="relative aspect-video w-full">
            <Image src="/images/pacaembu/page4_img1.jpeg" alt="Complexo Pacaembu" fill className="object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
            <div className="absolute inset-0 flex items-end p-8 md:p-12">
              <p className="max-w-3xl text-lg leading-relaxed text-zinc-200 md:text-xl">{pacaembu.introducao}</p>
            </div>
          </div>
        </div>
      </SectionReveal>

      <motion.div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
        {[
          { label: "Custo Total", value: "R$ 109M", icon: <DollarSign className="h-6 w-6" /> },
          { label: "Prazo", value: "15 meses", icon: <Clock className="h-6 w-6" /> },
          { label: "Duração Total", value: "428 dias", icon: <Calendar className="h-6 w-6" /> },
          { label: "Plantas", value: "6 pavimentos", icon: <Layers className="h-6 w-6" /> },
        ].map((m, i) => (
          <motion.div key={i} variants={fadeScale} className="group relative overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-900/50 p-6 backdrop-blur transition-all duration-300 hover:border-[#DB253D]/30 hover:shadow-lg hover:shadow-[#DB253D]/5">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#DB253D]/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-[#DB253D]/10" />
            <div className="relative">
              <div className="flex items-center gap-3 text-zinc-400">{m.icon}<span className="text-sm">{m.label}</span></div>
              <div className="mt-3 text-2xl font-bold text-white">{m.value}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// ============================================
// STEP 3: IMAGENS
// ============================================
function ImagensStep() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
      <SectionReveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-[#DB253D]">O Projeto</p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Perspectivas e Renders</h2>
      </SectionReveal>

      <SectionReveal delay={0.15}>
        <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-800/60">
          <div className="relative aspect-video w-full">
            <AnimatePresence mode="wait">
              <motion.div key={selected} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="absolute inset-0">
                <Image src={pacaembu.imagensProjeto[selected].src} alt={pacaembu.imagensProjeto[selected].caption} fill className="object-cover" />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="bg-zinc-900/80 px-6 py-3"><p className="text-sm text-zinc-300">{pacaembu.imagensProjeto[selected].caption}</p></div>
        </div>
      </SectionReveal>

      <div className="mt-6 grid grid-cols-5 gap-2 md:grid-cols-10">
        {pacaembu.imagensProjeto.map((img, i) => (
          <motion.button key={i} onClick={() => setSelected(i)} className={`relative aspect-video overflow-hidden rounded-lg border-2 transition-all ${selected === i ? "border-[#DB253D] shadow-lg shadow-[#DB253D]/20" : "border-zinc-800 opacity-60 hover:opacity-100"}`} whileHover={{ scale: 1.05 }}>
            <Image src={img.src} alt={img.caption} fill className="object-cover" />
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ============================================
// STEP 4: PLANTAS
// ============================================
function PlantasStep() {
  const [sel, setSel] = useState(0);
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
      <SectionReveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-[#DB253D]">Plantas Técnicas</p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Pavimentos</h2>
      </SectionReveal>

      <div className="mt-8 flex flex-wrap gap-2">
        {pacaembu.plantas.map((p, i) => (
          <button key={i} onClick={() => setSel(i)} className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${sel === i ? "bg-[#DB253D] text-white shadow-lg shadow-[#DB253D]/20" : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white"}`}>{p.titulo}</button>
        ))}
      </div>

      <SectionReveal delay={0.1}>
        <AnimatePresence mode="wait">
          <motion.div key={sel} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="mt-6 overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-4">
            <h3 className="mb-2 text-center text-lg font-semibold text-white">{pacaembu.plantas[sel].titulo}</h3>
            <p className="mb-4 text-center text-sm text-zinc-400">{pacaembu.plantas[sel].detalhe}</p>
            <div className="relative aspect-[16/7] w-full overflow-hidden rounded-lg">
              <Image src={pacaembu.plantas[sel].src} alt={pacaembu.plantas[sel].titulo} fill className="object-contain" />
            </div>
          </motion.div>
        </AnimatePresence>
      </SectionReveal>
    </div>
  );
}

// ============================================
// STEP 5: SITUAÇÃO ATUAL
// ============================================
function SituacaoAtualStep() {
  const [selBloco, setSelBloco] = useState(0);
  const bloco = pacaembu.situacaoAtual[selBloco];
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
      <SectionReveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-[#DB253D]">Situação Atual</p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Registro Fotográfico</h2>
      </SectionReveal>

      <div className="mt-8 flex flex-wrap gap-2">
        {pacaembu.situacaoAtual.map((b, i) => (
          <button key={i} onClick={() => setSelBloco(i)} className={`rounded-lg px-4 py-2 text-xs font-medium transition-all ${selBloco === i ? "bg-[#DB253D] text-white" : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"}`}>{b.bloco}</button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={selBloco} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="mt-6 grid gap-3 grid-cols-2 md:grid-cols-3">
          {bloco.imagens.map((img, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-zinc-800/60">
              <Image src={img} alt={`${bloco.bloco} — foto ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ============================================
// STEP 6: ESCOPO DA OBRA
// ============================================
function EscopoStep() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-24">
      <SectionReveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-[#DB253D]">Escopo da Obra</p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Detalhamento dos Serviços</h2>
        <p className="mt-2 text-zinc-400">{pacaembu.escopo.length} blocos de escopo</p>
      </SectionReveal>

      <motion.div className="mt-10 space-y-3" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
        {pacaembu.escopo.map((cat, i) => (
          <motion.div key={i} variants={fadeUp} className="overflow-hidden rounded-xl border border-zinc-800/60 bg-zinc-900/30 backdrop-blur">
            <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-zinc-800/30">
              <div className="flex items-center gap-4">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${openIndex === i ? "bg-[#DB253D] text-white" : "bg-zinc-800 text-zinc-400"} transition-colors duration-300`}>
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">{cat.categoria}</h3>
                  <p className="text-xs text-zinc-500">{cat.itens.length} itens</p>
                </div>
              </div>
              <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }} transition={{ duration: 0.3 }}><ChevronDown className="h-5 w-5 text-zinc-500" /></motion.div>
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                  <div className="border-t border-zinc-800/40 px-6 py-4 space-y-4">
                    {/* Itens inclusos */}
                    <ul className="space-y-2">
                      {cat.itens.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 rounded-lg px-3 py-2 hover:bg-zinc-800/30">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#DB253D]" />
                          <span className="text-sm text-zinc-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                    {/* Excluso */}
                    {cat.excluso.length > 0 && (
                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-500">Excluso da proposta</p>
                        <ul className="space-y-1">
                          {cat.excluso.map((item, j) => (
                            <li key={j} className="flex items-start gap-3 px-3 py-1">
                              <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-zinc-600" />
                              <span className="text-sm text-zinc-500">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {/* Estimativas */}
                    {cat.estimativas.length > 0 && (
                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-500">Estimativas (aguardando projeto)</p>
                        <ul className="space-y-1">
                          {cat.estimativas.map((item, j) => (
                            <li key={j} className="flex items-start gap-3 px-3 py-1">
                              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500/60" />
                              <span className="text-sm text-zinc-400 italic">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// ============================================
// STEP 7: INCLUSO NA PROPOSTA
// ============================================
function InclusoStep() {
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-24">
      <SectionReveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-[#DB253D]">Incluso na Proposta</p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Serviços e Infraestrutura</h2>
      </SectionReveal>

      <motion.div className="mt-10 space-y-4" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
        {pacaembu.incluso.map((cat, i) => (
          <motion.div key={i} variants={fadeUp} className="rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-6">
            <h3 className="text-base font-semibold text-white mb-4">{cat.categoria}</h3>
            <ul className="space-y-2">
              {cat.itens.map((item, j) => (
                <li key={j} className="flex items-start gap-3 text-sm text-zinc-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#DB253D]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// ============================================
// STEP 8: ORGANOGRAMA
// ============================================
function OrganoStep() {
  const org = pacaembu.orgObra;
  const sections = [
    { title: "Área Administrativa", subtitle: "Corporativo / Escritório", items: org.administrativo, icon: <Briefcase className="h-5 w-5" /> },
    { title: "Engenharia", subtitle: "Área Técnica", items: org.engenharia, icon: <HardHat className="h-5 w-5" /> },
    { title: "Área Técnica", subtitle: "Produção", items: org.areaTecnica, icon: <Wrench className="h-5 w-5" /> },
    { title: "Operação", subtitle: "Equipes de Execução", items: org.operacao, icon: <Hammer className="h-5 w-5" /> },
  ];

  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
      <SectionReveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-[#DB253D]">Organograma</p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Equipe para Execução da Obra</h2>
      </SectionReveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {sections.map((sec, i) => (
          <SectionReveal key={i} delay={i * 0.1}>
            <div className={`rounded-2xl border p-6 ${i === 1 ? "border-[#DB253D]/20 bg-[#DB253D]/5" : "border-zinc-800/60 bg-zinc-900/30"}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#DB253D] text-white">{sec.icon}</div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{sec.title}</h3>
                  <p className="text-xs text-zinc-500">{sec.subtitle}</p>
                </div>
              </div>
              <div className="space-y-2">
                {sec.items.map((item, j) => (
                  <motion.div key={j} className="rounded-lg border border-zinc-800/40 bg-zinc-900/60 px-4 py-2.5 text-sm text-zinc-200" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: j * 0.04 }}>
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
  );
}

// ============================================
// STEP 9: CRONOGRAMA
// ============================================
function CronogramaStep() {
  const [tab, setTab] = useState<"leste" | "oeste">("leste");
  const items = tab === "leste" ? pacaembu.cronograma.blocoLeste : pacaembu.cronograma.blocoOesteHotel;
  const maxDays = tab === "leste" ? 195 : 405;

  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
      <SectionReveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-[#DB253D]">Cronograma Macro</p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">{pacaembu.prazo.duracaoTotal} Dias de Execução</h2>
        <p className="mt-2 text-zinc-400">{pacaembu.prazo.inicio} a {pacaembu.prazo.termino}</p>
      </SectionReveal>

      <div className="mt-6 flex gap-2">
        <button onClick={() => setTab("leste")} className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${tab === "leste" ? "bg-[#DB253D] text-white" : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"}`}>Bloco Leste</button>
        <button onClick={() => setTab("oeste")} className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${tab === "oeste" ? "bg-[#DB253D] text-white" : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"}`}>Bloco Oeste e Hotel</button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={tab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-6 space-y-2">
          {items.slice(1).map((item, i) => {
            const widthPercent = (item.duracao / maxDays) * 100;
            return (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="flex items-center gap-4">
                <div className="w-48 shrink-0 text-right">
                  <p className="text-xs font-medium text-zinc-300 truncate">{item.tarefa}</p>
                  <p className="text-[10px] text-zinc-600">{item.duracao}d | {item.inicio}</p>
                </div>
                <div className="relative flex-1 h-8 rounded-lg bg-zinc-900/60 border border-zinc-800/40 overflow-hidden">
                  <motion.div className="absolute top-1 bottom-1 rounded-md bg-gradient-to-r from-[#DB253D] to-[#921A26]" initial={{ width: 0 }} whileInView={{ width: `${Math.max(widthPercent, 2)}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}>
                    {widthPercent > 12 && <span className="absolute inset-0 flex items-center px-2 text-[10px] font-semibold text-white">{item.duracao}d</span>}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      <SectionReveal delay={0.3}>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <InfoCard icon={<Clock className="h-5 w-5 text-[#DB253D]" />} label="Mobilização" value={`${pacaembu.prazo.mobilizacao} dias`} />
          <InfoCard icon={<Calendar className="h-5 w-5 text-[#DB253D]" />} label="Execução" value={pacaembu.prazo.execucao} />
          <InfoCard icon={<CheckCircle2 className="h-5 w-5 text-[#DB253D]" />} label="Checklist" value={pacaembu.prazo.checklistComissionamento} />
        </div>
      </SectionReveal>
    </div>
  );
}

// ============================================
// STEP 10: PROPOSTA COMERCIAL
// ============================================
function PropostaStep() {
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-24">
      <SectionReveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-[#DB253D]">Proposta Comercial</p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Custos da Obra</h2>
      </SectionReveal>

      {/* Big price */}
      <SectionReveal delay={0.15}>
        <div className="mt-12 relative overflow-hidden rounded-3xl border border-[#DB253D]/30 bg-gradient-to-br from-[#DB253D]/15 via-zinc-900/90 to-zinc-950 p-10 md:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#DB253D]/10 blur-[80px]" />
          <div className="relative text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-[#DB253D]">Custo Total</p>
            <motion.p className="mt-4 text-4xl font-extrabold text-white md:text-6xl" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
              {formatCurrency(pacaembu.custoTotal)}
            </motion.p>
          </div>
        </div>
      </SectionReveal>

      {/* Breakdown */}
      <motion.div className="mt-8 space-y-3" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
        {pacaembu.propostaComercial.map((item, i) => (
          <motion.div key={i} variants={fadeUp} className="flex items-center gap-4 rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#DB253D]/10 text-sm font-bold text-[#DB253D]">{item.id}</span>
            <div className="flex-1">
              <p className="text-sm font-medium text-zinc-200">{item.descricao}</p>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-zinc-800">
                <motion.div className="h-full rounded-full bg-gradient-to-r from-[#DB253D] to-[#921A26]" initial={{ width: 0 }} whileInView={{ width: `${item.percentual}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1 }} />
              </div>
            </div>
            <div className="text-right shrink-0">
              <p className="text-sm font-bold text-white">{formatCurrency(item.valor)}</p>
              <p className="text-xs text-zinc-500">{item.percentual}%</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// ============================================
// STEP 11: REENGENHARIA + ANÁLISE COMPARATIVA
// ============================================
function ReengenhariaStep() {
  const ac = pacaembu.analiseComparativa;
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-24">
      <SectionReveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-[#DB253D]">Reengenharias</p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Possíveis Reduções de Custo</h2>
      </SectionReveal>

      <motion.div className="mt-10 space-y-3" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
        {pacaembu.reengenharias.map((item, i) => (
          <motion.div key={i} variants={fadeUp} className="rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-5">
            <div className="flex items-center gap-3 mb-2">
              <TrendingDown className="h-5 w-5 text-[#DB253D]" />
              <h3 className="text-sm font-semibold text-white">{item.item}</h3>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">{item.descricao}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Análise Comparativa */}
      <SectionReveal delay={0.3}>
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-white mb-6">Análise Comparativa de Custo por UH</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-zinc-800/60 bg-zinc-900/40 p-5 text-center">
              <p className="text-xs text-zinc-500 uppercase tracking-wider">Custo/UH (Projeto)</p>
              <p className="mt-2 text-2xl font-bold text-white">{formatCurrency(ac.custoUHProjeto)}</p>
            </div>
            <div className="rounded-xl border border-zinc-800/60 bg-zinc-900/40 p-5 text-center">
              <p className="text-xs text-zinc-500 uppercase tracking-wider">Custo/UH (Reengenharia)</p>
              <p className="mt-2 text-2xl font-bold text-emerald-400">{formatCurrency(ac.custoUHReengenharia)}</p>
            </div>
            <div className="rounded-xl border border-[#DB253D]/20 bg-[#DB253D]/5 p-5 text-center">
              <p className="text-xs text-[#DB253D] uppercase tracking-wider">Redução por Apto</p>
              <p className="mt-2 text-2xl font-bold text-white">{formatCurrency(ac.reducaoPorApto)}</p>
            </div>
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5 text-center">
              <p className="text-xs text-emerald-400 uppercase tracking-wider">Redução Total</p>
              <p className="mt-2 text-2xl font-bold text-emerald-400">{formatCurrency(ac.reducaoTotal)}</p>
            </div>
          </div>

          <SectionReveal delay={0.4}>
            <div className="mt-6 overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-zinc-900/80 to-zinc-900/80 p-8 text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-emerald-400">Valor Final com Otimizações</p>
              <p className="mt-2 text-4xl font-extrabold text-white md:text-5xl">{formatCurrency(ac.valorFinal)}</p>
            </div>
          </SectionReveal>
        </div>
      </SectionReveal>
    </div>
  );
}

// ============================================
// STEP 12: OBRAS EXECUTADAS
// ============================================
function ObrasStep() {
  const [sel, setSel] = useState(0);
  const obra = pacaembu.obrasExecutadas[sel];
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
      <SectionReveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-[#DB253D]">Portfólio</p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Obras Executadas ou em Andamento</h2>
      </SectionReveal>

      <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
        {pacaembu.obrasExecutadas.map((o, i) => (
          <button key={i} onClick={() => setSel(i)} className={`shrink-0 rounded-lg px-4 py-2 text-xs font-medium transition-all ${sel === i ? "bg-[#DB253D] text-white shadow-lg shadow-[#DB253D]/20" : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"}`}>{o.nome}</button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={sel} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="mt-6">
          <div className={`grid gap-3 ${obra.imagens.length <= 2 ? "grid-cols-2" : "grid-cols-2 md:grid-cols-4"}`}>
            {obra.imagens.map((img, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-zinc-800/60">
                <Image src={img} alt={`${obra.nome} — foto ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <InfoCard icon={<MapPin className="h-5 w-5 text-[#DB253D]" />} label="Local" value={obra.local} />
            <InfoCard icon={<Building2 className="h-5 w-5 text-[#DB253D]" />} label="Área" value={obra.area} />
            <InfoCard icon={<Users className="h-5 w-5 text-[#DB253D]" />} label="Cliente" value={obra.cliente} />
            <InfoCard icon={<Clock className="h-5 w-5 text-[#DB253D]" />} label="Prazo" value={obra.prazo} />
          </div>
          <div className="mt-4">
            <InfoCard icon={<Wrench className="h-5 w-5 text-[#DB253D]" />} label="Escopo" value={obra.escopo} />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button onClick={() => setSel(Math.max(0, sel - 1))} disabled={sel === 0} className="rounded-full border border-zinc-800 p-2 text-zinc-400 transition-all hover:border-[#DB253D] hover:text-[#DB253D] disabled:opacity-30"><ChevronLeft className="h-5 w-5" /></button>
        <span className="text-sm text-zinc-500">{sel + 1} / {pacaembu.obrasExecutadas.length}</span>
        <button onClick={() => setSel(Math.min(pacaembu.obrasExecutadas.length - 1, sel + 1))} disabled={sel === pacaembu.obrasExecutadas.length - 1} className="rounded-full border border-zinc-800 p-2 text-zinc-400 transition-all hover:border-[#DB253D] hover:text-[#DB253D] disabled:opacity-30"><ChevronRight className="h-5 w-5" /></button>
      </div>
    </div>
  );
}

// ============================================
// STEP 13: CERTIFICAÇÕES + CONTATO
// ============================================
function CertificacoesStep() {
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-24">
      <SectionReveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-[#DB253D]">Certificações</p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Qualidade Certificada</h2>
      </SectionReveal>

      <SectionReveal delay={0.1}>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {pacaembu.imagensInstitucionais.map((img, i) => (
            <div key={i} className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-800/60">
              <Image src={img} alt={`Apresentação RAP ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal delay={0.2}>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {pacaembu.certificacoes.map((img, i) => (
            <div key={i} className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-zinc-800/60 bg-white">
              <Image src={img} alt={`Certificação ${i + 1}`} fill className="object-contain p-4" />
            </div>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal delay={0.35}>
        <div className="mt-12 text-center">
          <motion.div className="inline-flex items-center gap-3 rounded-2xl border border-[#DB253D]/30 bg-[#DB253D]/10 px-8 py-4" whileHover={{ scale: 1.02, borderColor: "rgba(219, 37, 61, 0.6)" }} transition={{ duration: 0.2 }}>
            <Logo variant="icon" color="white" className="h-8" />
            <div className="text-left">
              <p className="text-sm font-bold text-white">{brand.name}</p>
              <p className="text-xs text-zinc-400">{brand.tagline}</p>
            </div>
          </motion.div>
          <div className="mt-6 space-y-1 text-sm text-zinc-500">
            <p>{brand.phone}</p>
            <p>{brand.email}</p>
            <p>{brand.address}</p>
            <p>{brand.website}</p>
          </div>
        </div>
      </SectionReveal>
    </div>
  );
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function PacaembuPage() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(0);

  const goNext = useCallback(() => { if (step < TOTAL_STEPS - 1) { setDirection(1); setStep((s) => s + 1); } }, [step]);
  const goPrev = useCallback(() => { if (step > 0) { setDirection(-1); setStep((s) => s - 1); } }, [step]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); goNext(); }
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); goPrev(); }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [step]);

  const steps = [
    <CoverStep key="cover" />,
    <IntroducaoStep key="intro" />,
    <ImagensStep key="imagens" />,
    <PlantasStep key="plantas" />,
    <SituacaoAtualStep key="situacao" />,
    <EscopoStep key="escopo" />,
    <InclusoStep key="incluso" />,
    <OrganoStep key="organo" />,
    <CronogramaStep key="crono" />,
    <PropostaStep key="proposta" />,
    <ReengenhariaStep key="reeng" />,
    <ObrasStep key="obras" />,
    <CertificacoesStep key="cert" />,
  ];

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white selection:bg-[#DB253D]/30">
      <div className="pointer-events-none fixed inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div key={step} custom={direction} variants={pageVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="relative pb-20">
          {steps[step]}
        </motion.div>
      </AnimatePresence>

      <WizardNav currentStep={step} totalSteps={TOTAL_STEPS} onNext={goNext} onPrev={goPrev} stepLabels={STEP_LABELS} />
    </div>
  );
}
