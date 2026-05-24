// Product mockups — illustrative UI screens recreating the ChildBloom + Dr. Bloom aesthetic.

const BLOOM_BG    = '#0B1411';   // near-black forest
const BLOOM_CARD  = '#101A16';   // raised card
const BLOOM_CARD2 = '#0E1714';   // sunken card
const BLOOM_LINE  = 'rgba(255,255,255,.06)';
const BLOOM_SAGE  = '#7FA791';   // muted sage accent
const BLOOM_DEEP  = '#2E5944';   // deep forest accent
const BLOOM_CREAM = '#EAE4D2';   // warm cream type
const BLOOM_DIM   = 'rgba(234,228,210,.55)';

// ── Bloom mark (8-petal stylized flower)
const BloomMark = ({ size = 18, color = BLOOM_SAGE }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    {[0,45,90,135,180,225,270,315].map(a => (
      <ellipse key={a} cx="12" cy="6.5" rx="2.2" ry="4.5"
        fill={color} opacity={a%90===0?0.9:0.65}
        transform={`rotate(${a} 12 12)`} />
    ))}
    <circle cx="12" cy="12" r="1.6" fill="#0B1411"/>
  </svg>
);

const PhoneFrame = ({ children, className = '', statusDark = false }) => (
  <div className={`relative mx-auto ${className}`} style={{ width: 360, height: 740 }}>
    <div className="absolute inset-0 rounded-[58px] bg-black p-[10px] shadow-[0_60px_120px_-30px_rgba(0,0,0,.55),0_30px_60px_-30px_rgba(0,0,0,.5)]">
      <div className="relative w-full h-full rounded-[48px] overflow-hidden" style={{ background: statusDark ? BLOOM_BG : '#fff' }}>
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 h-[26px] w-[110px] rounded-full bg-black"></div>
        <div className="absolute top-2 left-0 right-0 z-20 flex items-center justify-between px-7 text-[11px] font-semibold" style={{ color: statusDark ? BLOOM_CREAM : '#000' }}>
          <span>9:41</span>
          <span className="opacity-0">.</span>
        </div>
        <div className="absolute top-2 right-7 z-20 flex items-center gap-1" style={{ color: statusDark ? BLOOM_CREAM : '#000' }}>
          <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor"><rect x="0" y="6" width="2.5" height="5" rx=".5"/><rect x="4" y="4" width="2.5" height="7" rx=".5"/><rect x="8" y="2" width="2.5" height="9" rx=".5"/><rect x="12" y="0" width="2.5" height="11" rx=".5"/></svg>
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M1 4 a8 8 0 0 1 12 0"/><path d="M3.2 6.3 a5 5 0 0 1 7.6 0"/><circle cx="7" cy="8.5" r="1" fill="currentColor"/></svg>
          <div className="relative ml-0.5">
            <div className="w-[24px] h-[11px] rounded-[3px] border" style={{ borderColor: statusDark ? BLOOM_CREAM : '#000' }}></div>
            <div className="absolute inset-[2px] right-[6px] rounded-[1.5px]" style={{ background: statusDark ? BLOOM_CREAM : '#000' }}></div>
            <div className="absolute top-[3px] -right-[2px] w-[1.5px] h-[5px] rounded-r" style={{ background: statusDark ? BLOOM_CREAM : '#000' }}></div>
          </div>
        </div>
        <div className="absolute inset-0 pt-[44px]">{children}</div>
      </div>
    </div>
  </div>
);

