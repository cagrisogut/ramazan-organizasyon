"use client";

import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import { DAILY_FLOW_TEMPLATE } from "@/lib/data";
import { Clock, Baby, Users } from "lucide-react";

export default function DailyFlowView() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Children's Flow */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
            >
                <GlassCard className="h-full p-6 bg-gradient-to-br from-pink-900/20 to-purple-900/20 border-pink-500/30">
                    <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
                        <div className="p-3 rounded-full bg-pink-500/20 text-pink-300">
                            <Baby size={28} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-cinzel font-bold text-white">Çocuklar İçin</h3>
                            <p className="text-pink-300/60 text-sm">Her Akşam 20:00 - 24:00</p>
                        </div>
                    </div>

                    <div className="relative border-l-2 border-white/10 ml-3 space-y-8 pl-8 py-2">
                        {DAILY_FLOW_TEMPLATE.children.map((item, idx) => (
                            <div key={idx} className="relative group">
                                <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-slate-900 border-2 border-pink-500 group-hover:bg-pink-500 transition-colors" />
                                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-1">
                                    <span className="text-pink-400 font-mono font-bold text-lg">
                                        {item.time.split(' - ')[0]}
                                    </span>
                                    <span className="text-xs text-slate-500 font-mono hidden sm:inline-block">
                                        - {item.time.split(' - ')[1]}
                                    </span>
                                </div>
                                <h4 className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors">
                                    {item.activity}
                                </h4>
                            </div>
                        ))}
                    </div>
                </GlassCard>
            </motion.div>

            {/* Adults' Flow */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
            >
                <GlassCard className="h-full p-6 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-blue-500/30">
                    <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
                        <div className="p-3 rounded-full bg-blue-500/20 text-blue-300">
                            <Users size={28} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-cinzel font-bold text-white">Büyükler İçin</h3>
                            <p className="text-blue-300/60 text-sm">Her Akşam 20:00 - 24:00</p>
                        </div>
                    </div>

                    <div className="relative border-l-2 border-white/10 ml-3 space-y-8 pl-8 py-2">
                        {DAILY_FLOW_TEMPLATE.adults.map((item, idx) => (
                            <div key={idx} className="relative group">
                                <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-slate-900 border-2 border-blue-500 group-hover:bg-blue-500 transition-colors" />
                                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-1">
                                    <span className="text-blue-400 font-mono font-bold text-lg">
                                        {item.time.split(' - ')[0]}
                                    </span>
                                    <span className="text-xs text-slate-500 font-mono hidden sm:inline-block">
                                        - {item.time.split(' - ')[1]}
                                    </span>
                                </div>
                                <h4 className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors">
                                    {item.activity}
                                </h4>
                            </div>
                        ))}
                    </div>
                </GlassCard>
            </motion.div>
        </div>
    );
}
