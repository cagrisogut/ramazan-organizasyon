import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function GlassCard({ children, className, hover = true, onClick }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={hover ? { scale: 1.02, y: -5 } : {}}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={onClick}
            className={cn(
                "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl",
                className
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100" />
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}
