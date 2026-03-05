"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  AlertTriangle,
  Calendar,
  User,
  Mail,
  Phone,
  Clock,
  ArrowRight,
  Building2,
  Layers,
  Wrench,
  ShieldAlert,
  Camera,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

import { smartfit, brand } from "@/lib/data";
import { Logo } from "@/components/logo";
import { WizardNav } from "@/components/wizard-nav";
import { SectionReveal } from "@/components/section-reveal";
import { AnimatedProgress } from "@/components/animated-progress";
import { AnimatedCounter } from "@/components/animated-counter";

// ── Constants ──────────────────────────────────────────────
const TOTAL_STEPS = 7;
const BRAND_RED = "#DB253D";
const BRAND_DARK = "#921A26";

const STEP_LABELS = [
  "Capa",
  "Responsável",
  "Atividades",
  "Progresso",
  "Registro Fotográfico",
  "Observações",
  "Cronograma",
];

// Photo gallery - construction site photos extracted from PDF
const SITE_PHOTOS = [
  { src: "/images/smartfit/page5_img4.jpeg", caption: "Escada metálica — estrutura instalada" },
  { src: "/images/smartfit/page5_img5.jpeg", caption: "Estrutura metálica — montagem do mezanino" },
  { src: "/images/smartfit/page6_img4.jpeg", caption: "Área interna — preparação para acabamento" },
  { src: "/images/smartfit/page6_img5.jpeg", caption: "Vista geral — mezanino e estrutura" },
  { src: "/images/smartfit/page7_img4.jpeg", caption: "Instalações — progresso da semana" },
  { src: "/images/smartfit/page7_img5.jpeg", caption: "Área de obra — serviços em andamento" },
  { src: "/images/smartfit/page8_img4.jpeg", caption: "Canteiro — organização e limpeza" },
  { src: "/images/smartfit/page8_img5.jpeg", caption: "Estrutura — detalhes construtivos" },
  { src: "/images/smartfit/page9_img4.jpeg", caption: "Instalações elétricas — infraestrutura" },
  { src: "/images/smartfit/page9_img5.jpeg", caption: "Instalações hidráulicas — tubulações" },
  { src: "/images/smartfit/page10_img4.jpeg", caption: "Alvenaria — vedação e divisórias" },
  { src: "/images/smartfit/page10_img5.jpeg", caption: "Revestimentos — preparação de superfícies" },
  { src: "/images/smartfit/page11_img4.jpeg", caption: "Forro e drywall — montagem" },
  { src: "/images/smartfit/page11_img5.jpeg", caption: "Acabamentos — detalhamento" },
  { src: "/images/smartfit/page12_img4.jpeg", caption: "Piso — regularização e preparação" },
  { src: "/images/smartfit/page12_img5.jpeg", caption: "Área externa — fachada e acessos" },
  { src: "/images/smartfit/page13_img4.jpeg", caption: "Plataforma técnica — montagem" },
  { src: "/images/smartfit/page13_img5.jpeg", caption: "Equipamentos — posicionamento" },
  { src: "/images/smartfit/page14_img4.jpeg", caption: "Área de musculação — layout" },
  { src: "/images/smartfit/page14_img5.jpeg", caption: "Infraestrutura — detalhes finais" },
  { src: "/images/smartfit/page15_img4.jpeg", caption: "Iluminação — instalação de luminárias" },
  { src: "/images/smartfit/page15_img5.jpeg", caption: "Climatização — dutos e equipamentos" },
  { src: "/images/smartfit/page16_img4.jpeg", caption: "Vidros e esquadrias — colocação" },
  { src: "/images/smartfit/page16_img5.jpeg", caption: "Vista geral — estado atual da obra" },
];

// ── Helpers ────────────────────────────────────────────────
function progressColor(v: number) {
  if (v === 100) return "bg-emerald-500";
  if (v >= 50) return "bg-amber-400";
  if (v > 0) return "bg-orange-500";
  return "bg-zinc-600";
}

function progressHex(v: number) {
  if (v === 100) return "#10b981";
  if (v >= 50) return "#fbbf24";
  if (v > 0) return "#f97316";
  return "#52525b";
}

function categoryOf(task: string) {
  const t = task.toLowerCase();
  if (t.includes("mezanino") || t.includes("escada") || t.includes("guarda corpo") || t.includes("corrimão")) return "Mezanino";
  if (t.includes("plataforma")) return "Plataforma Tecnica";
  return "Terreo";
}

