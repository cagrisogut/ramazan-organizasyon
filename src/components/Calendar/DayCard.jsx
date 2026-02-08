"use client";

import GlassCard from "@/components/ui/GlassCard";
import { Sparkles, MapPin } from "lucide-react";

export default function DayCard({ dayData, onClick }) {
    const isVillage = !!dayData.villageEvent;
    const isBayram = !!dayData.isBayram;
    const isKadirs = dayData.isSpecial;

    // Bayram Card
    if (isBayram) {
        return (
            <GlassCard
                onClick={onClick}
                className="cursor-pointer group h-full flex flex-col justify-between p-4 bg-gradient-to-br from-amber-500/30 via-yellow-500/20 to-orange-500/30 hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] border-2 border-ramadan-gold hover:border-yellow-300 transition-all duration-300 relative overflow-hidden"
            >
                {/* Header */}
                <div className="flex justify-between items-start mb-2 relative z-10">
                    <div className="flex flex-col">
                        <span className="text-3xl font-bold font-cinzel text-ramadan-gold drop-shadow-md">{dayData.day}</span>
                        <span className="text-xs text-amber-200 font-bold uppercase tracking-wider">BAYRAM</span>
                    </div>
                    <span className="text-xs text-amber-100 bg-ramadan-gold/30 px-2 py-1 rounded-full border border-ramadan-gold/50">
                        {dayData.date.split(' ')[0]} {dayData.date.split(' ')[1]}
                    </span>
                </div>

                {/* Content - Bayram Highlights */}
                <div className="space-y-2 mt-2 relative z-10">
                    {dayData.highlights.slice(0, 2).map((h, i) => (
                        <div key={i} className="flex items-start gap-2">
                            <span className="text-xs font-mono text-amber-300 font-bold mt-0.5">{h.time}</span>
                            <span className="text-xs text-amber-50 leading-tight">{h.event}</span>
                        </div>
                    ))}
                    {dayData.highlights.length > 2 && (
                        <p className="text-xs text-amber-300/80 italic text-center mt-1">+ {dayData.highlights.length - 2} etkinlik daha</p>
                    )}
                </div>
            </GlassCard>
        );
    }

    // Standard Card
    return (
        <GlassCard
            onClick={onClick}
            className={`cursor-pointer group h-full flex flex-col justify-between p-4 transition-all duration-300 ${isKadirs
                ? "bg-gradient-to-br from-purple-500/20 to-indigo-500/10 border-purple-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                : "bg-gradient-to-b from-white/5 to-white/0 hover:shadow-ramadan-gold/20 hover:border-ramadan-gold/30"
                }`}
        >
            {/* Header */}
            <div className="flex justify-between items-start mb-3">
                <div className="flex flex-col">
                    <span className={`text-3xl font-bold font-cinzel drop-shadow-lg ${isKadirs ? "text-purple-300" : "text-ramadan-gold"}`}>
                        {dayData.day}
                    </span>
                    <span className="text-xs text-slate-400 uppercase tracking-wider">Ramazan</span>
                </div>
                <span className="text-xs text-slate-400 font-medium bg-white/5 px-2 py-1 rounded-full border border-white/10">
                    {dayData.date.split(' ')[0]} {dayData.date.split(' ')[1]}
                </span>
            </div>

            {/* Highlights List */}
            <div className="space-y-2 mb-2 flex-grow">
                {dayData.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 group/item">
                        <span className={`text-xs font-mono font-bold mt-0.5 shrink-0 ${h.isSpecialIftar ? "text-ramadan-gold" : "text-slate-500 group-hover:text-ramadan-gold/70 transition-colors"}`}>
                            {h.time}
                        </span>
                        <span className={`text-xs leading-tight line-clamp-2 ${h.isSpecialIftar ? "text-ramadan-gold font-bold" : "text-slate-300 group-hover:text-white transition-colors"}`}>
                            {h.event}
                        </span>
                    </div>
                ))}
            </div>

            {/* Village Indicator */}
            {isVillage && (
                <div className="mt-2 pt-2 border-t border-white/10 flex items-center gap-1.5 text-[10px] text-emerald-400/80 uppercase font-bold tracking-wide">
                    <MapPin size={10} />
                    <span>{dayData.villageEvent.village}</span>
                </div>
            )}
        </GlassCard>
    );
}
