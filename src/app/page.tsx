"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  Paintbrush,
  RefreshCw,
  Handshake,
  FileText,
  Table2,
  BarChartHorizontal,
  ArrowRight,
  MousePointer2,
  LineChart,
  Compass,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Globe,
  ChevronDown,
  Building2,
  Calendar,
  Percent,
  Sparkles,
  Rocket,
  Brain,
  Zap,
  ArrowUp,
} from "lucide-react";
import { Logo } from "@/components/logo";
import { SectionReveal } from "@/components/section-reveal";
import { AnimatedCounter } from "@/components/animated-counter";
import { brand, projects, fairmont, smartfit, innside, rioafrica, pacaembu } from "@/lib/data";

// ---------------------------------------------------------------------------
// Geometric background shapes
// ---------------------------------------------------------------------------
function GeometricBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Large triangle outline - top right */}
      <motion.div
        className="absolute -right-32 -top-20 h-[600px] w-[600px] rotate-12 border border-[#DB253D]/20"
        style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
        animate={{ rotate: [12, 16, 12], y: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Diamond outline - left */}
      <motion.div
        className="absolute -left-20 top-1/3 h-72 w-72 rotate-45 border border-[#DB253D]/15 md:h-96 md:w-96"
        animate={{ rotate: [45, 49, 45], scale: [1, 1.03, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Small triangle - bottom right */}
      <motion.div
        className="absolute bottom-32 right-1/4 h-40 w-40 border border-[#DB253D]/10"
        style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
        animate={{ rotate: [0, -8, 0], y: [0, 15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Angular line - top left */}
      <motion.div
        className="absolute left-[10%] top-[15%] h-px w-64 origin-left bg-gradient-to-r from-[#DB253D]/30 to-transparent"
        animate={{ rotate: [-20, -15, -20], scaleX: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Angular line - right center */}
      <motion.div
        className="absolute right-[15%] top-[60%] h-px w-48 origin-right bg-gradient-to-l from-[#DB253D]/25 to-transparent"
        animate={{ rotate: [30, 25, 30], scaleX: [1, 0.8, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Parallelogram outline */}
      <motion.div
        className="absolute bottom-[20%] left-[5%] h-48 w-64 border border-[#921A26]/15"
        style={{ clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" }}
        animate={{ x: [0, 10, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Dot grid pattern - subtle */}
      <div className="absolute right-0 top-0 grid h-full w-1/3 grid-cols-6 gap-12 opacity-[0.03]">
        {Array.from({ length: 48 }).map((_, i) => (
          <div key={i} className="h-1 w-1 rounded-full bg-white" />
        ))}
      </div>
      {/* Red glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DB253D]/[0.04] blur-[120px]" />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Geometric accents for other sections
// ---------------------------------------------------------------------------
function SectionGeometricAccent({ variant = "left" }: { variant?: "left" | "right" }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {variant === "left" ? (
        <>
          <motion.div
            className="absolute -left-16 top-1/4 h-48 w-48 rotate-45 border border-[#DB253D]/10"
            animate={{ rotate: [45, 50, 45] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-[8%] bottom-[20%] h-px w-40 origin-left bg-gradient-to-r from-[#DB253D]/20 to-transparent"
            animate={{ scaleX: [1, 1.3, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      ) : (
        <>
          <motion.div
            className="absolute -right-12 bottom-1/4 h-36 w-36 border border-[#DB253D]/10"
            style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
            animate={{ rotate: [0, 6, 0] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-[10%] top-[30%] h-px w-32 origin-right bg-gradient-to-l from-[#DB253D]/15 to-transparent"
            animate={{ scaleX: [1, 0.7, 1] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Project card data helper
// ---------------------------------------------------------------------------
function getProjectMeta(project: typeof fairmont | typeof smartfit | typeof innside | typeof rioafrica | typeof pacaembu) {
  if (project.id === "fairmont") {
    return {
      badge: "Proposta Técnica",
      metric: `R$ ${(fairmont.totalPrice / 1_000_000).toFixed(1)}M`,
      metricLabel: "Valor total",
      detail: `${fairmont.duration} dias`,
      detailLabel: "Prazo",
      icon: Building2,
    };
  }
  if (project.id === "smartfit") {
    return {
      badge: "Relatório Semanal",
      metric: `${smartfit.completion}%`,
      metricLabel: "Concluído",
      detail: "Semana 19",
      detailLabel: "Período",
      icon: Percent,
    };
  }
  if (project.id === "rioafrica") {
    return {
      badge: "Proposta Técnica",
      metric: "R$ 70M",
      metricLabel: "Custo total",
      detail: "19 meses",
      detailLabel: "Prazo",
      icon: Building2,
    };
  }
  if (project.id === "pacaembu") {
    return {
      badge: "Proposta Técnica e Comercial",
      metric: "R$ 109M",
      metricLabel: "Custo total",
      detail: "15 meses",
      detailLabel: "Prazo",
      icon: Building2,
    };
  }
  return {
    badge: "Relatório Semanal",
    metric: `${innside.completionActual}%`,
    metricLabel: "Realizado",
    detail: "Semana 7",
    detailLabel: "Período",
    icon: Calendar,
  };
}

// ---------------------------------------------------------------------------
// Main Page
// ---------------------------------------------------------------------------
export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToProjects = () => {
    const el = document.getElementById("projetos");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const problems = [
    { icon: FileText, title: "PDFs Estáticos", desc: "Documentos de 80+ páginas que ninguém lê até o final" },
    { icon: Table2, title: "Planilhas Confusas", desc: "Dados críticos perdidos em células sem contexto visual" },
    { icon: BarChartHorizontal, title: "Sem Impacto Visual", desc: "Números importantes que não comunicam progresso" },
  ];

  const solutions = [
    { icon: MousePointer2, title: "Interatividade", desc: "Navegação intuitiva com dados exploráveis" },
    { icon: LineChart, title: "Tempo Real", desc: "Informações atualizadas automaticamente" },
    { icon: Compass, title: "Navegação Clara", desc: "Cada dado no lugar certo, acessível em segundos" },
  ];

  const features = [
    {
      icon: BarChart3,
      title: "Dados Interativos",
      desc: "Cronogramas, orçamentos e progresso animados com gráficos interativos que revelam detalhes ao toque.",
    },
    {
      icon: Paintbrush,
      title: "Design Premium",
      desc: "Interface minimalista construída com a identidade da sua marca. Cada pixel comunica profissionalismo.",
    },
    {
      icon: RefreshCw,
      title: "Atualização em Tempo Real",
      desc: "Dados sempre atualizados automaticamente. Sem reenvio de PDFs, sem versões desatualizadas.",
    },
    {
      icon: Handshake,
      title: "Impacto B2B",
      desc: "Apresentações que impressionam clientes, investidores e parceiros. Feitas para fechar contratos.",
    },
  ];

  const rpkDifferentials = [
    {
      icon: Brain,
      title: "Inteligência Artificial",
      desc: "Utilizamos IA de ponta para automatizar processos e gerar insights que seriam impossíveis manualmente.",
    },
    {
      icon: Rocket,
      title: "Pioneiros na Região",
      desc: "Somos a primeira agência da região a integrar IA em todas as etapas da transformação digital.",
    },
    {
      icon: Zap,
      title: "Inovação Contínua",
      desc: "Guiamos sua empresa na jornada tecnológica, da digitalização à automação inteligente.",
    },
    {
      icon: Sparkles,
      title: "Resultados Tangíveis",
      desc: "Cada projeto entrega ROI mensurável — mais agilidade, mais impacto visual, mais contratos fechados.",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-white antialiased">
      {/* ================================================================ */}
      {/* HERO                                                             */}
      {/* ================================================================ */}
      <section ref={heroRef} className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
        <GeometricBackground />

        {/* Top bar — logo centered */}
        <motion.div
          className="absolute left-0 right-0 top-0 z-20 flex items-center justify-center px-6 py-6 md:px-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Logo variant="full" color="white" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity, y: heroY }} className="relative z-10 mx-auto max-w-5xl text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl"
          >
            Dados técnicos{" "}
            <span className="bg-gradient-to-r from-[#DB253D] to-[#921A26] bg-clip-text text-transparent">
              transformados
            </span>{" "}
            em experiências{" "}
            <span className="relative inline-block">
              interativas
              <motion.span
                className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-[#DB253D] to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.4 }}
                style={{ transformOrigin: "left" }}
              />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl"
          >
            Transformamos propostas técnicas, relatórios de obra e dados de engenharia em apresentações digitais interativas que impressionam clientes e fecham contratos.
          </motion.p>

          {/* RPK Agency Branding Pitch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="mx-auto mt-6 max-w-2xl"
          >
            <div className="inline-flex items-center gap-3 rounded-2xl border border-zinc-800/60 bg-zinc-900/40 px-6 py-4 backdrop-blur-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DB253D]/10">
                <Sparkles className="h-5 w-5 text-[#DB253D]" />
              </div>
              <p className="text-left text-sm leading-relaxed text-zinc-400">
                Desenvolvido pela{" "}
                <span className="font-semibold text-white">Agência RPK</span>{" "}
                — pioneiros na região em soluções com Inteligência Artificial. Guiamos empresas na inovação tecnológica, do conceito à execução.
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <button
              onClick={scrollToProjects}
              className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-[#DB253D] px-8 py-4 text-base font-semibold text-white transition-all hover:shadow-[0_0_40px_rgba(219,37,61,0.3)]"
            >
              <span className="relative z-10">Ver Apresentações</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-0 bg-gradient-to-r from-[#DB253D] to-[#921A26] opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
            <a
              href="https://wa.me/5511978826684"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-zinc-700 px-8 py-4 text-base font-medium text-zinc-300 transition-all hover:border-zinc-500 hover:text-white"
            >
              Fale Conosco
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-6 w-6 text-zinc-600" />
        </motion.div>

        {/* Bottom gradient fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent" />
      </section>

      {/* ================================================================ */}
      {/* RPK AGENCY BRANDING SECTION                                      */}
      {/* ================================================================ */}
      <section className="relative px-6 py-24 md:py-32">
        <SectionGeometricAccent variant="right" />
        <div className="mx-auto max-w-6xl">
          <SectionReveal>
            <div className="text-center">
              <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#DB253D]">Quem Criou</div>
              <h2 className="text-3xl font-bold md:text-5xl">
                <span className="bg-gradient-to-r from-[#DB253D] to-[#921A26] bg-clip-text text-transparent">
                  Agência RPK
                </span>{" "}
                — Inovação com IA
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
                Somos pioneiros na região em integrar Inteligência Artificial aos processos empresariais.
                Nossa missão é guiar a sua empresa na jornada da inovação tecnológica, transformando dados brutos em experiências que geram resultado.
              </p>
            </div>
          </SectionReveal>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {rpkDifferentials.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-8 backdrop-blur-sm transition-colors hover:border-[#DB253D]/30"
                >
                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[#DB253D]/[0.06] blur-2xl transition-all group-hover:bg-[#DB253D]/[0.12]" />
                  <div className="relative">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#DB253D]/10">
                      <item.icon className="h-6 w-6 text-[#DB253D]" />
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.desc}</p>
                  </div>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* ABOUT / PROBLEM-SOLUTION                                         */}
      {/* ================================================================ */}
      <section className="relative px-6 py-24 md:py-32">
        <SectionGeometricAccent variant="left" />
        <div className="mx-auto max-w-6xl">
          <SectionReveal>
            <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#DB253D]">O Problema</div>
            <h2 className="text-3xl font-bold md:text-5xl">
              Por que{" "}
              <span className="bg-gradient-to-r from-[#DB253D] to-[#921A26] bg-clip-text text-transparent">
                digitalizar?
              </span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-zinc-400">
              Empresas de engenharia ainda entregam informações críticas em formatos que não comunicam valor.
            </p>
          </SectionReveal>

          {/* Problem cards */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {problems.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.15}>
                <div className="group relative rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-8 backdrop-blur-sm transition-all hover:border-zinc-700">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800/80">
                    <item.icon className="h-6 w-6 text-zinc-400" />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">{item.desc}</p>
                  {/* Red line accent */}
                  <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#DB253D]/20 to-transparent" />
                </div>
              </SectionReveal>
            ))}
          </div>

          {/* Arrow divider */}
          <SectionReveal delay={0.2}>
            <div className="flex items-center justify-center py-12">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#DB253D]/30 bg-[#DB253D]/5">
                <ArrowRight className="h-6 w-6 text-[#DB253D]" style={{ transform: "rotate(90deg)" }} />
              </div>
            </div>
          </SectionReveal>

          {/* Solution cards */}
          <SectionReveal>
            <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#DB253D]">A Solução</div>
            <h3 className="text-2xl font-bold md:text-3xl">
              Apresentações que comunicam valor
            </h3>
          </SectionReveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {solutions.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.15}>
                <div className="group rounded-2xl border border-[#DB253D]/10 bg-gradient-to-b from-[#DB253D]/5 to-transparent p-8 transition-all hover:border-[#DB253D]/25">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#DB253D]/10">
                    <item.icon className="h-6 w-6 text-[#DB253D]" />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* FEATURES                                                         */}
      {/* ================================================================ */}
      <section className="relative px-6 py-24 md:py-32">
        {/* Subtle top border */}
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        <SectionGeometricAccent variant="right" />

        <div className="mx-auto max-w-6xl">
          <SectionReveal>
            <div className="text-center">
              <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#DB253D]">Tecnologia</div>
              <h2 className="text-3xl font-bold md:text-5xl">Nossa Solução</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
                Plataforma digital que transforma dados brutos de engenharia em experiências visuais imersivas.
              </p>
            </div>
          </SectionReveal>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {features.map((feat, i) => (
              <SectionReveal key={feat.title} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-8 backdrop-blur-sm transition-colors hover:border-zinc-700"
                >
                  {/* Corner accent */}
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#DB253D]/[0.06] blur-2xl transition-all group-hover:bg-[#DB253D]/[0.12]" />

                  <div className="relative">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900">
                      <feat.icon className="h-7 w-7 text-[#DB253D]" />
                    </div>
                    <h3 className="text-xl font-bold">{feat.title}</h3>
                    <p className="mt-3 leading-relaxed text-zinc-400">{feat.desc}</p>
                  </div>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* STATS                                                            */}
      {/* ================================================================ */}
      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        {/* Background decorations */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#DB253D]/20 to-transparent" />
          <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#DB253D]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-[#DB253D]/[0.03] to-zinc-950" />
        </div>
        <SectionGeometricAccent variant="left" />

        <div className="relative mx-auto max-w-6xl">
          <SectionReveal>
            <div className="text-center">
              <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#DB253D]">Resultados</div>
              <h2 className="text-3xl font-bold md:text-5xl">
                {brand.years} anos de{" "}
                <span className="bg-gradient-to-r from-[#DB253D] to-[#921A26] bg-clip-text text-transparent">
                  excelência
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">
                {brand.tagline}
              </p>
            </div>
          </SectionReveal>

          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            <SectionReveal delay={0}>
              <div className="text-center">
                <div className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                  +<AnimatedCounter target={brand.stats.apartments} suffix="" />
                </div>
                <div className="mt-3 text-sm font-medium uppercase tracking-widest text-zinc-500">
                  Apartamentos
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="text-center">
                <div className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                  +<AnimatedCounter target={200} suffix="mil" />
                </div>
                <div className="mt-3 text-sm font-medium uppercase tracking-widest text-zinc-500">
                  m&sup2; construídos
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="text-center">
                <div className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                  +<AnimatedCounter target={brand.stats.works} suffix="" />
                </div>
                <div className="mt-3 text-sm font-medium uppercase tracking-widest text-zinc-500">
                  Obras
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <div className="text-center">
                <div className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                  +<AnimatedCounter target={brand.stats.clients} suffix="" />
                </div>
                <div className="mt-3 text-sm font-medium uppercase tracking-widest text-zinc-500">
                  Clientes
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Client logos marquee hint */}
          <SectionReveal delay={0.4}>
            <div className="mt-20 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {brand.topClients.slice(0, 18).map((client) => (
                <span key={client} className="text-xs font-medium uppercase tracking-wider text-zinc-700">
                  {client}
                </span>
              ))}
              <span className="text-xs font-medium text-zinc-600">+{brand.topClients.length - 18} outros</span>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ================================================================ */}
      {/* PROJECTS                                                         */}
      {/* ================================================================ */}
      <section id="projetos" className="relative px-6 py-24 md:py-32">
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        <SectionGeometricAccent variant="right" />

        <div className="mx-auto max-w-6xl">
          <SectionReveal>
            <div className="text-center">
              <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#DB253D]">Portfólio</div>
              <h2 className="text-3xl font-bold md:text-5xl">Apresentações Disponíveis</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
                Explore nossas apresentações interativas. Cada projeto conta uma história com dados reais.
              </p>
            </div>
          </SectionReveal>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {projects.map((project, i) => {
              const meta = getProjectMeta(project);
              return (
                <SectionReveal key={project.id} delay={i * 0.15}>
                  <Link href={`/projeto/${project.id}`}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-900/40 backdrop-blur-sm transition-colors hover:border-[#DB253D]/40"
                    >
                      {/* Top gradient bar */}
                      <div className="h-1 w-full bg-gradient-to-r from-[#DB253D] to-[#921A26] opacity-60 transition-opacity group-hover:opacity-100" />

                      <div className="flex flex-1 flex-col p-8">
                        {/* Badge */}
                        <span className="mb-6 inline-flex w-fit items-center rounded-full border border-zinc-700/60 bg-zinc-800/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                          {meta.badge}
                        </span>

                        {/* Project name */}
                        <h3 className="text-2xl font-bold leading-tight">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-sm text-zinc-500">{project.subtitle}</p>
                        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                          {project.type}
                        </p>

                        {/* Metrics */}
                        <div className="mt-auto pt-8">
                          <div className="flex items-end justify-between border-t border-zinc-800/60 pt-6">
                            <div>
                              <div className="text-2xl font-bold text-[#DB253D]">{meta.metric}</div>
                              <div className="mt-0.5 text-xs font-medium uppercase tracking-wider text-zinc-500">
                                {meta.metricLabel}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-semibold text-zinc-300">{meta.detail}</div>
                              <div className="mt-0.5 text-xs font-medium uppercase tracking-wider text-zinc-500">
                                {meta.detailLabel}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Hover arrow */}
                        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors group-hover:text-[#DB253D]">
                          <span>Explorar projeto</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>

                      {/* Hover glow */}
                      <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#DB253D]/0 blur-3xl transition-all group-hover:bg-[#DB253D]/10" />
                    </motion.div>
                  </Link>
                </SectionReveal>
              );
            })}
          </div>

          {/* Budget Tool CTA */}
          <SectionReveal delay={0.5}>
            <Link href="/orcamento">
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group mt-12 flex items-center justify-between overflow-hidden rounded-2xl border border-[#DB253D]/30 bg-gradient-to-r from-[#DB253D]/10 to-zinc-900/60 p-8 backdrop-blur-sm transition-colors hover:border-[#DB253D]/60"
              >
                <div>
                  <span className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#DB253D]/40 bg-[#DB253D]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#DB253D]">
                    <Table2 className="h-3 w-3" /> Ferramenta
                  </span>
                  <h3 className="mt-3 text-2xl font-bold">Gerador de Orçamento Interativo</h3>
                  <p className="mt-2 max-w-xl text-sm text-zinc-400">
                    Preencha os dados do orçamento e gere automaticamente uma apresentação interativa para o seu cliente.
                  </p>
                </div>
                <ArrowRight className="h-8 w-8 text-[#DB253D] transition-transform group-hover:translate-x-2" />
              </motion.div>
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* ================================================================ */}
      {/* FOOTER                                                           */}
      {/* ================================================================ */}
      <footer className="relative border-t border-zinc-800/60 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Brand */}
            <div>
              <Logo variant="full" color="white" className="opacity-70" />
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-zinc-500">
                {brand.description.slice(0, 160)}...
              </p>
              <div className="mt-6 flex gap-3">
                {brand.companies.map((company) => (
                  <span
                    key={company.name}
                    className="rounded-md border border-zinc-800 bg-zinc-900/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-500"
                  >
                    {company.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-6 text-sm font-semibold uppercase tracking-widest text-zinc-400">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-zinc-500">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#DB253D]" />
                  <div>
                    <div>{brand.phone}</div>
                    <div>{brand.whatsapp} (WhatsApp)</div>
                  </div>
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-500">
                  <Mail className="h-4 w-4 shrink-0 text-[#DB253D]" />
                  {brand.email}
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-500">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#DB253D]" />
                  {brand.address}
                </li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h4 className="mb-6 text-sm font-semibold uppercase tracking-widest text-zinc-400">Online</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`https://${brand.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-zinc-500 transition-colors hover:text-white"
                  >
                    <Globe className="h-4 w-4 text-[#DB253D]" />
                    {brand.website}
                  </a>
                </li>
                <li>
                  <a
                    href={`https://instagram.com/${brand.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-zinc-500 transition-colors hover:text-white"
                  >
                    <Instagram className="h-4 w-4 text-[#DB253D]" />
                    {brand.instagram}
                  </a>
                </li>
              </ul>

              <div className="mt-8">
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-zinc-400">Serviços</h4>
                <div className="flex flex-wrap gap-2">
                  {brand.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-500"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-zinc-800/60 pt-8 md:flex-row">
            <p className="text-xs text-zinc-600">
              &copy; {new Date().getFullYear()} {brand.name}. Todos os direitos reservados.
            </p>
            <p className="flex items-center gap-1.5 text-xs text-zinc-500">
              <Sparkles className="h-3 w-3 text-[#DB253D]" />
              Desenvolvido por{" "}
              <a
                href="https://wa.me/5511978826684"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-zinc-400 transition-colors hover:text-white"
              >
                Agência RPK
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/90 text-zinc-400 shadow-lg backdrop-blur-md transition-all hover:border-[#DB253D]/50 hover:text-white hover:shadow-[0_0_20px_rgba(219,37,61,0.2)]"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
