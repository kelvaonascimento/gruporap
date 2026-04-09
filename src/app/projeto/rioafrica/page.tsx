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
  ClipboardList,
} from "lucide-react";

import { rioafrica, brand } from "@/lib/data";
import { Logo } from "@/components/logo";
import { WizardNav } from "@/components/wizard-nav";
import { SectionReveal } from "@/components/section-reveal";
import { AnimatedCounter } from "@/components/animated-counter";

// ── Constants ──────────────────────────────────────────────
const TOTAL_STEPS = 12;
const BRAND_RED = "#DB253D";
const BRAND_DARK = "#921A26";

const STEP_LABELS = [
  "Capa",
  "O Projeto",
  "Imagens",
  "Plantas",
  "Pré Construção",
  "Plano de Ataque",
  "Curva A",
  "Custo Projetos",
  "Proposta Obra",
  "Equipe Obra",
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

// ── Helpers ───────────────────────────────────────────────
function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// ── InfoCard ──────────────────────────────────────────────
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
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/rioafrica/page1_img1.jpeg"
          alt="Centro Cultural Rio África"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/80 to-zinc-950" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <Logo variant="full" color="white" className="h-16 md:h-20" />
        </motion.div>

        <motion.div
          className="mt-2 h-px w-24 bg-gradient-to-r from-transparent via-[#DB253D] to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />

        <motion.div
          className="mt-10 space-y-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            Centro Cultural
          </h1>
          <motion.p
            className="text-2xl font-light text-[#DB253D] md:text-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Rio África
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-8 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <p className="text-lg font-medium text-zinc-300">{rioafrica.type}</p>
          <p className="text-base text-zinc-400">{rioafrica.subtitle}</p>
          <p className="text-sm text-zinc-500">{rioafrica.date}</p>
        </motion.div>

        {/* Selos de certificação */}
        <motion.div
          className="mt-10 flex items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <div className="flex items-center gap-3 rounded-xl border border-zinc-700/40 bg-zinc-900/50 px-4 py-3 backdrop-blur-sm">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
              <Image
                src="/images/rioafrica/page24_img1.jpeg"
                alt="SiAC PBQP-H Nível A"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-bold text-white">SiAC PBQP-H</p>
              <p className="text-[10px] text-zinc-400">Nível A</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-zinc-700/40 bg-zinc-900/50 px-4 py-3 backdrop-blur-sm">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
              <Image
                src="/images/rioafrica/page24_img2.jpeg"
                alt="ISO 9001"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-bold text-white">ISO 9001</p>
              <p className="text-[10px] text-zinc-400">Gestão da Qualidade</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col items-center gap-2 text-zinc-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-widest">Deslize para continuar</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

// ============================================
// STEP 2: O PROJETO
// ============================================
function ProjetoStep() {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
      <SectionReveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-[#DB253D]">O Projeto</p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
          Centro Cultural Rio África
        </h2>
      </SectionReveal>

      {/* Hero image */}
      <SectionReveal delay={0.15}>
        <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-800/60">
          <div className="relative aspect-video w-full">
            <Image
              src="/images/rioafrica/page3_img1.jpeg"
              alt="Centro Cultural Rio África — Vista principal"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </SectionReveal>

      {/* Metrics */}
      <motion.div
        className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {[
          { label: "Custo Total", value: "R$ 70 milhões", icon: <DollarSign className="h-6 w-6" /> },
          { label: "Prazo de Execução", value: "19 meses", icon: <Clock className="h-6 w-6" /> },
          { label: "Mobilização", value: "30 dias", icon: <Calendar className="h-6 w-6" /> },
          { label: "Plantas Técnicas", value: "5 pavimentos", icon: <Layers className="h-6 w-6" /> },
        ].map((m, i) => (
          <motion.div
            key={i}
            variants={fadeScale}
            className="group relative overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-900/50 p-6 backdrop-blur transition-all duration-300 hover:border-[#DB253D]/30 hover:shadow-lg hover:shadow-[#DB253D]/5"
          >
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#DB253D]/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-[#DB253D]/10" />
            <div className="relative">
              <div className="flex items-center gap-3 text-zinc-400">
                {m.icon}
                <span className="text-sm">{m.label}</span>
              </div>
              <div className="mt-3 text-2xl font-bold text-white">{m.value}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// ============================================
// STEP 3: IMAGENS DO PROJETO
// ============================================
function ImagensStep() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
      <SectionReveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-[#DB253D]">
          Imagens do Projeto
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
          Perspectivas e Renders
        </h2>
      </SectionReveal>

      {/* Main image */}
      <SectionReveal delay={0.15}>
        <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-800/60">
          <div className="relative aspect-video w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={rioafrica.imagensProjeto[selected].src}
                  alt={rioafrica.imagensProjeto[selected].caption}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="bg-zinc-900/80 px-6 py-3">
            <p className="text-sm text-zinc-300">{rioafrica.imagensProjeto[selected].caption}</p>
          </div>
        </div>
      </SectionReveal>

      {/* Thumbnails */}
      <div className="mt-6 grid grid-cols-3 gap-3 md:grid-cols-6">
        {rioafrica.imagensProjeto.map((img, i) => (
          <motion.button
            key={i}
            onClick={() => setSelected(i)}
            className={`relative aspect-video overflow-hidden rounded-lg border-2 transition-all ${
              selected === i ? "border-[#DB253D] shadow-lg shadow-[#DB253D]/20" : "border-zinc-800 opacity-60 hover:opacity-100"
            }`}
            whileHover={{ scale: 1.05 }}
          >
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
  const [selectedPlanta, setSelectedPlanta] = useState(0);

  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
      <SectionReveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-[#DB253D]">
          Plantas Técnicas
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
          Pavimentos e Cortes
        </h2>
      </SectionReveal>

      {/* Tab buttons */}
      <div className="mt-8 flex flex-wrap gap-2">
        {rioafrica.plantas.map((p, i) => (
          <button
            key={i}
            onClick={() => setSelectedPlanta(i)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
              selectedPlanta === i
                ? "bg-[#DB253D] text-white shadow-lg shadow-[#DB253D]/20"
                : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white"
            }`}
          >
            {p.titulo}
          </button>
        ))}
      </div>

      {/* Plant image */}
      <SectionReveal delay={0.1}>
        <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPlanta}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="mb-4 text-center text-lg font-semibold text-white">
                {rioafrica.plantas[selectedPlanta].titulo}
              </h3>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                <Image
                  src={rioafrica.plantas[selectedPlanta].src}
                  alt={rioafrica.plantas[selectedPlanta].titulo}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </SectionReveal>

      {/* Plant list */}
      <div className="mt-6 grid gap-3 md:grid-cols-5">
        {rioafrica.plantas.map((p, i) => (
          <motion.button
            key={i}
            onClick={() => setSelectedPlanta(i)}
            className={`rounded-xl border p-3 text-left transition-all ${
              selectedPlanta === i
                ? "border-[#DB253D]/40 bg-[#DB253D]/10"
                : "border-zinc-800/60 bg-zinc-900/30 hover:border-zinc-700"
            }`}
            whileHover={{ scale: 1.02 }}
          >
            <Layers className={`h-5 w-5 ${selectedPlanta === i ? "text-[#DB253D]" : "text-zinc-500"}`} />
            <p className={`mt-2 text-xs font-medium ${selectedPlanta === i ? "text-white" : "text-zinc-400"}`}>
              {p.titulo}
            </p>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ============================================
// STEP 5: PRÉ CONSTRUÇÃO (Introdução)
// ============================================
function PreConstrucaoStep() {
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-24">
      <SectionReveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-[#DB253D]">
          Pré Construção
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Introdução</h2>
      </SectionReveal>

      <SectionReveal delay={0.15}>
        <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-800/60">
          <div className="relative aspect-video w-full">
            <Image
              src="/images/rioafrica/page15_img1.jpeg"
              alt="Pré Construção"
              fill
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
            <div className="absolute inset-0 flex items-end p-8 md:p-12">
              <p className="max-w-3xl text-lg leading-relaxed text-zinc-200 md:text-xl">
                {rioafrica.preConstrucao.introducao}
              </p>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* Key pillars */}
      <motion.div
        className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {[
          { icon: <TrendingDown className="h-6 w-6" />, label: "Redução de Custos", desc: "Otimização e racionalização de recursos" },
          { icon: <ClipboardList className="h-6 w-6" />, label: "Análise Crítica", desc: "Compatibilização técnica dos projetos" },
          { icon: <Wrench className="h-6 w-6" />, label: "Soluções Construtivas", desc: "Proposição de ajustes eficientes" },
          { icon: <BarChart3 className="h-6 w-6" />, label: "Mitigação de Riscos", desc: "Bases sólidas para execução" },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeScale}
            className="group relative overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-900/50 p-6 backdrop-blur transition-all hover:border-[#DB253D]/30"
          >
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#DB253D]/5 transition-all group-hover:scale-150 group-hover:bg-[#DB253D]/10" />
            <div className="relative">
              <div className="text-[#DB253D]">{item.icon}</div>
              <h4 className="mt-3 text-sm font-semibold text-white">{item.label}</h4>
              <p className="mt-1 text-xs text-zinc-500">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// ============================================
// STEP 6: PLANO DE ATAQUE
// ============================================
function PlanoAtaqueStep() {
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-24">
      <SectionReveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-[#DB253D]">
          Pré Construção
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Plano de Ataque</h2>
        <p className="mt-2 text-zinc-400">
          {rioafrica.preConstrucao.planoAtaque.length} etapas estratégicas
        </p>
      </SectionReveal>

      {/* Steps timeline */}
      <motion.div
        className="mt-10 space-y-4"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {rioafrica.preConstrucao.planoAtaque.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="group relative overflow-hidden rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-6 backdrop-blur transition-all hover:border-[#DB253D]/30"
          >
            <div className="flex items-start gap-5">
              {/* Step number */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#DB253D] to-[#921A26] text-lg font-bold text-white shadow-lg shadow-[#DB253D]/20">
                {i + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-white">{item.etapa}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.descricao}</p>
              </div>
            </div>
            {/* Connector line */}
            {i < rioafrica.preConstrucao.planoAtaque.length - 1 && (
              <div className="absolute bottom-0 left-[2.25rem] h-4 w-px translate-y-full bg-gradient-to-b from-[#DB253D]/40 to-transparent" />
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// ============================================
// STEP 7: CURVA A
// ============================================
function CurvaAStep() {
  const totalPercent = rioafrica.curvaA.reduce((a, c) => a + c.percentual, 0);

  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-24">
      <SectionReveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-[#DB253D]">
          Pré Construção
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Curva A</h2>
        <p className="mt-2 text-zinc-400">
          Itens de maior impacto financeiro — ≈ {totalPercent}% do orçamento
        </p>
      </SectionReveal>

      <motion.div
        className="mt-10 space-y-6"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {rioafrica.curvaA.map((cat, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-6 backdrop-blur"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">{cat.categoria}</h3>
              <span className="rounded-full bg-[#DB253D]/10 px-4 py-1.5 text-sm font-bold text-[#DB253D]">
                ≈ {cat.percentual}%
              </span>
            </div>

            {/* Progress bar */}
            <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-zinc-800">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#DB253D] to-[#921A26]"
                initial={{ width: 0 }}
                whileInView={{ width: `${(cat.percentual / 25) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            {/* Items */}
            <ul className="mt-4 space-y-2">
              {cat.itens.map((item, j) => (
                <li key={j} className="flex items-center gap-3 text-sm text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#DB253D]" />
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
// STEP 8: CUSTO DOS PROJETOS
// ============================================
function CustoProjetosStep() {
  const totalCusto = rioafrica.custoProjetos.reduce((a, c) => a + c.valor, 0);

  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-24">
      <SectionReveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-[#DB253D]">
          Pré Construção
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
          Custo para Elaboração dos Projetos
        </h2>
      </SectionReveal>

      {/* Total highlight */}
      <SectionReveal delay={0.1}>
        <div className="mt-8 overflow-hidden rounded-2xl border border-[#DB253D]/20 bg-gradient-to-br from-[#DB253D]/10 via-zinc-900/80 to-zinc-900/80 p-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-[#DB253D]">
                Investimento Total em Projetos
              </p>
              <p className="mt-1 text-4xl font-bold text-white md:text-5xl">
                {formatCurrency(totalCusto)}
              </p>
            </div>
            <p className="text-sm text-zinc-400 italic">{rioafrica.custoProjetosNota}</p>
          </div>
        </div>
      </SectionReveal>

      {/* Project costs table */}
      <motion.div
        className="mt-8 space-y-2"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {rioafrica.custoProjetos.map((item, i) => {
          const percent = (item.valor / totalCusto) * 100;
          return (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group flex items-center gap-4 rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-4 transition-all hover:border-zinc-700"
            >
              <div className="flex-1">
                <p className="text-sm font-medium text-zinc-200">{item.disciplina}</p>
              </div>
              <div className="hidden w-40 md:block">
                <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#DB253D] to-[#921A26]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.05 }}
                  />
                </div>
              </div>
              <p className="w-28 text-right text-sm font-semibold text-white">
                {formatCurrency(item.valor)}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Org Pré Construção */}
      <SectionReveal delay={0.3}>
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-white">Organograma Pré Construção</h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {rioafrica.orgPreConstrucao.map((person, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 rounded-xl border border-zinc-800/60 bg-zinc-900/40 p-4"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#DB253D]/10 text-[#DB253D]">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500">{person.role}</p>
                  <p className="text-sm font-medium text-white">{person.nome || "A definir"}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </div>
  );
}

// ============================================
// STEP 9: PROPOSTA COMERCIAL OBRA
// ============================================
function PropostaObraStep() {
  const c = rioafrica.custoObra;

  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-24">
      <SectionReveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-[#DB253D]">
          Proposta Comercial
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Custos da Obra META</h2>
      </SectionReveal>

      {/* Big price */}
      <SectionReveal delay={0.15}>
        <div className="mt-12 relative overflow-hidden rounded-3xl border border-[#DB253D]/30 bg-gradient-to-br from-[#DB253D]/15 via-zinc-900/90 to-zinc-950 p-10 md:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#DB253D]/10 blur-[80px]" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-[#921A26]/10 blur-[60px]" />
          <div className="relative text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-[#DB253D]">Custo Total</p>
            <motion.p
              className="mt-4 text-5xl font-extrabold text-white md:text-7xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {formatCurrency(c.total)}
            </motion.p>
            <p className="mt-3 text-sm text-zinc-400">{c.nota}</p>
          </div>
        </div>
      </SectionReveal>

      {/* Cost breakdown */}
      <motion.div
        className="mt-10 grid gap-4 sm:grid-cols-2"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {[
          { label: "Despesas Indiretas RAP (DI)", value: c.despesasIndiretas, icon: <Briefcase className="h-6 w-6" /> },
          { label: "Contratação PMG", value: c.contratacaoPMG, icon: <Building2 className="h-6 w-6" /> },
          { label: `Taxa de Administração (${c.taxaAdministracaoPercent}%)`, value: c.taxaAdministracao, icon: <BarChart3 className="h-6 w-6" /> },
          { label: `Imposto (${c.impostoPercent}%)`, value: c.imposto, icon: <FileText className="h-6 w-6" /> },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-6"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#DB253D]/10 text-[#DB253D]">
                {item.icon}
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">{item.label}</p>
                <p className="text-2xl font-bold text-white">{formatCurrency(item.value)}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Prazos */}
      <SectionReveal delay={0.3}>
        <div className="mt-10 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
            Prazo de Execução
          </h3>
          <ul className="mt-4 space-y-3">
            {[
              `Mobilização: ${rioafrica.prazo.mobilizacao} dias`,
              `Prazo de Execução: ${rioafrica.prazo.execucao}`,
              `Checklist + Comissionamento: ${rioafrica.prazo.checklistComissionamento}`,
            ].map((term, i) => (
              <motion.li
                key={i}
                className="flex items-center gap-3 text-sm text-zinc-300"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#DB253D]" />
                {term}
              </motion.li>
            ))}
          </ul>
        </div>
      </SectionReveal>
    </div>
  );
}

// ============================================
// STEP 10: EQUIPE DA OBRA (Organograma)
// ============================================
function EquipeObraStep() {
  const org = rioafrica.orgObra;

  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
      <SectionReveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-[#DB253D]">
          Organograma
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
          Equipe para Execução da Obra
        </h2>
      </SectionReveal>

      {/* 3 columns */}
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {/* Administrativo */}
        <SectionReveal delay={0.1}>
          <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#DB253D] text-white">
                <Briefcase className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Área Administrativa</h3>
                <p className="text-xs text-zinc-500">Corporativo / Escritório</p>
              </div>
            </div>
            <div className="space-y-3">
              {org.administrativo.map((p, i) => (
                <motion.div
                  key={i}
                  className="rounded-lg border border-zinc-800/40 bg-zinc-900/60 p-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <p className="text-xs text-zinc-500">{p.area}</p>
                  <p className="text-sm font-medium text-white">{p.nome}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Técnico */}
        <SectionReveal delay={0.2}>
          <div className="rounded-2xl border border-[#DB253D]/20 bg-[#DB253D]/5 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#DB253D] text-white">
                <HardHat className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Área Técnica</h3>
                <p className="text-xs text-zinc-500">Engenharia</p>
              </div>
            </div>
            <div className="space-y-3">
              {org.tecnico.map((p, i) => (
                <motion.div
                  key={i}
                  className="rounded-lg border border-[#DB253D]/10 bg-zinc-900/60 p-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <p className="text-xs text-[#DB253D]">{p.role}</p>
                  <p className="text-sm font-medium text-white">{p.nome}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Operação */}
        <SectionReveal delay={0.3}>
          <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#DB253D] text-white">
                <Hammer className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Operação / Produção</h3>
                <p className="text-xs text-zinc-500">Execução em Campo</p>
              </div>
            </div>
            <div className="space-y-3">
              {org.operacao.map((p, i) => (
                <motion.div
                  key={i}
                  className="rounded-lg border border-zinc-800/40 bg-zinc-900/60 p-3"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <p className="text-xs text-zinc-500">{p.role}</p>
                  <p className={`text-sm font-medium ${p.nome === "A contratar" ? "text-zinc-500 italic" : "text-white"}`}>
                    {p.nome}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}

// ============================================
// STEP 11: OBRAS EXECUTADAS
// ============================================
function ObrasStep() {
  const [selectedObra, setSelectedObra] = useState(0);
  const obra = rioafrica.obrasExecutadas[selectedObra];

  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
      <SectionReveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-[#DB253D]">
          Portfólio
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
          Obras Executadas nos Últimos 12 Meses
        </h2>
      </SectionReveal>

      {/* Obra selector */}
      <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
        {rioafrica.obrasExecutadas.map((o, i) => (
          <button
            key={i}
            onClick={() => setSelectedObra(i)}
            className={`shrink-0 rounded-lg px-4 py-2 text-xs font-medium transition-all ${
              selectedObra === i
                ? "bg-[#DB253D] text-white shadow-lg shadow-[#DB253D]/20"
                : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
            }`}
          >
            {o.nome}
          </button>
        ))}
      </div>

      {/* Selected obra detail */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedObra}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="mt-6"
        >
          {/* Images */}
          <div className={`grid gap-3 ${obra.imagens.length <= 2 ? "grid-cols-2" : "grid-cols-2 md:grid-cols-4"}`}>
            {obra.imagens.map((img, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-zinc-800/60">
                <Image src={img} alt={`${obra.nome} — foto ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>

          {/* Info */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <InfoCard icon={<MapPin className="h-5 w-5 text-[#DB253D]" />} label="Local" value={obra.local} />
            <InfoCard icon={<DollarSign className="h-5 w-5 text-[#DB253D]" />} label="Valor" value={formatCurrency(obra.valor)} />
            <InfoCard icon={<Building2 className="h-5 w-5 text-[#DB253D]" />} label="Área" value={obra.area} />
            <InfoCard icon={<Clock className="h-5 w-5 text-[#DB253D]" />} label="Prazo" value={obra.prazo} />
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <InfoCard icon={<Users className="h-5 w-5 text-[#DB253D]" />} label="Cliente" value={obra.cliente} />
            <InfoCard icon={<Wrench className="h-5 w-5 text-[#DB253D]" />} label="Escopo" value={obra.escopo} />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={() => setSelectedObra(Math.max(0, selectedObra - 1))}
          disabled={selectedObra === 0}
          className="rounded-full border border-zinc-800 p-2 text-zinc-400 transition-all hover:border-[#DB253D] hover:text-[#DB253D] disabled:opacity-30"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <span className="text-sm text-zinc-500">
          {selectedObra + 1} / {rioafrica.obrasExecutadas.length}
        </span>
        <button
          onClick={() => setSelectedObra(Math.min(rioafrica.obrasExecutadas.length - 1, selectedObra + 1))}
          disabled={selectedObra === rioafrica.obrasExecutadas.length - 1}
          className="rounded-full border border-zinc-800 p-2 text-zinc-400 transition-all hover:border-[#DB253D] hover:text-[#DB253D] disabled:opacity-30"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

// ============================================
// STEP 12: CERTIFICAÇÕES + CONTATO
// ============================================
function CertificacoesStep() {
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-24">
      <SectionReveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-[#DB253D]">
          Certificações
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
          Qualidade Certificada
        </h2>
      </SectionReveal>

      {/* Apresentação RAP images */}
      <SectionReveal delay={0.1}>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {rioafrica.imagensInstitucionais.map((img, i) => (
            <div key={i} className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-800/60">
              <Image src={img} alt={`Apresentação RAP ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </SectionReveal>

      {/* Certificações */}
      <SectionReveal delay={0.2}>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {rioafrica.certificacoes.map((img, i) => (
            <div key={i} className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-zinc-800/60 bg-white">
              <Image src={img} alt={`Certificação ${i + 1}`} fill className="object-contain p-4" />
            </div>
          ))}
        </div>
      </SectionReveal>

      {/* CTA */}
      <SectionReveal delay={0.35}>
        <div className="mt-12 text-center">
          <motion.div
            className="inline-flex items-center gap-3 rounded-2xl border border-[#DB253D]/30 bg-[#DB253D]/10 px-8 py-4"
            whileHover={{ scale: 1.02, borderColor: "rgba(219, 37, 61, 0.6)" }}
            transition={{ duration: 0.2 }}
          >
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
export default function RioAfricaPage() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(0);

  const goNext = useCallback(() => {
    if (step < TOTAL_STEPS - 1) {
      setDirection(1);
      setStep((s) => s + 1);
    }
  }, [step]);

  const goPrev = useCallback(() => {
    if (step > 0) {
      setDirection(-1);
      setStep((s) => s - 1);
    }
  }, [step]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goPrev();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  const steps = [
    <CoverStep key="cover" />,
    <ProjetoStep key="projeto" />,
    <ImagensStep key="imagens" />,
    <PlantasStep key="plantas" />,
    <PreConstrucaoStep key="pre-construcao" />,
    <PlanoAtaqueStep key="plano-ataque" />,
    <CurvaAStep key="curva-a" />,
    <CustoProjetosStep key="custo-projetos" />,
    <PropostaObraStep key="proposta-obra" />,
    <EquipeObraStep key="equipe-obra" />,
    <ObrasStep key="obras" />,
    <CertificacoesStep key="certificacoes" />,
  ];

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white selection:bg-[#DB253D]/30">
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={step}
          custom={direction}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative pb-20"
        >
          {steps[step]}
        </motion.div>
      </AnimatePresence>

      <WizardNav
        currentStep={step}
        totalSteps={TOTAL_STEPS}
        onNext={goNext}
        onPrev={goPrev}
        stepLabels={STEP_LABELS}
      />
    </div>
  );
}
