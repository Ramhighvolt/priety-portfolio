"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const gallery = [
  { src: "/gallery/fine-line-floral-1.jpg", category: "fine", title: "Fine Line Floral" },
  { src: "/gallery/fine-line-script-1.jpg", category: "script", title: "Script Work" },
  { src: "/gallery/fine-line-script-2.jpg", category: "script", title: "Ornamental Script" },
  { src: "/gallery/fine-line-script-3.jpg", category: "script", title: "Calligraphy Design" },
  { src: "/gallery/black-grey-figure-1.jpg", category: "realism", title: "Black & Grey Figure" },
  { src: "/gallery/geometric-symbol-1.jpg", category: "geometric", title: "Geometric Symbol" },
  { src: "/gallery/line-art-tribal-1.jpg", category: "tribal", title: "Line Tribal" },
  { src: "/gallery/line-art-tribal-2.jpg", category: "tribal", title: "Bold Tribal" },
  { src: "/gallery/realism-portrait-1.jpg", category: "realism", title: "Realism Portrait" },
  { src: "/gallery/realism-portrait-2.jpg", category: "realism", title: "Portrait Study" },
  { src: "/gallery/realism-portrait-3.jpg", category: "realism", title: "Realism Arm Piece" },
];

const filters = ["all", "realism", "script", "fine", "geometric", "tribal"];

