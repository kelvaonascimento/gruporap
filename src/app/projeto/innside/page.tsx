"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  Building2,
  MapPin,
  User,
  Calendar,
  Layers,
  AlertTriangle,
  TrendingUp,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Camera,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { innside, brand } from "@/lib/data";
import { Logo } from "@/components/logo";
import { WizardNav } from "@/components/wizard-nav";
import { SectionReveal } from "@/components/section-reveal";
import { AnimatedProgress } from "@/components/animated-progress";
import { AnimatedCounter } from "@/components/animated-counter";
import { cn } from "@/lib/utils";

const TOTAL_STEPS = 9;

const STEP_LABELS = [
  "Capa",
  "Informações",
  "Unidades",
  "Progresso",
  "Atividades",
  "Registro Fotográfico",
  "Corredor 16°",
  "UH 16°",
  "Observações",
];

const INNSIDE_PHOTOS = [
  { src: "/images/innside/page5_img2.jpeg", caption: "Banheiro UH — contrapiso e impermeabilização (23/01 13:45)" },
  { src: "/images/innside/page5_img3.jpeg", caption: "Banheiro UH — preparação para revestimento (23/01 13:46)" },
  { src: "/images/innside/page6_img2.jpeg", caption: "Banheiro — revestimento cerâmico em andamento (23/01 13:37)" },
  { src: "/images/innside/page6_img3.jpeg", caption: "Banheiro — assentamento de porcelanato (23/01)" },
  { src: "/images/innside/page7_img2.jpeg", caption: "Corredor 16° pavimento — serviços gerais (23/01)" },
  { src: "/images/innside/page7_img3.jpeg", caption: "Corredor — acabamentos e instalações (23/01)" },
  { src: "/images/innside/page8_img2.jpeg", caption: "Hall de elevadores — revestimento e pintura (23/01)" },
  { src: "/images/innside/page8_img3.jpeg", caption: "Área comum — progresso dos acabamentos (23/01)" },
  { src: "/images/innside/page9_img2.jpeg", caption: "UH — instalações elétricas e hidráulicas (23/01)" },
  { src: "/images/innside/page9_img3.jpeg", caption: "UH — preparação para forro e drywall (23/01)" },
  { src: "/images/innside/page12_img2.jpeg", caption: "Corredor — elevadores e acabamento (23/01 15:41)" },
  { src: "/images/innside/page12_img3.jpeg", caption: "Área de serviço — instalações complementares (23/01)" },
  { src: "/images/innside/page12_img4.jpeg", caption: "Vista geral — pavimento em obra (23/01)" },
  { src: "/images/innside/page12_img5.jpeg", caption: "Detalhe — infraestrutura predial (23/01)" },
];

function getStatusColor(progress: number): string {
  if (progress === 100) return "bg-emerald-500";
  if (progress >= 50) return "bg-amber-500";
  if (progress > 0) return "bg-blue-500";
  return "bg-zinc-700";
}

function getStatusDot(progress: number): string {
  if (progress === 100) return "bg-emerald-400";
  if (progress >= 50) return "bg-amber-400";
  if (progress > 0) return "bg-blue-400";
  return "bg-zinc-600";
}

function getStatusLabel(progress: number): string {
  if (progress === 100) return "Concluido";
  if (progress >= 50) return "Em andamento";
  if (progress > 0) return "Iniciado";
  return "Pendente";
}

function getAptColor(apt: number): string {
  // Simulate varying progress per apartment
  const progressMap: Record<number, number> = {
    1501: 30, 1502: 25, 1503: 35, 1504: 20, 1505: 40,
    1506: 15, 1507: 30, 1508: 25, 1509: 35, 1510: 20,
    1601: 60, 1602: 55, 1603: 70, 1604: 50, 1605: 65,
    1606: 45, 1607: 60, 1608: 55, 1609: 50, 1610: 45,
  };
  const p = progressMap[apt] ?? 0;
  if (p >= 60) return "from-emerald-500/80 to-emerald-600/80";
  if (p >= 40) return "from-amber-500/80 to-amber-600/80";
  if (p >= 20) return "from-blue-500/80 to-blue-600/80";
  return "from-zinc-600/80 to-zinc-700/80";
}

