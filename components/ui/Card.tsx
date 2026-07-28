"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      whileHover={{
        y: -5,
        scale: 1.015,
      }}
      className={`
        rounded-3xl
        border
        border-[#24334D]
        bg-[#111C2E]
        shadow-[0_10px_40px_rgba(0,0,0,.35)]
        transition-all
        duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}