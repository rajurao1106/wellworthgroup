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

// ─── helpers ──────────────────────────────────────────────────────────────────

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
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

// ─── Card ─────────────────────────────────────────────────────────────────────

function Card({ item, delay, above }) {
  const [ref, inView] = useInView();
  const dark = item.isCurrent;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`relative overflow-hidden w-full rounded-[10px] py-3 px-4 transition-all duration-500 ease-in-out
        ${inView ? "opacity-100 translate-y-0" : `opacity-0 ${above ? "translate-y-3" : "-translate-y-3"}`}
        ${
          dark
            ? "bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border-[1.5px] border-[#B8922A]/50 shadow-[0_6px_24px_rgba(184,146,42,0.2)]"
            : "bg-white border border-[#ede8de] shadow-[0_2px_14px_rgba(0,0,0,0.05)]"
        }`}
    >
      {dark && (
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E8C84A] to-transparent" />
      )}
      <span
        className={`inline-block text-[9px] font-['DM_Sans',sans-serif] font-semibold tracking-[.12em] uppercase py-[2px] px-[7px] rounded mb-1.5 ${dark ? "text-[#E8C84A] bg-[#B8922A]/10" : "text-[#B8922A] bg-[#B8922A]/5"}`}
      >
        {item.tag}
      </span>
      <div
        className={`text-[10px] font-['DM_Mono',monospace] tracking-[.07em] mb-1 ${dark ? "text-[#E8C84A]/70" : "text-[#B8922A]"}`}
      >
        {item.startYear}
        {item.endYear ? ` — ${item.endYear}` : " — Present"}
      </div>
      <h3
        className={`font-['Playfair_Display',serif] text-[12px] font-bold leading-[1.3] mb-1 ${dark ? "text-white" : "text-[#1a1a2e]"}`}
      >
        {item.title}
      </h3>
      <p
        className={`text-[11px] font-['DM_Sans',sans-serif] leading-[1.5] m-0 ${dark ? "text-white/50" : "text-[#8a7060]"}`}
      >
        {item.description}
      </p>
    </div>
  );
}

// ─── S-Curve Desktop ──────────────────────────────────────────────────────────

const COLS = 3;
const ROW_H = 220; // px height of each row (node strip + card space)
const PAD_X = 48; // px indent from left / right edge before path starts

function SShape({ rows, progress = 89 }) {
  const W = 900;
  const nodeY = ROW_H / 2;
  const colX = (col) => PAD_X + col * ((W - 2 * PAD_X) / (COLS - 1));

  // 1. D Path (S-Curve) Build Karein
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

  // 2. Path ki total mathematically length calculate karein
  const horizontalLen = colX(COLS - 1) - colX(0);
  const r = ROW_H / 2;
  const arcLen = Math.PI * r;
  const totalLen = rows.length * horizontalLen + (rows.length - 1) * arcLen;

  // 3. Progress ke anusar Tooltip & Arrow ki Exact (X, Y) coordinate aur Rotation
  let curr = totalLen * (progress / 100);
  let px = colX(0),
    py = nodeY,
    angle = 0;

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

  const startX = colX(0);
  const startY = nodeY;
  const lastRowEven = (rows.length - 1) % 2 === 0;
  const endX = lastRowEven ? colX(COLS - 1) : colX(0);
  const endY = (rows.length - 1) * ROW_H + nodeY;

  return (
    <svg
      viewBox={`0 0 ${W} ${totalH}`}
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full z-[1] pointer-events-none overflow-visible"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B8922A" />
          <stop offset="50%" stopColor="#E8C84A" />
          <stop offset="100%" stopColor="#B8922A" />
        </linearGradient>
      </defs>

      {/* Background Track (Faded Line) */}
      <path
        d={d}
        fill="none"
        stroke="#ede8de"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Golden Progress Line */}
      <path
        d={d}
        fill="none"
        stroke="url(#goldGrad)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={totalLen}
        strokeDashoffset={strokeOffset}
        className="transition-all duration-1000 ease-out"
      />

      {/* Start Label */}
      <circle cx={startX} cy={startY} r="6" fill="#1a1a2e" />
      <text
        x={startX}
        y={startY - 18}
        fill="#1a1a2e"
        fontSize="14"
        fontWeight="600"
        textAnchor="middle"
        fontFamily="'DM Sans', sans-serif"
      >
        Start
      </text>

      {/* End Label */}
      <circle cx={endX} cy={endY} r="6" fill="#1a1a2e" />
      <text
        x={endX}
        y={endY + 28}
        fill="#1a1a2e"
        fontSize="14"
        fontWeight="600"
        textAnchor="middle"
        fontFamily="'DM Sans', sans-serif"
      >
        End
      </text>

      {/* Dynamic Progress Indicator Tooltip */}
      <g transform={`translate(${px}, ${py})`} className="pointer-events-auto">
        <g transform={`rotate(${angle})`}>
          <path d="M -8 -6 L 8 0 L -8 6 L -3 0 Z" fill="#1a1a2e" />
        </g>
        <g transform="translate(0, -32)">
          <rect
            x="-60"
            y="-15"
            width="120"
            height="30"
            rx="15"
            fill="#1a1a2e"
            stroke="#B8922A"
            strokeWidth="1.5"
          />
          <text
            x="0"
            y="4"
            fill="#fff"
            fontSize="12"
            fontWeight="600"
            textAnchor="middle"
            fontFamily="'DM Sans', sans-serif"
          >
            Progress: {progress}%
          </text>
        </g>
      </g>
    </svg>
  );
}