// Shared bottom nav for Bloom screens
const BloomNav = ({ active = 'home' }) => (
  <div className="absolute bottom-0 left-0 right-0 h-[92px] flex items-end justify-around pb-5 pt-2 px-4" style={{ background: BLOOM_BG }}>
    {[
      { k:'home',     l:'Home',     i: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M3 9l7-6 7 6v8a1 1 0 0 1-1 1h-4v-6h-4v6H4a1 1 0 0 1-1-1z"/></svg> },
      { k:'timeline', l:'Timeline', i: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M4 5h12M4 10h8M4 15h12"/></svg> },
      { k:'bloom',    l:'',         i: <BloomMark size={22} color="#fff" />, center: true },
      { k:'care',     l:'Care',     i: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M10 17s-6-3.5-6-8a3.5 3.5 0 0 1 6-2.4A3.5 3.5 0 0 1 16 9c0 4.5-6 8-6 8z"/></svg> },
      { k:'you',      l:'You',      i: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="10" cy="7" r="3"/><path d="M4 17a6 6 0 0 1 12 0"/></svg> },
    ].map(t => t.center ? (
      <div key={t.k} className="-mt-6 w-12 h-12 rounded-full flex items-center justify-center" style={{ background: BLOOM_DEEP, boxShadow: '0 8px 24px -8px rgba(127,167,145,.5)' }}>
        {t.i}
      </div>
    ) : (
      <div key={t.k} className="flex flex-col items-center gap-1" style={{ color: active === t.k ? BLOOM_CREAM : BLOOM_DIM }}>
        {t.i}
        <span className="text-[10px] tracking-wide" style={{ fontWeight: active === t.k ? 600 : 400 }}>{t.l}</span>
      </div>
    ))}
  </div>
);

// ── ChildBloom: gentle dark home
const ChildBloomMockup = () => (
  <PhoneFrame statusDark>
    <div className="relative h-full overflow-hidden" style={{ background: BLOOM_BG, color: BLOOM_CREAM }}>
      {/* Header */}
      <div className="px-5 pt-2 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center font-serif italic text-[18px]" style={{ background: BLOOM_DEEP, color: BLOOM_CREAM }}>Y</div>
          <div>
            <div className="text-[11px] tracking-[.14em] uppercase" style={{ color: BLOOM_DIM }}>Quiet night, Vaibhav_</div>
            <div className="font-serif italic text-[22px] leading-tight">Yuga</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: BLOOM_CARD }}>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke={BLOOM_CREAM} strokeWidth="1.4"><path d="M5 8a5 5 0 0 1 10 0v4l1.5 2H3.5L5 12z"/><path d="M8 16a2 2 0 0 0 4 0"/></svg>
          </div>
          <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: BLOOM_CARD }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke={BLOOM_CREAM} strokeWidth="1.3"><circle cx="7" cy="7" r="1"/><circle cx="2.5" cy="7" r="1"/><circle cx="11.5" cy="7" r="1"/></svg>
          </div>
        </div>
      </div>

      {/* Hero card */}
      <div className="mx-4 mt-2 relative rounded-2xl overflow-hidden p-5" style={{ background: BLOOM_CARD, border: `1px solid ${BLOOM_LINE}` }}>
        <div className="absolute right-2 top-2 opacity-20">
          <BloomMark size={92} color={BLOOM_SAGE} />
        </div>
        <div className="relative">
          <div className="text-[10px] tracking-[.22em] uppercase" style={{ color: BLOOM_SAGE }}>Today, gently</div>
          <div className="font-serif italic text-[28px] leading-[1.05] mt-2 max-w-[80%]">Outside walk, no agenda</div>
          <div className="text-[12.5px] mt-2 leading-snug max-w-[80%]" style={{ color: BLOOM_DIM }}>Let them stop at every leaf. The pace is the point.</div>
          <button className="mt-4 text-[12px] px-3.5 py-2 rounded-full" style={{ border: `1px solid ${BLOOM_LINE}`, color: BLOOM_CREAM }}>See bloom path →</button>
        </div>
      </div>

      {/* Stats */}
      <div className="px-5 mt-5 grid grid-cols-3">
        {[
          { l:'Slept',     v:'—',    s:'not logged' },
          { l:'Feeds',     v:'1',    s:'today' },
          { l:'Last feed', v:'0m',   s:'ago' },
        ].map((x,i)=>(
          <div key={i}>
            <div className="text-[10px] tracking-[.22em] uppercase" style={{ color: BLOOM_DIM }}>{x.l}</div>
            <div className="font-serif italic text-[26px] mt-1">{x.v}</div>
            <div className="text-[11px] -mt-0.5" style={{ color: BLOOM_DIM }}>{x.s}</div>
          </div>
        ))}
      </div>

      {/* Action tiles */}
      <div className="px-4 mt-5 grid grid-cols-4 gap-2">
        {[
          { l:'Feed',   s:'1 today',   icon:<svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke={BLOOM_SAGE} strokeWidth="1.4"><path d="M8 3h4v3H8z"/><rect x="7" y="6" width="6" height="11" rx="2"/></svg>, tint:'rgba(127,167,145,.10)'},
          { l:'Sleep',  s:'Tap to log', icon:<svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#9FB7CF" strokeWidth="1.4"><path d="M14 4a7 7 0 1 0 4 11 6 6 0 0 1-4-11z"/></svg>, tint:'rgba(159,183,207,.10)'},
          { l:'Bloom',  s:'Path',     icon:<BloomMark size={16} color="#E6C58F"/>, tint:'rgba(230,197,143,.10)'},
          { l:'Growth', s:'Weight, height', icon:<svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke={BLOOM_SAGE} strokeWidth="1.4"><path d="M3 16l5-6 4 3 5-7"/></svg>, tint:'rgba(127,167,145,.10)'},
        ].map((t,i)=>(
          <div key={i} className="rounded-2xl p-3" style={{ background: BLOOM_CARD, border: `1px solid ${BLOOM_LINE}` }}>
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: t.tint }}>{t.icon}</div>
            <div className="text-[13px] font-semibold mt-2">{t.l}</div>
            <div className="text-[10px]" style={{ color: BLOOM_DIM }}>{t.s}</div>
          </div>
        ))}
      </div>

      {/* Last feed */}
      <div className="mx-4 mt-3 rounded-2xl p-3 flex items-center gap-3" style={{ background: BLOOM_CARD, border: `1px solid ${BLOOM_LINE}` }}>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background:'rgba(127,167,145,.12)' }}>
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke={BLOOM_SAGE} strokeWidth="1.4"><path d="M8 3h4v3H8z"/><rect x="7" y="6" width="6" height="11" rx="2"/></svg>
        </div>
        <div className="flex-1">
          <div className="text-[10px] tracking-[.18em] uppercase" style={{ color: BLOOM_DIM }}>Last feed</div>
          <div className="text-[13px] font-medium">breast · 15 min</div>
          <div className="text-[10px]" style={{ color: BLOOM_DIM }}>0m ago</div>
        </div>
        <button className="text-[11px] px-3 py-1.5 rounded-full flex items-center gap-1" style={{ background: BLOOM_DEEP, color: BLOOM_CREAM }}>+ Repeat</button>
      </div>

      <BloomNav active="home" />
    </div>
  </PhoneFrame>
);

