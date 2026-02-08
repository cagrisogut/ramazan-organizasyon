"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, LayoutDashboard, Clock, Sparkles } from "lucide-react";
import CalendarGrid from "../Calendar/CalendarGrid";
import ChildrenEventsView from "./ChildrenEventsView";
import DailyFlowView from "./DailyFlowView";
import { cn } from "@/lib/utils";

export default function DashboardTabs() {
    const [activeTab, setActiveTab] = useState("calendar");

    const tabs = [
        { id: "calendar", label: "Ayrıntılı Takvim", icon: Calendar },
        { id: "children_plan", label: "Çocuk Etkinlik Planı", icon: Sparkles },
        { id: "daily_flow", label: "Standart Günlük Akış", icon: Clock },
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
            {/* Tab Navigation */}
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
                <div className="bg-slate-900/40 p-1 rounded-2xl backdrop-blur-md border border-white/10 flex flex-wrap justify-center gap-1">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={cn(
                                    "relative px-6 py-3 rounded-xl flex items-center gap-2 font-medium transition-all duration-300",
                                    isActive ? "text-slate-900" : "text-slate-300 hover:text-white"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-gradient-to-r from-ramadan-gold to-amber-500 rounded-xl shadow-[0_0_20px_rgba(251,191,36,0.3)]"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center gap-2">
                                    <Icon size={18} />
                                    {tab.label}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Content Area */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                >
                    {activeTab === "calendar" && <CalendarGrid />}
                    {activeTab === "children_plan" && <ChildrenEventsView />}
                    {activeTab === "daily_flow" && <DailyFlowView />}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
