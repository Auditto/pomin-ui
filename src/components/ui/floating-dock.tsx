import * as React from "react";
import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface FloatingDockProps {
  items: { icon: React.ReactNode; label: string; onClick?: () => void }[];
  className?: string;
}

const FloatingDock = ({ items, className }: FloatingDockProps) => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <div 
      className={cn(
        "fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 animate-in items-end gap-3 rounded-2xl border border-border/60 bg-card/95 p-3 shadow-md backdrop-blur-md duration-500 slide-in-from-bottom-4",
        className
      )}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={item.onClick}
        >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: -40, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.8 }}
                className="absolute whitespace-nowrap rounded-md border border-border bg-popover px-2 py-1 text-[10px] font-semibold text-popover-foreground shadow-md"
              >
                {item.label}
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div
            animate={{
              scale: hoveredIndex === index ? 1.4 : 1,
              y: hoveredIndex === index ? -5 : 0,
            }}
            className="flex h-10 w-10 items-center justify-center rounded-md bg-muted text-foreground transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.04] [&_svg]:stroke-[1.75]"
          >
            {item.icon}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export { FloatingDock };