// ── Dr. Bloom: greeting + suggestions + bokeh
const DrBloomMockup = () => (
  <PhoneFrame statusDark>
    <div className="relative h-full overflow-hidden" style={{ background: BLOOM_BG, color: BLOOM_CREAM }}>
      {/* Date */}
      <div className="text-center text-[10px] tracking-[.24em] uppercase pt-3" style={{ color: BLOOM_DIM }}>Thursday, 21 May</div>

      {/* Greeting card */}
      <div className="mx-4 mt-3 relative rounded-2xl overflow-hidden p-4 pr-5" style={{ background: BLOOM_CARD, border: `1px solid ${BLOOM_LINE}` }}>
        <div className="text-[10px] tracking-[.22em] uppercase" style={{ color: BLOOM_SAGE }}>Bloom · Greeting</div>
        <div className="font-serif italic text-[22px] leading-[1.18] mt-2">
          Good to see you, Vaibhav. I'm here for Yuga today. What's on your mind?
        </div>
        <div className="absolute top-3 right-3 opacity-70">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke={BLOOM_SAGE} strokeWidth="1.2">
            <path d="M10 2v3M10 15v3M2 10h3M15 10h3M4.5 4.5l2 2M13.5 13.5l2 2M4.5 15.5l2-2M13.5 6.5l2-2"/>
          </svg>
        </div>
      </div>

      {/* Suggestion chips */}
      <div className="px-4 mt-3 space-y-2">
        {[
          'How is the IAP vaccine schedule different from the government schedule?',
          'What should I watch for in this developmental stage?',
          "Is Yuga's growth on track?",
        ].map((q,i)=>(
          <div key={i} className="rounded-2xl px-3.5 py-2.5 text-[12.5px] leading-snug" style={{ background: 'rgba(234,228,210,.06)', border: `1px solid ${BLOOM_LINE}`, color: BLOOM_CREAM }}>
            {q}
          </div>
        ))}
      </div>

      {/* Bokeh */}
      <div className="absolute pointer-events-none" style={{ inset: 0 }}>
        <div className="absolute rounded-full" style={{ width: 120, height: 120, top: 360, left: 30, background: 'radial-gradient(closest-side, rgba(220,220,210,.18), transparent 70%)', filter: 'blur(6px)' }}></div>
        <div className="absolute rounded-full" style={{ width: 110, height: 110, top: 320, right: 24, background: 'radial-gradient(closest-side, rgba(212,150,80,.22), transparent 70%)', filter: 'blur(6px)' }}></div>
        <div className="absolute rounded-full" style={{ width: 90, height: 90, top: 440, right: 90, background: 'radial-gradient(closest-side, rgba(160,160,150,.16), transparent 70%)', filter: 'blur(6px)' }}></div>
      </div>

      {/* Composer */}
      <div className="absolute bottom-[112px] left-0 right-0 px-4">
        <div className="flex items-center gap-2 rounded-full px-4 py-3" style={{ background: BLOOM_CARD, border: `1px solid ${BLOOM_LINE}` }}>
          <span className="text-[12px] flex-1" style={{ color: BLOOM_DIM }}>Ask Dr. Bloom anything…</span>
          <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke={BLOOM_SAGE} strokeWidth="1.5"><rect x="6" y="2.5" width="6" height="9" rx="3"/><path d="M3.5 9.5a5.5 5.5 0 0 0 11 0M9 15v1.5"/></svg>
        </div>
        <div className="text-center text-[10px] mt-2" style={{ color: 'rgba(234,228,210,.35)' }}>
          Evidence-based · IAP · WHO · AAP · Not a substitute for your pediatrician
        </div>
      </div>

      <BloomNav active="care" />
    </div>
  </PhoneFrame>
);

