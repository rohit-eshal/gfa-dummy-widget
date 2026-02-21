import { useState, useEffect, useRef } from "react";

const SERVICES = [
    {
        num: "01",
        icon: "📊",
        title: "Data Solutions & Business Intelligence",
        desc: "Advising clients across the full data value chain — collecting, transforming and analysing complex datasets to drive smarter decisions.",
        accent: "#60A5FA",
        tag: "Monitoring · BI · Dashboards",
    },
    {
        num: "02",
        icon: "🤖",
        title: "Data Science & AI",
        desc: "Applying machine learning and AI to real-world development challenges — from SDG initiative mapping to earth observation models.",
        accent: "#F5A623",
        tag: "ML · NLP · Earth Observation",
    },
    {
        num: "03",
        icon: "🌍",
        title: "GIS & Remote Sensing",
        desc: "Deploying geographic information systems and satellite imagery for in-depth spatial analysis and environmental insight.",
        accent: "#34D399",
        tag: "Spatial Analysis · Satellite · Maps",
    },
    {
        num: "04",
        icon: "🏛️",
        title: "Digital Strategy & Policy",
        desc: "Supporting governments and organisations to navigate digital transformation and shape inclusive, evidence-based digital policy.",
        accent: "#C084FC",
        tag: "Gov · Strategy · Transformation",
    },
];

const STATS = [
    { value: "40+", label: "Countries" },
    { value: "€4M+", label: "Projects" },
    { value: "15+", label: "Experts" },
];

