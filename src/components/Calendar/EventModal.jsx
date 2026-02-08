import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, MapPin, Music, Sparkles, Users, Baby, PartyPopper, Sun, Sunset } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function EventModal({ dayData, isOpen, onClose }) {
    const [activeTab, setActiveTab] = useState("center"); // 'center' or 'village'

    if (!isOpen || !dayData) return null;

    const hasVillage = !!dayData.villageEvent;
    const isBayram = !!dayData.isBayram;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4"
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className={cn(
                                "relative w-full max-w-5xl max-h-[90vh] overflow-y-auto border rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden",
                                isBayram
                                    ? "bg-gradient-to-br from-amber-900/90 via-yellow-900/90 to-orange-900/90 border-ramadan-gold/50"
                                    : "bg-slate-900/90 border-white/10"
                            )}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                            >
                                <X className="text-white" size={20} />
                            </button>

                            {/* Left Side: Visual & Main Info */}
                            <div className={cn(
                                "w-full md:w-1/3 relative p-8 flex flex-col justify-between text-white",
                                isBayram
                                    ? "bg-gradient-to-br from-amber-600 to-orange-700"
                                    : "bg-gradient-to-br from-ramadan-purple to-slate-900"
                            )}>
                                <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 bg-repeat bg-[length:100px_100px]" />

                                {/* Bayram Konfeti Efekti */}
                                {isBayram && (
                                    <div className="absolute inset-0 pointer-events-none">
                                        <div className="absolute top-4 left-8 w-3 h-3 bg-yellow-300 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '2s' }} />
                                        <div className="absolute top-12 right-12 w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '2.2s' }} />
                                        <div className="absolute top-8 right-8 w-3 h-3 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.6s', animationDuration: '1.8s' }} />
                                        <div className="absolute top-16 left-12 w-2 h-2 bg-yellow-200 rounded-full animate-bounce" style={{ animationDelay: '0.9s', animationDuration: '2.5s' }} />
                                    </div>
                                )}

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-2">
                                        {isBayram && <PartyPopper size={32} className="text-ramadan-gold animate-pulse" />}
                                        <h2 className={cn(
                                            "text-6xl font-cinzel font-bold text-transparent bg-clip-text drop-shadow-sm",
                                            isBayram
                                                ? "bg-gradient-to-b from-yellow-200 to-amber-300"
                                                : "bg-gradient-to-b from-ramadan-gold to-amber-700"
                                        )}>
                                            {dayData.day}
                                        </h2>
                                    </div>
                                    <p className={cn(
                                        "text-xl font-light opacity-80 mt-2",
                                        isBayram && "text-yellow-100 font-bold"
                                    )}>
                                        {isBayram ? "RAMAZAN BAYRAMI" : "RAMAZAN"}
                                    </p>
                                    <p className="text-sm opacity-60 uppercase tracking-widest">{dayData.date}</p>

                                    {/* Special Day Badge */}
                                    {dayData.isSpecial && dayData.specialTag && (
                                        <div className={cn(
                                            "mt-4 inline-block px-4 py-2 rounded-full",
                                            isBayram
                                                ? "bg-yellow-300/30 border-2 border-yellow-200 shadow-[0_0_20px_rgba(253,224,71,0.5)]"
                                                : "bg-ramadan-gold/20 border border-ramadan-gold/50"
                                        )}>
                                            <div className="flex items-center gap-2">
                                                <Sparkles size={16} className={isBayram ? "text-yellow-100" : "text-ramadan-gold"} />
                                                <span className={cn(
                                                    "font-bold text-sm",
                                                    isBayram ? "text-yellow-50" : "text-ramadan-gold"
                                                )}>{dayData.specialTag}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="relative z-10 mt-8 space-y-4">
                                    <div className={cn(
                                        "glass-panel p-4 rounded-xl border-l-4",
                                        isBayram ? "border-l-yellow-300 bg-yellow-500/20" : "border-l-ramadan-gold"
                                    )}>
                                        <p className={cn(
                                            "text-xs uppercase font-bold mb-1",
                                            isBayram ? "text-yellow-200" : "text-ramadan-gold"
                                        )}>Günün Ana Etkinliği</p>
                                        <h3 className="text-xl font-bold leading-tight">{dayData.mainEvent.type}</h3>
                                        <div className="flex items-center gap-2 mt-3 text-xs opacity-60">
                                            <Clock size={12} /> {dayData.mainEvent.time}
                                        </div>
                                    </div>

                                    {hasVillage && (
                                        <div
                                            onClick={() => setActiveTab('village')}
                                            className={cn("cursor-pointer glass-panel p-3 rounded-xl border border-dashed border-white/20 hover:bg-white/5 transition-colors", activeTab === 'village' && "bg-white/10 border-emerald-500/50")}
                                        >
                                            <div className="flex items-center gap-2 text-emerald-400">
                                                <MapPin size={16} />
                                                <span className="font-bold text-sm">Köy Programı: {dayData.villageEvent.village}</span>
                                            </div>
                                            <p className="text-xs mt-1 opacity-70">{dayData.villageEvent.dayOfWeek} - Detaylar için tıklayın</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Right Side: Detailed Schedule */}
                            <div className={cn(
                                "w-full md:w-2/3 p-6 md:p-8",
                                isBayram ? "bg-slate-900/70" : "bg-slate-950/50"
                            )}>
                                {/* Bayram Günü İçin Özel Görünüm */}
                                {isBayram ? (
                                    <div className="space-y-6">
                                        <div className="text-center mb-6">
                                            <h3 className="text-3xl font-cinzel font-bold text-ramadan-gold mb-2 flex items-center justify-center gap-3">
                                                <Sparkles size={24} />
                                                Büyük Bayramlaşma ve Panayır Şenliği
                                                <Sparkles size={24} />
                                            </h3>
                                            <p className="text-amber-200 text-sm">Tüm etkinlikler şehir merkezindeki ana alanda gerçekleşecektir</p>
                                        </div>

                                        {/* Sabah Programı */}
                                        <section className="p-5 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-xl border border-amber-400/30">
                                            <h4 className="text-amber-300 font-cinzel text-xl mb-4 flex items-center gap-2">
                                                <Sun size={20} /> Sabah Programı
                                            </h4>
                                            <div className="space-y-3">
                                                {dayData.bayramSchedule.morning.map((item, idx) => (
                                                    <div key={idx} className="bg-white/5 p-4 rounded-lg border-l-4 border-amber-400">
                                                        <div className="flex items-baseline gap-3 mb-2">
                                                            <Clock size={16} className="text-amber-300 shrink-0 mt-1" />
                                                            <span className="text-amber-200 font-mono text-sm font-bold">{item.time}</span>
                                                        </div>
                                                        <p className="text-white font-medium ml-7">{item.event}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>

                                        {/* Gündüz Programı */}
                                        <section className="p-5 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-xl border border-orange-400/30">
                                            <h4 className="text-orange-300 font-cinzel text-xl mb-4 flex items-center gap-2">
                                                <Sun size={20} /> Gündüz Programı
                                            </h4>
                                            <div className="space-y-3">
                                                {dayData.bayramSchedule.daytime.map((item, idx) => (
                                                    <div key={idx} className="bg-white/5 p-4 rounded-lg border-l-4 border-orange-400">
                                                        <div className="flex items-baseline gap-3 mb-2">
                                                            <Clock size={16} className="text-orange-300 shrink-0 mt-1" />
                                                            <span className="text-orange-200 font-mono text-sm font-bold">{item.time}</span>
                                                        </div>
                                                        <p className="text-white font-medium ml-7">{item.event}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>

                                        {/* Akşam Programı */}
                                        <section className="p-5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-400/30">
                                            <h4 className="text-purple-300 font-cinzel text-xl mb-4 flex items-center gap-2">
                                                <Sunset size={20} /> Akşam Programı (20:00 - 24:00)
                                            </h4>
                                            <div className="space-y-3">
                                                {dayData.bayramSchedule.evening.map((item, idx) => (
                                                    <div key={idx} className="bg-white/5 p-4 rounded-lg border-l-4 border-purple-400">
                                                        <div className="flex items-baseline gap-3 mb-2">
                                                            <Clock size={16} className="text-purple-300 shrink-0 mt-1" />
                                                            <span className="text-purple-200 font-mono text-sm font-bold">{item.time}</span>
                                                        </div>
                                                        <p className="text-white font-medium ml-7">{item.event}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>
                                    </div>
                                ) : (
                                    <>
                                        {/* Normal Günler İçin Tabs */}
                                        <div className="flex gap-4 mb-6 border-b border-white/10 pb-4">
                                            <button
                                                onClick={() => setActiveTab('center')}
                                                className={cn("px-4 py-2 rounded-full text-sm font-medium transition-all", activeTab === 'center' ? "bg-ramadan-gold text-slate-900 shadow-[0_0_15px_#fbbf2440]" : "text-slate-400 hover:text-white")}
                                            >
                                                Merkez Etkinlikleri
                                            </button>
                                            {hasVillage && (
                                                <button
                                                    onClick={() => setActiveTab('village')}
                                                    className={cn("px-4 py-2 rounded-full text-sm font-medium transition-all", activeTab === 'village' ? "bg-emerald-600 text-white shadow-[0_0_15px_#05966940]" : "text-slate-400 hover:text-white")}
                                                >
                                                    Köy Programı
                                                </button>
                                            )}
                                        </div>

                                        <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                                            {activeTab === 'center' ? (
                                                <>
                                                    {/* Günün Öne Çıkan Etkinlikleri */}
                                                    {dayData.highlights && dayData.highlights.length > 0 && (
                                                        <section className="mb-6 p-4 bg-ramadan-purple/20 rounded-xl border border-ramadan-gold/30">
                                                            <h4 className="text-ramadan-gold font-cinzel text-lg mb-4 flex items-center gap-2">
                                                                <Sparkles size={18} /> Günün Öne Çıkan Etkinlikleri
                                                            </h4>
                                                            <div className="space-y-3">
                                                                {dayData.highlights.map((highlight, idx) => (
                                                                    <div
                                                                        key={idx}
                                                                        className={cn(
                                                                            "flex items-start gap-3 p-3 rounded-lg",
                                                                            highlight.isSpecialIftar
                                                                                ? "bg-ramadan-gold/10 border border-ramadan-gold/30"
                                                                                : "bg-white/5"
                                                                        )}
                                                                    >
                                                                        <div className="shrink-0 mt-1">
                                                                            <Clock size={16} className={highlight.isSpecialIftar ? "text-ramadan-gold" : "text-purple-400"} />
                                                                        </div>
                                                                        <div className="flex-1">
                                                                            <div className="flex items-baseline gap-2 mb-1">
                                                                                <span className={cn(
                                                                                    "text-xs font-mono font-semibold",
                                                                                    highlight.isSpecialIftar ? "text-ramadan-gold" : "text-purple-400"
                                                                                )}>
                                                                                    {highlight.time}
                                                                                </span>
                                                                                {highlight.isSpecialIftar && (
                                                                                    <span className="text-xs px-2 py-0.5 bg-ramadan-gold/20 text-ramadan-gold rounded-full font-bold">
                                                                                        ÖZEL İFTAR
                                                                                    </span>
                                                                                )}
                                                                            </div>
                                                                            <p className={cn(
                                                                                "text-sm",
                                                                                highlight.isSpecialIftar ? "text-white font-bold" : "text-white"
                                                                            )}>
                                                                                {highlight.event}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </section>
                                                    )}

                                                    {/* Daily Flow Removed - Moved to Standard Flow Tab */}
                                                </>
                                            ) : (
                                                /* Village Content */
                                                <div className="h-full flex flex-col items-center justify-center text-center py-6">
                                                    <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                                                        <MapPin size={32} className="text-emerald-400" />
                                                    </div>
                                                    <h3 className="text-2xl font-bold text-white mb-2">{dayData.villageEvent.village}</h3>
                                                    <p className="text-emerald-300 text-sm mb-6">{dayData.villageEvent.dayOfWeek}</p>

                                                    <div className="glass-panel p-6 rounded-2xl w-full max-w-lg border-emerald-500/30 bg-emerald-900/10 text-left">
                                                        <p className="text-emerald-400 text-sm font-bold uppercase mb-4 text-center">Program Akışı</p>

                                                        <div className="space-y-4">
                                                            {dayData.villageEvent.program.map((item, idx) => (
                                                                <div key={idx} className="bg-white/5 p-4 rounded-lg border-l-4 border-emerald-500">
                                                                    <div className="flex justify-between items-baseline mb-2">
                                                                        <span className="text-emerald-300 font-mono text-sm font-bold">{item.time}</span>
                                                                    </div>
                                                                    <p className="text-white font-medium">{item.activity}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
