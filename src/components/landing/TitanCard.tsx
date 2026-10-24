
import { motion } from "framer-motion";

export function TitanCard() {
  return (
    <motion.div
      className="relative mx-auto mb-8 h-[165px] w-[260px] [perspective:800px] min-[381px]:h-[190px] min-[381px]:w-[300px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.1,
        ease: "easeOut",
      }}
    >
      <motion.div
        className="apple-titanium-card relative h-full w-full overflow-hidden rounded-2xl"
        style={{ rotateX: 5, rotateY: -5 }}
        animate={{ y: [0, -8, 0] }}
        whileHover={{ rotateX: 0, rotateY: 0 }}
        transition={{
          y: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
          default: { duration: 0.4 },
        }}
      >
        {/* Logo Apple metálico */}
        <div className="absolute left-6 top-6 z-10">
          <svg
            width="38"
            height="42"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Apple"
          >
            <defs>
              <linearGradient
                id="appleMetal"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop offset="0%" stopColor="#c3c3c7" />
                <stop offset="40%" stopColor="#f8f8f9" />
                <stop offset="70%" stopColor="#b6b6ba" />
                <stop offset="100%" stopColor="#eeeeef" />
              </linearGradient>
            </defs>

            <path
              d="M31.5 20.2C25.4 20.2 23.6 16.5 16.1 17.3C6.7 18.2 2.1 27.4 3.8 39.5C5.6 52 12.7 61 19.2 61C24.7 61 26.2 58.5 31.9 58.5C37.2 58.5 39 61 44 61C49.8 61 55.6 53 57.6 45.1C49.9 43.1 46.9 34.1 51.1 27.2C52.5 24.9 54.3 23.5 56.2 22.2C51.4 16.1 45.1 16.6 42.3 17.1C36.6 18 35.5 20.2 31.5 20.2Z"
              fill="url(#appleMetal)"
              stroke="#b5b5b9"
              strokeWidth="1.5"
            />

            <path
              d="M32 17.4C32 8 39.4 2.8 46.8 2.4C47 10.1 40.3 17.3 32 17.4Z"
              fill="url(#appleMetal)"
              stroke="#b5b5b9"
              strokeWidth="1.2"
            />
          </svg>
        </div>

        {/* Chip metálico */}
        <div className="absolute bottom-[54px] right-[28px] z-10 grid h-[24px] w-[32px] grid-cols-2 grid-rows-3 gap-[2px] rounded-[5px] border border-white/60 bg-[#dcdcdf]/70 p-[3px] shadow-sm">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="rounded-[3px] border border-[#c6c6ca]/60 bg-gradient-to-br from-[#ffffff] via-[#eeeeef] to-[#d4d4d8]"
            />
          ))}
        </div>

        {/* Nome do titular */}
        <span className="absolute bottom-[45px] left-6 z-10 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#656569]">
          SEU NOME AQUI
        </span>

        {/* Tipo do cartão */}
        <span className="absolute bottom-[26px] left-6 z-10 text-[10px] font-medium uppercase tracking-[0.06em] text-[#95959a]">
          APPLE CARD • TITANIUM
        </span>

        {/* Marca VISA */}
        <span className="absolute bottom-[25px] right-[25px] z-10 text-[15px] font-black italic tracking-[-0.06em] text-white/90">
          VISA
        </span>
      </motion.div>
    </motion.div>
  );
}