function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r},${g},${b}`;
}

export default function GFALanding() {
    const [hovered, setHovered] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
    const containerRef = useRef(null);

    useEffect(() => {
        const onMove = (e) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            setMousePos({
                x: ((e.clientX - rect.left) / rect.width) * 100,
                y: ((e.clientY - rect.top) / rect.height) * 100,
            });
        };
        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-full h-screen overflow-hidden flex relative select-none"
            style={{ background: "#060E1A", fontFamily: "'DM Sans', sans-serif" }}
        >
            {/* ── STYLES ── */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700;12..96,800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');
        * { box-sizing: border-box; }
        .bg { font-family: 'Bricolage Grotesque', sans-serif; }

        @keyframes fadeUp   { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeLeft { from{opacity:0;transform:translateX(20px)} to{opacity:1;transform:translateX(0)} }

        .a1 { animation: fadeUp   0.9s cubic-bezier(0.22,1,0.36,1) 0.05s both; }
        .a2 { animation: fadeUp   0.9s cubic-bezier(0.22,1,0.36,1) 0.18s both; }
        .a3 { animation: fadeUp   0.9s cubic-bezier(0.22,1,0.36,1) 0.30s both; }
        .a4 { animation: fadeUp   0.9s cubic-bezier(0.22,1,0.36,1) 0.42s both; }
        .a5 { animation: fadeUp   0.9s cubic-bezier(0.22,1,0.36,1) 0.54s both; }
        .a6 { animation: fadeUp   0.9s cubic-bezier(0.22,1,0.36,1) 0.66s both; }
        .al1{ animation: fadeLeft 0.9s cubic-bezier(0.22,1,0.36,1) 0.40s both; }
        .al4{ animation: fadeLeft 0.9s cubic-bezier(0.22,1,0.36,1) 0.76s both; }

        @keyframes drift1 { 0%,100%{transform:translate(0,0) scale(1);}   60%{transform:translate(40px,-30px) scale(1.08);} }
        @keyframes drift2 { 0%,100%{transform:translate(0,0) scale(1);}   55%{transform:translate(-25px,30px) scale(0.94);} }
        @keyframes drift3 { 0%,100%{transform:translate(0,0);}            50%{transform:translate(20px,-15px);} }
        @keyframes pulse  { 0%,100%{opacity:0.55;} 50%{opacity:0.85;} }

        .orb1 { animation: drift1 11s ease-in-out infinite, pulse 6s ease-in-out infinite; }
        .orb2 { animation: drift2 14s ease-in-out infinite 2s, pulse 8s ease-in-out infinite 1s; }
        .orb3 { animation: drift3 9s ease-in-out infinite 0.5s; }

        @keyframes dotPulse { 0%,100%{box-shadow:0 0 0 0 rgba(245,166,35,0.6);} 50%{box-shadow:0 0 0 5px rgba(245,166,35,0);} }
        .dotpulse { animation: dotPulse 2s ease-in-out infinite; }

        @keyframes shimmer { 0%{background-position:-300% center;} 100%{background-position:300% center;} }
        .shimmer {
          background: linear-gradient(100deg, #F5A623 0%, #FDE68A 35%, #F5A623 50%, #FBBF24 65%, #FDE68A 100%);
          background-size: 300% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .card {
          transition: transform 0.45s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease, border-color 0.3s ease, background 0.3s ease;
          will-change: transform;
        }
        .card:hover { transform: translateY(-5px) scale(1.012); }

        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .marquee-inner { animation: marquee 22s linear infinite; display:flex; gap:1.5rem; width: max-content; }

        .panel-sep {
          width: 1px;
          background: linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.09) 20%, rgba(255,255,255,0.09) 80%, transparent 100%);
        }

        .btn-glow {
          position: relative; overflow: hidden;
          transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s;
        }
        .btn-glow:hover {
          transform: translateY(-2px) scale(1.04);
          box-shadow: 0 0 28px rgba(245,166,35,0.45), 0 8px 20px rgba(245,166,35,0.2);
        }
        .btn-glow::before {
          content:''; position:absolute; inset:0;
          background: linear-gradient(135deg, rgba(255,255,255,0.22) 0%, transparent 60%);
          opacity:0; transition: opacity 0.3s;
        }
        .btn-glow:hover::before { opacity: 1; }

        .btn-ghost {
          transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), background 0.3s, border-color 0.3s;
        }
        .btn-ghost:hover {
          transform: translateY(-2px) scale(1.03);
          background: rgba(255,255,255,0.09) !important;
          border-color: rgba(255,255,255,0.22) !important;
        }

        .divider { height:1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 75%, transparent); }

        @keyframes countUp { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
        .stat-val { animation: countUp 1s cubic-bezier(0.22,1,0.36,1) 0.9s both; }
      `}</style>

            {/* ══ BACKGROUND ══ */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Mouse spotlight */}
                <div
                    className="absolute w-[600px] h-[600px] rounded-full"
                    style={{
                        left: `${mousePos.x}%`, top: `${mousePos.y}%`,
                        transform: "translate(-50%,-50%)",
                        background: "radial-gradient(circle, rgba(26,74,138,0.07) 0%, transparent 65%)",
                        transition: "left 1.4s ease, top 1.4s ease",
                    }}
                />
                <div className="orb1 absolute -top-40 right-0 w-[620px] h-[620px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(30,80,155,0.42) 0%, transparent 65%)" }} />
                <div className="orb2 absolute -bottom-28 right-1/3 w-80 h-80 rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(245,166,35,0.13) 0%, transparent 70%)" }} />
                <div className="orb3 absolute top-1/2 left-1/4 w-52 h-52 rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(96,165,250,0.07) 0%, transparent 70%)" }} />
                {/* Grid */}
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: "linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)",
                        backgroundSize: "52px 52px",
                    }} />
                {/* Diagonal center line */}
                <div className="absolute"
                    style={{
                        width: "1px", height: "68vh", top: "16vh", left: "50.6%",
                        background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.055) 30%, rgba(255,255,255,0.055) 70%, transparent)",
                    }} />
            </div>

            {/* ══ LEFT PANEL ══ */}
            <div className="relative z-10 flex flex-col justify-between w-[52%] h-full px-14 py-9 shrink-0">

                {/* Logo row */}
                <div className="a1 flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        <span className="bg font-black text-white text-xl tracking-tight">GFA</span>
                        <svg width="13" height="11" viewBox="0 0 13 11" fill="none">
                            <path d="M6.5 0L13 11H0L6.5 0Z" fill="#F5A623" />
                        </svg>
                    </div>
                    <div style={{ width: 1, height: 18, background: "rgba(255,255,255,0.14)" }} />
                    <span className="text-xs font-medium tracking-[0.18em] uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>
                        Consulting Group
                    </span>
                    <div className="ml-auto flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                        style={{ background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.22)" }}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#34D399", boxShadow: "0 0 6px #34D399" }} />
                        <span className="text-xs font-semibold" style={{ color: "#34D399", letterSpacing: "0.06em" }}>Active</span>
                    </div>
                </div>

                {/* Hero copy */}
                <div className="flex flex-col gap-5">

                    {/* Badge */}
                    <div className="a2 inline-flex items-center gap-2.5 self-start px-3.5 py-1.5 rounded-full"
                        style={{ background: "rgba(245,166,35,0.07)", border: "1px solid rgba(245,166,35,0.22)", backdropFilter: "blur(8px)" }}>
                        <span className="dotpulse w-1.5 h-1.5 rounded-full" style={{ background: "#F5A623" }} />
                        <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "#F5A623" }}>
                            Digital Innovation Unit
                        </span>
                    </div>

                    {/* Headline */}
                    <div className="a3">
                        <h1 className="bg font-black leading-[0.95] tracking-tighter text-white"
                            style={{ fontSize: "clamp(2.8rem, 4.8vw, 4rem)" }}>
                            Data Solutions<br />
                            for the <span className="shimmer">Public Good.</span>
                        </h1>
                    </div>

                    {/* Body */}
                    <p className="a4 text-sm leading-[1.8] max-w-[380px]"
                        style={{ color: "rgba(255,255,255,0.46)", fontWeight: 300 }}>
                        GFA's DIU is a globally connected team — blending{" "}
                        <span style={{ color: "rgba(255,255,255,0.72)", fontWeight: 400 }}>data science, IT, design and policy</span>{" "}
                        to tackle the world's most pressing development challenges with ethical, inclusive practices.
                    </p>

                    {/* Scrolling tag strip */}
                    <div className="a4 overflow-hidden rounded-lg py-1"
                        style={{ maskImage: "linear-gradient(90deg,transparent,black 10%,black 90%,transparent)" }}>
                        <div className="marquee-inner">
                            {[..."Ethical AI·GIS Mapping·Policy Design·Data Literacy·SDG Goals·Remote Sensing·Open Data·BI Dashboards".split("·"),
                            ..."Ethical AI·GIS Mapping·Policy Design·Data Literacy·SDG Goals·Remote Sensing·Open Data·BI Dashboards".split("·")
                            ].map((t, i) => (
                                <span key={i}
                                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full shrink-0"
                                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.32)", letterSpacing: "0.05em" }}>
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="a5 flex items-center gap-3 mt-1">
                        <button className="btn-glow bg font-bold text-xs uppercase tracking-[0.12em] px-7 py-3.5 rounded-xl"
                            style={{ background: "linear-gradient(135deg, #F5A623 0%, #FBBF24 100%)", color: "#060E1A" }}>
                            Explore Projects →
                        </button>
                        <button className="btn-ghost bg font-semibold text-xs uppercase tracking-[0.12em] px-7 py-3.5 rounded-xl"
                            style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.65)", border: "1px solid rgba(255,255,255,0.1)" }}>
                            Our Approach
                        </button>
                    </div>
                </div>

                {/* Stats */}
                <div className="a6">
                    <div className="divider mb-5" />
                    <div className="flex items-center gap-0">
                        {STATS.map((s, i) => (
                            <div key={s.label} className="flex items-center">
                                <div className="flex flex-col gap-1 pr-8">
                                    <span className="bg font-black text-white stat-val" style={{ fontSize: "1.75rem", lineHeight: 1 }}>
                                        {s.value}
                                    </span>
                                    <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.06em" }}>
                                        {s.label}
                                    </span>
                                </div>
                                {i < STATS.length - 1 && (
                                    <div style={{ width: 1, height: 36, background: "rgba(255,255,255,0.08)", marginRight: "2rem" }} />
                                )}
                            </div>
                        ))}
                        {/* Partners pill */}
                        <div className="ml-auto self-center flex items-center gap-2 px-3.5 py-2 rounded-xl"
                            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                            <span className="text-xs" style={{ color: "rgba(255,255,255,0.28)", letterSpacing: "0.07em" }}>Partners</span>
                            <span className="text-xs font-bold text-white">GIZ · EU · BMZ</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Vertical panel divider */}
            <div className="panel-sep my-10 shrink-0" />

            {/* ══ RIGHT PANEL ══ */}
            <div className="relative z-10 flex-1 h-full flex flex-col py-9 pl-8 pr-10 gap-3">

                {/* Header */}
                <div className="al1 flex items-center justify-between mb-0.5">
                    <div className="flex items-center gap-3">
                        <span className="text-xs font-bold tracking-[0.2em] uppercase"
                            style={{ color: "rgba(255,255,255,0.26)" }}>
                            Areas of Expertise
                        </span>
                        <div style={{ height: 1, width: 36, background: "rgba(255,255,255,0.08)" }} />
                    </div>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full"
                        style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.26)", border: "1px solid rgba(255,255,255,0.07)" }}>
                        4 services
                    </span>
                </div>

                {/* Service cards */}
                <div className="flex flex-col gap-2.5 flex-1 justify-center">
                    {SERVICES.map((s, i) => {
                        const rgb = hexToRgb(s.accent);
                        const isHov = hovered === i;
                        return (
                            <div
                                key={s.num}
                                className="card relative rounded-2xl cursor-pointer overflow-hidden"
                                style={{
                                    background: isHov
                                        ? `linear-gradient(135deg, rgba(${rgb},0.13) 0%, rgba(${rgb},0.04) 100%)`
                                        : "rgba(255,255,255,0.03)",
                                    border: isHov
                                        ? `1px solid rgba(${rgb},0.36)`
                                        : "1px solid rgba(255,255,255,0.07)",
                                    boxShadow: isHov
                                        ? `0 12px 40px rgba(${rgb},0.12), inset 0 1px 0 rgba(255,255,255,0.07)`
                                        : "inset 0 1px 0 rgba(255,255,255,0.035)",
                                    animation: `fadeLeft 0.9s cubic-bezier(0.22,1,0.36,1) ${0.38 + i * 0.1}s both`,
                                }}
                                onMouseEnter={() => setHovered(i)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                {/* Hover glow blob */}
                                {isHov && (
                                    <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full pointer-events-none"
                                        style={{ background: `radial-gradient(circle, rgba(${rgb},0.22) 0%, transparent 70%)` }} />
                                )}

                                <div className="flex items-start gap-4 px-5 py-4">
                                    {/* Icon */}
                                    <div
                                        className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                                        style={{
                                            background: isHov ? `rgba(${rgb},0.15)` : "rgba(255,255,255,0.05)",
                                            border: isHov ? `1px solid rgba(${rgb},0.25)` : "1px solid rgba(255,255,255,0.08)",
                                            transform: isHov ? "scale(1.1) rotate(-5deg)" : "scale(1) rotate(0deg)",
                                            transition: "all 0.45s cubic-bezier(0.34,1.56,0.64,1)",
                                        }}
                                    >
                                        {s.icon}
                                    </div>

                                    {/* Text */}
                                    <div className="flex flex-col gap-1 flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-2">
                                            <h3 className="bg font-bold text-white leading-tight" style={{ fontSize: "0.82rem" }}>
                                                {s.title}
                                            </h3>
                                            <span
                                                className="bg font-black shrink-0 text-xs px-2 py-0.5 rounded-lg"
                                                style={{
                                                    color: isHov ? s.accent : "rgba(255,255,255,0.16)",
                                                    background: isHov ? `rgba(${rgb},0.12)` : "rgba(255,255,255,0.04)",
                                                    border: `1px solid ${isHov ? `rgba(${rgb},0.2)` : "rgba(255,255,255,0.06)"}`,
                                                    transition: "all 0.3s",
                                                    letterSpacing: "0.03em",
                                                }}
                                            >
                                                {s.num}
                                            </span>
                                        </div>

                                        <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.38)", fontWeight: 300 }}>
                                            {s.desc}
                                        </p>

                                        {/* Tags + arrow */}
                                        <div className="flex items-center justify-between mt-1.5">
                                            <div className="flex flex-wrap gap-1.5">
                                                {s.tag.split(" · ").map(t => (
                                                    <span key={t}
                                                        className="text-xs px-2 py-0.5 rounded-md font-medium"
                                                        style={{
                                                            background: isHov ? `rgba(${rgb},0.1)` : "rgba(255,255,255,0.04)",
                                                            color: isHov ? s.accent : "rgba(255,255,255,0.26)",
                                                            border: `1px solid ${isHov ? `rgba(${rgb},0.18)` : "rgba(255,255,255,0.06)"}`,
                                                            transition: "all 0.3s",
                                                            letterSpacing: "0.04em",
                                                        }}>
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                            <span
                                                className="text-sm font-bold shrink-0"
                                                style={{
                                                    color: isHov ? s.accent : "rgba(255,255,255,0.14)",
                                                    transform: isHov ? "translateX(4px)" : "translateX(0)",
                                                    transition: "all 0.3s",
                                                    display: "inline-block",
                                                }}>
                                                →
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Footer */}
                <div className="al4 flex items-center justify-between pt-2"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.17)" }}>
                        © 2025 GFA Group · Hamburg, Germany
                    </p>
                    <div className="flex items-center gap-4">
                        {["LinkedIn", "Facebook", "Instagram", "Vimeo"].map(sn => (
                            <a key={sn} href="#"
                                className="text-xs font-medium"
                                style={{ color: "rgba(255,255,255,0.2)", textDecoration: "none", transition: "color 0.2s" }}
                                onMouseEnter={e => e.target.style.color = "#fff"}
                                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.2)"}>
                                {sn}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}