// ── Slide transition variants ──────────────────────────────
const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 600 : -600,
    opacity: 0,
    scale: 0.95,
  }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir: number) => ({
    x: dir > 0 ? -600 : 600,
    opacity: 0,
    scale: 0.95,
  }),
};

// ── Animated progress ring (SVG) ───────────────────────────
function ProgressRing({
  value,
  size = 220,
  stroke = 14,
  animate = true,
}: {
  value: number;
  size?: number;
  stroke?: number;
  animate?: boolean;
}) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#27272a"
          strokeWidth={stroke}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={BRAND_RED}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={animate ? { strokeDashoffset: circ - (circ * value) / 100 } : {}}
          transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <AnimatedCounter
          target={value}
          suffix="%"
          className="text-5xl font-bold text-white"
          duration={2}
        />
        <span className="text-xs text-zinc-400 mt-1 tracking-widest uppercase">
          Concluido
        </span>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════
// PHOTO GALLERY STEP
// ════════════════════════════════════════════════════════════
function PhotoGalleryStep() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="min-h-[80vh] flex flex-col justify-center gap-8">
      <SectionReveal>
        <h2 className="text-3xl md:text-5xl font-bold">
          Registro{" "}
          <span className="text-[#DB253D]">Fotográfico</span>
        </h2>
        <p className="text-zinc-400 mt-2">
          {SITE_PHOTOS.length} fotos da obra — Semana 19
        </p>
        <div className="h-1 w-24 bg-[#DB253D] rounded-full mt-4" />
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
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src={SITE_PHOTOS[selected].src}
                  alt={SITE_PHOTOS[selected].caption}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>
              <p className="text-center text-sm text-zinc-400 mt-4">
                {SITE_PHOTOS[selected].caption}
              </p>
              {/* Nav buttons */}
              <button
                onClick={() => setSelected(Math.max(0, selected - 1))}
                disabled={selected === 0}
                className="absolute left-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900/80 text-white disabled:opacity-30 hover:bg-[#DB253D]/80 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => setSelected(Math.min(SITE_PHOTOS.length - 1, selected + 1))}
                disabled={selected === SITE_PHOTOS.length - 1}
                className="absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900/80 text-white disabled:opacity-30 hover:bg-[#DB253D]/80 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              {/* Close hint */}
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
        {SITE_PHOTOS.map((photo, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.03, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setSelected(i)}
            className="group relative aspect-video overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 transition-all hover:border-[#DB253D]/50 hover:shadow-[0_0_20px_rgba(219,37,61,0.15)]"
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

// ════════════════════════════════════════════════════════════
// MAIN PAGE COMPONENT
// ════════════════════════════════════════════════════════════
export default function SmartFitPage() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);

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
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  // Sort schedule by progress descending (used in Step 6)
  const sortedSchedule = [...smartfit.scheduleHighlights].sort(
    (a, b) => b.progress - a.progress
  );

  // Donut data for Step 4
  const donutData = [
    { name: "Concluido", value: smartfit.completion },
    { name: "Restante", value: 100 - smartfit.completion },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white overflow-hidden">
      {/* ── Slide area ── */}
      <div className="relative min-h-screen flex items-center justify-center pb-20">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-6xl mx-auto px-6"
          >
            {/* ════════════════ STEP 0 : COVER ════════════════ */}
            {step === 0 && (
              <div className="flex flex-col items-center justify-center text-center min-h-[80vh] gap-8">
                <SectionReveal>
                  <Logo color="white" className="h-16 mx-auto" />
                </SectionReveal>

                <SectionReveal delay={0.15}>
                  <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-5 py-2 text-sm text-zinc-400">
                    <Calendar className="h-4 w-4 text-[#DB253D]" />
                    {smartfit.period}
                  </div>
                </SectionReveal>

                <SectionReveal delay={0.25}>
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                    {smartfit.title}{" "}
                    <span className="text-[#DB253D]">
                      {smartfit.subtitle}
                    </span>
                  </h1>
                </SectionReveal>

                <SectionReveal delay={0.35}>
                  <p className="text-xl text-zinc-400 max-w-lg">
                    {smartfit.type}
                  </p>
                </SectionReveal>

                <SectionReveal delay={0.5}>
                  <ProgressRing value={smartfit.completion} size={240} stroke={16} />
                </SectionReveal>

                <SectionReveal delay={0.65}>
                  <button
                    onClick={goNext}
                    className="group inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-[#DB253D] transition-colors"
                  >
                    Pressione{" "}
                    <kbd className="px-2 py-0.5 border border-zinc-700 rounded text-xs text-zinc-400 group-hover:border-[#DB253D]">
                      &rarr;
                    </kbd>{" "}
                    para continuar
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </SectionReveal>
              </div>
            )}

            {/* ════════════════ STEP 1 : RESPONSAVEL ════════════════ */}
            {step === 1 && (
              <div className="min-h-[80vh] flex flex-col justify-center gap-10">
                <SectionReveal>
                  <h2 className="text-3xl md:text-5xl font-bold">
                    Responsavel &{" "}
                    <span className="text-[#DB253D]">Informacoes</span>
                  </h2>
                  <div className="h-1 w-24 bg-[#DB253D] rounded-full mt-4" />
                </SectionReveal>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Card: Responsavel */}
                  <SectionReveal delay={0.1}>
                    <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8 space-y-6 backdrop-blur">
                      <div className="flex items-center gap-4">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#DB253D] to-[#921A26] flex items-center justify-center text-2xl font-bold">
                          {smartfit.responsible.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">
                            {smartfit.responsible.name}
                          </h3>
                          <p className="text-zinc-400">
                            {smartfit.responsible.role}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-3 text-sm text-zinc-300">
                        <div className="flex items-center gap-3">
                          <Phone className="h-4 w-4 text-[#DB253D]" />
                          {smartfit.responsible.phone}
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="h-4 w-4 text-[#DB253D]" />
                          {smartfit.responsible.email}
                        </div>
                      </div>
                    </div>
                  </SectionReveal>

                  {/* Card: Projeto */}
                  <SectionReveal delay={0.2}>
                    <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8 space-y-6 backdrop-blur">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-[#DB253D]" />
                        Visao Geral do Projeto
                      </h3>
                      <div className="space-y-4 text-sm">
                        <div className="flex justify-between border-b border-zinc-800 pb-3">
                          <span className="text-zinc-400">Obra</span>
                          <span className="font-medium">
                            {smartfit.title} - {smartfit.subtitle}
                          </span>
                        </div>
                        <div className="flex justify-between border-b border-zinc-800 pb-3">
                          <span className="text-zinc-400">Semana</span>
                          <span className="font-medium">{smartfit.type}</span>
                        </div>
                        <div className="flex justify-between border-b border-zinc-800 pb-3">
                          <span className="text-zinc-400 flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" /> Inicio
                          </span>
                          <span className="font-medium">
                            {smartfit.startDate}
                          </span>
                        </div>
                        <div className="flex justify-between border-b border-zinc-800 pb-3">
                          <span className="text-zinc-400 flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" /> Previsao
                          </span>
                          <span className="font-medium text-amber-400">
                            {smartfit.endDate}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-400">Avanco Geral</span>
                          <span className="font-bold text-[#DB253D] text-lg">
                            {smartfit.completion}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </SectionReveal>
                </div>
              </div>
            )}

            {/* ════════════════ STEP 2 : ATIVIDADES ════════════════ */}
            {step === 2 && (
              <div className="min-h-[80vh] flex flex-col justify-center gap-8">
                <SectionReveal>
                  <h2 className="text-3xl md:text-5xl font-bold">
                    Atividades{" "}
                    <span className="text-[#DB253D]">Realizadas</span>
                  </h2>
                  <p className="text-zinc-400 mt-2">
                    {smartfit.activitiesRealized.length} atividades concluidas
                    nesta semana
                  </p>
                  <div className="h-1 w-24 bg-[#DB253D] rounded-full mt-4" />
                </SectionReveal>

                <div className="grid md:grid-cols-2 gap-4">
                  {smartfit.activitiesRealized.map((act, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.15 + i * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 flex items-start gap-4 hover:border-[#DB253D]/40 transition-colors"
                    >
                      <div className="mt-0.5 shrink-0">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            delay: 0.3 + i * 0.08,
                            type: "spring",
                            stiffness: 300,
                          }}
                        >
                          <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                        </motion.div>
                      </div>
                      <div>
                        <span className="text-sm text-zinc-200 leading-relaxed">
                          {act}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* ════════════════ STEP 3 : PROGRESSO ════════════════ */}
            {step === 3 && (
              <div className="min-h-[80vh] flex flex-col justify-center gap-10">
                <SectionReveal>
                  <h2 className="text-3xl md:text-5xl font-bold">
                    Progresso{" "}
                    <span className="text-[#DB253D]">Geral</span>
                  </h2>
                  <div className="h-1 w-24 bg-[#DB253D] rounded-full mt-4" />
                </SectionReveal>

                <div className="grid md:grid-cols-[340px_1fr] gap-10 items-start">
                  {/* Donut chart */}
                  <SectionReveal delay={0.1}>
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-[280px] h-[280px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={donutData}
                              cx="50%"
                              cy="50%"
                              innerRadius={90}
                              outerRadius={130}
                              startAngle={90}
                              endAngle={-270}
                              dataKey="value"
                              stroke="none"
                              animationBegin={200}
                              animationDuration={1500}
                            >
                              <Cell fill={BRAND_RED} />
                              <Cell fill="#27272a" />
                            </Pie>
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="text-center -mt-[180px]">
                        <AnimatedCounter
                          target={smartfit.completion}
                          suffix="%"
                          className="text-5xl font-bold text-white"
                          duration={2}
                        />
                        <p className="text-sm text-zinc-400 mt-1">
                          Avanco Geral
                        </p>
                      </div>
                      <div className="mt-[120px]" />

                      {/* Legend */}
                      <div className="flex flex-wrap justify-center gap-4 text-xs text-zinc-400">
                        <span className="flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                          100%
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                          50-99%
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
                          1-49%
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                          0%
                        </span>
                      </div>
                    </div>
                  </SectionReveal>

                  {/* Progress bars */}
                  <SectionReveal delay={0.2}>
                    <div className="space-y-3 max-h-[70vh] overflow-y-auto pr-2 scrollbar-thin">
                      {smartfit.scheduleHighlights.map((item, i) => (
                        <AnimatedProgress
                          key={i}
                          value={item.progress}
                          label={item.task}
                          color={progressColor(item.progress)}
                          height="h-2.5"
                        />
                      ))}
                    </div>
                  </SectionReveal>
                </div>
              </div>
            )}

            {/* ════════════════ STEP 4 : REGISTRO FOTOGRÁFICO ════════════════ */}
            {step === 4 && (
              <PhotoGalleryStep />
            )}

            {/* ════════════════ STEP 5 : OBSERVACOES ════════════════ */}
            {step === 5 && (
              <div className="min-h-[80vh] flex flex-col justify-center gap-8">
                <SectionReveal>
                  <h2 className="text-3xl md:text-5xl font-bold">
                    Observacoes{" "}
                    <span className="text-[#DB253D]">Importantes</span>
                  </h2>
                  <p className="text-zinc-400 mt-2">
                    {smartfit.observations.length} pontos de atencao
                    identificados
                  </p>
                  <div className="h-1 w-24 bg-[#DB253D] rounded-full mt-4" />
                </SectionReveal>

                {/* Structural notes */}
                <SectionReveal delay={0.1}>
                  <div className="bg-zinc-900/80 border border-amber-500/30 rounded-2xl p-6 space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                      <Layers className="h-4 w-4" />
                      Notas Estruturais
                    </h3>
                    {smartfit.structuralNotes.map((note, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.15 }}
                        className="flex items-start gap-3 text-sm text-zinc-300 bg-zinc-800/50 rounded-lg p-4"
                      >
                        <Wrench className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                        {note}
                      </motion.div>
                    ))}
                  </div>
                </SectionReveal>

                {/* Observation cards */}
                <div className="grid md:grid-cols-2 gap-4">
                  {smartfit.observations.map((obs, i) => {
                    const isBlocker =
                      obs.toLowerCase().includes("sem data") ||
                      obs.toLowerCase().includes("pendente") ||
                      obs.toLowerCase().includes("aguardando");
                    const severity = isBlocker ? "high" : "medium";

                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.3 + i * 0.1,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className={`bg-zinc-900/60 border rounded-xl p-5 flex items-start gap-4 ${
                          severity === "high"
                            ? "border-[#DB253D]/50"
                            : "border-amber-500/30"
                        }`}
                      >
                        <div className="shrink-0 mt-0.5">
                          {severity === "high" ? (
                            <ShieldAlert className="h-5 w-5 text-[#DB253D]" />
                          ) : (
                            <AlertTriangle className="h-5 w-5 text-amber-400" />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <span
                              className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${
                                severity === "high"
                                  ? "bg-[#DB253D]/20 text-[#DB253D]"
                                  : "bg-amber-500/20 text-amber-400"
                              }`}
                            >
                              {severity === "high" ? "Bloqueio" : "Atencao"}
                            </span>
                          </div>
                          <p className="text-sm text-zinc-300 leading-relaxed">
                            {obs}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ════════════════ STEP 6 : CRONOGRAMA ════════════════ */}
            {step === 6 && (
              <div className="min-h-[80vh] flex flex-col justify-center gap-8">
                <SectionReveal>
                  <h2 className="text-3xl md:text-5xl font-bold">
                    Cronograma{" "}
                    <span className="text-[#DB253D]">Detalhado</span>
                  </h2>
                  <p className="text-zinc-400 mt-2">
                    {smartfit.scheduleHighlights.length} itens ordenados por
                    progresso
                  </p>
                  <div className="h-1 w-24 bg-[#DB253D] rounded-full mt-4" />
                </SectionReveal>

                {/* Category summary chips */}
                <SectionReveal delay={0.1}>
                  <div className="flex flex-wrap gap-3">
                    {["Mezanino", "Terreo", "Plataforma Tecnica"].map(
                      (cat) => {
                        const items = sortedSchedule.filter(
                          (s) => categoryOf(s.task) === cat
                        );
                        const avg =
                          items.length > 0
                            ? Math.round(
                                items.reduce((a, b) => a + b.progress, 0) /
                                  items.length
                              )
                            : 0;
                        return (
                          <div
                            key={cat}
                            className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 flex items-center gap-3"
                          >
                            <div
                              className="h-3 w-3 rounded-full"
                              style={{ backgroundColor: progressHex(avg) }}
                            />
                            <span className="text-sm font-medium text-zinc-200">
                              {cat}
                            </span>
                            <span className="text-xs text-zinc-500">
                              {avg}% medio
                            </span>
                          </div>
                        );
                      }
                    )}
                  </div>
                </SectionReveal>

                {/* Schedule table */}
                <SectionReveal delay={0.15}>
                  <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl overflow-hidden">
                    {/* Header */}
                    <div className="grid grid-cols-[1fr_180px_70px] md:grid-cols-[1fr_140px_300px_70px] gap-4 px-6 py-3 bg-zinc-800/50 text-xs uppercase tracking-wider text-zinc-500 font-semibold">
                      <span>Tarefa</span>
                      <span className="hidden md:block">Categoria</span>
                      <span>Progresso</span>
                      <span className="text-right">%</span>
                    </div>

                    {/* Rows */}
                    <div className="max-h-[55vh] overflow-y-auto divide-y divide-zinc-800/50">
                      {sortedSchedule.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + i * 0.03 }}
                          className="grid grid-cols-[1fr_180px_70px] md:grid-cols-[1fr_140px_300px_70px] gap-4 px-6 py-3.5 items-center hover:bg-zinc-800/30 transition-colors"
                        >
                          <span className="text-sm text-zinc-200 truncate">
                            {item.task}
                          </span>
                          <span className="hidden md:flex items-center gap-1.5 text-xs text-zinc-500">
                            <div
                              className="h-2 w-2 rounded-full"
                              style={{
                                backgroundColor: progressHex(item.progress),
                              }}
                            />
                            {categoryOf(item.task)}
                          </span>
                          <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
                            <motion.div
                              className="h-full rounded-full"
                              style={{
                                backgroundColor: progressHex(item.progress),
                              }}
                              initial={{ width: 0 }}
                              animate={{
                                width: `${Math.max(item.progress, 2)}%`,
                              }}
                              transition={{
                                duration: 1,
                                delay: 0.3 + i * 0.04,
                                ease: "easeOut",
                              }}
                            />
                          </div>
                          <span
                            className="text-sm font-semibold text-right"
                            style={{
                              color: progressHex(item.progress),
                            }}
                          >
                            {item.progress}%
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </SectionReveal>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Wizard Navigation ── */}
      <WizardNav
        currentStep={step}
        totalSteps={TOTAL_STEPS}
        onNext={goNext}
        onPrev={goPrev}
        stepLabels={STEP_LABELS}
      />
    </main>
  );
}
