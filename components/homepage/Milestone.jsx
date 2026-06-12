"use client";

import React, { useState, useEffect, useRef } from "react";

const timelineEvents = [
  {
    id: 1,
    startYear: "1996",
    endYear: "1998",
    title: "VARDHMAN NAGAR PHASE 1",
    description: "40 Acre • 800 Members Migrated",
    tag: "Phase 1",
  },
  {
    id: 2,
    startYear: "1998",
    endYear: "1999",
    title: "VARDHMAN NAGAR PHASE 2",
    description: "35 Acre • 700 Members Migrated",
    tag: "Phase 2",
  },
  {
    id: 3,
    startYear: "2001",
    endYear: "2002",
    title: "NANES NAGAR PHASE 1",
    description: "35 Acre • 600 Members Migrated",
    tag: "Phase 1",
  },
  {
    id: 4,
    startYear: "2002",
    endYear: "2004",
    title: "NANES NAGAR PHASE 2",
    description: "30 Acre • 500 Members Migrated",
    tag: "Phase 2",
  },
  {
    id: 5,
    startYear: "2006",
    endYear: "2007",
    title: "ARIHANT VIHAR TAKEOVER",
    description: "20 Acre • 300 Members Migrated",
    tag: "Takeover",
  },
  {
    id: 6,
    startYear: "2009",
    endYear: "2010",
    title: "HIRAPUR – WELLWORTH CITY",
    description: "30 Members • 32,500 Sq.ft.",
    tag: "Commercial",
  },
  {
    id: 7,
    startYear: "2011",
    endYear: "2012",
    title: "CHHACHHANPERI & SALONI",
    description: "100 Acre Land Acquired",
    tag: "Expansion",
  },
  {
    id: 8,
    startYear: "2012",
    endYear: "2013",
    title: "DEVPURI WELL WORTH TOWER",
    description: "Land Acquisition Complete",
    tag: "Tower",
  },
  {
    id: 9,
    startYear: "2015",
    endYear: "2016",
    title: "KAMAL VIHAR",
    description: "90,000 Sq.ft. Plot Allotted",
    tag: "Premium",
  },
  {
    id: 10,
    startYear: "2025",
    endYear: null,
    title: "ACACIA PREMIUM RESIDENTIAL",
    description: "28.50 Acres • Flagship Project",
    tag: "Flagship",
    isCurrent: true,
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

// ─── Card Component ───────────────────────────────────────────────────────────

function Card({ item, delay, above }) {
  const [ref, inView] = useInView();
  const isDark = item.isCurrent;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group relative overflow-hidden w-full rounded-2xl p-5 transition-all duration-700 ease-out backdrop-blur-sm transform hover:-translate-y-1 cursor-default
        ${inView ? "opacity-100 translate-y-0" : `opacity-0 ${above ? "translate-y-6" : "-translate-y-6"}`}
        ${
          isDark
            ? "bg-gradient-to-br from-[#111827] via-[#1e293b] to-[#0f172a] border border-[#8FAF9A]/40 shadow-[0_12px_40px_rgba(143,175,154,0.15)] hover:shadow-[0_20px_50px_rgba(143,175,154,0.25)]"
            : "bg-white/90 border border-[#ede8de] shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)]"
        }`}
    >
      {isDark && (
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#8FAF9A] to-transparent animate-pulse" />
      )}
      
      <span
        className={`inline-block text-[10px] font-['DM_Sans',sans-serif] font-bold tracking-[0.15em] uppercase py-1 px-2.5 rounded-full mb-3 transition-colors duration-300
          ${isDark ? "text-[#8FAF9A] bg-[#8FAF9A]/10 group-hover:bg-[#8FAF9A]/20" : "text-[#7a9985] bg-[#7a9985]/5 group-hover:bg-[#7a9985]/10"}`}
      >
        {item.tag}
      </span>

      <div
        className={`text-[11px] font-['DM_Mono',monospace] font-medium tracking-wider mb-1.5 ${isDark ? "text-[#8FAF9A]/80" : "text-[#7a9985]"}`}
      >
        {item.startYear}
        {item.endYear ? ` — ${item.endYear}` : " — Present"}
      </div>

      <h3
        className={`font-['Playfair_Display',serif] text-[15px] font-bold leading-tight mb-2 tracking-wide transition-colors duration-300
          ${isDark ? "text-white group-hover:text-[#8FAF9A]" : "text-[#1a1a2e] group-hover:text-[#7a9985]"}`}
      >
        {item.title}
      </h3>

      <p
        className={`text-[12px] font-['DM_Sans',sans-serif] leading-relaxed transition-opacity duration-300 ${isDark ? "text-slate-400 group-hover:text-slate-300" : "text-stone-500"}`}
      >
        {item.description}
      </p>
    </div>
  );
}

// ─── S-Curve Desktop Path & Logic ─────────────────────────────────────────────

const COLS = 3;
const ROW_H = 240; 
const PAD_X = 64; 

function SShape({ rows, progress }) {
  const W = 900;
  const nodeY = ROW_H / 2;
  const colX = (col) => PAD_X + col * ((W - 2 * PAD_X) / (COLS - 1));

  let d = `M ${colX(0)} ${nodeY}`;
  rows.forEach((row, ri) => {
    const isEven = ri % 2 === 0;
    const y = ri * ROW_H + nodeY;
    const xEnd = isEven ? colX(COLS - 1) : colX(0);
    d += ` L ${xEnd} ${y}`;
    if (ri < rows.length - 1) {
      const yNext = (ri + 1) * ROW_H + nodeY;
      const r = (yNext - y) / 2;
      const sweep = isEven ? 1 : 0;
      d += ` A ${r} ${r} 0 0 ${sweep} ${xEnd} ${yNext}`;
    }
  });

  const horizontalLen = colX(COLS - 1) - colX(0);
  const r = ROW_H / 2;
  const arcLen = Math.PI * r;
  const totalLen = rows.length * horizontalLen + (rows.length - 1) * arcLen;

  let curr = totalLen * (progress / 100);
  let px = colX(0), py = nodeY, angle = 0;

  for (let ri = 0; ri < rows.length; ri++) {
    const isEven = ri % 2 === 0;
    const y = ri * ROW_H + nodeY;
    const xStart = isEven ? colX(0) : colX(COLS - 1);
    const xEnd = isEven ? colX(COLS - 1) : colX(0);

    if (curr <= horizontalLen) {
      px = isEven ? xStart + curr : xStart - curr;
      py = y;
      angle = isEven ? 0 : 180;
      break;
    }
    curr -= horizontalLen;

    if (ri < rows.length - 1) {
      if (curr <= arcLen) {
        const cy = y + r;
        const cx = xEnd;
        if (isEven) {
          const theta = -Math.PI / 2 + curr / r;
          px = cx + r * Math.cos(theta);
          py = cy + r * Math.sin(theta);
          angle = (theta + Math.PI / 2) * (180 / Math.PI);
        } else {
          const theta = -Math.PI / 2 - curr / r;
          px = cx + r * Math.cos(theta);
          py = cy + r * Math.sin(theta);
          angle = (theta - Math.PI / 2) * (180 / Math.PI);
        }
        break;
      }
      curr -= arcLen;
    }
  }

  const totalH = rows.length * ROW_H;
  const strokeOffset = totalLen - totalLen * (progress / 100);

  return (
    <svg
      viewBox={`0 0 ${W} ${totalH}`}
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full z-[1] pointer-events-none overflow-visible"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8FAF9A" />
          <stop offset="50%" stopColor="#b2c9bb" />
          <stop offset="100%" stopColor="#7a9985" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <path
        d={d}
        fill="none"
        stroke="#e6dfd3"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d={d}
        fill="none"
        stroke="url(#goldGrad)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={totalLen}
        strokeDashoffset={strokeOffset}
        className="transition-all duration-300 ease-out"
      />

      <g transform={`translate(${px}, ${py})`} className="transition-all duration-300 ease-out">
        <circle r="10" fill="#1a1a2e" filter="url(#glow)" />
        <circle r="5" fill="#8FAF9A" />
        <g transform={`rotate(${angle})`}>
          <path d="M -14 -4 L -6 0 L -14 4 Z" fill="#8FAF9A" />
        </g>
      </g>
    </svg>
  );
}

function DesktopSCurve({ progress }) {
  const rows = [];
  for (let i = 0; i < timelineEvents.length; i += COLS) {
    rows.push(timelineEvents.slice(i, i + COLS));
  }

  const W = 900;
  const colXPct = (col) => ((PAD_X + col * ((W - 2 * PAD_X) / (COLS - 1))) / W) * 100;
  const totalH = rows.length * ROW_H;

  return (
    <div className="relative w-full" style={{ height: `${totalH}px` }}>
      <SShape rows={rows} progress={progress} />

      {rows.map((row, ri) => {
        const isEven = ri % 2 === 0;
        const displayRow = isEven ? row : [...row].reverse();

        return displayRow.map((item, ci) => {
          const physCol = isEven ? ci : COLS - 1 - ci;
          const leftPct = colXPct(physCol);
          const topPx = ri * ROW_H;
          const absIdx = ri * COLS + ci;
          const above = absIdx % 2 === 0;

          return (
            <div
              key={item.id}
              className="absolute flex flex-col items-center justify-center z-[5] -translate-x-1/2"
              style={{
                left: `${leftPct}%`,
                top: `${topPx}px`,
                width: `${((W - 2 * PAD_X) / (COLS - 1)) * 0.88}px`,
                height: `${ROW_H}px`,
              }}
            >
              <div className="w-full transition-transform duration-300 hover:scale-[1.02]">
                <Card item={item} delay={ci * 100} above={above} />
              </div>
            </div>
          );
        });
      })}
    </div>
  );
}

// ─── Mobile Timeline Component ────────────────────────────────────────────────

function MobileTimeline() {
  return (
    <div className="relative pl-6">
      <div className="absolute left-2 top-2 bottom-2 w-[3px] bg-gradient-to-b from-[#8FAF9A] via-[#ede8de] to-[#7a9985] rounded-full" />

      <div className="flex flex-col gap-8">
        {timelineEvents.map((item, idx) => (
          <div key={`m-${item.id}`} className="relative flex flex-col items-start">
            <div
              className={`absolute -left-[22px] top-6 rounded-full border-4 border-[#fbf9f5] z-10 transition-all duration-500
              ${
                item.isCurrent
                  ? "w-5 h-5 bg-[#8FAF9A] shadow-[0_0_0_4px_rgba(143,175,154,0.2)] scale-110"
                  : "w-4 h-4 bg-stone-300"
              }`}
            />
            <div className="w-full">
              <Card item={item} delay={idx * 50} above={true} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Root Component ─────────────────────────────────────────────────────

export default function RealEstateTimeline() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      
      // Calculate how much of the timeline container has passed through the view frame
      const totalTrack = rect.height - viewHeight / 2;
      const currentTrack = -rect.top + viewHeight / 2;
      
      const pct = Math.min(Math.max((currentTrack / totalTrack) * 100, 0), 100);
      setScrollProgress(pct);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@400;500;700&family=DM+Mono:wght@400;500&display=swap');
      `}</style>

      <section 
        ref={containerRef}
        className="bg-gradient-to-b from-[#fbf9f5] via-[#f5efe4] to-[#fbf9f5] pt-24 px-4 pb-32 font-['DM_Sans',sans-serif] min-h-screen overflow-hidden"
      >
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 space-y-4">
            <p className="font-['DM_Mono',monospace] text-xs tracking-[0.3em] uppercase text-[#7a9985] font-semibold">
              Est. 1996 — Our Legacy Journey
            </p>
            <h2 className="font-['Playfair_Display',serif] text-[clamp(2.25rem,6vw,3.5rem)] font-black text-[#1a1a2e] leading-tight">
              Milestones of <span className="text-[#8FAF9A] italic font-normal">Excellence</span>
            </h2>
            <div className="w-16 h-[3px] bg-gradient-to-r from-[#8FAF9A] to-[#7a9985] mx-auto rounded-full" />
            <p className="text-[15px] text-stone-600 max-w-md mx-auto leading-relaxed">
              Nearly three decades of master planning pristine spaces and transforming land into premium landmark communities.
            </p>
          </div>

          {/* Desktop Timeline Display */}
          <div className="hidden md:block px-4">
            <DesktopSCurve progress={scrollProgress} />
          </div>

          {/* Mobile Timeline Display */}
          <div className="block md:hidden max-w-md mx-auto">
            <MobileTimeline />
          </div>

          {/* Call-to-Action Footer Accent */}
          <div className="flex justify-center mt-20">
            <div className="group bg-gradient-to-br from-[#111827] to-[#1e293b] text-white rounded-full py-3.5 px-8 flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 border border-[#8FAF9A]/30">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#8FAF9A"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:scale-110 transition-transform duration-300"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span className="font-['DM_Mono',monospace] text-xs tracking-widest font-bold uppercase text-stone-200 group-hover:text-white transition-colors duration-300">
                Your Future Home Awaits
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}