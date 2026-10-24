
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
        className="relative h-full w-full overflow-hidden rounded-2xl"
        style={{
          rotateX: 5,
          rotateY: -5,
          background:
            "linear-gradient(135deg, #f2f2f4 0%, #e9e9ec 25%, #dddddf 55%, #eeeeef 80%, #f5f5f6 100%)",
          boxShadow:
            "0 20px 60px rgba(0,0,0,0.15), 0 8px 20px rgba(0,0,0,0.10), inset 1px 1px 2px rgba(255,255,255,0.8)",
          border: "1px solid rgba(255,255,255,0.5)",
        }}
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
        {/* Textura metálica */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 25% 15%, rgba(255,255,255,0.5), transparent 60%)",
          }}
        />

        {/* Logotipo Apple */}
        <div className="absolute left-6 top-6 z-10">
          <svg
            width="38"
            height="42"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Apple"
          >
            <defs>
              <linearGradient
                id="appleTitaniumLogo"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop offset="0%" stopColor="#c4c4c8" />
                <stop offset="40%" stopColor="#fafafa" />
                <stop offset="75%" stopColor="#b9b9bd" />
                <stop offset="100%" stopColor="#eeeeef" />
              </linearGradient>
            </defs>

            <path
              d="M31.5 20.2C25.4 20.2 23.6 16.5 16.1 17.3C6.7 18.2 2.1 27.4 3.8 39.5C5.6 52 12.7 61 19.2 61C24.7 61 26.2 58.5 31.9 58.5C37.2 58.5 39 61 44 61C49.8 61 55.6 53 57.6 45.1C49.9 43.1 46.9 34.1 51.1 27.2C52.5 24.9 54.3 23.5 56.2 22.2C51.4 16.1 45.1 16.6 42.3 17.1C36.6 18 35.5 20.2 31.5 20.2Z"
              fill="url(#appleTitaniumLogo)"
              stroke="#b7b7bb"
              strokeWidth="1.2"
            />

            <path
              d="M32 17.4C32 8 39.4 2.8 46.8 2.4C47 10.1 40.3 17.3 32 17.4Z"
              fill="url(#appleTitaniumLogo)"
              stroke="#b7b7bb"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Chip metálico */}
        <div
          className="absolute bottom-[54px] right-[28px] z-10 grid h-[24px] w-[32px] grid-cols-2 grid-rows-3 gap-[2px] rounded-[5px] p-[3px]"
          style={{
            background: "rgba(220,220,224,0.7)",
            border: "1px solid rgba(255,255,255,0.7)",
            boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
          }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="rounded-[3px]"
              style={{
                background:
                  "linear-gradient(135deg, #ffffff, #eeeeef, #d4d4d8)",
                border: "1px solid rgba(190,190,195,0.6)",
              }}
            />
          ))}
        </div>

        {/* Nome do titular */}
        <span
          className="absolute bottom-[45px] left-6 z-10 text-[12px] font-semibold uppercase tracking-[0.08em]"
          style={{ color: "#66666a" }}
        >
          SEU NOME AQUI
        </span>

        {/* Descrição do cartão */}
        <span
          className="absolute bottom-[26px] left-6 z-10 text-[10px] font-medium uppercase tracking-[0.06em]"
          style={{ color: "#96969b" }}
        >
          APPLE CARD • TITANIUM
        </span>

        {/* Logotipo VISA */}
        <span
          className="absolute bottom-[25px] right-[25px] z-10 text-[15px] font-black italic tracking-[-0.06em]"
          style={{
            color: "rgba(255,255,255,0.95)",
            textShadow: "0 1px 2px rgba(160,160,165,0.2)",
          }}
        >
          VISA
        </span>

        {/* Efeito de brilho animado */}
        <motion.div
          className="pointer-events-none absolute inset-y-0 z-20 w-[55%]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
            skewX: -18,
          }}
          initial={{ x: -180 }}
          animate={{ x: [-180, 420] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
