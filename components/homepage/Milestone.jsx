"use client"

import React, { useState, useEffect, useRef } from 'react';

const timelineEvents = [
  { id: 1,  startYear: '1996', endYear: '1998', title: 'VARDHMAN NAGAR PHASE 1',   description: '40 Acre • 800 Members Migrated',    tag: 'Phase 1'   },
  { id: 2,  startYear: '1998', endYear: '1999', title: 'VARDHMAN NAGAR PHASE 2',   description: '35 Acre • 700 Members Migrated',    tag: 'Phase 2'   },
  { id: 3,  startYear: '2001', endYear: '2002', title: 'NANES NAGAR PHASE 1',      description: '35 Acre • 600 Members Migrated',    tag: 'Phase 1'   },
  { id: 4,  startYear: '2002', endYear: '2004', title: 'NANES NAGAR PHASE 2',      description: '30 Acre • 500 Members Migrated',    tag: 'Phase 2'   },
  { id: 5,  startYear: '2006', endYear: '2007', title: 'ARIHANT VIHAR TAKEOVER',   description: '20 Acre • 300 Members Migrated',    tag: 'Takeover'  },
  { id: 6,  startYear: '2009', endYear: '2010', title: 'HIRAPUR – WELLWORTH CITY', description: '30 Members • 32,500 Sq.ft.',        tag: 'Commercial'},
  { id: 7,  startYear: '2011', endYear: '2012', title: 'CHHACHHANPERI & SALONI',   description: '100 Acre Land Acquired',            tag: 'Expansion' },
  { id: 8,  startYear: '2012', endYear: '2013', title: 'DEVPURI WELL WORTH TOWER', description: 'Land Acquisition Complete',         tag: 'Tower'     },
  { id: 9,  startYear: '2015', endYear: '2016', title: 'KAMAL VIHAR',              description: '90,000 Sq.ft. Plot Allotted',       tag: 'Premium'   },
  { id: 10, startYear: '2025', endYear: null,   title: 'ACACIA PREMIUM RESIDENTIAL', description: '28.50 Acres • Flagship Project', tag: 'Flagship', isCurrent: true },
];

// ─── helpers ──────────────────────────────────────────────────────────────────

function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold: 0.1 });
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
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : `translateY(${above ? 12 : -12}px)`,
      transition: `opacity .5s ease ${delay}ms, transform .5s ease ${delay}ms`,
      background: dark ? 'linear-gradient(135deg,#1a1a2e,#16213e)' : '#fff',
      border: dark ? '1.5px solid rgba(184,146,42,.5)' : '1px solid #ede8de',
      borderRadius: '10px',
      padding: '12px 16px',
      boxShadow: dark ? '0 6px 24px rgba(184,146,42,.2)' : '0 2px 14px rgba(0,0,0,.05)',
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
    }}>
      {dark && <div style={{ position:'absolute',top:0,left:0,right:0,height:'2px', background:'linear-gradient(90deg,transparent,#E8C84A,transparent)' }}/>}
      <span style={{ display:'inline-block', fontSize:'9px', fontFamily:"'DM Sans',sans-serif", fontWeight:600, letterSpacing:'.12em', textTransform:'uppercase', color: dark?'#E8C84A':'#B8922A', background: dark?'rgba(184,146,42,.12)':'rgba(184,146,42,.07)', padding:'2px 7px', borderRadius:'4px', marginBottom:'6px' }}>{item.tag}</span>
      <div style={{ fontSize:'10px', fontFamily:"'DM Mono',monospace", color: dark?'rgba(232,200,74,.7)':'#B8922A', letterSpacing:'.07em', marginBottom:'4px' }}>
        {item.startYear}{item.endYear ? ` — ${item.endYear}` : ' — Present'}
      </div>
      <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:'12px', fontWeight:700, color: dark?'#fff':'#1a1a2e', lineHeight:1.3, marginBottom:'4px' }}>{item.title}</h3>
      <p style={{ fontSize:'11px', color: dark?'rgba(255,255,255,.5)':'#8a7060', fontFamily:"'DM Sans',sans-serif", lineHeight:1.5, margin:0 }}>{item.description}</p>
    </div>
  );
}

// ─── S-Curve Desktop ──────────────────────────────────────────────────────────

