"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/logo";
import { AnimatedCounter } from "@/components/animated-counter";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from "recharts";
import Link from "next/link";
import {
  ChevronLeft, ChevronRight, Plus, Trash2, FileText, Edit3,
  CheckCircle2, Building2, Calendar, User, MapPin, Hash, Clock,
  TrendingUp, Award, Users, Calculator, Presentation, Download, Home,
} from "lucide-react";

// ---------------------------------------------------------------------------
// TYPES
// ---------------------------------------------------------------------------

interface BudgetItem {
  id: string;
  name: string;
  unit: string;
  qty: number;
  materialUnit: number;
  laborUnit: number;
  editable?: boolean;
}

interface SubCategory {
  name: string;
  items: BudgetItem[];
}

interface BudgetCategory {
  id: number;
  name: string;
  items?: BudgetItem[];
  subcategories?: SubCategory[];
}

interface ProjectInfo {
  cliente: string;
  obra: string;
  endereco: string;
  ac: string;
  proposta: string;
  dataProposta: string;
  validade: string;
}

interface BdiValues {
  nf: number;
  adm: number;
  staff: number;
  accor: number;
  ll: number;
}

// ---------------------------------------------------------------------------
// INITIAL DATA
// ---------------------------------------------------------------------------

function createInitialCategories(): BudgetCategory[] {
  return [
    {
      id: 1, name: "Legalizacoes e Documentos",
      items: [
        { id: "1.1", name: "Fornecimento de ART", unit: "vb", qty: 1, materialUnit: 0, laborUnit: 0 },
        { id: "1.2", name: "Seguro de Obra", unit: "vb", qty: 1, materialUnit: 0, laborUnit: 0 },
        { id: "1.3", name: "Projeto de arquitetura", unit: "unid.", qty: 1, materialUnit: 0, laborUnit: 0 },
        { id: "1.4", name: "Projeto de bombeiros e emissao de AVCB", unit: "unid.", qty: 1, materialUnit: 0, laborUnit: 0 },
        { id: "1.5", name: "Placa de Obra", unit: "unid.", qty: 1, materialUnit: 0, laborUnit: 0 },
      ]
    },
    {
      id: 2, name: "Canteiro de Obras e Areas de Vivencia",
      items: [
        { id: "2.1", name: "Locacao de divisoria naval/tapume", unit: "mes", qty: 0, materialUnit: 0, laborUnit: 0 },
        { id: "2.2", name: "Locacao de vagas de estacionamento", unit: "mes", qty: 0, materialUnit: 0, laborUnit: 0 },
        { id: "2.3", name: "Mobiliarios de apoio de escritorio", unit: "vb", qty: 1, materialUnit: 0, laborUnit: 0 },
        { id: "2.4", name: "Manutencao do Canteiro", unit: "mes", qty: 0, materialUnit: 0, laborUnit: 0 },
        { id: "2.5", name: "Desmontagem e Mobilizacao", unit: "vb", qty: 1, materialUnit: 0, laborUnit: 0 },
      ]
    },
    {
      id: 3, name: "Implantacao da Obra e Apoio Operacional",
      items: [
        { id: "3.1", name: "Mobilizacao e Desmobilizacao", unit: "vb", qty: 1, materialUnit: 0, laborUnit: 0 },
        { id: "3.2", name: "Locacao de equipamentos", unit: "mes", qty: 0, materialUnit: 0, laborUnit: 0 },
        { id: "3.3", name: "Locacao de Cacamba de entulho", unit: "mes", qty: 0, materialUnit: 0, laborUnit: 0 },
        { id: "3.4", name: "Limpeza Constante da Obra", unit: "mes", qty: 0, materialUnit: 0, laborUnit: 0 },
        { id: "3.5", name: "Protecoes de piso, paredes e vidros", unit: "mes", qty: 0, materialUnit: 0, laborUnit: 0 },
        { id: "3.6", name: "Protecoes de elevadores", unit: "mes", qty: 0, materialUnit: 0, laborUnit: 0 },
        { id: "3.7", name: "Isolamentos pontuais (telas, cones, fitas)", unit: "mes", qty: 0, materialUnit: 0, laborUnit: 0 },
        { id: "3.8", name: "Locacao de tapumes em divisoria naval", unit: "mes", qty: 0, materialUnit: 0, laborUnit: 0 },
        { id: "3.9", name: "Adesivagem de Tapume com 3D", unit: "vb", qty: 1, materialUnit: 0, laborUnit: 0 },
      ]
    },
    {
      id: 4, name: "Equipe de Obra",
      items: [
        { id: "4.1", name: "Engenheiro Civil ou Arquiteto - FULL TIME", unit: "mes", qty: 0, materialUnit: 0, laborUnit: 0 },
        { id: "4.2", name: "Encarregado de obra - FULL TIME", unit: "mes", qty: 0, materialUnit: 0, laborUnit: 0 },
        { id: "4.3", name: "Tecnico de Seguranca - PART TIME", unit: "mes", qty: 0, materialUnit: 0, laborUnit: 0 },
        { id: "4.4", name: "Auxiliar de Engenharia - PART TIME", unit: "mes", qty: 0, materialUnit: 0, laborUnit: 0 },
        { id: "4.5", name: "Almoxarife - FULL TIME", unit: "mes", qty: 0, materialUnit: 0, laborUnit: 0 },
        { id: "4.6", name: "Mao de obra de apoio (2 ajudantes)", unit: "mes", qty: 0, materialUnit: 0, laborUnit: 0 },
      ]
    },
    {
      id: 5, name: "Demolicoes e Remocoes",
      items: [
        { id: "5.1", name: "Item de demolicao 1", unit: "vb", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        { id: "5.2", name: "Item de demolicao 2", unit: "vb", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        { id: "5.3", name: "Item de demolicao 3", unit: "vb", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
      ]
    },
    {
      id: 6, name: "Civil",
      items: [
        { id: "6.1", name: "Servico civil 1", unit: "vb", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        { id: "6.2", name: "Servico civil 2", unit: "vb", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        { id: "6.3", name: "Servico civil 3", unit: "vb", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
      ]
    },
    {
      id: 7, name: "Forro e Drywall",
      items: [
        { id: "7.1", name: "Item forro/drywall 1", unit: "m2", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        { id: "7.2", name: "Item forro/drywall 2", unit: "m2", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        { id: "7.3", name: "Item forro/drywall 3", unit: "m2", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        { id: "7.4", name: "Item forro/drywall 4", unit: "m2", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        { id: "7.5", name: "Item forro/drywall 5", unit: "m2", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
      ]
    },
    {
      id: 8, name: "Portas",
      items: [
        { id: "8.1", name: "Porta tipo 1", unit: "unid.", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        { id: "8.2", name: "Porta tipo 2", unit: "unid.", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        { id: "8.3", name: "Porta tipo 3", unit: "unid.", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        { id: "8.4", name: "Porta tipo 4", unit: "unid.", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        { id: "8.5", name: "Porta tipo 5", unit: "unid.", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        { id: "8.6", name: "Porta tipo 6", unit: "unid.", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        { id: "8.7", name: "Porta tipo 7", unit: "unid.", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
      ]
    },
    {
      id: 9, name: "Revestimentos",
      subcategories: [
        { name: "Piso", items: [
          { id: "9.1.1", name: "Revestimento piso 1", unit: "m2", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
          { id: "9.1.2", name: "Revestimento piso 2", unit: "m2", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
          { id: "9.1.3", name: "Revestimento piso 3", unit: "m2", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        ]},
        { name: "Parede", items: [
          { id: "9.2.1", name: "Revestimento parede 1", unit: "m2", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
          { id: "9.2.2", name: "Revestimento parede 2", unit: "m2", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
          { id: "9.2.3", name: "Revestimento parede 3", unit: "m2", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        ]},
        { name: "Teto e Forro", items: [
          { id: "9.3.1", name: "Revestimento teto 1", unit: "m2", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
          { id: "9.3.2", name: "Revestimento teto 2", unit: "m2", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
          { id: "9.3.3", name: "Revestimento teto 3", unit: "m2", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        ]},
        { name: "Rodape", items: [
          { id: "9.4.1", name: "Rodape tipo 1", unit: "ml", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
          { id: "9.4.2", name: "Rodape tipo 2", unit: "ml", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
          { id: "9.4.3", name: "Rodape tipo 3", unit: "ml", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        ]},
      ]
    },
    {
      id: 10, name: "Marmores e Granitos",
      items: [
        { id: "10.1", name: "Marmore/granito 1", unit: "m2", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        { id: "10.2", name: "Marmore/granito 2", unit: "m2", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        { id: "10.3", name: "Marmore/granito 3", unit: "m2", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        { id: "10.4", name: "Marmore/granito 4", unit: "m2", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        { id: "10.5", name: "Marmore/granito 5", unit: "m2", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        { id: "10.6", name: "Marmore/granito 6", unit: "m2", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        { id: "10.7", name: "Marmore/granito 7", unit: "m2", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
      ]
    },
    {
      id: 11, name: "Instalacoes Eletricas",
      items: [
        { id: "11.1", name: "Instalacao eletrica 1", unit: "vb", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        { id: "11.2", name: "Instalacao eletrica 2", unit: "vb", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        { id: "11.3", name: "Instalacao eletrica 3", unit: "vb", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        { id: "11.4", name: "Instalacao eletrica 4", unit: "vb", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        { id: "11.5", name: "Instalacao eletrica 5", unit: "vb", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
      ]
    },
    {
      id: 12, name: "Instalacoes Hidraulicas",
      items: [
        { id: "12.1", name: "Instalacao hidraulica 1", unit: "vb", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        { id: "12.2", name: "Instalacao hidraulica 2", unit: "vb", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        { id: "12.3", name: "Instalacao hidraulica 3", unit: "vb", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        { id: "12.4", name: "Instalacao hidraulica 4", unit: "vb", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        { id: "12.5", name: "Instalacao hidraulica 5", unit: "vb", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
      ]
    },
    {
      id: 13, name: "Loucas e Metais",
      items: [
        { id: "13.1", name: "Louca/metal 1", unit: "unid.", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        { id: "13.2", name: "Louca/metal 2", unit: "unid.", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        { id: "13.3", name: "Louca/metal 3", unit: "unid.", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        { id: "13.4", name: "Louca/metal 4", unit: "unid.", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        { id: "13.5", name: "Louca/metal 5", unit: "unid.", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
      ]
    },
    {
      id: 14, name: "Divisorias e Espelhos",
      items: [
        { id: "14.1", name: "Divisoria/espelho 1", unit: "m2", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        { id: "14.2", name: "Divisoria/espelho 2", unit: "m2", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        { id: "14.3", name: "Divisoria/espelho 3", unit: "m2", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        { id: "14.4", name: "Divisoria/espelho 4", unit: "m2", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
        { id: "14.5", name: "Divisoria/espelho 5", unit: "m2", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
      ]
    },
    {
      id: 15, name: "Finalizacoes",
      items: [
        { id: "15.1", name: "Limpeza Final", unit: "vb", qty: 1, materialUnit: 0, laborUnit: 0 },
        { id: "15.2", name: "Montagem de layout", unit: "vb", qty: 1, materialUnit: 0, laborUnit: 0 },
        { id: "15.3", name: "Item de finalizacao 3", unit: "vb", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
      ]
    },
    {
      id: 16, name: "Gerenciamento",
      items: [
        { id: "16.1", name: "Gerenciamento Itens Adquiridos pela RAP", unit: "%", qty: 0.16, materialUnit: 0, laborUnit: 0 },
      ]
    },
  ];
}

// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------

function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function parseBRL(value: string): number {
  const cleaned = value.replace(/[^\d,.-]/g, "").replace(",", ".");
  const parsed = parseFloat(cleaned);
  return isNaN(parsed) ? 0 : parsed;
}

function getAllItems(cat: BudgetCategory): BudgetItem[] {
  if (cat.items) return cat.items;
  if (cat.subcategories) return cat.subcategories.flatMap((sc) => sc.items);
  return [];
}

function getCategoryTotal(cat: BudgetCategory): number {
  return getAllItems(cat).reduce((sum, item) => {
    const unitPrice = item.materialUnit + item.laborUnit;
    return sum + unitPrice * item.qty;
  }, 0);
}

function getFilledCount(cat: BudgetCategory): number {
  return getAllItems(cat).filter(
    (item) => item.qty > 0 && (item.materialUnit > 0 || item.laborUnit > 0)
  ).length;
}

function getTotalCount(cat: BudgetCategory): number {
  return getAllItems(cat).length;
}

const CHART_COLORS = [
  "#DB253D", "#921A26", "#ef4444", "#f97316", "#eab308",
  "#22c55e", "#14b8a6", "#06b6d4", "#3b82f6", "#6366f1",
  "#8b5cf6", "#a855f7", "#d946ef", "#ec4899", "#f43f5e", "#fb923c",
];

// ---------------------------------------------------------------------------
// CURRENCY INPUT COMPONENT
// ---------------------------------------------------------------------------

function CurrencyInput({
  value,
  onChange,
  className = "",
}: {
  value: number;
  onChange: (v: number) => void;
  className?: string;
}) {
  const [focused, setFocused] = useState(false);
  const [displayValue, setDisplayValue] = useState(value > 0 ? value.toFixed(2).replace(".", ",") : "");

  const handleFocus = () => {
    setFocused(true);
    setDisplayValue(value > 0 ? value.toFixed(2).replace(".", ",") : "");
  };

  const handleBlur = () => {
    setFocused(false);
    const parsed = parseBRL(displayValue);
    onChange(parsed);
    setDisplayValue(parsed > 0 ? parsed.toFixed(2).replace(".", ",") : "");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayValue(e.target.value);
  };

  const shown = focused ? displayValue : (value > 0 ? formatBRL(value) : "");

  return (
    <input
      type="text"
      inputMode="decimal"
      value={shown}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange}
      placeholder="R$ 0,00"
      className={`w-full bg-zinc-900 border border-zinc-700 rounded-md px-2 py-1.5 text-sm text-right text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-[#DB253D] focus:ring-1 focus:ring-[#DB253D]/50 transition-colors ${className}`}
    />
  );
}

// ---------------------------------------------------------------------------
// QUANTITY INPUT COMPONENT
// ---------------------------------------------------------------------------

function QtyInput({
  value,
  onChange,
  step = 1,
}: {
  value: number;
  onChange: (v: number) => void;
  step?: number;
}) {
  const [focused, setFocused] = useState(false);
  const [displayValue, setDisplayValue] = useState(
    value > 0 ? (step < 1 ? value.toFixed(2).replace(".", ",") : String(value)) : ""
  );

  const handleFocus = () => {
    setFocused(true);
    setDisplayValue(value > 0 ? (step < 1 ? value.toFixed(2).replace(".", ",") : String(value)) : "");
  };

  const handleBlur = () => {
    setFocused(false);
    const parsed = parseBRL(displayValue);
    onChange(parsed);
  };

  const shown = focused
    ? displayValue
    : value > 0
    ? step < 1
      ? value.toFixed(2).replace(".", ",")
      : String(value)
    : "";

  return (
    <input
      type="text"
      inputMode="decimal"
      value={shown}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={(e) => setDisplayValue(e.target.value)}
      placeholder="0"
      className="w-20 bg-zinc-900 border border-zinc-700 rounded-md px-2 py-1.5 text-sm text-center text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-[#DB253D] focus:ring-1 focus:ring-[#DB253D]/50 transition-colors"
    />
  );
}

// ---------------------------------------------------------------------------
// MAIN COMPONENT
// ---------------------------------------------------------------------------

export default function OrcamentoPage() {
  const [mode, setMode] = useState<"editor" | "presentation">("editor");
  const [categories, setCategories] = useState<BudgetCategory[]>(createInitialCategories);
  const [activeCategory, setActiveCategory] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [presentationSlide, setPresentationSlide] = useState(0);

  const [projectInfo, setProjectInfo] = useState<ProjectInfo>({
    cliente: "",
    obra: "",
    endereco: "",
    ac: "",
    proposta: "",
    dataProposta: new Date().toISOString().split("T")[0],
    validade: "",
  });

  const [bdi, setBdi] = useState<BdiValues>({
    nf: 5.65,
    adm: 8.0,
    staff: 3.0,
    accor: 1.0,
    ll: 8.0,
  });

  // ---------- COMPUTED VALUES ----------

  const categoryTotals = useMemo(
    () => categories.map((cat) => getCategoryTotal(cat)),
    [categories]
  );

  const grandTotal = useMemo(
    () => categoryTotals.reduce((a, b) => a + b, 0),
    [categoryTotals]
  );

  const bdiMultiplier = useMemo(() => {
    const sum = bdi.nf + bdi.adm + bdi.staff + bdi.accor + bdi.ll;
    return 1 / (1 - sum / 100);
  }, [bdi]);

  const grandTotalWithBdi = grandTotal * bdiMultiplier;

  const chartData = useMemo(
    () =>
      categories
        .map((cat, i) => ({
          name: `${cat.id}. ${cat.name.length > 18 ? cat.name.slice(0, 18) + "..." : cat.name}`,
          fullName: cat.name,
          value: categoryTotals[i],
        }))
        .filter((d) => d.value > 0),
    [categories, categoryTotals]
  );

  const topItems = useMemo(() => {
    const all: { name: string; category: string; total: number }[] = [];
    categories.forEach((cat) => {
      getAllItems(cat).forEach((item) => {
        const total = (item.materialUnit + item.laborUnit) * item.qty;
        if (total > 0) {
          all.push({ name: item.name, category: cat.name, total });
        }
      });
    });
    return all.sort((a, b) => b.total - a.total).slice(0, 5);
  }, [categories]);

  const teamCosts = useMemo(() => {
    const cat4 = categories.find((c) => c.id === 4);
    if (!cat4 || !cat4.items) return [];
    return cat4.items
      .filter((item) => item.qty > 0 && (item.materialUnit > 0 || item.laborUnit > 0))
      .map((item) => ({
        name: item.name,
        monthly: item.materialUnit + item.laborUnit,
        months: item.qty,
        total: (item.materialUnit + item.laborUnit) * item.qty,
      }));
  }, [categories]);

  // ---------- UPDATERS ----------

  const updateItem = useCallback(
    (catIndex: number, itemId: string, field: keyof BudgetItem, value: string | number) => {
      setCategories((prev) => {
        const next = prev.map((cat, ci) => {
          if (ci !== catIndex) return cat;
          if (cat.items) {
            return {
              ...cat,
              items: cat.items.map((item) =>
                item.id === itemId ? { ...item, [field]: value } : item
              ),
            };
          }
          if (cat.subcategories) {
            return {
              ...cat,
              subcategories: cat.subcategories.map((sc) => ({
                ...sc,
                items: sc.items.map((item) =>
                  item.id === itemId ? { ...item, [field]: value } : item
                ),
              })),
            };
          }
          return cat;
        });
        return next;
      });
    },
    []
  );

  const addItem = useCallback(
    (catIndex: number, subcatIndex?: number) => {
      setCategories((prev) => {
        const next = [...prev];
        const cat = { ...next[catIndex] };
        if (subcatIndex !== undefined && cat.subcategories) {
          const subs = [...cat.subcategories];
          const sub = { ...subs[subcatIndex] };
          const newId = `${cat.id}.${subcatIndex + 1}.${sub.items.length + 1}`;
          sub.items = [
            ...sub.items,
            { id: newId, name: "Novo item", unit: sub.items[0]?.unit || "vb", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
          ];
          subs[subcatIndex] = sub;
          cat.subcategories = subs;
        } else if (cat.items) {
          const newId = `${cat.id}.${cat.items.length + 1}`;
          cat.items = [
            ...cat.items,
            { id: newId, name: "Novo item", unit: cat.items[0]?.unit || "vb", qty: 0, materialUnit: 0, laborUnit: 0, editable: true },
          ];
        }
        next[catIndex] = cat;
        return next;
      });
    },
    []
  );

  const removeItem = useCallback(
    (catIndex: number, itemId: string) => {
      setCategories((prev) => {
        const next = [...prev];
        const cat = { ...next[catIndex] };
        if (cat.items) {
          cat.items = cat.items.filter((item) => item.id !== itemId);
        }
        if (cat.subcategories) {
          cat.subcategories = cat.subcategories.map((sc) => ({
            ...sc,
            items: sc.items.filter((item) => item.id !== itemId),
          }));
        }
        next[catIndex] = cat;
        return next;
      });
    },
    []
  );

  // ---------- RENDER ITEM ROW ----------

  const renderItemRow = (item: BudgetItem, catIndex: number) => {
    const unitPrice = item.materialUnit + item.laborUnit;
    const total = unitPrice * item.qty;

    return (
      <tr key={item.id} className="border-b border-zinc-800/50 hover:bg-zinc-900/50 transition-colors">
        <td className="py-2.5 px-3 text-zinc-500 text-sm font-mono">{item.id}</td>
        <td className="py-2.5 px-3">
          {item.editable ? (
            <input
              type="text"
              value={item.name}
              onChange={(e) => updateItem(catIndex, item.id, "name", e.target.value)}
              className="w-full bg-transparent border-b border-zinc-700 text-sm text-zinc-200 focus:outline-none focus:border-[#DB253D] transition-colors py-0.5"
            />
          ) : (
            <span className="text-sm text-zinc-300">{item.name}</span>
          )}
        </td>
        <td className="py-2.5 px-3 text-center text-sm text-zinc-400">{item.unit}</td>
        <td className="py-2.5 px-3">
          <QtyInput
            value={item.qty}
            onChange={(v) => updateItem(catIndex, item.id, "qty", v)}
            step={item.unit === "%" ? 0.01 : 1}
          />
        </td>
        <td className="py-2.5 px-3">
          <CurrencyInput
            value={item.materialUnit}
            onChange={(v) => updateItem(catIndex, item.id, "materialUnit", v)}
          />
        </td>
        <td className="py-2.5 px-3">
          <CurrencyInput
            value={item.laborUnit}
            onChange={(v) => updateItem(catIndex, item.id, "laborUnit", v)}
          />
        </td>
        <td className="py-2.5 px-3 text-right text-sm text-zinc-300 font-mono">
          {unitPrice > 0 ? formatBRL(unitPrice) : "-"}
        </td>
        <td className="py-2.5 px-3 text-right text-sm text-white font-semibold font-mono">
          {total > 0 ? formatBRL(total) : "-"}
        </td>
        <td className="py-2.5 px-1 w-8">
          {item.editable && (
            <button
              onClick={() => removeItem(catIndex, item.id)}
              className="text-zinc-600 hover:text-red-500 transition-colors p-1"
              title="Remover item"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          )}
        </td>
      </tr>
    );
  };

  // ---------- RENDER TABLE ----------

  const renderCategoryTable = (cat: BudgetCategory, catIndex: number) => {
    const catTotal = categoryTotals[catIndex];

    return (
      <motion.div
        key={cat.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#DB253D]/10 text-[#DB253D] font-bold text-sm">
            {cat.id}
          </span>
          <h2 className="text-lg font-semibold text-white">{cat.name}</h2>
          <span className="ml-auto text-sm text-zinc-400">
            Subtotal: <span className="text-white font-semibold">{formatBRL(catTotal)}</span>
          </span>
        </div>

        {cat.subcategories ? (
          cat.subcategories.map((sub, subIdx) => (
            <div key={sub.name} className="mb-6">
              <h3 className="text-sm font-medium text-[#DB253D]/80 mb-2 pl-2 border-l-2 border-[#DB253D]/30">
                {sub.name}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-xs text-zinc-500 uppercase tracking-wider">
                      <th className="py-2 px-3 text-left w-16">Item</th>
                      <th className="py-2 px-3 text-left">Descricao</th>
                      <th className="py-2 px-3 text-center w-16">Unid.</th>
                      <th className="py-2 px-3 text-center w-24">Qtd.</th>
                      <th className="py-2 px-3 text-right w-32">Material</th>
                      <th className="py-2 px-3 text-right w-32">Mao de Obra</th>
                      <th className="py-2 px-3 text-right w-28">P. Unit.</th>
                      <th className="py-2 px-3 text-right w-28">Total</th>
                      <th className="w-8"></th>
                    </tr>
                  </thead>
                  <tbody>{sub.items.map((item) => renderItemRow(item, catIndex))}</tbody>
                </table>
              </div>
              <button
                onClick={() => addItem(catIndex, subIdx)}
                className="mt-2 ml-2 flex items-center gap-1.5 text-xs text-zinc-500 hover:text-[#DB253D] transition-colors"
              >
                <Plus className="w-3.5 h-3.5" /> Adicionar item
              </button>
            </div>
          ))
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-xs text-zinc-500 uppercase tracking-wider">
                    <th className="py-2 px-3 text-left w-16">Item</th>
                    <th className="py-2 px-3 text-left">Descricao</th>
                    <th className="py-2 px-3 text-center w-16">Unid.</th>
                    <th className="py-2 px-3 text-center w-24">Qtd.</th>
                    <th className="py-2 px-3 text-right w-32">Material</th>
                    <th className="py-2 px-3 text-right w-32">Mao de Obra</th>
                    <th className="py-2 px-3 text-right w-28">P. Unit.</th>
                    <th className="py-2 px-3 text-right w-28">Total</th>
                    <th className="w-8"></th>
                  </tr>
                </thead>
                <tbody>{cat.items!.map((item) => renderItemRow(item, catIndex))}</tbody>
              </table>
            </div>
            {cat.items!.some((i) => i.editable) && (
              <button
                onClick={() => addItem(catIndex)}
                className="mt-2 ml-2 flex items-center gap-1.5 text-xs text-zinc-500 hover:text-[#DB253D] transition-colors"
              >
                <Plus className="w-3.5 h-3.5" /> Adicionar item
              </button>
            )}
          </>
        )}
      </motion.div>
    );
  };

  // ---------- EDITOR MODE ----------

  const renderEditor = () => (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-[1800px] mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-xs font-medium text-zinc-400 transition-all hover:border-[#DB253D]/50 hover:text-white"
            >
              <Home className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Início</span>
            </Link>
            <Logo variant="full" color="white" className="h-8" />
            <div className="h-6 w-px bg-zinc-700" />
            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <FileText className="w-4 h-4" />
              <span>Orçamento Interativo</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 bg-zinc-900 rounded-lg px-4 py-2 border border-zinc-800">
              <TrendingUp className="w-4 h-4 text-[#DB253D]" />
              <span className="text-xs text-zinc-400">Total Geral:</span>
              <span className="text-sm font-bold text-white">{formatBRL(grandTotalWithBdi)}</span>
            </div>
            <button
              onClick={() => { setMode("presentation"); setPresentationSlide(0); }}
              className="flex items-center gap-2 bg-[#DB253D] hover:bg-[#921A26] text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors"
            >
              <Presentation className="w-4 h-4" />
              Gerar Apresentacao
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 max-w-[1800px] mx-auto w-full">
        {/* SIDEBAR */}
        <aside
          className={`${
            sidebarOpen ? "w-72" : "w-0 overflow-hidden"
          } transition-all duration-300 border-r border-zinc-800 bg-zinc-950 flex-shrink-0`}
        >
          <div className="sticky top-16 p-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="text-xs uppercase text-zinc-500 tracking-wider mb-3 px-2">Categorias</div>
            {categories.map((cat, idx) => {
              const filled = getFilledCount(cat);
              const total = getTotalCount(cat);
              const catVal = categoryTotals[idx];
              const isActive = activeCategory === idx;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(idx)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg transition-all text-sm group ${
                    isActive
                      ? "bg-[#DB253D]/10 text-white border border-[#DB253D]/30"
                      : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded text-xs font-bold ${
                        isActive ? "bg-[#DB253D] text-white" : "bg-zinc-800 text-zinc-500"
                      }`}
                    >
                      {cat.id}
                    </span>
                    <span className="truncate flex-1">{cat.name}</span>
                  </div>
                  <div className="flex items-center justify-between mt-1.5 ml-8">
                    <div className="flex items-center gap-1">
                      {filled > 0 ? (
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      ) : (
                        <div className="w-3 h-3 rounded-full border border-zinc-600" />
                      )}
                      <span className="text-xs text-zinc-500">
                        {filled}/{total}
                      </span>
                    </div>
                    {catVal > 0 && (
                      <span className="text-xs font-mono text-zinc-500">{formatBRL(catVal)}</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </aside>

        {/* TOGGLE SIDEBAR */}
        <button
          onClick={() => setSidebarOpen((o) => !o)}
          className="hidden lg:flex items-center justify-center w-5 flex-shrink-0 bg-zinc-900 hover:bg-zinc-800 border-r border-zinc-800 transition-colors"
        >
          {sidebarOpen ? <ChevronLeft className="w-3.5 h-3.5 text-zinc-500" /> : <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />}
        </button>

        {/* MAIN CONTENT */}
        <main className="flex-1 min-w-0 p-6 space-y-8">
          {/* PROJECT INFO */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              Dados do Projeto
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {([
                { key: "cliente", label: "Cliente", icon: User, placeholder: "Nome do cliente", type: "text" },
                { key: "obra", label: "Obra", icon: Building2, placeholder: "Nome da obra", type: "text" },
                { key: "endereco", label: "Endereco", icon: MapPin, placeholder: "Endereco completo", type: "text" },
                { key: "ac", label: "A/C", icon: User, placeholder: "Aos cuidados de", type: "text" },
                { key: "proposta", label: "Proposta No.", icon: Hash, placeholder: "RAP-2026-001", type: "text" },
                { key: "dataProposta", label: "Data Proposta", icon: Calendar, placeholder: "", type: "date" },
                { key: "validade", label: "Validade", icon: Clock, placeholder: "30 dias", type: "text" },
              ] as const).map(({ key, label, icon: Icon, placeholder, type }) => (
                <div key={key}>
                  <label className="text-xs text-zinc-500 mb-1.5 flex items-center gap-1.5">
                    <Icon className="w-3 h-3" />
                    {label}
                  </label>
                  <input
                    type={type || "text"}
                    value={projectInfo[key as keyof ProjectInfo]}
                    onChange={(e) => setProjectInfo((p) => ({ ...p, [key]: e.target.value }))}
                    placeholder={placeholder}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-[#DB253D] focus:ring-1 focus:ring-[#DB253D]/50 transition-colors"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CATEGORY CONTENT */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
            <AnimatePresence mode="wait">
              {renderCategoryTable(categories[activeCategory], activeCategory)}
            </AnimatePresence>
          </div>

          {/* NAVIGATION */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setActiveCategory((c) => Math.max(0, c - 1))}
              disabled={activeCategory === 0}
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Categoria anterior
            </button>
            <span className="text-xs text-zinc-600">
              {activeCategory + 1} de {categories.length}
            </span>
            <button
              onClick={() => setActiveCategory((c) => Math.min(categories.length - 1, c + 1))}
              disabled={activeCategory === categories.length - 1}
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              Proxima categoria
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* BDI SECTION */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Calculator className="w-4 h-4" />
              BDI - Beneficios e Despesas Indiretas
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {([
                { key: "nf", label: "NF (ISS/PIS/COFINS)" },
                { key: "adm", label: "Administracao" },
                { key: "staff", label: "Staff" },
                { key: "accor", label: "Acordo Comercial" },
                { key: "ll", label: "Lucro Liquido" },
              ] as const).map(({ key, label }) => (
                <div key={key}>
                  <label className="text-xs text-zinc-500 mb-1.5 block">{label}</label>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.01"
                      value={bdi[key]}
                      onChange={(e) => setBdi((b) => ({ ...b, [key]: parseFloat(e.target.value) || 0 }))}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-md px-3 py-2 pr-8 text-sm text-zinc-100 focus:outline-none focus:border-[#DB253D] focus:ring-1 focus:ring-[#DB253D]/50 transition-colors"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-500">%</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-zinc-800 flex flex-wrap items-center gap-6">
              <div>
                <span className="text-xs text-zinc-500">Soma BDI:</span>
                <span className="ml-2 text-sm font-semibold text-white">
                  {(bdi.nf + bdi.adm + bdi.staff + bdi.accor + bdi.ll).toFixed(2)}%
                </span>
              </div>
              <div>
                <span className="text-xs text-zinc-500">Multiplicador:</span>
                <span className="ml-2 text-sm font-semibold text-[#DB253D]">
                  {bdiMultiplier.toFixed(4)}x
                </span>
              </div>
              <div className="ml-auto">
                <span className="text-xs text-zinc-500">Total sem BDI:</span>
                <span className="ml-2 text-sm text-zinc-300">{formatBRL(grandTotal)}</span>
              </div>
              <div>
                <span className="text-xs text-zinc-500">Total com BDI:</span>
                <span className="ml-2 text-lg font-bold text-white">{formatBRL(grandTotalWithBdi)}</span>
              </div>
            </div>
          </div>

          {/* LIVE SUMMARY */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Resumo por Categoria
            </h2>
            <div className="space-y-2">
              {categories.map((cat, idx) => {
                const catVal = categoryTotals[idx];
                const pct = grandTotal > 0 ? (catVal / grandTotal) * 100 : 0;

                return (
                  <div
                    key={cat.id}
                    className="flex items-center gap-3 group cursor-pointer"
                    onClick={() => setActiveCategory(idx)}
                  >
                    <span className="text-xs text-zinc-500 w-6 text-right font-mono">{cat.id}</span>
                    <span className="text-sm text-zinc-400 group-hover:text-white transition-colors w-56 truncate">
                      {cat.name}
                    </span>
                    <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: CHART_COLORS[idx % CHART_COLORS.length] }}
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <span className="text-xs text-zinc-500 w-12 text-right">{pct.toFixed(1)}%</span>
                    <span className="text-sm font-mono text-zinc-300 w-28 text-right">
                      {catVal > 0 ? formatBRL(catVal) : "-"}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 pt-4 border-t border-zinc-800 flex justify-end items-center gap-4">
              <span className="text-sm text-zinc-400">TOTAL GERAL (com BDI):</span>
              <span className="text-2xl font-bold text-white">{formatBRL(grandTotalWithBdi)}</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );

  // ---------- PRESENTATION MODE ----------

  const slides = useMemo(() => {
    const s: { id: string; title: string; render: () => React.ReactNode }[] = [];

    // Slide 0 - Cover
    s.push({
      id: "cover",
      title: "Capa",
      render: () => (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-8">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <Logo variant="full" color="white" className="h-16 mb-8" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Proposta Orcamentaria
          </motion.h1>
          {projectInfo.obra && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-zinc-400 mb-2"
            >
              {projectInfo.obra}
            </motion.p>
          )}
          {projectInfo.cliente && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-zinc-500"
            >
              {projectInfo.cliente}
            </motion.p>
          )}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 bg-zinc-900/80 border border-zinc-700 rounded-2xl px-10 py-6"
          >
            <p className="text-sm text-zinc-400 mb-1">Valor Total da Proposta</p>
            <div className="text-4xl font-bold text-[#DB253D]">
              <AnimatedCounter target={Math.round(grandTotalWithBdi)} prefix="R$ " duration={2} />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-left"
          >
            {projectInfo.proposta && (
              <div>
                <span className="text-xs text-zinc-500 block">Proposta</span>
                <span className="text-sm text-white">{projectInfo.proposta}</span>
              </div>
            )}
            {projectInfo.dataProposta && (
              <div>
                <span className="text-xs text-zinc-500 block">Data</span>
                <span className="text-sm text-white">{new Date(projectInfo.dataProposta).toLocaleDateString("pt-BR")}</span>
              </div>
            )}
            {projectInfo.validade && (
              <div>
                <span className="text-xs text-zinc-500 block">Validade</span>
                <span className="text-sm text-white">{projectInfo.validade}</span>
              </div>
            )}
            {projectInfo.ac && (
              <div>
                <span className="text-xs text-zinc-500 block">A/C</span>
                <span className="text-sm text-white">{projectInfo.ac}</span>
              </div>
            )}
          </motion.div>
        </div>
      ),
    });

    // Slide 1 - Bar chart breakdown
    s.push({
      id: "breakdown",
      title: "Distribuicao por Categoria",
      render: () => (
        <div className="px-8 py-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-white mb-6"
          >
            Distribuicao por Categoria
          </motion.h2>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <ResponsiveContainer width="100%" height={500}>
              <BarChart data={chartData} layout="vertical" margin={{ left: 20, right: 40 }}>
                <XAxis type="number" tickFormatter={(v) => `R$ ${(v / 1000).toFixed(0)}k`} stroke="#52525b" fontSize={11} />
                <YAxis type="category" dataKey="name" width={200} stroke="#52525b" fontSize={11} tick={{ fill: "#a1a1aa" }} />
                <Tooltip
                  formatter={(value) => formatBRL(Number(value))}
                  labelStyle={{ color: "#fff" }}
                  contentStyle={{ backgroundColor: "#18181b", border: "1px solid #3f3f46", borderRadius: "8px" }}
                  itemStyle={{ color: "#DB253D" }}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} animationDuration={1200}>
                  {chartData.map((_, i) => (
                    <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      ),
    });

    // Slide 2 - Pie chart
    s.push({
      id: "pie",
      title: "Proporcao do Orcamento",
      render: () => (
        <div className="px-8 py-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-white mb-6"
          >
            Proporcao do Orcamento
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center"
          >
            <ResponsiveContainer width="100%" height={500}>
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={180}
                  innerRadius={80}
                  paddingAngle={2}
                  animationDuration={1200}
                  label={({ name, percent }) => `${name} (${((percent ?? 0) * 100).toFixed(1)}%)`}
                  labelLine={{ stroke: "#52525b" }}
                >
                  {chartData.map((_, i) => (
                    <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => formatBRL(Number(value))}
                  contentStyle={{ backgroundColor: "#18181b", border: "1px solid #3f3f46", borderRadius: "8px" }}
                  itemStyle={{ color: "#DB253D" }}
                />
                <Legend
                  formatter={(value) => <span className="text-xs text-zinc-400">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      ),
    });

    // Slide 3 - Top 5
    s.push({
      id: "top5",
      title: "Top 5 Itens Mais Caros",
      render: () => (
        <div className="px-8 py-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
          >
            <Award className="w-7 h-7 text-[#DB253D]" />
            Top 5 Itens Mais Relevantes
          </motion.h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {topItems.map((item, i) => {
              const pct = grandTotal > 0 ? (item.total / grandTotal) * 100 : 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.15 }}
                  className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-5 flex items-center gap-4"
                >
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#DB253D]/20 text-[#DB253D] font-bold text-lg">
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium truncate">{item.name}</p>
                    <p className="text-xs text-zinc-500">{item.category}</p>
                    <div className="mt-2 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#DB253D] rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
                      />
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-lg font-bold text-white">{formatBRL(item.total)}</p>
                    <p className="text-xs text-zinc-500">{pct.toFixed(1)}% do total</p>
                  </div>
                </motion.div>
              );
            })}
            {topItems.length === 0 && (
              <p className="text-center text-zinc-500 py-12">Nenhum item com valor preenchido.</p>
            )}
          </div>
        </div>
      ),
    });

    // Slide 4 - Team breakdown
    s.push({
      id: "team",
      title: "Equipe de Obra",
      render: () => (
        <div className="px-8 py-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
          >
            <Users className="w-7 h-7 text-[#DB253D]" />
            Equipe de Obra
          </motion.h2>
          {teamCosts.length > 0 ? (
            <div className="max-w-3xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-xs text-zinc-500 uppercase tracking-wider border-b border-zinc-800">
                      <th className="py-3 px-4 text-left">Funcao</th>
                      <th className="py-3 px-4 text-right">Custo/Mes</th>
                      <th className="py-3 px-4 text-right">Meses</th>
                      <th className="py-3 px-4 text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teamCosts.map((tc, i) => (
                      <motion.tr
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="border-b border-zinc-800/50"
                      >
                        <td className="py-3 px-4 text-sm text-zinc-300">{tc.name}</td>
                        <td className="py-3 px-4 text-sm text-right text-zinc-400 font-mono">{formatBRL(tc.monthly)}</td>
                        <td className="py-3 px-4 text-sm text-right text-zinc-400">{tc.months}</td>
                        <td className="py-3 px-4 text-sm text-right text-white font-semibold font-mono">{formatBRL(tc.total)}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="border-t border-zinc-700">
                      <td colSpan={3} className="py-3 px-4 text-sm text-zinc-400 font-medium">Total Equipe</td>
                      <td className="py-3 px-4 text-right text-lg font-bold text-[#DB253D] font-mono">
                        {formatBRL(teamCosts.reduce((a, b) => a + b.total, 0))}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          ) : (
            <p className="text-center text-zinc-500 py-12">Nenhum membro de equipe configurado.</p>
          )}
        </div>
      ),
    });

    // Slide 5 - BDI Summary
    s.push({
      id: "bdi",
      title: "BDI",
      render: () => (
        <div className="px-8 py-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
          >
            <Calculator className="w-7 h-7 text-[#DB253D]" />
            BDI - Beneficios e Despesas Indiretas
          </motion.h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              { label: "NF (ISS/PIS/COFINS)", value: bdi.nf },
              { label: "Administracao", value: bdi.adm },
              { label: "Staff", value: bdi.staff },
              { label: "Acordo Comercial", value: bdi.accor },
              { label: "Lucro Liquido", value: bdi.ll },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center justify-between bg-zinc-900/80 border border-zinc-800 rounded-lg p-4"
              >
                <span className="text-sm text-zinc-300">{item.label}</span>
                <span className="text-lg font-semibold text-white">{item.value.toFixed(2)}%</span>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-[#DB253D]/10 border border-[#DB253D]/30 rounded-xl p-6 mt-6 text-center"
            >
              <p className="text-sm text-zinc-400 mb-2">Multiplicador BDI</p>
              <p className="text-4xl font-bold text-[#DB253D]">{bdiMultiplier.toFixed(4)}x</p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-zinc-500">Custo Direto</p>
                  <p className="text-lg font-semibold text-white">{formatBRL(grandTotal)}</p>
                </div>
                <div>
                  <p className="text-xs text-zinc-500">Preco de Venda</p>
                  <p className="text-lg font-semibold text-white">{formatBRL(grandTotalWithBdi)}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ),
    });

    // Slide 6 - Grand Total
    s.push({
      id: "total",
      title: "Total Geral",
      render: () => (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <Logo variant="icon" color="white" className="h-20 mb-8 mx-auto opacity-20" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-semibold text-zinc-400 mb-2"
          >
            Valor Total da Proposta
          </motion.h2>
          {projectInfo.obra && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-zinc-500 mb-8"
            >
              {projectInfo.obra}
            </motion.p>
          )}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-[#DB253D]/20 to-[#921A26]/20 border border-[#DB253D]/30 rounded-3xl px-16 py-10"
          >
            <div className="text-6xl md:text-7xl font-bold text-white">
              <AnimatedCounter target={Math.round(grandTotalWithBdi)} prefix="R$ " duration={2.5} />
            </div>
            <p className="text-sm text-zinc-400 mt-3">Inclui BDI de {bdiMultiplier.toFixed(4)}x</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 grid grid-cols-3 gap-8"
          >
            <div>
              <p className="text-xs text-zinc-500">Custo Direto</p>
              <p className="text-lg font-semibold text-zinc-300">{formatBRL(grandTotal)}</p>
            </div>
            <div>
              <p className="text-xs text-zinc-500">BDI</p>
              <p className="text-lg font-semibold text-zinc-300">{formatBRL(grandTotalWithBdi - grandTotal)}</p>
            </div>
            <div>
              <p className="text-xs text-zinc-500">Categorias</p>
              <p className="text-lg font-semibold text-zinc-300">{chartData.length} com valor</p>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-16 text-xs text-zinc-600"
          >
            {projectInfo.proposta && `Proposta ${projectInfo.proposta} | `}
            {projectInfo.validade && `Validade: ${projectInfo.validade} | `}
            Grupo RAP Engenharia
          </motion.p>
        </div>
      ),
    });

    return s;
  }, [chartData, grandTotal, grandTotalWithBdi, bdiMultiplier, projectInfo, topItems, teamCosts, bdi]);

  const renderPresentation = () => (
    <div className="min-h-screen flex flex-col">
      {/* PRESENTATION HEADER */}
      <header className="sticky top-0 z-50 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-xs font-medium text-zinc-400 transition-all hover:border-[#DB253D]/50 hover:text-white"
            >
              <Home className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Início</span>
            </Link>
            <div className="h-5 w-px bg-zinc-700" />
            <button
              onClick={() => setMode("editor")}
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              <Edit3 className="w-4 h-4" />
              Voltar ao Editor
            </button>
          </div>
          <div className="flex items-center gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                onClick={() => setPresentationSlide(i)}
                className={`w-8 h-1.5 rounded-full transition-all ${
                  presentationSlide === i ? "bg-[#DB253D] w-12" : "bg-zinc-700 hover:bg-zinc-600"
                }`}
                title={slide.title}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPresentationSlide((s) => Math.max(0, s - 1))}
              disabled={presentationSlide === 0}
              className="p-2 text-zinc-400 hover:text-white disabled:opacity-30 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs text-zinc-500 min-w-[60px] text-center">
              {presentationSlide + 1} / {slides.length}
            </span>
            <button
              onClick={() => setPresentationSlide((s) => Math.min(slides.length - 1, s + 1))}
              disabled={presentationSlide === slides.length - 1}
              className="p-2 text-zinc-400 hover:text-white disabled:opacity-30 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* SLIDE CONTENT */}
      <main className="flex-1 max-w-7xl mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={presentationSlide}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.35 }}
          >
            {slides[presentationSlide].render()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );

  // ---------- MAIN RENDER ----------

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <AnimatePresence mode="wait">
        {mode === "editor" ? (
          <motion.div key="editor" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {renderEditor()}
          </motion.div>
        ) : (
          <motion.div key="presentation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {renderPresentation()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
