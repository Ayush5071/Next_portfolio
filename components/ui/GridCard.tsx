"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface GridCardProps {
  title: string;
  icon: IconType;
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const GridCard: React.FC<GridCardProps> = ({
  title,
  icon: Icon,
  children,
  delay = 0,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`group relative overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-black backdrop-blur-xl p-8 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-500 ${className}`}
    >
      {/* Animated Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon */}
      <div className="absolute top-6 right-6 text-purple-500/60 group-hover:text-purple-400 transition-colors duration-500">
        <Icon className="h-8 w-8" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-purple-400 transition-colors duration-500">
          {title}
        </h3>
        <div className="space-y-4">
          {children}
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-black -z-10" />

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-blue-500/10 to-black opacity-0 transition-opacity duration-500 group-hover:opacity-100 -z-10" />

      {/* Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    </motion.div>
  );
}; 