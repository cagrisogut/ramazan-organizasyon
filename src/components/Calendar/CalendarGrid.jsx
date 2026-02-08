"use client";

import { useState } from "react";
import DayCard from "./DayCard";
import EventModal from "./EventModal";
import { RAMADAN_DATA } from "@/lib/data";
import { motion } from "framer-motion";

export default function CalendarGrid() {
    const [selectedDay, setSelectedDay] = useState(null);

    // Animation config for staggering
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.02
            }
        }
    };

    return (
        <>
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-4 md:p-8 max-w-7xl mx-auto"
            >
                {RAMADAN_DATA.map((day) => (
                    <DayCard
                        key={day.day}
                        dayData={day}
                        onClick={() => setSelectedDay(day)}
                    />
                ))}
            </motion.div>

            <EventModal
                dayData={selectedDay}
                isOpen={!!selectedDay}
                onClose={() => setSelectedDay(null)}
            />
        </>
    );
}