const COLS = 3;
const ROW_H = 220;   // px height of each row (node strip + card space)
const PAD_X = 48;    // px indent from left / right edge before path starts

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
          const theta = -Math.PI / 2 + (curr / r);
          px = cx + r * Math.cos(theta);
          py = cy + r * Math.sin(theta);
          angle = (theta + Math.PI / 2) * (180 / Math.PI);
        } else {
          const theta = -Math.PI / 2 - (curr / r);
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
  const strokeOffset = totalLen - (totalLen * (progress / 100));

  const startX = colX(0);
  const startY = nodeY;
  const lastRowEven = (rows.length - 1) % 2 === 0;
  const endX = lastRowEven ? colX(COLS - 1) : colX(0);
  const endY = (rows.length - 1) * ROW_H + nodeY;

  return (
    <svg
      viewBox={`0 0 ${W} ${totalH}`}
      preserveAspectRatio="none"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none', overflow: 'visible' }}
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#B8922A"/>
          <stop offset="50%"  stopColor="#E8C84A"/>
          <stop offset="100%" stopColor="#B8922A"/>
        </linearGradient>
      </defs>

      {/* Background Track (Faded Line) */}
      <path d={d} fill="none" stroke="#ede8de" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />

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
        style={{ transition: 'stroke-dashoffset 1s ease-out' }}
      />

      {/* Start Label */}
      <circle cx={startX} cy={startY} r="6" fill="#1a1a2e" />
      <text x={startX} y={startY - 18} fill="#1a1a2e" fontSize="14" fontWeight="600" textAnchor="middle" fontFamily="'DM Sans', sans-serif">Start</text>

      {/* End Label */}
      <circle cx={endX} cy={endY} r="6" fill="#1a1a2e" />
      <text x={endX} y={endY + 28} fill="#1a1a2e" fontSize="14" fontWeight="600" textAnchor="middle" fontFamily="'DM Sans', sans-serif">End</text>

      {/* Dynamic Progress Indicator Tooltip */}
      <g transform={`translate(${px}, ${py})`} style={{ pointerEvents: 'auto' }}>
        <g transform={`rotate(${angle})`}>
          <path d="M -8 -6 L 8 0 L -8 6 L -3 0 Z" fill="#1a1a2e" />
        </g>
        <g transform="translate(0, -32)">
          <rect x="-60" y="-15" width="120" height="30" rx="15" fill="#1a1a2e" stroke="#B8922A" strokeWidth="1.5" />
          <text x="0" y="4" fill="#fff" fontSize="12" fontWeight="600" textAnchor="middle" fontFamily="'DM Sans', sans-serif">
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
  const colXPct = (col) => (PAD_X + col * ((W - 2 * PAD_X) / (COLS - 1))) / W * 100;

  const totalH = rows.length * ROW_H;

  return (
    <div style={{ position: 'relative', width: '100%', height: `${totalH}px` }}>
      <SShape rows={rows} progress={89} />

      {rows.map((row, ri) => {
        const isEven = ri % 2 === 0;
        const displayRow = isEven ? row : [...row].reverse();

        return displayRow.map((item, ci) => {
          const physCol = isEven ? ci : (COLS - 1 - ci);
          const leftPct = colXPct(physCol);
          const topPx = ri * ROW_H;
          const absIdx = ri * COLS + ci;
          const above = absIdx % 2 === 0;

          return (
            <div
              key={item.id}
              style={{
                position: 'absolute',
                left: `${leftPct}%`,
                top: `${topPx}px`,
                transform: 'translateX(-50%)',
                width: `${(W - 2 * PAD_X) / (COLS - 1) * 0.82}px`,
                maxWidth: '240px',
                height: `${ROW_H}px`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 5,
              }}
            >
              {above ? (
                <>
                  <div style={{ width:'100%', marginBottom:'8px' }}>
                    <Card item={item} delay={absIdx * 70} above={true} />
                  </div>
                  <div style={{ width:'1px', height:'10px', background:'#B8922A', opacity:.7 }}/>
                  <NodeDot item={item} delay={absIdx * 70} />
                </>
              ) : (
                <>
                  <NodeDot item={item} delay={absIdx * 70} />
                  <div style={{ width:'1px', height:'10px', background:'#B8922A', opacity:.7 }}/>
                  <div style={{ width:'100%', marginTop:'8px' }}>
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
  const size = item.isCurrent ? 44 : 32;
  return (
    <div ref={ref} style={{
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: '50%',
      background: item.isCurrent ? 'linear-gradient(135deg,#B8922A,#E8C84A)' : '#fff',
      border: item.isCurrent ? '3px solid #E8C84A' : '2.5px solid #B8922A',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: item.isCurrent ? '0 0 0 6px rgba(184,146,42,.15),0 4px 20px rgba(184,146,42,.35)' : '0 0 0 4px rgba(184,146,42,.08)',
      zIndex: 10, flexShrink: 0,
      transform: inView ? 'scale(1)' : 'scale(0)',
      transition: `transform .45s cubic-bezier(.34,1.56,.64,1) ${delay + 80}ms`,
    }}>
      {item.isCurrent
        ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        : <div style={{ width:'7px', height:'7px', borderRadius:'50%', background:'#B8922A' }}/>
      }
    </div>
  );
}

// ─── Mobile vertical ──────────────────────────────────────────────────────────

function MobileTimeline() {
  return (
    <div style={{ position:'relative' }}>
      <div style={{ position:'absolute', left:'18px', top:0, bottom:0, width:'2px', background:'linear-gradient(to bottom,#B8922A,#E8C84A,#B8922A)', borderRadius:'2px', zIndex:1 }}/>

      <div style={{ paddingLeft:'52px', marginBottom:'28px', position:'relative', zIndex:10 }}>
        <div style={{ display:'inline-flex', background:'#fff', border:'1.5px solid #B8922A', borderRadius:'8px', padding:'8px 14px' }}>
          <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'10px', letterSpacing:'.12em', color:'#B8922A', textTransform:'uppercase', fontWeight: 600 }}>Journey Begins 1996</span>
        </div>
      </div>

      <div style={{ display:'flex', flexDirection:'column', gap:'20px', position:'relative', zIndex:5 }}>
        {timelineEvents.map((item) => (
          <div key={`m-${item.id}`} style={{ display:'flex', alignItems:'flex-start', paddingLeft:'52px', position:'relative' }}>
            <div style={{ position:'absolute', left:'10px', top:'18px', width: item.isCurrent?'20px':'15px', height: item.isCurrent?'20px':'15px', marginLeft: item.isCurrent?'-2px':'0', borderRadius:'50%', background: item.isCurrent?'linear-gradient(135deg,#B8922A,#E8C84A)':'#fff', border:`2px solid ${item.isCurrent?'#E8C84A':'#B8922A'}`, zIndex:10 }}/>
            <div style={{ background: item.isCurrent?'#1a1a2e':'#fff', border: item.isCurrent?'1.5px solid rgba(184,146,42,.4)':'1px solid #ede8de', borderRadius:'10px', padding:'12px 16px', width:'100%', boxShadow: item.isCurrent?'0 4px 20px rgba(184,146,42,.2)':'0 2px 10px rgba(0,0,0,.04)' }}>
              <div style={{ fontSize:'10px', fontFamily:"'DM Mono',monospace", color:item.isCurrent?'#E8C84A':'#B8922A', letterSpacing:'.07em', marginBottom:'3px' }}>{item.startYear}{item.endYear?` — ${item.endYear}`:' — Present'}</div>
              <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:'13px', fontWeight:700, color: item.isCurrent?'#fff':'#1a1a2e', marginBottom:'3px', lineHeight:1.3 }}>{item.title}</h3>
              <p style={{ fontSize:'11px', color: item.isCurrent?'rgba(255,255,255,.5)':'#8a7060', fontFamily:"'DM Sans',sans-serif" }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ paddingLeft:'52px', marginTop:'24px', position:'relative', zIndex:10 }}>
        <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', background:'linear-gradient(135deg,#B8922A,#E8C84A)', borderRadius:'8px', padding:'10px 16px' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'10px', letterSpacing:'.1em', color:'#1a1a2e', fontWeight:600, textTransform:'uppercase' }}>Your Future Home</span>
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
        .re-tl * { box-sizing:border-box; margin:0; padding:0; }
      `}</style>

      {/* Updated to White/Golden Theme Background */}
      <section className="re-tl" style={{ background:'linear-gradient(160deg,#faf8f3 0%,#f5f0e8 50%,#faf8f3 100%)', padding:'72px 24px 96px', fontFamily:"'DM Sans',sans-serif", overflow: 'hidden' }}>
        <div style={{ maxWidth:'960px', margin:'0 auto' }}>

          <div style={{ textAlign:'center', marginBottom:'60px' }}>
            <p style={{ fontFamily:"'DM Mono',monospace", fontSize:'11px', letterSpacing:'.25em', textTransform:'uppercase', color:'#B8922A', marginBottom:'12px' }}>Est. 1996 — Our Legacy</p>
            <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:'clamp(30px,5vw,48px)', fontWeight:900, color:'#1a1a2e', lineHeight:1.1, marginBottom:'14px' }}>
              Milestones of <span style={{ color:'#B8922A', fontStyle:'italic' }}>Excellence</span>
            </h2>
            <div style={{ width:'44px', height:'3px', background:'linear-gradient(90deg,#B8922A,#E8C84A)', margin:'0 auto 14px', borderRadius:'2px' }}/>
            <p style={{ fontSize:'13px', color:'#8a7e6e', maxWidth:'360px', margin:'0 auto', lineHeight:1.7 }}>
              Nearly three decades of transforming land into landmark communities.
            </p>
          </div>

          <div className="hidden md:flex" style={{ justifyContent:'flex-start', marginBottom:'16px', paddingLeft:`${PAD_X / 960 * 100}%` }}>
            <div style={{ background:'#fff', border:'2px solid #ede8de', borderRadius:'100px', padding:'8px 20px', display:'flex', alignItems:'center', gap:'8px', boxShadow:'0 4px 16px rgba(0,0,0,.05)' }}>
              <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#B8922A' }}/>
              <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'10px', letterSpacing:'.15em', color:'#B8922A', textTransform:'uppercase', fontWeight: 600 }}>Journey Begins · 1996</span>
            </div>
          </div>

          <div className="hidden md:block">
            <DesktopSCurve />
          </div>

          <div className="hidden md:flex" style={{ justifyContent:'flex-end', marginTop:'16px', paddingRight:`${PAD_X / 960 * 100}%` }}>
            <div style={{ background:'linear-gradient(135deg,#B8922A,#E8C84A)', borderRadius:'100px', padding:'10px 22px', display:'flex', alignItems:'center', gap:'8px', boxShadow:'0 6px 24px rgba(184,146,42,.3)' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'10px', letterSpacing:'.15em', color:'#1a1a2e', fontWeight:600, textTransform:'uppercase' }}>Your Future Home Awaits</span>
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