// ── Bloom Enterprise — keeps clean light B2B feel for contrast
const BloomEnterpriseMockup = () => (
  <div className="relative mx-auto bg-white rounded-2xl overflow-hidden border border-white/10 shadow-[0_60px_120px_-30px_rgba(0,0,0,.55),0_30px_60px_-30px_rgba(0,0,0,.5)]" style={{ width: 980, height: 620 }}>
    <div className="h-9 bg-neutral-100 border-b border-black/5 flex items-center px-4 gap-2">
      <span className="w-3 h-3 rounded-full bg-[#FF5F57]"></span>
      <span className="w-3 h-3 rounded-full bg-[#FEBC2E]"></span>
      <span className="w-3 h-3 rounded-full bg-[#28C840]"></span>
      <div className="ml-4 px-3 py-1 rounded-md bg-white text-[11px] text-neutral-500 border border-black/5 flex items-center gap-1.5">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke={BLOOM_DEEP} strokeWidth="1.4"><rect x="2" y="3.5" width="6" height="5" rx="1"/><path d="M3.5 3.5V2.2a1.5 1.5 0 0 1 3 0v1.3"/></svg>
        enterprise.bloom.in / cohort / kerala-north
      </div>
    </div>
    <div className="flex h-[calc(100%-36px)]">
      <div className="w-56 border-r border-black/5 px-3 py-4 bg-neutral-50/60">
        <div className="flex items-center gap-2 px-2 mb-4">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: BLOOM_DEEP }}><BloomMark size={14} color="#fff" /></div>
          <div className="text-[13px] font-semibold">Bloom <span className="text-neutral-400 font-normal">Enterprise</span></div>
        </div>
        <div className="text-[10px] uppercase tracking-wider text-neutral-400 px-2 mt-3 mb-1">Workspace</div>
        {['Overview','Cohorts','Children','Clinicians','Programs'].map((t,i)=>(
          <div key={i} className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[12.5px] ${i===1 ? 'bg-black text-white' : 'text-neutral-700 hover:bg-black/5'}`}>
            <span className="w-3.5 h-3.5 rounded bg-current opacity-70"></span>{t}
          </div>
        ))}
        <div className="text-[10px] uppercase tracking-wider text-neutral-400 px-2 mt-4 mb-1">Insights</div>
        {['Outcomes','Risk flags','Reports'].map((t,i)=>(
          <div key={i} className="flex items-center gap-2 px-2 py-1.5 rounded-md text-[12.5px] text-neutral-700">
            <span className="w-3.5 h-3.5 rounded bg-current opacity-50"></span>{t}
          </div>
        ))}
      </div>
      <div className="flex-1 p-6 overflow-hidden">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-[.18em] text-neutral-400">Cohort</div>
            <div className="text-[22px] font-semibold tracking-tight">Kerala North · Q2 2026</div>
            <div className="text-[12px] text-neutral-500 mt-1">1,284 families · 12 ASHA clinics · 47 anganwadis</div>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-[12px] px-3 py-1.5 rounded-full border border-black/10">Export</button>
            <button className="text-[12px] px-3 py-1.5 rounded-full text-white" style={{ background: BLOOM_DEEP }}>Run report</button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3 mt-5">
          {[
            { l: "Active families", v: "1,284", d: "+11%" },
            { l: "Milestones logged", v: "38.6k", d: "+24%" },
            { l: "Risk flags this week", v: "26", d: "−4" },
            { l: "Avg. parent engagement", v: "4.7×/wk", d: "+0.6" },
          ].map((k,i) => (
            <div key={i} className="rounded-xl border border-black/5 bg-white p-3.5">
              <div className="text-[11px] text-neutral-500">{k.l}</div>
              <div className="text-[20px] font-semibold tracking-tight mt-1">{k.v}</div>
              <div className="text-[11px] mt-0.5" style={{ color: BLOOM_DEEP }}>{k.d} vs last week</div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-black/5 bg-white p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="text-[13px] font-semibold">Milestone completion by age band</div>
            <div className="flex items-center gap-3 text-[11px] text-neutral-500">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full" style={{ background: BLOOM_DEEP }}></span>On track</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-neutral-300"></span>Needs support</span>
            </div>
          </div>
          <div className="grid grid-cols-8 gap-3 h-32 items-end">
            {[[78,22],[82,18],[71,29],[88,12],[64,36],[91,9],[83,17],[76,24]].map(([a,b],i)=> (
              <div key={i} className="flex flex-col gap-1 items-stretch">
                <div className="rounded-md" style={{ height: `${a*0.9}%`, background: BLOOM_DEEP }}></div>
                <div className="rounded-md bg-neutral-200" style={{ height: `${b*0.9}%` }}></div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-8 mt-2 text-[10px] text-neutral-400 text-center">
            {['0–6m','6–12m','1y','1.5y','2y','3y','4y','5y+'].map((t,i)=>(<div key={i}>{t}</div>))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

window.PhoneFrame = PhoneFrame;
window.BloomMark = BloomMark;
window.ChildBloomMockup = ChildBloomMockup;
window.DrBloomMockup = DrBloomMockup;
window.BloomEnterpriseMockup = BloomEnterpriseMockup;
