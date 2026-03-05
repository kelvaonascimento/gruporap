"use client";

import { useState, useEffect, useCallback } from "react";
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
  Building2,
  Shield,
  HardHat,
  Wrench,
  Hammer,
  PaintBucket,
  Truck,
  CheckCircle2,
  FileText,
  ArrowRight,
} from "lucide-react";

import { fairmont, brand } from "@/lib/data";
import { Logo } from "@/components/logo";
import { WizardNav } from "@/components/wizard-nav";
import { SectionReveal } from "@/components/section-reveal";
import { AnimatedProgress } from "@/components/animated-progress";
import { AnimatedCounter } from "@/components/animated-counter";

// ============================================
// CONSTANTS
// ============================================
const TOTAL_STEPS = 6;
const STEP_LABELS = [
  "Capa",
  "Visao Geral",
  "Cronograma",
  "Escopo",
  "Equipe",
  "Proposta",
];

const SCOPE_ICONS: Record<string, React.ReactNode> = {
  "Servicos Preliminares": <FileText className="h-5 w-5" />,
  "Canteiro, Isolamentos e Protecoes": <Shield className="h-5 w-5" />,
  "Mobilizacao e Limpeza": <Truck className="h-5 w-5" />,
  "Demolicoes e Remocoes": <Hammer className="h-5 w-5" />,
  Civil: <Building2 className="h-5 w-5" />,
  "Estrutura Metalica e Painel Wall": <Wrench className="h-5 w-5" />,
  "Servicos Finais e Desmobilizacao": <PaintBucket className="h-5 w-5" />,
};

function getScopeIcon(category: string) {
  const normalized = category
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  return SCOPE_ICONS[normalized] || <Wrench className="h-5 w-5" />;
}

// ============================================
// ANIMATION VARIANTS
// ============================================
const pageVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.95,
  }),
};

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

// ============================================
// HELPER
// ============================================
function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

// ============================================
// STEP 1: COVER
// ============================================
function CoverStep() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DB253D]/8 blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
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
          {fairmont.title}
        </h1>
        <motion.p
          className="text-2xl font-light text-[#DB253D] md:text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {fairmont.subtitle}
        </motion.p>
      </motion.div>

      <motion.div
        className="mt-8 space-y-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <p className="text-lg font-medium text-zinc-300">{fairmont.type}</p>
        <p className="text-sm text-zinc-500">{fairmont.date}</p>
      </motion.div>

      <motion.div
        className="mt-16 flex flex-col items-center gap-2 text-zinc-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className="text-xs uppercase tracking-widest">Deslize para continuar</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </div>
  );
}