function DesktopSCurve() {
  const rows = [];
  for (let i = 0; i < timelineEvents.length; i += COLS) {
    rows.push(timelineEvents.slice(i, i + COLS));
  }

  const W = 900;
  const colXPct = (col) =>
    ((PAD_X + col * ((W - 2 * PAD_X) / (COLS - 1))) / W) * 100;

  const totalH = rows.length * ROW_H;

  return (
    <div className="relative w-full" style={{ height: `${totalH}px` }}>
      <SShape rows={rows} progress={89} />

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
              className="absolute flex flex-col items-center justify-center z-[5] max-w-[240px] -translate-x-1/2"
              style={{
                left: `${leftPct}%`,
                top: `${topPx}px`,
                width: `${((W - 2 * PAD_X) / (COLS - 1)) * 0.82}px`,
                height: `${ROW_H}px`,
              }}
            >
              {above ? (
                <>
                  <div className="w-full mb-2">
                    <Card item={item} delay={absIdx * 70} above={true} />
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full mt-2">
                    <Card item={item} delay={absIdx * 70} above={false} />
                  </div>
                </>
              )}
            </div>
          );
        });
      })}
    </div>
  );
}

function NodeDot({ item, delay }) {
  const [ref, inView] = useInView();
  const dark = item.isCurrent;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay + 80}ms` }}
      className={`flex items-center justify-center shrink-0 rounded-full z-10 transition-transform duration-[450ms] ease-[cubic-bezier(.34,1.56,.64,1)]
        ${inView ? "scale-100" : "scale-0"}
        ${
          dark
            ? "w-[44px] h-[44px] bg-gradient-to-br from-[#B8922A] to-[#E8C84A] border-[3px] border-[#E8C84A] shadow-[0_0_0_6px_rgba(184,146,42,.15),0_4px_20px_rgba(184,146,42,.35)]"
            : "w-[32px] h-[32px] bg-white border-[2.5px] border-[#B8922A] shadow-[0_0_0_4px_rgba(184,146,42,.08)]"
        }`}
    >
      {dark ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1a1a2e"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ) : (
        <div className="w-[7px] h-[7px] rounded-full bg-[#B8922A]" />
      )}
    </div>
  );
}

// ─── Mobile vertical ──────────────────────────────────────────────────────────

function MobileTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-[18px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#B8922A] via-[#E8C84A] to-[#B8922A] rounded-sm z-[1]" />

      <div className="pl-[52px] mb-7 relative z-10">
        <div className="inline-flex bg-white border-[1.5px] border-[#B8922A] rounded-lg py-2 px-3.5">
          <span className="font-['DM_Mono',monospace] text-[10px] tracking-[.12em] text-[#B8922A] uppercase font-semibold">
            Journey Begins 1996
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-5 relative z-[5]">
        {timelineEvents.map((item) => (
          <div
            key={`m-${item.id}`}
            className="flex items-start pl-[52px] relative"
          >
            <div
              className={`absolute top-[18px] rounded-full z-10
              ${
                item.isCurrent
                  ? "left-[10px] w-[20px] h-[20px] -ml-[2px] bg-gradient-to-br from-[#B8922A] to-[#E8C84A] border-2 border-[#E8C84A]"
                  : "left-[10px] w-[15px] h-[15px] ml-0 bg-white border-2 border-[#B8922A]"
              }`}
            />
            <div
              className={`w-full rounded-[10px] py-3 px-4 
              ${
                item.isCurrent
                  ? "bg-[#1a1a2e] border-[1.5px] border-[#B8922A]/40 shadow-[0_4px_20px_rgba(184,146,42,.2)]"
                  : "bg-white border border-[#ede8de] shadow-[0_2px_10px_rgba(0,0,0,.04)]"
              }`}
            >
              <div
                className={`text-[10px] font-['DM_Mono',monospace] tracking-[.07em] mb-[3px] ${item.isCurrent ? "text-[#E8C84A]" : "text-[#B8922A]"}`}
              >
                {item.startYear}
                {item.endYear ? ` — ${item.endYear}` : " — Present"}
              </div>
              <h3
                className={`font-['Playfair_Display',serif] text-[13px] font-bold leading-[1.3] mb-[3px] ${item.isCurrent ? "text-white" : "text-[#1a1a2e]"}`}
              >
                {item.title}
              </h3>
              <p
                className={`text-[11px] font-['DM_Sans',sans-serif] ${item.isCurrent ? "text-white/50" : "text-[#8a7060]"}`}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="pl-[52px] mt-6 relative z-10">
        <div className="inline-flex items-center gap-2 bg-gradient-to-br from-[#B8922A] to-[#E8C84A] rounded-lg py-2.5 px-4">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1a1a2e"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span className="font-['DM_Mono',monospace] text-[10px] tracking-[.1em] text-[#1a1a2e] font-semibold uppercase">
            Your Future Home
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function RealEstateTimeline() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap');
      `}</style>

      <section className="bg-[linear-gradient(160deg,#faf8f3_0%,#f5f0e8_50%,#faf8f3_100%)] pt-[72px] px-6 pb-[96px] font-['DM_Sans',sans-serif] overflow-hidden min-h-screen">
        <div className="max-w-[960px] mx-auto">
          <div className="text-center mb-[60px]">
            <p className="font-['DM_Mono',monospace] text-[11px] tracking-[.25em] uppercase text-[#B8922A] mb-3">
              Est. 1996 — Our Legacy
            </p>
            <h2 className="font-['Playfair_Display',serif] text-[clamp(30px,5vw,48px)] font-black text-[#1a1a2e] leading-[1.1] mb-3.5">
              Milestones of{" "}
              <span className="text-[#B8922A] italic">Excellence</span>
            </h2>
            <div className="w-[44px] h-[3px] bg-gradient-to-r from-[#B8922A] to-[#E8C84A] mx-auto mb-3.5 rounded-sm" />
            <p className="text-[13px] text-[#8a7e6e] max-w-[360px] mx-auto leading-[1.7]">
              Nearly three decades of transforming land into landmark
              communities.
            </p>
          </div>

          <div className="hidden md:block">
            <DesktopSCurve />
          </div>

          <div
            className="hidden md:flex justify-end mt-4"
            style={{ paddingRight: `${(PAD_X / 960) * 100}%` }}
          >
            <div className="bg-gradient-to-br from-[#B8922A] to-[#E8C84A] rounded-full py-2.5 px-5 flex items-center gap-2 shadow-[0_6px_24px_rgba(184,146,42,.3)]">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1a1a2e"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span className="font-['DM_Mono',monospace] text-[10px] tracking-[.15em] text-[#1a1a2e] font-semibold uppercase">
                Your Future Home Awaits
              </span>
            </div>
          </div>

          <div className="block md:hidden">
            <MobileTimeline />
          </div>
        </div>
      </section>
    </>
  );
}