// ─── Page transition variants ─────────────────────────────────
const pageVariants = {
  initial: { opacity: 0, x: 60, filter: "blur(4px)" },
  animate: { opacity: 1, x: 0, filter: "blur(0px)" },
  exit: { opacity: 0, x: -60, filter: "blur(4px)" },
};

export default function InnsidePage() {
  const [step, setStep] = useState(0);

  const next = useCallback(
    () => setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1)),
    []
  );
  const prev = useCallback(() => setStep((s) => Math.max(s - 1, 0)), []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-[#DB253D]/30">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#921A26]/8 via-zinc-950 to-zinc-950 pointer-events-none" />

      <div className="relative z-10 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {step === 0 && <StepCover />}
            {step === 1 && <StepInfo />}
            {step === 2 && <StepUnits />}
            {step === 3 && <StepProgress />}
            {step === 4 && <StepActivities />}
            {step === 5 && <StepPhotos />}
            {step === 6 && <StepCorridor16 />}
            {step === 7 && <StepUH16 />}
            {step === 8 && <StepObservations />}
          </motion.div>
        </AnimatePresence>
      </div>

      <WizardNav
        currentStep={step}
        totalSteps={TOTAL_STEPS}
        onNext={next}
        onPrev={prev}
        stepLabels={STEP_LABELS}
      />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// STEP 0: COVER
// ═══════════════════════════════════════════════════════════════
function StepCover() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-[#DB253D]/10 blur-[100px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#921A26]/10 blur-[120px]" />

      <SectionReveal>
        <Logo color="white" className="h-16 mb-12 opacity-90" />
      </SectionReveal>

      <SectionReveal delay={0.2}>
        <div className="inline-flex items-center gap-2 bg-[#DB253D]/10 border border-[#DB253D]/20 rounded-full px-5 py-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-[#DB253D] animate-pulse" />
          <span className="text-sm text-[#DB253D] font-medium tracking-wide uppercase">
            {innside.type}
          </span>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.3}>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2">
          <span className="bg-gradient-to-r from-white via-white to-zinc-400 bg-clip-text text-transparent">
            {innside.title}
          </span>
        </h1>
        <p className="text-2xl md:text-3xl text-zinc-400 font-light mb-4">
          {innside.subtitle}
        </p>
      </SectionReveal>

      <SectionReveal delay={0.4}>
        <div className="flex items-center gap-3 text-zinc-500 mb-16">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">{innside.period}</span>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.6}>
        <div className="w-full max-w-lg space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-zinc-500" />
              <span className="text-sm text-zinc-400">Previsto</span>
            </div>
            <span className="text-2xl font-bold text-zinc-300">
              <AnimatedCounter target={innside.completionExpected} suffix="%" />
            </span>
          </div>
          <AnimatedProgress
            value={innside.completionExpected}
            showLabel={false}
            color="bg-zinc-500"
            height="h-2"
          />

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#DB253D]" />
              <span className="text-sm text-zinc-400">Realizado</span>
            </div>
            <span className="text-2xl font-bold text-[#DB253D]">
              <AnimatedCounter target={innside.completionActual} suffix="%" />
            </span>
          </div>
          <AnimatedProgress
            value={innside.completionActual}
            showLabel={false}
            color="bg-gradient-to-r from-[#DB253D] to-[#ff4d63]"
            height="h-2"
          />
        </div>
      </SectionReveal>

      <SectionReveal delay={0.8}>
        <motion.div
          className="mt-12 flex items-center gap-2 text-zinc-600 text-sm"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span>Pressione</span>
          <kbd className="px-2 py-0.5 bg-zinc-800 rounded text-xs border border-zinc-700">
            &rarr;
          </kbd>
          <span>para navegar</span>
        </motion.div>
      </SectionReveal>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// STEP 1: PROJECT INFO
// ═══════════════════════════════════════════════════════════════
function StepInfo() {
  const infoItems = [
    { icon: Building2, label: "Hotel", value: innside.hotel },
    { icon: MapPin, label: "Localizacao", value: innside.location },
    {
      icon: User,
      label: "Responsavel",
      value: `${innside.responsible.name} - ${innside.responsible.role}`,
    },
    { icon: Layers, label: "Fase", value: innside.phase },
    {
      icon: Calendar,
      label: "Inicio",
      value: innside.startDate,
    },
    {
      icon: Calendar,
      label: "Termino",
      value: innside.endDate,
    },
    { icon: Building2, label: "Unidades", value: innside.units },
    { icon: Layers, label: "Pavimentos", value: innside.floors },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-4xl">
        <SectionReveal>
          <StepHeader
            number="01"
            title="Informacoes do Projeto"
            subtitle="Dados gerais da obra"
          />
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          {infoItems.map((item, i) => (
            <SectionReveal key={item.label} delay={0.1 * i}>
              <motion.div
                className="group relative bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6 hover:border-[#DB253D]/30 transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#DB253D]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#DB253D]/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#DB253D]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-500 mb-1">
                      {item.label}
                    </p>
                    <p className="text-white font-medium leading-tight">
                      {item.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// STEP 2: UNITS (Apartment Grid)
// ═══════════════════════════════════════════════════════════════
function StepUnits() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-5xl">
        <SectionReveal>
          <StepHeader
            number="02"
            title="Unidades por Pavimento"
            subtitle="Planta interativa dos apartamentos"
          />
        </SectionReveal>

        {/* Legend */}
        <SectionReveal delay={0.2}>
          <div className="flex flex-wrap items-center gap-6 mt-8 mb-10 justify-center">
            {[
              { color: "bg-emerald-500", label: "> 60% concluido" },
              { color: "bg-amber-500", label: "40-60% concluido" },
              { color: "bg-blue-500", label: "20-40% concluido" },
              { color: "bg-zinc-600", label: "< 20% concluido" },
            ].map((l) => (
              <div key={l.label} className="flex items-center gap-2">
                <div className={cn("w-3 h-3 rounded-sm", l.color)} />
                <span className="text-xs text-zinc-400">{l.label}</span>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* Floor 16 */}
        <SectionReveal delay={0.3}>
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px flex-1 bg-zinc-800" />
              <span className="text-sm font-semibold text-[#DB253D] tracking-wider uppercase">
                16&deg; Pavimento
              </span>
              <div className="h-px flex-1 bg-zinc-800" />
            </div>
            <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
              {innside.apartments.floor16.map((apt, i) => (
                <motion.div
                  key={apt}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.06, duration: 0.4 }}
                  whileHover={{ scale: 1.08, y: -4 }}
                  className={cn(
                    "relative aspect-square rounded-xl bg-gradient-to-br flex flex-col items-center justify-center cursor-pointer border border-white/10 shadow-lg",
                    getAptColor(apt)
                  )}
                >
                  <span className="text-xs font-bold text-white/90">
                    {apt}
                  </span>
                  <span className="text-[10px] text-white/60 mt-0.5">UH</span>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Floor 15 */}
        <SectionReveal delay={0.5}>
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px flex-1 bg-zinc-800" />
              <span className="text-sm font-semibold text-zinc-400 tracking-wider uppercase">
                15&deg; Pavimento
              </span>
              <div className="h-px flex-1 bg-zinc-800" />
            </div>
            <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
              {innside.apartments.floor15.map((apt, i) => (
                <motion.div
                  key={apt}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.06, duration: 0.4 }}
                  whileHover={{ scale: 1.08, y: -4 }}
                  className={cn(
                    "relative aspect-square rounded-xl bg-gradient-to-br flex flex-col items-center justify-center cursor-pointer border border-white/10 shadow-lg",
                    getAptColor(apt)
                  )}
                >
                  <span className="text-xs font-bold text-white/90">
                    {apt}
                  </span>
                  <span className="text-[10px] text-white/60 mt-0.5">UH</span>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Corridors */}
        <SectionReveal delay={0.7}>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {["Corredor 15°", "Corredor 16°"].map((c, i) => (
              <motion.div
                key={c}
                whileHover={{ scale: 1.02 }}
                className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-[#DB253D]/10 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-[#DB253D]" />
                </div>
                <div>
                  <p className="font-semibold text-white">{c}</p>
                  <p className="text-xs text-zinc-500">Area comum</p>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// STEP 3: PROGRESS
// ═══════════════════════════════════════════════════════════════
function StepProgress() {
  const chartData = [
    {
      name: "Previsto",
      value: innside.completionExpected,
      fill: "#71717a",
    },
    {
      name: "Realizado",
      value: innside.completionActual,
      fill: "#DB253D",
    },
  ];

  const delta = innside.completionActual - innside.completionExpected;

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-4xl">
        <SectionReveal>
          <StepHeader
            number="03"
            title="Progresso da Obra"
            subtitle="Comparativo previsto vs realizado"
          />
        </SectionReveal>

        {/* Delta indicator */}
        <SectionReveal delay={0.2}>
          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl px-6 py-3">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-semibold text-lg">
                +{delta}% acima do previsto
              </span>
            </div>
          </div>
        </SectionReveal>

        {/* Big numbers */}
        <SectionReveal delay={0.3}>
          <div className="grid grid-cols-2 gap-8 mt-10">
            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8 text-center">
              <p className="text-sm text-zinc-500 uppercase tracking-wider mb-3">
                Previsto
              </p>
              <p className="text-6xl font-bold text-zinc-400">
                <AnimatedCounter
                  target={innside.completionExpected}
                  suffix="%"
                />
              </p>
              <div className="mt-4">
                <AnimatedProgress
                  value={innside.completionExpected}
                  showLabel={false}
                  color="bg-zinc-500"
                  height="h-2"
                />
              </div>
            </div>
            <div className="bg-zinc-900/50 border border-[#DB253D]/20 rounded-2xl p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#DB253D]/5 to-transparent" />
              <div className="relative">
                <p className="text-sm text-zinc-500 uppercase tracking-wider mb-3">
                  Realizado
                </p>
                <p className="text-6xl font-bold text-[#DB253D]">
                  <AnimatedCounter
                    target={innside.completionActual}
                    suffix="%"
                  />
                </p>
                <div className="mt-4">
                  <AnimatedProgress
                    value={innside.completionActual}
                    showLabel={false}
                    color="bg-gradient-to-r from-[#DB253D] to-[#ff4d63]"
                    height="h-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Chart */}
        <SectionReveal delay={0.5}>
          <div className="mt-10 bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8">
            <h3 className="text-sm text-zinc-500 uppercase tracking-wider mb-6">
              Comparativo Visual
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  barCategoryGap="30%"
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#27272a"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: "#a1a1aa", fontSize: 13 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[0, 100]}
                    tick={{ fill: "#a1a1aa", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `${v}%`}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "#18181b",
                      border: "1px solid #3f3f46",
                      borderRadius: "12px",
                      color: "#fff",
                    }}
                    formatter={(value) => [`${value}%`, ""]}
                  />
                  <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={80}>
                    {chartData.map((entry, idx) => (
                      <Cell key={idx} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// STEP 4: ACTIVITIES
// ═══════════════════════════════════════════════════════════════
function StepActivities() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-5xl">
        <SectionReveal>
          <StepHeader
            number="04"
            title="Atividades da Semana"
            subtitle="Realizadas e previstas para proxima semana"
          />
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Realizadas */}
          <SectionReveal delay={0.2}>
            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <h3 className="font-semibold text-emerald-400">
                  Realizadas
                </h3>
                <span className="ml-auto text-xs bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full">
                  {innside.activitiesRealized.length}
                </span>
              </div>
              <div className="space-y-3">
                {innside.activitiesRealized.map((activity, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-zinc-300 leading-relaxed group-hover:text-white transition-colors">
                      {activity}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Previstas */}
          <SectionReveal delay={0.4}>
            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-blue-400" />
                </div>
                <h3 className="font-semibold text-blue-400">
                  Previstas - Proxima Semana
                </h3>
                <span className="ml-auto text-xs bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full">
                  {innside.activitiesPlanned.length}
                </span>
              </div>
              <div className="space-y-3">
                {innside.activitiesPlanned.map((activity, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <Clock className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-zinc-300 leading-relaxed group-hover:text-white transition-colors">
                      {activity}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// STEP 5: PHOTO GALLERY
// ═══════════════════════════════════════════════════════════════
function StepPhotos() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 min-h-[80vh] flex flex-col justify-center gap-8">
      <SectionReveal>
        <StepHeader
          number="05"
          title='Registro <span class="text-[#DB253D]">Fotográfico</span>'
          subtitle={`${INNSIDE_PHOTOS.length} fotos — Rua Iguatemi, Pinheiros, São Paulo`}
        />
      </SectionReveal>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src={INNSIDE_PHOTOS[selected].src}
                  alt={INNSIDE_PHOTOS[selected].caption}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>
              <p className="text-center text-sm text-zinc-400 mt-4">
                {INNSIDE_PHOTOS[selected].caption}
              </p>
              <button
                onClick={() => setSelected(Math.max(0, selected - 1))}
                disabled={selected === 0}
                className="absolute left-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900/80 text-white disabled:opacity-30 hover:bg-[#DB253D]/80 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => setSelected(Math.min(INNSIDE_PHOTOS.length - 1, selected + 1))}
                disabled={selected === INNSIDE_PHOTOS.length - 1}
                className="absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900/80 text-white disabled:opacity-30 hover:bg-[#DB253D]/80 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-12 right-0 text-xs text-zinc-500 hover:text-white transition-colors"
              >
                ESC para fechar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Photo grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {INNSIDE_PHOTOS.map((photo, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setSelected(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 transition-all hover:border-[#DB253D]/50 hover:shadow-[0_0_20px_rgba(219,37,61,0.15)]"
          >
            <Image
              src={photo.src}
              alt={photo.caption}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform">
              <p className="text-xs text-white leading-tight">{photo.caption}</p>
            </div>
            <div className="absolute top-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera className="h-3.5 w-3.5 text-white" />
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// STEP 6: CORRIDOR 16 SCHEDULE
// ═══════════════════════════════════════════════════════════════
function StepCorridor16() {
  return (
    <div className="min-h-screen flex items-start justify-center px-6 py-20">
      <div className="w-full max-w-6xl">
        <SectionReveal>
          <StepHeader
            number="05"
            title="Cronograma - Corredor 16&deg;"
            subtitle="Acompanhamento detalhado das tarefas"
          />
        </SectionReveal>

        <SectionReveal delay={0.2}>
          {/* Status legend */}
          <div className="flex flex-wrap items-center gap-5 mt-8 mb-6">
            {[
              { color: "bg-emerald-400", label: "Concluido" },
              { color: "bg-amber-400", label: "Em andamento" },
              { color: "bg-blue-400", label: "Iniciado" },
              { color: "bg-zinc-600", label: "Pendente" },
            ].map((l) => (
              <div key={l.label} className="flex items-center gap-2">
                <div className={cn("w-2.5 h-2.5 rounded-full", l.color)} />
                <span className="text-xs text-zinc-500">{l.label}</span>
              </div>
            ))}
          </div>
        </SectionReveal>

        <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="text-left p-4 text-xs text-zinc-500 uppercase tracking-wider font-medium">
                    Tarefa
                  </th>
                  <th className="text-center p-4 text-xs text-zinc-500 uppercase tracking-wider font-medium w-48">
                    Progresso
                  </th>
                  <th className="text-center p-4 text-xs text-zinc-500 uppercase tracking-wider font-medium hidden md:table-cell">
                    Inicio
                  </th>
                  <th className="text-center p-4 text-xs text-zinc-500 uppercase tracking-wider font-medium hidden md:table-cell">
                    Termino
                  </th>
                  <th className="text-center p-4 text-xs text-zinc-500 uppercase tracking-wider font-medium">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {innside.corridor16.map((item, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.04 }}
                    className="border-b border-zinc-800/50 hover:bg-zinc-800/20 transition-colors"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "w-2 h-2 rounded-full flex-shrink-0",
                            getStatusDot(item.progress)
                          )}
                        />
                        <span className="text-zinc-300">{item.task}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
                          <motion.div
                            className={cn(
                              "h-full rounded-full",
                              getStatusColor(item.progress)
                            )}
                            initial={{ width: 0 }}
                            animate={{ width: `${item.progress}%` }}
                            transition={{ delay: 0.3 + i * 0.04, duration: 0.8 }}
                          />
                        </div>
                        <span className="text-xs text-zinc-500 w-10 text-right">
                          {item.progress}%
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-center text-zinc-500 text-xs hidden md:table-cell">
                      {item.start}
                    </td>
                    <td className="p-4 text-center text-zinc-500 text-xs hidden md:table-cell">
                      {item.end}
                    </td>
                    <td className="p-4 text-center">
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full",
                          item.progress === 100
                            ? "bg-emerald-500/10 text-emerald-400"
                            : item.progress >= 50
                            ? "bg-amber-500/10 text-amber-400"
                            : item.progress > 0
                            ? "bg-blue-500/10 text-blue-400"
                            : "bg-zinc-800 text-zinc-500"
                        )}
                      >
                        {getStatusLabel(item.progress)}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// STEP 6: UH 16 SCHEDULE
// ═══════════════════════════════════════════════════════════════
function StepUH16() {
  const completed = innside.uh16.filter((t) => t.progress === 100).length;
  const inProgress = innside.uh16.filter(
    (t) => t.progress > 0 && t.progress < 100
  ).length;
  const pending = innside.uh16.filter((t) => t.progress === 0).length;

  return (
    <div className="min-h-screen flex items-start justify-center px-6 py-20">
      <div className="w-full max-w-6xl">
        <SectionReveal>
          <StepHeader
            number="06"
            title="Cronograma - UH&apos;s 16&deg; Pavimento"
            subtitle="Detalhamento das 36 tarefas por unidade habitacional"
          />
        </SectionReveal>

        {/* Summary cards */}
        <SectionReveal delay={0.2}>
          <div className="grid grid-cols-3 gap-4 mt-8 mb-8">
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-emerald-400">
                <AnimatedCounter target={completed} />
              </p>
              <p className="text-xs text-zinc-500 mt-1">Concluidas</p>
            </div>
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-amber-400">
                <AnimatedCounter target={inProgress} />
              </p>
              <p className="text-xs text-zinc-500 mt-1">Em andamento</p>
            </div>
            <div className="bg-zinc-500/5 border border-zinc-700 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-zinc-400">
                <AnimatedCounter target={pending} />
              </p>
              <p className="text-xs text-zinc-500 mt-1">Pendentes</p>
            </div>
          </div>
        </SectionReveal>

        <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto max-h-[60vh] overflow-y-auto">
            <table className="w-full text-sm">
              <thead className="sticky top-0 bg-zinc-900 z-10">
                <tr className="border-b border-zinc-800">
                  <th className="text-left p-4 text-xs text-zinc-500 uppercase tracking-wider font-medium">
                    #
                  </th>
                  <th className="text-left p-4 text-xs text-zinc-500 uppercase tracking-wider font-medium">
                    Tarefa
                  </th>
                  <th className="text-center p-4 text-xs text-zinc-500 uppercase tracking-wider font-medium w-48">
                    Progresso
                  </th>
                  <th className="text-center p-4 text-xs text-zinc-500 uppercase tracking-wider font-medium hidden md:table-cell">
                    Dias
                  </th>
                  <th className="text-center p-4 text-xs text-zinc-500 uppercase tracking-wider font-medium">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {innside.uh16.map((item, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.05 + i * 0.03 }}
                    className="border-b border-zinc-800/30 hover:bg-zinc-800/20 transition-colors"
                  >
                    <td className="p-4 text-zinc-600 text-xs font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "w-2 h-2 rounded-full flex-shrink-0",
                            getStatusDot(item.progress)
                          )}
                        />
                        <div>
                          <span className="text-zinc-300">{item.task}</span>
                          {"note" in item && item.note && (
                            <p className="text-[11px] text-zinc-600 mt-0.5">
                              {item.note}
                            </p>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                          <motion.div
                            className={cn(
                              "h-full rounded-full",
                              getStatusColor(item.progress)
                            )}
                            initial={{ width: 0 }}
                            animate={{ width: `${item.progress}%` }}
                            transition={{
                              delay: 0.2 + i * 0.03,
                              duration: 0.6,
                            }}
                          />
                        </div>
                        <span className="text-xs text-zinc-500 w-10 text-right">
                          {item.progress}%
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-center text-zinc-500 text-xs hidden md:table-cell">
                      {item.days}d
                    </td>
                    <td className="p-4 text-center">
                      <span
                        className={cn(
                          "inline-flex items-center text-[11px] px-2 py-0.5 rounded-full",
                          item.progress === 100
                            ? "bg-emerald-500/10 text-emerald-400"
                            : item.progress >= 50
                            ? "bg-amber-500/10 text-amber-400"
                            : item.progress > 0
                            ? "bg-blue-500/10 text-blue-400"
                            : "bg-zinc-800 text-zinc-500"
                        )}
                      >
                        {getStatusLabel(item.progress)}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// STEP 7: OBSERVATIONS
// ═══════════════════════════════════════════════════════════════
function StepObservations() {
  const summaryItems = [
    {
      label: "Progresso Geral",
      value: `${innside.completionActual}% (${innside.completionActual - innside.completionExpected}% acima do previsto)`,
      positive: true,
    },
    {
      label: "Atividades Realizadas",
      value: `${innside.activitiesRealized.length} atividades concluidas na semana`,
      positive: true,
    },
    {
      label: "Proximas Atividades",
      value: `${innside.activitiesPlanned.length} atividades planejadas`,
      positive: true,
    },
    {
      label: "Prazo Final",
      value: innside.endDate,
      positive: true,
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-4xl">
        <SectionReveal>
          <StepHeader
            number="07"
            title="Observacoes"
            subtitle="Pontos de atencao e proximos passos"
          />
        </SectionReveal>

        {/* Observations */}
        <div className="space-y-4 mt-10">
          {innside.observations.map((obs, i) => (
            <SectionReveal key={i} delay={0.15 * i}>
              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 bg-amber-500/5 border border-amber-500/20 rounded-2xl p-5"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs text-amber-500/60 uppercase tracking-wider mb-1">
                    Observacao {i + 1}
                  </p>
                  <p className="text-zinc-300 leading-relaxed">{obs}</p>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        {/* Summary */}
        <SectionReveal delay={0.4}>
          <div className="mt-12 bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8">
            <h3 className="text-sm text-zinc-500 uppercase tracking-wider mb-6 flex items-center gap-2">
              <ArrowRight className="w-4 h-4" />
              Resumo da Semana
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {summaryItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-xl bg-zinc-800/30"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-zinc-500 mb-0.5">{item.label}</p>
                    <p className="text-sm text-zinc-300 font-medium">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Footer */}
        <SectionReveal delay={0.7}>
          <div className="mt-12 text-center">
            <Logo color="white" className="h-8 mx-auto mb-4 opacity-40" />
            <p className="text-xs text-zinc-600">
              {brand.name} &middot; {innside.responsible.name} &middot;{" "}
              {innside.responsible.email}
            </p>
            <p className="text-xs text-zinc-700 mt-1">
              {brand.phone} &middot; {brand.website}
            </p>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// SHARED: Step Header
// ═══════════════════════════════════════════════════════════════
function StepHeader({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center">
      <span className="text-xs font-mono text-[#DB253D]/50 tracking-[0.3em] uppercase">
        {number} / {String(TOTAL_STEPS - 1).padStart(2, "0")}
      </span>
      <h2
        className="text-3xl md:text-4xl font-bold mt-2 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p className="text-zinc-500 mt-2">{subtitle}</p>
    </div>
  );
}