// ============================================
// STEP 2: OVERVIEW
// ============================================
function OverviewStep() {
  const metrics = [
    { label: "Prazo Total", value: fairmont.duration, suffix: " dias", icon: <Clock className="h-6 w-6" /> },
    { label: "Mobilizacao", value: fairmont.mobilizationDays, suffix: " dias", icon: <Truck className="h-6 w-6" /> },
    { label: "Equipe", value: fairmont.team.reduce((a, t) => a + t.people, 0), suffix: " profissionais", icon: <Users className="h-6 w-6" /> },
    { label: "Categorias", value: fairmont.scope.length, suffix: " escopos", icon: <Briefcase className="h-6 w-6" /> },
  ];

  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
      <SectionReveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-[#DB253D]">
          Visao Geral do Projeto
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
          {fairmont.project}
        </h2>
      </SectionReveal>

      {/* Info row */}
      <SectionReveal delay={0.15}>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <InfoCard icon={<MapPin className="h-5 w-5 text-[#DB253D]" />} label="Endereco" value={fairmont.address} />
          <InfoCard icon={<Briefcase className="h-5 w-5 text-[#DB253D]" />} label="Regime" value={fairmont.regime} />
          <InfoCard icon={<Calendar className="h-5 w-5 text-[#DB253D]" />} label="Periodo" value={`${fairmont.startDate} a ${fairmont.endDate}`} />
          <InfoCard icon={<DollarSign className="h-5 w-5 text-[#DB253D]" />} label="Pagamento" value={fairmont.paymentTerms} />
        </div>
      </SectionReveal>

      {/* Metrics */}
      <motion.div
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {metrics.map((m, i) => (
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
              <div className="mt-3 text-3xl font-bold text-white">
                <AnimatedCounter target={m.value} suffix={m.suffix} duration={1.5} />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Total price highlight */}
      <SectionReveal delay={0.3}>
        <div className="mt-12 overflow-hidden rounded-2xl border border-[#DB253D]/20 bg-gradient-to-br from-[#DB253D]/10 via-zinc-900/80 to-zinc-900/80 p-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-[#DB253D]">Valor Total da Proposta</p>
              <p className="mt-1 text-4xl font-bold text-white md:text-5xl">
                {formatCurrency(fairmont.totalPrice)}
              </p>
            </div>
            <div className="flex flex-col items-end gap-1 text-right text-sm text-zinc-400">
              <span>Validade: {fairmont.proposalValidity} dias</span>
              <span>Sinal de 20% + medicoes mensais</span>
            </div>
          </div>
        </div>
      </SectionReveal>
    </div>
  );
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
// STEP 3: CRONOGRAMA (TIMELINE / GANTT)
// ============================================
function CronogramaStep() {
  const maxDays = fairmont.duration;
  const phases = fairmont.schedule.slice(1); // skip total

  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
      <SectionReveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-[#DB253D]">
          Cronograma Executivo
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
          {fairmont.duration} Dias de Execucao
        </h2>
        <p className="mt-2 text-zinc-400">
          {fairmont.startDate} a {fairmont.endDate}
        </p>
      </SectionReveal>

      {/* Total progress */}
      <SectionReveal delay={0.1}>
        <div className="mt-8">
          <AnimatedProgress value={100} label={`Prazo Total: ${maxDays} dias`} height="h-4" color="bg-gradient-to-r from-[#DB253D] to-[#921A26]" />
        </div>
      </SectionReveal>

      {/* Gantt chart */}
      <motion.div
        className="mt-10 space-y-3"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {phases.map((phase, i) => {
          const widthPercent = (phase.days / maxDays) * 100;
          // Calculate offset based on cumulative days
          const offsetDays = getPhaseOffset(phase.phase);
          const offsetPercent = (offsetDays / maxDays) * 100;

          return (
            <motion.div key={i} variants={fadeUp} className="group">
              <div className="flex items-center gap-4">
                {/* Label */}
                <div className="w-56 shrink-0 text-right">
                  <p className={`text-sm font-medium ${phase.highlight ? "text-[#DB253D]" : "text-zinc-300"}`}>
                    {phase.phase}
                  </p>
                  <p className="text-xs text-zinc-600">{phase.days}d | {phase.start} - {phase.end}</p>
                </div>

                {/* Bar container */}
                <div className="relative flex-1 h-10 rounded-lg bg-zinc-900/60 border border-zinc-800/40 overflow-hidden">
                  <motion.div
                    className={`absolute top-1 bottom-1 rounded-md flex items-center px-3 ${
                      phase.highlight
                        ? "bg-gradient-to-r from-[#DB253D] to-[#921A26] shadow-lg shadow-[#DB253D]/20"
                        : "bg-zinc-700/80"
                    }`}
                    style={{ left: `${offsetPercent}%` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${widthPercent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className={`text-xs font-semibold whitespace-nowrap ${
                      widthPercent > 15 ? "block" : "hidden"
                    } ${phase.highlight ? "text-white" : "text-zinc-300"}`}>
                      {phase.days} dias
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Legend */}
      <SectionReveal delay={0.4}>
        <div className="mt-8 flex items-center gap-6 justify-center">
          <div className="flex items-center gap-2">
            <div className="h-3 w-8 rounded bg-gradient-to-r from-[#DB253D] to-[#921A26]" />
            <span className="text-xs text-zinc-400">Fases Principais</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-8 rounded bg-zinc-700" />
            <span className="text-xs text-zinc-400">Servicos de Apoio</span>
          </div>
        </div>
      </SectionReveal>
    </div>
  );
}

function getPhaseOffset(phase: string): number {
  const offsets: Record<string, number> = {
    "Mobilizacao": 0,
    "Isolamento": 5,
    "Protecoes": 5,
    "Fase 1": 15,
    "Fase 2": 60,
    "Pinturas Gerais": 75,
    "Desmontagem de Andaime": 80,
    "Desmobilizacao e Limpeza Final": 85,
  };
  const normalized = phase.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return offsets[normalized] ?? 0;
}

// ============================================
// STEP 4: ESCOPO DE OBRA
// ============================================
function EscopoStep() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-24">
      <SectionReveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-[#DB253D]">
          Escopo de Obra
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
          Detalhamento dos Servicos
        </h2>
        <p className="mt-2 text-zinc-400">
          {fairmont.scope.reduce((a, s) => a + s.items.length, 0)} itens em {fairmont.scope.length} categorias
        </p>
      </SectionReveal>

      <motion.div
        className="mt-10 space-y-3"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {fairmont.scope.map((cat, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="overflow-hidden rounded-xl border border-zinc-800/60 bg-zinc-900/30 backdrop-blur"
          >
            {/* Accordion header */}
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-zinc-800/30"
            >
              <div className="flex items-center gap-4">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                  openIndex === i ? "bg-[#DB253D] text-white" : "bg-zinc-800 text-zinc-400"
                } transition-colors duration-300`}>
                  {getScopeIcon(cat.category)}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">{cat.category}</h3>
                  <p className="text-xs text-zinc-500">{cat.items.length} itens</p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="h-5 w-5 text-zinc-500" />
              </motion.div>
            </button>

            {/* Accordion content */}
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-zinc-800/40 px-6 py-4">
                    <motion.ul
                      className="space-y-2"
                      variants={stagger}
                      initial="hidden"
                      animate="show"
                    >
                      {cat.items.map((item, j) => (
                        <motion.li
                          key={j}
                          variants={fadeUp}
                          className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-zinc-800/30"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#DB253D]" />
                          <span className="text-sm text-zinc-300">{item}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
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
// STEP 5: EQUIPE
// ============================================
function EquipeStep() {
  const totalHours = fairmont.team.reduce((a, t) => a + t.hours, 0);
  const totalPeople = fairmont.team.reduce((a, t) => a + t.people, 0);

  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
      <SectionReveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-[#DB253D]">
          Equipe do Projeto
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
          Estrutura Organizacional
        </h2>
      </SectionReveal>

      {/* Org chart visual */}
      <SectionReveal delay={0.1}>
        <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-6 md:p-8">
          {/* Top: Gestor */}
          <div className="flex justify-center">
            <OrgNode label={fairmont.orgChart.top} highlight />
          </div>

          {/* Connector */}
          <div className="flex justify-center py-2">
            <div className="h-8 w-px bg-gradient-to-b from-[#DB253D] to-zinc-700" />
          </div>

          {/* Planning */}
          <div className="flex justify-center mb-2">
            <OrgNode label={fairmont.orgChart.topLeft} small />
          </div>

          <div className="flex justify-center py-2">
            <div className="h-6 w-px bg-zinc-700" />
          </div>

          {/* Two branches */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Left branch */}
            <div className="space-y-2">
              <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Gestao e Suporte
              </p>
              {fairmont.orgChart.left.map((role, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <OrgNode label={role} small />
                </motion.div>
              ))}
            </div>

            {/* Right branch */}
            <div className="space-y-2">
              <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Execucao em Campo
              </p>
              {fairmont.orgChart.right.map((role, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <OrgNode label={role} small />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Teams row */}
          <div className="mt-8">
            <div className="flex justify-center py-2">
              <div className="h-6 w-px bg-zinc-700" />
            </div>
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Equipes de Execucao
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {fairmont.orgChart.teams.map((team, i) => (
                <motion.span
                  key={i}
                  className="rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1.5 text-xs text-zinc-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  {team}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* Team cards */}
      <motion.div
        className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {fairmont.team.map((member, i) => (
          <motion.div
            key={i}
            variants={fadeScale}
            className="group relative overflow-hidden rounded-xl border border-zinc-800/60 bg-zinc-900/40 p-5 backdrop-blur transition-all duration-300 hover:border-[#DB253D]/30"
          >
            <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[#DB253D]/5 transition-all group-hover:scale-[2] group-hover:bg-[#DB253D]/8" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#DB253D]/10 text-[#DB253D]">
                  <HardHat className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{member.role}</h4>
                  <p className="text-xs text-zinc-500">
                    {member.people} {member.people > 1 ? "profissionais" : "profissional"}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-end justify-between">
                <div>
                  <p className="text-xs text-zinc-500">Horas Totais</p>
                  <p className="text-2xl font-bold text-white">
                    <AnimatedCounter target={member.hours} duration={1} />
                  </p>
                </div>
                <p className="text-xs text-zinc-600">{Math.round(member.hours / member.people)}h/pessoa</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Totals */}
      <SectionReveal delay={0.3}>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-[#DB253D]/20 bg-[#DB253D]/5 p-6 text-center">
            <p className="text-sm text-zinc-400">Total de Profissionais</p>
            <p className="mt-1 text-4xl font-bold text-white">
              <AnimatedCounter target={totalPeople} duration={1} />
            </p>
          </div>
          <div className="rounded-xl border border-[#DB253D]/20 bg-[#DB253D]/5 p-6 text-center">
            <p className="text-sm text-zinc-400">Total de Horas</p>
            <p className="mt-1 text-4xl font-bold text-white">
              <AnimatedCounter target={totalHours} suffix="h" duration={1.5} />
            </p>
          </div>
        </div>
      </SectionReveal>
    </div>
  );
}

function OrgNode({ label, highlight, small }: { label: string; highlight?: boolean; small?: boolean }) {
  return (
    <div
      className={`rounded-lg border text-center transition-all ${
        highlight
          ? "border-[#DB253D]/40 bg-[#DB253D]/10 px-6 py-3 text-white shadow-lg shadow-[#DB253D]/10"
          : "border-zinc-800/60 bg-zinc-900/60 px-4 py-2 text-zinc-300"
      } ${small ? "text-xs" : "text-sm font-semibold"}`}
    >
      {label}
    </div>
  );
}

// ============================================
// STEP 6: PROPOSTA COMERCIAL
// ============================================
function PropostaStep() {
  const sinal = fairmont.totalPrice * 0.2;
  const saldo = fairmont.totalPrice * 0.8;

  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-24">
      <SectionReveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-[#DB253D]">
          Proposta Comercial
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
          Investimento
        </h2>
      </SectionReveal>

      {/* Big price */}
      <SectionReveal delay={0.15}>
        <div className="mt-12 relative overflow-hidden rounded-3xl border border-[#DB253D]/30 bg-gradient-to-br from-[#DB253D]/15 via-zinc-900/90 to-zinc-950 p-10 md:p-14">
          {/* Background glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#DB253D]/10 blur-[80px]" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-[#921A26]/10 blur-[60px]" />

          <div className="relative text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-[#DB253D]">
              Valor Total
            </p>
            <motion.p
              className="mt-4 text-5xl font-extrabold text-white md:text-7xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {formatCurrency(fairmont.totalPrice)}
            </motion.p>
            <p className="mt-3 text-sm text-zinc-400">{fairmont.regime}</p>
          </div>
        </div>
      </SectionReveal>

      {/* Payment breakdown */}
      <motion.div
        className="mt-10 grid gap-6 md:grid-cols-2"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div
          variants={fadeUp}
          className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-6"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#DB253D]/10 text-[#DB253D]">
              <DollarSign className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">Sinal (20%)</p>
              <p className="text-2xl font-bold text-white">{formatCurrency(sinal)}</p>
            </div>
          </div>
          <div className="mt-4">
            <AnimatedProgress value={20} label="Sinal na Assinatura" height="h-2" />
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-6"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 text-zinc-400">
              <Calendar className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">Saldo (80%)</p>
              <p className="text-2xl font-bold text-white">{formatCurrency(saldo)}</p>
            </div>
          </div>
          <div className="mt-4">
            <AnimatedProgress value={80} label="Medicoes Mensais" height="h-2" color="bg-zinc-600" />
          </div>
        </motion.div>
      </motion.div>

      {/* Terms */}
      <SectionReveal delay={0.3}>
        <div className="mt-10 rounded-2xl border border-zinc-800/60 bg-zinc-900/20 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
            Condicoes da Proposta
          </h3>
          <ul className="mt-4 space-y-3">
            {[
              `Validade da proposta: ${fairmont.proposalValidity} dias`,
              `Prazo de execucao: ${fairmont.duration} dias corridos`,
              `Mobilizacao: ${fairmont.mobilizationDays} dias`,
              `Condicoes de pagamento: ${fairmont.paymentTerms}`,
              `Inicio previsto: ${fairmont.startDate}`,
              `Conclusao prevista: ${fairmont.endDate}`,
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

      {/* CTA */}
      <SectionReveal delay={0.45}>
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
          <p className="mt-6 text-sm text-zinc-500">
            {brand.phone} | {brand.email}
          </p>
        </div>
      </SectionReveal>
    </div>
  );
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function FairmontPage() {
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

  // Keyboard navigation
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

  // Scroll to top on step change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  const steps = [
    <CoverStep key="cover" />,
    <OverviewStep key="overview" />,
    <CronogramaStep key="cronograma" />,
    <EscopoStep key="escopo" />,
    <EquipeStep key="equipe" />,
    <PropostaStep key="proposta" />,
  ];

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white selection:bg-[#DB253D]/30">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Step content */}
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

      {/* Navigation */}
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