export default function Home() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState<string | null>(null);

  const filteredGallery =
    filter === "all" ? gallery : gallery.filter((item) => item.category === filter);

  return (
    <main className="grain-overlay relative min-h-screen overflow-hidden bg-black text-white">
      <div className="fx-heavy pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_8%,rgba(245,158,11,0.14),transparent_32%),radial-gradient(circle_at_90%_14%,rgba(255,255,255,0.06),transparent_28%),radial-gradient(circle_at_18%_68%,rgba(255,255,255,0.04),transparent_24%),radial-gradient(circle_at_84%_78%,rgba(245,158,11,0.12),transparent_30%),linear-gradient(to_bottom,#030303_0%,#070707_35%,#030303_100%)]" />
      <div className="fx-heavy pointer-events-none absolute inset-0 -z-10 opacity-[0.14] bg-[linear-gradient(120deg,transparent_0%,rgba(245,158,11,0.12)_20%,transparent_42%,rgba(255,255,255,0.09)_62%,transparent_85%)]" />
      <div className="fx-heavy pointer-events-none absolute inset-0 -z-10 opacity-[0.08] bg-[repeating-linear-gradient(-30deg,rgba(255,255,255,0.18)_0px,rgba(255,255,255,0.18)_1px,transparent_1px,transparent_18px)]" />
      <div className="fx-heavy pointer-events-none absolute inset-0 -z-10 opacity-[0.06] bg-[repeating-radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.25)_0px,rgba(255,255,255,0.25)_1px,transparent_1px,transparent_22px)]" />
      <div className="fx-heavy pointer-events-none absolute left-0 right-0 top-[18%] -z-10 h-40 bg-[linear-gradient(180deg,transparent,rgba(245,158,11,0.08),transparent)] blur-2xl" />
      <div className="fx-heavy pointer-events-none absolute left-0 right-0 top-[52%] -z-10 h-48 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.06),transparent)] blur-2xl" />
      <div className="fx-heavy pointer-events-none absolute left-0 right-0 bottom-[10%] -z-10 h-40 bg-[linear-gradient(180deg,transparent,rgba(245,158,11,0.08),transparent)] blur-2xl" />
      <div className="fx-heavy pointer-events-none fixed left-2 top-1/2 z-30 hidden -translate-y-1/2 lg:block">
        <p className="rounded-full border border-white/15 bg-black/60 px-2 py-4 text-[9px] uppercase tracking-[0.32em] text-amber-400/70 [writing-mode:vertical-rl]">
          CARE • HEAL • HYDRATE • CARE • HEAL • HYDRATE
        </p>
      </div>
      <div className="fx-heavy pointer-events-none fixed right-2 top-1/2 z-30 hidden -translate-y-1/2 lg:block">
        <p className="rounded-full border border-white/15 bg-black/60 px-2 py-4 text-[9px] uppercase tracking-[0.32em] text-amber-400/70 [writing-mode:vertical-rl]">
          AFTERCARE • CLEAN • PROTECT • AFTERCARE • CLEAN • PROTECT
        </p>
      </div>
      <nav className="fixed left-0 top-0 z-40 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="display-font text-2xl tracking-wider text-white sm:text-3xl">
            PRIETY <span className="text-amber-400">SAGAR</span>
          </a>

          <div className="hidden gap-7 text-xs uppercase tracking-[0.2em] text-zinc-300 md:flex">
            <a href="#portfolio" className="hover:text-amber-400">INK ARCHIVE</a>
            <a href="#styles" className="hover:text-amber-400">SIGNATURE STYLES</a>
            <a href="#piercing" className="hover:text-amber-400">PIERCING</a>
            <a href="#experience" className="hover:text-amber-400">ARTIST JOURNEY</a>
            <a href="#contact" className="hover:text-amber-400">BOOK INK / PIERCING</a>
          </div>
        </div>
        <div className="border-t border-white/10 bg-zinc-950/70 px-6 py-2 text-center">
          <p className="text-[10px] uppercase tracking-[0.28em] text-amber-400/90 sm:text-xs">
            "Ink is memory made visible."
          </p>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-16 pt-32 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(245,158,11,0.24),transparent_35%),radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(to_bottom,#050505,#000000)]" />
        <div className="fx-heavy absolute inset-0 opacity-[0.12] bg-[repeating-linear-gradient(-35deg,rgba(255,255,255,0.16)_0px,rgba(255,255,255,0.16)_1px,transparent_1px,transparent_16px)]" />
        <div className="fx-heavy absolute inset-0 opacity-[0.18] bg-[radial-gradient(circle_at_80%_80%,rgba(245,158,11,0.2),transparent_30%)]" />
        <div className="fx-heavy absolute inset-0 opacity-[0.08] bg-[linear-gradient(140deg,rgba(255,255,255,0.08)_0%,transparent_35%,rgba(245,158,11,0.15)_65%,transparent_100%)]" />
        <div className="fx-heavy orb-float absolute -left-16 top-28 h-44 w-44 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="fx-heavy orb-float-delay absolute -right-16 bottom-20 h-56 w-56 rounded-full bg-zinc-200/10 blur-3xl" />
        <span className="fx-heavy sparkle-dot absolute left-1/4 top-28 h-1.5 w-1.5 rounded-full bg-amber-400/75" />
        <span className="fx-heavy sparkle-dot absolute right-1/4 top-44 h-1 w-1 rounded-full bg-white/80 [animation-delay:0.9s]" />
        <span className="fx-heavy sparkle-dot absolute bottom-24 left-[30%] h-1 w-1 rounded-full bg-white/70 [animation-delay:1.7s]" />

        <p className="pointer-events-none absolute left-4 top-1/2 hidden -translate-y-1/2 -rotate-180 text-[10px] uppercase tracking-[0.65em] text-zinc-500 [writing-mode:vertical-rl] lg:block">
          CUSTOM INK
        </p>
        <p className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 text-[10px] uppercase tracking-[0.65em] text-zinc-500 [writing-mode:vertical-rl] lg:block">
          PIERCING
        </p>

        <motion.img
          src="/gallery/realism-portrait-2.jpg"
          initial={{ opacity: 0, rotate: -8, y: 40 }}
          animate={{ opacity: 0.72, rotate: -8, y: 0 }}
          transition={{ duration: 0.9 }}
          className="absolute left-6 top-36 hidden h-64 w-44 rounded-[1.75rem] border border-white/10 object-cover shadow-2xl shadow-black md:block lg:left-12 lg:h-80 lg:w-56"
        />

        <motion.img
          src="/gallery/geometric-symbol-1.jpg"
          initial={{ opacity: 0, rotate: 8, y: 40 }}
          animate={{ opacity: 0.7, rotate: 8, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="absolute bottom-20 right-6 hidden h-64 w-44 rounded-[1.75rem] border border-white/10 object-cover shadow-2xl shadow-black md:block lg:right-12 lg:h-80 lg:w-56"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl"
        >
          <p className="mb-5 text-[11px] uppercase tracking-[0.5em] text-amber-400 sm:text-xs">
            Tattoo Artist • Professional Piercing • Custom Design
          </p>

          <h1 className="display-font shine-heading text-[4rem] leading-[0.95] tracking-[0.08em] sm:text-[6rem] md:text-[8rem] lg:text-[10rem]">
            INK & METAL
          </h1>
          <h2 className="display-font mt-1 text-4xl tracking-[0.3em] text-zinc-200 sm:text-5xl md:text-6xl">
            PRIETY SAGAR
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base md:text-lg">
            Premium tattoos and safe professional piercing with detail-driven execution,
            studio-grade hygiene, and modern style direction for every placement.
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-xs uppercase tracking-[0.18em] text-amber-400/90 sm:text-sm">
            Heal clean. Moisturize light. Protect from sun for long-lasting sharp results.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="funk-chip rounded-full px-4 py-1 text-[10px] uppercase tracking-[0.2em] text-amber-300">
              Premium Studio
            </span>
            <span className="funk-chip rounded-full px-4 py-1 text-[10px] uppercase tracking-[0.2em] text-amber-300">
              Luxury Hygiene
            </span>
            <span className="funk-chip rounded-full px-4 py-1 text-[10px] uppercase tracking-[0.2em] text-amber-300">
              Custom Precision
            </span>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["7+", "Years"],
              ["Realism", "Focus"],
              ["Piercing", "Service"],
              ["A+", "Training"],
            ].map(([title, label]) => (
              <motion.div
                key={label}
                whileHover={{ y: -8, scale: 1.03, rotate: label === "Focus" ? -2 : 1 }}
                className="rounded-2xl border border-white/10 bg-zinc-900/60 p-4 shadow-xl shadow-black/30 transition hover:border-amber-400/60 hover:shadow-amber-400/20"
              >
                <p className="display-font text-3xl tracking-wider text-amber-400 sm:text-4xl">{title}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-zinc-400">{label}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#portfolio"
              className="glow-btn rounded-full bg-amber-400 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-[1.05] hover:bg-white"
            >
              View Ink Archive
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 bg-zinc-900/40 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:scale-[1.04] hover:border-amber-400 hover:text-amber-400"
            >
              Book Ink / Piercing
            </a>
          </div>
        </motion.div>
      </section>

      <section id="portfolio" className="relative overflow-hidden px-6 py-24 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(245,158,11,0.14),transparent_40%)]" />
        <div className="absolute inset-0 opacity-[0.09] bg-[linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.06)_46%,transparent_100%)]" />
        <div className="fx-heavy absolute inset-0 opacity-30">
          <img
            src="/gallery/realism-portrait-3.jpg"
            alt=""
            className="absolute -left-10 top-20 h-64 w-44 rotate-[-14deg] rounded-3xl border border-white/10 object-cover blur-[1px] md:h-80 md:w-56"
          />
          <img
            src="/gallery/fine-line-script-2.jpg"
            alt=""
            className="absolute right-[-4rem] top-24 h-56 w-40 rotate-[12deg] rounded-3xl border border-white/10 object-cover blur-[1px] md:h-72 md:w-52"
          />
          <img
            src="/gallery/line-art-tribal-1.jpg"
            alt=""
            className="absolute bottom-16 left-[6%] hidden h-56 w-40 rotate-[8deg] rounded-3xl border border-white/10 object-cover blur-[1px] md:block"
          />
          <img
            src="/gallery/geometric-symbol-1.jpg"
            alt=""
            className="absolute bottom-14 right-[8%] hidden h-56 w-40 rotate-[-8deg] rounded-3xl border border-white/10 object-cover blur-[1px] md:block"
          />
        </div>
        <div className="absolute inset-0 bg-black/70" />
        <p className="pointer-events-none absolute left-1/2 top-12 hidden -translate-x-1/2 text-center display-font text-6xl tracking-[0.25em] text-white/10 lg:block">
          INK WITH INTENT
        </p>
        <p className="pointer-events-none absolute left-1/2 top-28 hidden -translate-x-1/2 text-[10px] uppercase tracking-[0.45em] text-amber-400/40 lg:block">
          Every line should mean something
        </p>
        <div className="orb-float absolute left-1/3 top-10 h-28 w-28 rounded-full bg-amber-400/15 blur-3xl" />
        <p className="pointer-events-none absolute right-5 top-14 hidden text-[10px] uppercase tracking-[0.65em] text-zinc-500 md:block">
          REALISM
        </p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="relative mx-auto max-w-7xl"
        >
          <div className="overflow-hidden border-y border-white/10 py-4">
            <div className="marquee flex w-max gap-10 text-4xl font-black uppercase text-white/10 sm:text-6xl md:text-8xl">
              <span>Custom Ink • Fine Line • Realism • Script • Tribal • Geometric •</span>
              <span>Custom Ink • Fine Line • Realism • Script • Tribal • Geometric •</span>
            </div>
          </div>

          <div className="mt-16 text-center sm:mt-20">
            <p className="mx-auto mb-4 inline-flex rounded-full border border-amber-400/35 bg-amber-400/10 px-4 py-1 text-[10px] uppercase tracking-[0.22em] text-amber-300">
              "Designed for now. Worn for life."
            </p>
            <p className="text-[11px] uppercase tracking-[0.45em] text-amber-400">
              Curated Tattoo Portfolio
            </p>
            <h2 className="display-font shine-heading mt-3 text-5xl tracking-[0.12em] sm:text-7xl md:text-9xl">
              INK ARCHIVE
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
              Editorial-grade tattoo work across realism, script, fine line, tribal,
              geometric, and custom concepts.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {filters.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.2em] transition sm:text-sm ${
                  filter === cat
                    ? "border-amber-400 bg-amber-400 text-black shadow-lg shadow-amber-400/30"
                    : "border-white/15 text-zinc-400 hover:border-amber-400 hover:text-amber-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-4">
            <AnimatePresence>
              {filteredGallery.map((img, i) => (
                <motion.div
                  layout
                  key={img.src}
                  initial={{ opacity: 0, y: 60, rotate: i % 2 === 0 ? -2 : 2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => setSelected(img.src)}
                  className={`group relative cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-2xl shadow-black transition hover:border-amber-400/70 hover:shadow-[0_24px_60px_rgba(245,158,11,0.2)] ${
                    i === 0 || i === 5
                      ? "h-[520px] sm:h-[620px] md:col-span-2 md:row-span-2"
                      : "h-[320px] sm:h-[360px]"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1 group-hover:brightness-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent opacity-95" />

                  <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/55 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-amber-400 backdrop-blur">
                    {img.category}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold sm:text-2xl">{img.title}</h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-400 sm:text-sm">
                      Tap to view full piece
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {selected && (
            <motion.div
              onClick={() => setSelected(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-6 backdrop-blur-xl"
            >
              <motion.img
                src={selected}
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                className="max-h-full max-w-full rounded-3xl border border-white/10 object-contain"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section id="styles" className="relative bg-zinc-950 px-6 py-24 sm:py-28">
        <div className="absolute inset-0 opacity-[0.09] bg-[radial-gradient(circle_at_20%_80%,rgba(245,158,11,0.5),transparent_35%)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(140deg,rgba(255,255,255,0.08)_0%,transparent_32%,rgba(245,158,11,0.12)_58%,transparent_90%)]" />
        <div className="absolute inset-0 opacity-[0.07] bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.16)_0px,rgba(255,255,255,0.16)_1px,transparent_1px,transparent_26px)]" />
        <div className="orb-float-delay absolute -right-14 top-12 h-52 w-52 rounded-full bg-amber-400/12 blur-3xl" />
        <img
          src="/gallery/black-grey-figure-1.jpg"
          alt=""
          className="pointer-events-none absolute bottom-4 right-[-3rem] hidden h-72 w-48 rotate-[12deg] rounded-3xl border border-white/10 object-cover opacity-20 blur-[1px] lg:block"
        />
        <p className="pointer-events-none absolute left-4 top-1/2 hidden -translate-y-1/2 -rotate-180 text-[10px] uppercase tracking-[0.65em] text-zinc-500 [writing-mode:vertical-rl] lg:block">
          SIGNATURE STYLES
        </p>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-6xl text-center"
        >
          <p className="mx-auto mb-4 inline-flex rounded-full border border-amber-400/35 bg-amber-400/10 px-4 py-1 text-[10px] uppercase tracking-[0.22em] text-amber-300">
            "Style is discipline in visual form."
          </p>
          <p className="text-[11px] uppercase tracking-[0.45em] text-amber-400">
            Precision Categories
          </p>
          <h2 className="display-font shine-heading mt-3 text-5xl tracking-[0.12em] sm:text-7xl md:text-9xl">
            SIGNATURE STYLES
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            Built for longevity, body flow, and clean healed results with modern visual direction.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Fine Line",
              "Realism",
              "Black & Grey",
              "Geometric",
              "Script / Lettering",
              "Custom Design",
            ].map((style) => (
              <motion.div
                key={style}
                whileHover={{ y: -10, scale: 1.03, rotate: -1 }}
                className="rounded-3xl border border-white/10 bg-black p-8 text-zinc-300 shadow-xl shadow-black/30 transition hover:border-amber-400 hover:text-amber-400 hover:shadow-[0_20px_50px_rgba(245,158,11,0.16)]"
              >
                <p className="display-font text-3xl tracking-[0.08em]">{style}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Premium Tattoo Craft
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="piercing" className="relative px-6 py-24 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(245,158,11,0.16),transparent_35%)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(160deg,transparent_0%,rgba(255,255,255,0.06)_40%,rgba(245,158,11,0.1)_70%,transparent_100%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.14)_0px,rgba(255,255,255,0.14)_1px,transparent_1px,transparent_28px)]" />
        <div className="orb-float absolute -left-20 bottom-8 h-60 w-60 rounded-full bg-zinc-200/10 blur-3xl" />
        <img
          src="/gallery/fine-line-script-3.jpg"
          alt=""
          className="pointer-events-none absolute left-[-2.5rem] top-14 hidden h-64 w-44 rotate-[-12deg] rounded-3xl border border-white/10 object-cover opacity-20 blur-[1px] lg:block"
        />
        <p className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 text-[10px] uppercase tracking-[0.65em] text-zinc-500 [writing-mode:vertical-rl] lg:block">
          PIERCING
        </p>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-6xl text-center"
        >
          <p className="mx-auto mb-4 inline-flex rounded-full border border-amber-400/35 bg-amber-400/10 px-4 py-1 text-[10px] uppercase tracking-[0.22em] text-amber-300">
            "Clean process. Sharp craft."
          </p>
          <p className="text-[11px] uppercase tracking-[0.45em] text-amber-400">
            Professional Services
          </p>
          <h2 className="display-font shine-heading mt-3 text-5xl tracking-[0.12em] sm:text-7xl md:text-9xl">
            PROFESSIONAL PIERCING
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
            Safe placement. Clean process. Confident aftercare.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              {
                title: "Ear Piercing",
                text: "Balanced placement, clean jewelry fit, and precise symmetry for a refined look.",
              },
              {
                title: "Nose Piercing",
                text: "Careful angle mapping and premium procedure flow for comfort and clean healing.",
              },
              {
                title: "Styling Consultation",
                text: "Personalized recommendations for jewelry, spacing, and long-term styling goals.",
              },
              {
                title: "Hygiene & Aftercare",
                text: "Sterile setup standards with detailed guidance to protect skin and support healing.",
              },
            ].map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -10, scale: 1.03, rotate: 0.6 }}
                className="rounded-3xl border border-white/10 bg-zinc-950 p-8 text-left shadow-xl shadow-black/30 transition hover:border-amber-400/70 hover:shadow-[0_22px_52px_rgba(245,158,11,0.18)]"
              >
                <h3 className="display-font text-4xl tracking-[0.08em] text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{service.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="experience" className="relative bg-zinc-950 px-6 py-24 sm:py-28">
        <div className="absolute inset-0 opacity-[0.1] bg-[radial-gradient(circle_at_12%_12%,rgba(245,158,11,0.2),transparent_25%),linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(140deg,rgba(255,255,255,0.07)_0%,transparent_36%,rgba(245,158,11,0.12)_66%,transparent_100%)]" />
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl"
        >
          <p className="mx-auto mb-4 inline-flex rounded-full border border-amber-400/35 bg-amber-400/10 px-4 py-1 text-[10px] uppercase tracking-[0.22em] text-amber-300">
            "Consistency builds legacy."
          </p>
          <p className="text-center text-[11px] uppercase tracking-[0.45em] text-amber-400">
            Career Timeline
          </p>
          <h2 className="display-font shine-heading mt-3 text-center text-5xl tracking-[0.12em] sm:text-7xl md:text-9xl">
            ARTIST JOURNEY
          </h2>

          <div className="mt-12 space-y-6">
            {[
              ["Aliens Tattoo Art School", "Current Studio: Tattoo Artist / Instructor · 2025 – Present"],
              ["Patna Ink", "Senior Tattoo Artist · 2023 – 2025"],
              ["Wildink Tattoo Studio", "Tattoo Artist · 2020 – 2023"],
              ["Tattoos 1960", "Tattoo Artist · 2018 – 2020"],
            ].map(([place, role]) => (
              <motion.div
                key={place}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`rounded-3xl border bg-black p-7 shadow-lg shadow-black/40 transition hover:shadow-[0_18px_45px_rgba(245,158,11,0.14)] ${
                  place === "Aliens Tattoo Art School"
                    ? "border-amber-400/80 shadow-[0_16px_38px_rgba(245,158,11,0.22)] hover:border-amber-400"
                    : "border-white/10 hover:border-amber-400"
                }`}
              >
                <h3 className="display-font text-4xl tracking-[0.08em] text-white sm:text-5xl">{place}</h3>
                {place === "Aliens Tattoo Art School" && (
                  <>
                    <p className="luxe-wiggle mt-2 inline-block rounded-full border border-amber-400/50 bg-amber-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-amber-400">
                      Current Studio Role
                    </p>
                    <p className="mt-2 text-xs leading-6 text-zinc-300">
                      Built on strong hygiene, consultation, and clean execution standards.
                    </p>
                  </>
                )}
                <p className="mt-2 text-sm uppercase tracking-[0.16em] text-zinc-400 sm:text-base">
                  {role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative bg-black px-6 py-24 text-center sm:py-28">
        <div className="absolute inset-0 opacity-[0.1] bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_32%),linear-gradient(160deg,transparent_0%,rgba(245,158,11,0.12)_55%,transparent_100%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.14)_0px,rgba(255,255,255,0.14)_1px,transparent_1px,transparent_24px)]" />
        <div className="orb-float-delay absolute left-1/2 top-10 h-32 w-32 -translate-x-1/2 rounded-full bg-amber-400/12 blur-3xl" />
        <p className="mx-auto mb-4 inline-flex rounded-full border border-amber-400/35 bg-amber-400/10 px-4 py-1 text-[10px] uppercase tracking-[0.22em] text-amber-300">
          "Training shapes confidence."
        </p>
        <p className="text-[11px] uppercase tracking-[0.45em] text-amber-400">
          Certified Training
        </p>
        <h2 className="display-font shine-heading mt-3 text-5xl tracking-[0.12em] sm:text-7xl md:text-9xl">
          ALIENS TATTOO ART SCHOOL
        </h2>
        <div className="mx-auto mt-6 max-w-3xl rounded-3xl border border-amber-400/55 bg-zinc-950/80 p-6 shadow-[0_20px_60px_rgba(245,158,11,0.2)] backdrop-blur">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-400">
            Premium Education Investment
          </p>
          <p className="mt-3 text-sm leading-7 text-zinc-300 sm:text-base">
            Diploma in Tattoo Art from Aliens Tattoo School
          </p>
          <p className="mt-1 text-sm leading-7 text-zinc-400 sm:text-base">
            CGPA 9.2 · Final Grade A+ · Intensive studio-focused practical training
          </p>
          <p className="mt-2 text-sm leading-7 text-zinc-400 sm:text-base">
            Built through serious investment in top-tier mentorship, disciplined technique,
            hygiene-first execution, and long-term professional readiness.
          </p>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              ["Hygiene", "Medical-grade discipline"],
              ["Mentorship", "Award-level guidance"],
              ["Precision", "High-detail execution"],
            ].map(([title, desc]) => (
              <motion.div
                key={title}
                whileHover={{ y: -8, scale: 1.03, rotate: -1 }}
                className="rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-center"
              >
                <p className="display-font text-2xl tracking-[0.08em] text-amber-400">{title}</p>
                <p className="text-xs uppercase tracking-[0.14em] text-zinc-400">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative px-6 py-24 text-center sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(245,158,11,0.12),transparent_35%)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,transparent_32%,rgba(245,158,11,0.12)_62%,transparent_100%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[repeating-linear-gradient(-22deg,rgba(255,255,255,0.16)_0px,rgba(255,255,255,0.16)_1px,transparent_1px,transparent_24px)]" />
        <div className="orb-float absolute right-8 top-10 h-44 w-44 rounded-full bg-amber-400/14 blur-3xl" />
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-4xl"
        >
          <p className="mx-auto mb-4 inline-flex rounded-full border border-amber-400/35 bg-amber-400/10 px-4 py-1 text-[10px] uppercase tracking-[0.22em] text-amber-300">
            "Your story deserves precision."
          </p>
          <p className="text-[11px] uppercase tracking-[0.45em] text-amber-400">
            Bookings Open
          </p>
          <h2 className="display-font shine-heading mt-3 text-5xl tracking-[0.12em] sm:text-7xl md:text-9xl">
            BOOK INK / PIERCING
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
            Reserve your tattoo or piercing session with clear consultation, safe procedure standards,
            and premium finishing detail.
          </p>

          <div className="mt-8 space-y-2 text-zinc-400">
            <p>Instagram: @priety_111</p>
            <p>Email: prietys888@gmail.com</p>
            <p>Phone: +91 79030 29757</p>
          </div>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://instagram.com/priety_111"
              target="_blank"
              className="glow-btn rounded-full bg-amber-400 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-[1.05] hover:bg-white"
            >
              DM on Instagram
            </a>
            <a
              href="mailto:prietys888@gmail.com"
              className="rounded-full border border-white/15 bg-zinc-900/40 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] transition hover:scale-[1.04] hover:border-amber-400 hover:text-amber-400"
            >
              Send Email
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}