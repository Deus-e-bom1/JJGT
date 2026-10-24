import { motion } from "framer-motion";

/** Fictional titanium demo card — no third-party logos. */
export function TitanCard() {
  return (
    <motion.div
      className="relative mx-auto mb-8 h-[165px] w-[260px] [perspective:800px] min-[381px]:h-[190px] min-[381px]:w-[300px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
    >
      <motion.div
        className="metal-card relative h-full w-full overflow-hidden rounded-2xl"
        style={{ rotateX: 5, rotateY: -5 }}
        animate={{ y: [0, -8, 0] }}
        whileHover={{ rotateX: 0, rotateY: 0 }}
        transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut" }, default: { duration: 0.4 } }}
      >
        {/* Mark */}
        <div className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border-2 border-gray-4/60 shadow-sm">
          <span className="text-lg font-bold text-gray-5">T</span>
        </div>
        {/* Chip */}
        <div className="absolute bottom-12 right-6 grid h-8 w-[42px] grid-cols-2 gap-[2px] rounded-md border border-gray-4/50 bg-line p-[3px]">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="rounded-[3px] border border-gray-4/50 bg-surface" />
          ))}
        </div>
        <span className="absolute bottom-11 left-6 text-[0.8rem] font-medium uppercase tracking-[0.08em] text-gray-6">
          Seu Nome Aqui
        </span>
        <span className="absolute bottom-6 left-6 text-[0.65rem] uppercase tracking-[0.05em] text-gray-4">
          APPLE CARD • TITANIUM
        </span>
        <span className="absolute bottom-6 right-6 text-[0.85rem] font-bold italic tracking-wide text-background/80">
          VISA
        </span>
      </motion.div>
    </motion.div>
  );
}
