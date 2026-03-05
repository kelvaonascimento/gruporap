"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedProgressProps {
  value: number;
  label?: string;
  className?: string;
  color?: string;
  showLabel?: boolean;
  height?: string;
}

export function AnimatedProgress({ value, label, className, color = "bg-[#DB253D]", showLabel = true, height = "h-3" }: AnimatedProgressProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className={cn("w-full", className)}>
      {showLabel && label && (
        <div className="flex justify-between mb-1.5">
          <span className="text-sm text-zinc-400">{label}</span>
          <span className="text-sm font-semibold text-white">{value}%</span>
        </div>
      )}
      <div className={cn("w-full bg-zinc-800 rounded-full overflow-hidden", height)}>
        <motion.div
          className={cn("h-full rounded-full", color)}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${value}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  );
}
