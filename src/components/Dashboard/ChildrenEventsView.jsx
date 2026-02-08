"use client";

import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import { CHILDREN_EVENT_PLAN } from "@/lib/data";
import { Sparkles, Music, Palette, Gift } from "lucide-react";

export default function ChildrenEventsView() {
    const getIcon = (category) => {
        if (category.includes("Sahne")) return <Music className="text-pink-400" size={24} />;
        if (category.includes("Atölye")) return <Palette className="text-blue-400" size={24} />;
        return <Gift className="text-purple-400" size={24} />;
    };

    const getColor = (category) => {
        if (category.includes("Sahne")) return "from-pink-500/20 to-rose-500/10 border-pink-500/30";
        if (category.includes("Atölye")) return "from-blue-500/20 to-cyan-500/10 border-blue-500/30";
        return "from-purple-500/20 to-violet-500/10 border-purple-500/30";
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CHILDREN_EVENT_PLAN.map((section, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                >
                    <GlassCard className={`h-full p-6 bg-gradient-to-br ${getColor(section.category)}`}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 rounded-full bg-white/10 shadow-inner">
                                {getIcon(section.category)}
                            </div>
                            <h3 className="text-xl font-cinzel font-bold text-white">
                                {section.category}
                            </h3>
                        </div>

                        <div className="space-y-3">
                            {section.items.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
                                >
                                    <div className="flex items-center gap-3">
                                        <Sparkles size={14} className="text-ramadan-gold opacity-60" />
                                        <span className="text-slate-200 font-medium">{item.title}</span>
                                    </div>
                                    {item.duration && (
                                        <span className="text-xs font-mono text-slate-400 bg-black/20 px-2 py-1 rounded">
                                            {item.duration}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </motion.div>
            ))}
        </div>
    );
}
