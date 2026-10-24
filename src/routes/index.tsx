import { createFileRoute } from "@tanstack/react-router";
import { motion, animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Gift, Lock, Shield, ShieldCheck, Sparkles, Truck, Wallet, Percent } from "lucide-react";
import { TitanCard } from "@/components/landing/TitanCard";
import { Reveal } from "@/components/landing/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Titan Card — Demonstração de landing page" },
      { name: "description", content: "Demonstração visual independente de uma landing page de cartão de titânio." },
      { property: "og:title", content: "Titan Card — Demonstração" },
      { property: "og:description", content: "Landing page demonstrativa de um cartão fictício de titânio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: "easeOut" as const },
});

function Cta({ onClick, animated }: { onClick: () => void; animated?: boolean }) {
  return (
    <motion.button
      {...(animated ? fadeUp(0.4) : {})}
      onClick={onClick}
      className="cta-shimmer group relative inline-flex w-full max-w-[340px] items-center justify-center gap-2 overflow-hidden rounded-[14px] bg-brand px-8 py-4 text-[1.0625rem] font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-hover hover:shadow-[var(--shadow-cta)] active:translate-y-0"
    >
      Ver demonstração
      <ArrowRight className="h-[18px] w-[18px] transition-transform group-hover:translate-x-[3px]" />
    </motion.button>
  );
}

function Counter({ to, suffix = "", decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.6, ease: "easeOut", onUpdate: setV });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{v.toFixed(decimals)}{suffix}</span>;
}

const benefits = [
  { icon: Percent, tone: "bg-brand/10 text-brand", t: "Cashback", d: "Exemplo de benefício exibido nesta demonstração." },
  { icon: Shield, tone: "bg-success/10 text-success", t: "Segurança", d: "Sem números impressos no cartão fictício." },
  { icon: Wallet, tone: "bg-violet/10 text-violet", t: "Carteira digital", d: "Ilustração de integração com pagamentos por aproximação." },
  { icon: Gift, tone: "bg-warning/10 text-warning", t: "Zero Anuidade", d: "Texto ilustrativo — não é uma oferta real." },
];
const steps = [
  { t: "Explore a página", d: "Veja como a experiência do produto seria apresentada." },
  { t: "Personalize o visual", d: "Ajuste cores, textos e imagens conforme sua marca." },
  { t: "Publique sua versão", d: "Use como ponto de partida para o seu próprio produto." },
];
const features = [
  "Visual de titânio com acabamento metálico",
  "Sem número, sem CVV, sem data impressa",
  "Pagamento por aproximação (ilustrativo)",
  "Animações suaves de entrada e rolagem",
  "Layout pensado primeiro para celular",
];

function Index() {
  const [open, setOpen] = useState(false);
  const show = () => setOpen(true);

  return (
    <div className="min-h-screen bg-surface text-ink">
      <div className="relative mx-auto min-h-screen max-w-[520px] overflow-hidden bg-background">
        <div className="bg-ink px-4 py-2 text-center text-[0.6875rem] leading-snug text-gray-4">
          Demonstração independente. Não é uma oferta de crédito e não tem afiliação com nenhum banco ou bandeira.
        </div>
        <nav className="sticky top-0 z-50 flex items-center justify-center border-b-[0.5px] border-line bg-background/70 px-6 py-4 backdrop-blur-xl backdrop-saturate-150">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-sm font-bold text-background">T</span>
            <span className="text-lg font-semibold tracking-tight">Card</span>
          </div>
        </nav>

        <section className="bg-gradient-to-b from-background to-surface px-6 pb-10 pt-12 text-center">
          <motion.div {...fadeUp(0)} transition={{ duration: 0.6 }} className="mb-6 inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3.5 py-1.5 text-xs font-semibold text-brand">
            <Sparkles className="h-3.5 w-3.5" /> Demonstração
          </motion.div>
          <TitanCard />
          <motion.h1 {...fadeUp(0.2)} className="mb-3 text-[1.75rem] font-bold leading-[1.15] tracking-[-0.03em] min-[381px]:text-[2rem]">
            O cartão que simplifica<br />sua vida financeira.
          </motion.h1>
          <motion.p {...fadeUp(0.3)} className="mx-auto mb-7 max-w-[380px] text-[1.0625rem] text-gray-5">
            Cashback, zero anuidade e um design em titânio — apresentados em uma página de demonstração.
          </motion.p>
          <Cta onClick={show} animated />
        </section>

        <section className="px-6 py-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-brand">Benefícios</p>
          <h2 className="mb-2 text-2xl font-bold tracking-tight">Projetado para você.</h2>
          <p className="mb-7 text-[0.9375rem] text-gray-5">Cada detalhe pensado para oferecer a melhor experiência.</p>
          <div className="grid grid-cols-2 gap-3">
            {benefits.map((b, i) => (
              <Reveal key={b.t} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-line bg-background px-4 py-5 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:shadow-md">
                  <div className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl ${b.tone}`}>
                    <b.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-1 text-[0.9375rem] font-semibold">{b.t}</h3>
                  <p className="text-[0.8125rem] leading-snug text-gray-5">{b.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bg-surface px-6 py-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-brand">Como funciona</p>
          <h2 className="mb-2 text-2xl font-bold tracking-tight">Simples como deve ser.</h2>
          <p className="mb-7 text-[0.9375rem] text-gray-5">Três passos rápidos.</p>
          <div className="flex flex-col gap-4">
            {steps.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.1} className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-semibold text-primary-foreground">{i + 1}</span>
                <div>
                  <h3 className="mb-0.5 text-[0.9375rem] font-semibold">{s.t}</h3>
                  <p className="text-[0.8125rem] leading-snug text-gray-5">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="px-6 py-10">
          <div className="grid grid-cols-3 gap-2 min-[381px]:gap-3">
            {[
              { n: <Counter to={12} suffix="k" />, l: "Visitas\nna demo" },
              { n: <Counter to={4.9} decimals={1} />, l: "Nota\nilustrativa" },
              { n: <Counter to={60} suffix="fps" />, l: "Animações\nfluidas" },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="rounded-2xl border border-line bg-background px-2 py-5 text-center">
                  <div className="text-xl font-bold leading-tight tracking-tight min-[381px]:text-2xl">{s.n}</div>
                  <div className="mt-1 whitespace-pre-line text-[0.6875rem] leading-tight text-gray-5">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bg-[image:var(--gradient-dark)] px-6 py-10 text-center text-background">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-brand">Titan Card</p>
          <h2 className="mb-2 text-2xl font-bold tracking-tight">Feito de titânio.<br />Feito para você.</h2>
          <p className="mb-7 text-[0.9375rem] text-gray-4">Um cartão fictício, elegante e minimalista.</p>
          <div className="flex flex-col gap-4 text-left">
            {features.map((f, i) => (
              <Reveal key={f} x={-16} delay={i * 0.08}>
                <div className="flex items-center gap-3.5 rounded-xl border border-background/10 bg-background/5 px-4 py-3.5">
                  <Check className="h-5 w-5 shrink-0 text-success" />
                  <span className="text-sm font-medium text-background/90">{f}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="px-6 pb-12 pt-8 text-center">
          <h2 className="mb-2 text-2xl font-bold tracking-tight">Pronto para começar?</h2>
          <p className="mb-6 text-[0.9375rem] text-gray-5">Use esta página como base para o seu próprio produto.</p>
          <Cta onClick={show} />
          <div className="mt-5 flex flex-wrap items-center justify-center gap-5 text-xs text-gray-4">
            <span className="flex items-center gap-1.5"><Lock className="h-3.5 w-3.5" />Criptografia</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" />Privacidade</span>
            <span className="flex items-center gap-1.5"><Truck className="h-3.5 w-3.5" />Entrega</span>
          </div>
        </section>

        <footer className="border-t-[0.5px] border-line px-6 py-6 text-center text-[0.6875rem] leading-relaxed text-gray-4">
          Projeto de demonstração independente. Nenhum dado pessoal é coletado e nenhuma solicitação de crédito é feita.
        </footer>

        {open && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/50 p-6" onClick={() => setOpen(false)}>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-sm rounded-2xl bg-background p-6 text-center" onClick={(e) => e.stopPropagation()}>
              <h3 className="mb-2 text-lg font-semibold">Isto é uma demonstração</h3>
              <p className="mb-5 text-sm text-gray-5">Não há cartão real nem pedido de crédito. Nenhum dado é solicitado.</p>
              <button onClick={() => setOpen(false)} className="rounded-xl bg-brand px-6 py-2.5 text-sm font-semibold text-primary-foreground">Entendi</button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
