// Interactive product mockups — ChildBloom, Dr. Bloom, Bloom Enterprise

const BLOOM_BG    = '#0B1411';
const BLOOM_CARD  = '#101A16';
const BLOOM_LINE  = 'rgba(255,255,255,.06)';
const BLOOM_SAGE  = '#7FA791';
const BLOOM_DEEP  = '#2E5944';
const BLOOM_CREAM = '#EAE4D2';
const BLOOM_DIM   = 'rgba(234,228,210,.55)';

const useHov = () => {
  const [h, setH] = React.useState(false);
  return [h, { onMouseEnter: () => setH(true), onMouseLeave: () => setH(false) }];
};

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
          <span>9:41</span><span className="opacity-0">.</span>
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

const BloomNav = ({ active = 'home', onTab }) => (
  <div className="absolute bottom-0 left-0 right-0 h-[92px] flex items-end justify-around pb-5 pt-2 px-4 z-20"
       style={{ background: BLOOM_BG, borderTop: `1px solid ${BLOOM_LINE}` }}>
    {[
      { k:'home',     l:'Home',     i: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M3 9l7-6 7 6v8a1 1 0 0 1-1 1h-4v-6h-4v6H4a1 1 0 0 1-1-1z"/></svg> },
      { k:'timeline', l:'Timeline', i: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M4 5h12M4 10h8M4 15h12"/></svg> },
      { k:'bloom',    l:'',         i: <BloomMark size={22} color="#fff"/>, center: true },
      { k:'care',     l:'Care',     i: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M10 17s-6-3.5-6-8a3.5 3.5 0 0 1 6-2.4A3.5 3.5 0 0 1 16 9c0 4.5-6 8-6 8z"/></svg> },
      { k:'you',      l:'You',      i: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="10" cy="7" r="3"/><path d="M4 17a6 6 0 0 1 12 0"/></svg> },
    ].map(t => t.center ? (
      <div key={t.k} onClick={() => onTab && onTab(t.k)}
           className="-mt-6 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
           style={{ background: active === 'bloom' ? BLOOM_SAGE : BLOOM_DEEP, boxShadow: '0 8px 24px -8px rgba(127,167,145,.5)', transition: 'all 250ms ease', transform: active === 'bloom' ? 'scale(1.1)' : 'scale(1)' }}>
        {t.i}
      </div>
    ) : (
      <div key={t.k} onClick={() => onTab && onTab(t.k)}
           className="flex flex-col items-center gap-1 cursor-pointer"
           style={{ color: active === t.k ? BLOOM_CREAM : BLOOM_DIM, transition: 'color 200ms ease, transform 200ms ease', transform: active === t.k ? 'translateY(-2px)' : 'none' }}>
        {t.i}
        <span className="text-[10px] tracking-wide" style={{ fontWeight: active === t.k ? 600 : 400 }}>{t.l}</span>
      </div>
    ))}
  </div>
);

// ── Overlay: Sleep Logger
const SleepOverlay = ({ onClose }) => {
  const [active, setActive] = React.useState(false);
  const [secs, setSecs] = React.useState(0);
  React.useEffect(() => {
    if (!active) return;
    const t = setInterval(() => setSecs(s => s + 1), 1000);
    return () => clearInterval(t);
  }, [active]);
  const fmt = s => `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;
  return (
    <div className="absolute inset-0 z-30 flex flex-col justify-end" style={{ background: 'rgba(11,20,17,.7)', backdropFilter: 'blur(4px)' }} onClick={e => { if(e.target===e.currentTarget) onClose(); }}>
      <div className="sheet-up rounded-t-3xl p-6" style={{ background: BLOOM_CARD, border: `1px solid ${BLOOM_LINE}` }}>
        <div className="w-8 h-1 rounded-full mx-auto mb-5" style={{ background: 'rgba(255,255,255,.15)' }}></div>
        <div className="flex items-center justify-between mb-5">
          <div>
            <div className="text-[10px] tracking-[.2em] uppercase" style={{ color: BLOOM_SAGE }}>Sleep session</div>
            <div className="font-serif italic text-[22px] mt-0.5">Log Yuga's sleep</div>
          </div>
          <div className="text-[11px] px-2.5 py-1 rounded-full cursor-pointer" style={{ background: 'rgba(255,255,255,.06)', color: BLOOM_DIM }} onClick={onClose}>✕ close</div>
        </div>
        <div className="text-center py-6">
          <div className="font-serif italic text-[52px] tabular-nums" style={{ color: active ? BLOOM_CREAM : BLOOM_DIM, transition: 'color 400ms' }}>{fmt(secs)}</div>
          <div className="text-[12px] mt-1" style={{ color: BLOOM_DIM }}>{active ? 'timer running' : 'tap to begin'}</div>
        </div>
        <button onClick={() => { active ? (setActive(false), onClose()) : setActive(true); }}
                className="w-full py-3.5 rounded-2xl text-[14px] font-medium transition"
                style={{ background: active ? BLOOM_SAGE : BLOOM_DEEP, color: BLOOM_CREAM }}>
          {active ? '⏹ Stop & save' : '▶ Start sleep timer'}
        </button>
        <div className="mt-3 text-center text-[11px]" style={{ color: BLOOM_DIM }}>Last logged: 6h 24m · 2 nights ago</div>
      </div>
    </div>
  );
};

// ── Overlay: Feed Logger
const FeedOverlay = ({ onClose }) => {
  const [type, setType] = React.useState('breast');
  const [side, setSide] = React.useState('L');
  const [mins, setMins] = React.useState(15);
  const [saved, setSaved] = React.useState(false);
  const types = ['breast','formula','solids'];
  return (
    <div className="absolute inset-0 z-30 flex flex-col justify-end" style={{ background: 'rgba(11,20,17,.7)', backdropFilter: 'blur(4px)' }} onClick={e => { if(e.target===e.currentTarget) onClose(); }}>
      <div className="sheet-up rounded-t-3xl p-6" style={{ background: BLOOM_CARD, border: `1px solid ${BLOOM_LINE}` }}>
        <div className="w-8 h-1 rounded-full mx-auto mb-5" style={{ background: 'rgba(255,255,255,.15)' }}></div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-[10px] tracking-[.2em] uppercase" style={{ color: BLOOM_SAGE }}>Log feed</div>
            <div className="font-serif italic text-[22px] mt-0.5">What did Yuga have?</div>
          </div>
          <div className="text-[11px] px-2.5 py-1 rounded-full cursor-pointer" style={{ background: 'rgba(255,255,255,.06)', color: BLOOM_DIM }} onClick={onClose}>✕</div>
        </div>
        <div className="flex gap-2 mb-4">
          {types.map(t => (
            <button key={t} onClick={() => setType(t)} className="flex-1 py-2 rounded-xl text-[12px] font-medium capitalize transition"
                    style={{ background: type===t ? BLOOM_DEEP : 'rgba(255,255,255,.04)', color: type===t ? BLOOM_CREAM : BLOOM_DIM, border: `1px solid ${type===t ? 'rgba(127,167,145,.3)' : BLOOM_LINE}` }}>
              {t}
            </button>
          ))}
        </div>
        {type === 'breast' && (
          <div className="flex gap-2 mb-4">
            {['L','R','Both'].map(s => (
              <button key={s} onClick={() => setSide(s)} className="flex-1 py-2 rounded-xl text-[12px] font-medium transition"
                      style={{ background: side===s ? 'rgba(127,167,145,.12)' : 'rgba(255,255,255,.04)', color: side===s ? BLOOM_SAGE : BLOOM_DIM, border: `1px solid ${side===s ? 'rgba(127,167,145,.25)' : BLOOM_LINE}` }}>
                {s}
              </button>
            ))}
          </div>
        )}
        <div className="flex items-center justify-between mb-5 px-1">
          <div className="text-[12px]" style={{ color: BLOOM_DIM }}>Duration</div>
          <div className="flex items-center gap-3">
            <button onClick={() => setMins(m => Math.max(1,m-5))} className="w-8 h-8 rounded-full flex items-center justify-center text-lg" style={{ background: 'rgba(255,255,255,.06)', color: BLOOM_CREAM }}>−</button>
            <span className="font-serif italic text-[24px] w-14 text-center tabular-nums">{mins}m</span>
            <button onClick={() => setMins(m => m+5)} className="w-8 h-8 rounded-full flex items-center justify-center text-lg" style={{ background: 'rgba(255,255,255,.06)', color: BLOOM_CREAM }}>+</button>
          </div>
        </div>
        {saved ? (
          <div className="w-full py-3.5 rounded-2xl text-[14px] font-medium text-center" style={{ background: 'rgba(127,167,145,.15)', color: BLOOM_SAGE }}>
            ✓ Feed logged!
          </div>
        ) : (
          <button onClick={() => setSaved(true)} className="w-full py-3.5 rounded-2xl text-[14px] font-medium transition"
                  style={{ background: BLOOM_DEEP, color: BLOOM_CREAM }}>
            Log {mins}min {type}{type==='breast'?' · '+side:''}
          </button>
        )}
      </div>
    </div>
  );
};

// ── Overlay: Growth chart
const GrowthOverlay = ({ onClose }) => {
  const points = [7.1,7.6,8.0,8.4,8.8,9.2];
  const months = ['4m','5m','6m','7m','8m','9m'];
  const max = 10, min = 6.5;
  const y = v => ((max-v)/(max-min)) * 80;
  const pts = points.map((v,i) => `${i*(200/5)},${y(v)}`).join(' ');
  return (
    <div className="absolute inset-0 z-30 flex flex-col justify-end" style={{ background: 'rgba(11,20,17,.7)', backdropFilter: 'blur(4px)' }} onClick={e => { if(e.target===e.currentTarget) onClose(); }}>
      <div className="sheet-up rounded-t-3xl p-6" style={{ background: BLOOM_CARD, border: `1px solid ${BLOOM_LINE}` }}>
        <div className="w-8 h-1 rounded-full mx-auto mb-5" style={{ background: 'rgba(255,255,255,.15)' }}></div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-[10px] tracking-[.2em] uppercase" style={{ color: BLOOM_SAGE }}>Bloom Grow</div>
            <div className="font-serif italic text-[22px] mt-0.5">Yuga's growth</div>
          </div>
          <div className="text-[11px] px-2.5 py-1 rounded-full cursor-pointer" style={{ background: 'rgba(255,255,255,.06)', color: BLOOM_DIM }} onClick={onClose}>✕</div>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-5">
          {[{l:'Weight',v:'9.2 kg',p:'P65'},{l:'Height',v:'71 cm',p:'P72'}].map((s,i)=>(
            <div key={i} className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,.03)', border: `1px solid ${BLOOM_LINE}` }}>
              <div className="text-[10px] uppercase tracking-[.18em]" style={{ color: BLOOM_DIM }}>{s.l}</div>
              <div className="font-serif italic text-[24px] mt-1">{s.v}</div>
              <div className="text-[11px] mt-0.5 px-1.5 py-0.5 rounded-full inline-block" style={{ background: 'rgba(127,167,145,.12)', color: BLOOM_SAGE }}>{s.p}</div>
            </div>
          ))}
        </div>
        <div className="text-[11px] mb-2" style={{ color: BLOOM_DIM }}>Weight trend (last 6 months)</div>
        <svg viewBox="0 0 200 90" className="w-full" style={{ height: 90 }}>
          <polyline points={pts} fill="none" stroke={BLOOM_DEEP} strokeWidth="2" strokeLinejoin="round"/>
          <polyline points={`${pts} 200,90 0,90`} fill="url(#gfill)" opacity=".3"/>
          <defs>
            <linearGradient id="gfill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={BLOOM_SAGE} stopOpacity=".6"/>
              <stop offset="100%" stopColor={BLOOM_SAGE} stopOpacity="0"/>
            </linearGradient>
          </defs>
          {points.map((v,i) => (
            <circle key={i} cx={i*(200/5)} cy={y(v)} r="3" fill={i===points.length-1 ? BLOOM_SAGE : BLOOM_DEEP}/>
          ))}
        </svg>
        <div className="flex justify-between mt-1">
          {months.map((m,i) => <span key={i} className="text-[9px]" style={{ color: BLOOM_DIM }}>{m}</span>)}
        </div>
      </div>
    </div>
  );
};

// ── Screen: Home
const HomeScreen = ({ onTabChange }) => {
  const [hovTile, setHovTile] = React.useState(null);
  const [overlay, setOverlay] = React.useState(null);
  const tiles = [
    { k:'feed',   l:'Feed',   s:'1 today',        col:BLOOM_SAGE,  tint:'rgba(127,167,145,.10)', htint:'rgba(127,167,145,.22)',
      icon:<svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke={BLOOM_SAGE} strokeWidth="1.4"><path d="M8 3h4v3H8z"/><rect x="7" y="6" width="6" height="11" rx="2"/></svg> },
    { k:'sleep',  l:'Sleep',  s:'Tap to log',     col:'#9FB7CF',   tint:'rgba(159,183,207,.10)', htint:'rgba(159,183,207,.22)',
      icon:<svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="#9FB7CF" strokeWidth="1.4"><path d="M14 4a7 7 0 1 0 4 11 6 6 0 0 1-4-11z"/></svg> },
    { k:'bloom',  l:'Bloom',  s:'Path',            col:'#E6C58F',   tint:'rgba(230,197,143,.10)', htint:'rgba(230,197,143,.22)',
      icon:<BloomMark size={16} color="#E6C58F"/> },
    { k:'growth', l:'Grow',   s:'Weight · height', col:BLOOM_SAGE,  tint:'rgba(127,167,145,.10)', htint:'rgba(127,167,145,.22)',
      icon:<svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke={BLOOM_SAGE} strokeWidth="1.4"><path d="M3 16l5-6 4 3 5-7"/></svg> },
  ];
  const handleTile = k => {
    if (k === 'bloom') { onTabChange && onTabChange('bloom'); return; }
    setOverlay(k);
  };
  return (
    <div className="relative h-full" style={{ background: BLOOM_BG, color: BLOOM_CREAM }}>
      <div className="px-5 pt-2 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center font-serif italic text-[18px]" style={{ background: BLOOM_DEEP, color: BLOOM_CREAM }}>Y</div>
          <div>
            <div className="text-[11px] tracking-[.14em] uppercase" style={{ color: BLOOM_DIM }}>Good morning, Vaibhav_</div>
            <div className="font-serif italic text-[22px] leading-tight">Yuga</div>
          </div>
        </div>
        <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: BLOOM_CARD }}>
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke={BLOOM_CREAM} strokeWidth="1.4"><path d="M5 8a5 5 0 0 1 10 0v4l1.5 2H3.5L5 12z"/><path d="M8 16a2 2 0 0 0 4 0"/></svg>
        </div>
      </div>

      <div className="mx-4 mt-1 relative rounded-2xl overflow-hidden p-5" style={{ background: BLOOM_CARD, border: `1px solid ${BLOOM_LINE}` }}>
        <div className="absolute right-2 top-2 opacity-20"><BloomMark size={92} color={BLOOM_SAGE}/></div>
        <div className="relative">
          <div className="text-[10px] tracking-[.22em] uppercase" style={{ color: BLOOM_SAGE }}>Today, gently</div>
          <div className="font-serif italic text-[28px] leading-[1.05] mt-2 max-w-[80%]">Outside walk, no agenda</div>
          <div className="text-[12.5px] mt-2 leading-snug max-w-[80%]" style={{ color: BLOOM_DIM }}>Let them stop at every leaf. The pace is the point.</div>
          <button className="mt-4 text-[12px] px-3.5 py-2 rounded-full" style={{ border: `1px solid ${BLOOM_LINE}`, color: BLOOM_CREAM }}>See bloom path →</button>
        </div>
      </div>

      <div className="px-5 mt-4 grid grid-cols-3">
        {[{l:'Slept',v:'—',s:'not logged'},{l:'Feeds',v:'1',s:'today'},{l:'Last feed',v:'0m',s:'ago'}].map((x,i)=>(
          <div key={i}>
            <div className="text-[10px] tracking-[.22em] uppercase" style={{ color: BLOOM_DIM }}>{x.l}</div>
            <div className="font-serif italic text-[26px] mt-1">{x.v}</div>
            <div className="text-[11px] -mt-0.5" style={{ color: BLOOM_DIM }}>{x.s}</div>
          </div>
        ))}
      </div>

      <div className="px-4 mt-4 grid grid-cols-4 gap-2">
        {tiles.map((t,i)=>(
          <div key={i}
               onMouseEnter={() => setHovTile(i)} onMouseLeave={() => setHovTile(null)}
               onClick={() => handleTile(t.k)}
               className="rounded-2xl p-3 cursor-pointer select-none"
               style={{ background: BLOOM_CARD, border: `1px solid ${hovTile===i ? 'rgba(255,255,255,.14)' : BLOOM_LINE}`, transform: hovTile===i ? 'translateY(-3px) scale(1.04)' : 'none', boxShadow: hovTile===i ? '0 10px 28px -8px rgba(0,0,0,.45)' : 'none', transition: 'all 200ms cubic-bezier(.2,.7,.2,1)' }}>
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: hovTile===i ? t.htint : t.tint, transition: 'background 200ms' }}>{t.icon}</div>
            <div className="text-[13px] font-semibold mt-2">{t.l}</div>
            <div className="text-[10px]" style={{ color: BLOOM_DIM }}>{t.s}</div>
          </div>
        ))}
      </div>

      <div className="mx-4 mt-3 rounded-2xl p-3 flex items-center gap-3" style={{ background: BLOOM_CARD, border: `1px solid ${BLOOM_LINE}` }}>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background:'rgba(127,167,145,.12)' }}>
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke={BLOOM_SAGE} strokeWidth="1.4"><path d="M8 3h4v3H8z"/><rect x="7" y="6" width="6" height="11" rx="2"/></svg>
        </div>
        <div className="flex-1">
          <div className="text-[10px] tracking-[.18em] uppercase" style={{ color: BLOOM_DIM }}>Last feed</div>
          <div className="text-[13px] font-medium">breast · 15 min</div>
          <div className="text-[10px]" style={{ color: BLOOM_DIM }}>0m ago</div>
        </div>
        <button onClick={() => setOverlay('feed')} className="text-[11px] px-3 py-1.5 rounded-full" style={{ background: BLOOM_DEEP, color: BLOOM_CREAM }}>+ Repeat</button>
      </div>

      {overlay === 'sleep'  && <SleepOverlay  onClose={() => setOverlay(null)}/>}
      {overlay === 'feed'   && <FeedOverlay   onClose={() => setOverlay(null)}/>}
      {overlay === 'growth' && <GrowthOverlay onClose={() => setOverlay(null)}/>}
    </div>
  );
};

// ── Screen: Timeline
const TimelineScreen = () => {
  const [hovIdx, setHovIdx] = React.useState(null);
  const milestones = [
    { age:'2 months',  label:'Social smile',      note:'Smiles in response to your face', done:true },
    { age:'4 months',  label:'Laughs aloud',      note:'Belly laughs at peek-a-boo',      done:true },
    { age:'6 months',  label:'Sits with support', note:'Holds head steady, sits with help', done:true },
    { age:'9 months',  label:'Waves bye-bye',     note:'Communicates with gestures',       done:false, current:true },
    { age:'12 months', label:'First words',       note:'"Mama", "Dada" with meaning',      done:false },
    { age:'18 months', label:'10–20 words',       note:'Vocabulary growing fast',          done:false },
    { age:'2 years',   label:'Two-word phrases',  note:'"More juice", "Daddy go"',         done:false },
  ];
  return (
    <div className="relative h-full" style={{ background: BLOOM_BG, color: BLOOM_CREAM }}>
      <div className="px-5 pt-3 pb-2 flex items-center justify-between">
        <div>
          <div className="text-[10px] tracking-[.22em] uppercase" style={{ color: BLOOM_SAGE }}>Yuga's journey</div>
          <div className="font-serif italic text-[22px] leading-tight mt-1">Timeline</div>
        </div>
        <div className="text-[11px] px-3 py-1 rounded-full" style={{ background:'rgba(127,167,145,.12)', color:BLOOM_SAGE }}>9 months</div>
      </div>
      <div className="px-5 mt-2 pb-4 overflow-y-auto" style={{ maxHeight:'calc(100% - 60px)' }}>
        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px" style={{ background: BLOOM_LINE }}></div>
          {milestones.map((m,i)=>(
            <div key={i}
                 onMouseEnter={() => setHovIdx(i)} onMouseLeave={() => setHovIdx(null)}
                 className="relative pl-8 pb-5 cursor-pointer"
                 style={{ opacity: !m.done && !m.current && hovIdx!==i ? 0.45 : 1, transition:'opacity 200ms' }}>
              <div className="absolute left-0 top-0.5 w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center"
                   style={{ background: m.done ? BLOOM_DEEP : m.current ? BLOOM_SAGE : BLOOM_BG, borderColor: m.done ? BLOOM_DEEP : m.current ? BLOOM_SAGE : 'rgba(255,255,255,.18)', transform: hovIdx===i ? 'scale(1.25)' : 'scale(1)', transition:'all 200ms ease' }}>
                {m.done && <svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke="#fff" strokeWidth="1.5"><path d="M1.5 4l2 2 3-3"/></svg>}
                {m.current && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
              </div>
              <div className="text-[10px] tracking-[.18em] uppercase mb-0.5" style={{ color: m.current ? BLOOM_SAGE : BLOOM_DIM }}>{m.age}</div>
              <div className="text-[14px] font-medium" style={{ color: m.done ? BLOOM_DIM : BLOOM_CREAM, textDecoration: m.done ? 'line-through' : 'none', textDecorationColor: BLOOM_DIM }}>{m.label}</div>
              <div className="text-[11.5px] mt-0.5 leading-snug" style={{ color: BLOOM_DIM }}>{m.note}</div>
              {m.current && (
                <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full" style={{ background:'rgba(127,167,145,.12)', color:BLOOM_SAGE }}>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background:BLOOM_SAGE, boxShadow:`0 0 6px ${BLOOM_SAGE}` }}></div>
                  Current stage
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ── Screen: Bloom path
const BloomScreen = () => {
  const [hov, setHov] = React.useState(null);
  const stages = [
    { wk:'Pregnancy',    sub:'Trimester 3',   done:true },
    { wk:'Birth',        sub:'Day 1',          done:true },
    { wk:'0–3 months',  sub:'Newborn',         done:true },
    { wk:'3–9 months',  sub:'Infancy',         done:true, current:true },
    { wk:'9–18 months', sub:'Exploration',     done:false },
    { wk:'18m–3y',      sub:'Language burst',  done:false },
    { wk:'3–5 years',   sub:'Play age',        done:false },
    { wk:'5–7 years',   sub:'School ready',    done:false },
  ];
  return (
    <div className="relative h-full" style={{ background: BLOOM_BG, color: BLOOM_CREAM }}>
      <div className="px-5 pt-3 pb-3">
        <div className="text-[10px] tracking-[.22em] uppercase" style={{ color: BLOOM_SAGE }}>Your path</div>
        <div className="font-serif italic text-[22px] leading-tight mt-1">Bloom Journey</div>
        <div className="text-[12px] mt-1" style={{ color: BLOOM_DIM }}>Yuga · 9 months · Stage 4 of 8</div>
      </div>
      <div className="mx-4 rounded-2xl p-4 mb-3" style={{ background: BLOOM_CARD, border:`1px solid ${BLOOM_LINE}` }}>
        <div className="flex items-center justify-between mb-2">
          <div className="text-[12px] font-medium">Infancy stage</div>
          <div className="text-[11px]" style={{ color: BLOOM_SAGE }}>4 / 8</div>
        </div>
        <div className="w-full h-1.5 rounded-full" style={{ background:'rgba(255,255,255,.06)' }}>
          <div className="h-full rounded-full" style={{ width:'50%', background:`linear-gradient(90deg,${BLOOM_DEEP},${BLOOM_SAGE})` }}></div>
        </div>
        <div className="mt-2 text-[11px]" style={{ color: BLOOM_DIM }}>Next: 9–18 months · Exploration</div>
      </div>
      <div className="px-4 space-y-1.5 pb-4 overflow-y-auto" style={{ maxHeight:'calc(100% - 180px)' }}>
        {stages.map((s,i)=>(
          <div key={i}
               onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}
               className="flex items-center gap-3 rounded-xl p-3 cursor-pointer"
               style={{ background: s.current ? 'rgba(127,167,145,.1)' : hov===i ? 'rgba(255,255,255,.03)' : 'transparent', border:`1px solid ${s.current ? 'rgba(127,167,145,.2)' : hov===i ? BLOOM_LINE : 'transparent'}`, transition:'all 180ms ease' }}>
            <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                 style={{ background: s.done ? BLOOM_DEEP : 'rgba(255,255,255,.05)', border: s.current ? `1px solid ${BLOOM_SAGE}` : 'none', transform: hov===i ? 'scale(1.1)' : 'scale(1)', transition:'transform 180ms' }}>
              {s.done && <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="#fff" strokeWidth="1.8"><path d="M2 5l2.5 2.5 4-4"/></svg>}
              {!s.done && <span className="text-[9px]" style={{ color: BLOOM_DIM }}>{i+1}</span>}
            </div>
            <div className="flex-1">
              <div className="text-[13px] font-medium" style={{ color: s.done ? BLOOM_DIM : s.current ? BLOOM_CREAM : 'rgba(234,228,210,.6)' }}>{s.wk}</div>
              <div className="text-[10px]" style={{ color:'rgba(234,228,210,.35)' }}>{s.sub}</div>
            </div>
            {s.current && <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background:BLOOM_SAGE, boxShadow:`0 0 6px ${BLOOM_SAGE}` }}></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

// ── Screen: Healthcare
const CareScreen = () => {
  const [hov, setHov] = React.useState(null);
  const vaccines = [
    { name:'BCG',          age:'At birth',   done:true },
    { name:'Hepatitis B1', age:'At birth',   done:true },
    { name:'DPT + OPV',    age:'6 weeks',    done:true },
    { name:'Rotavirus',    age:'6 weeks',    done:true },
    { name:'PCV',          age:'14 weeks',   done:false, next:true },
    { name:'Hib',          age:'14 weeks',   done:false },
    { name:'Measles',      age:'9 months',   done:false },
    { name:'MMR',          age:'15 months',  done:false },
  ];
  return (
    <div className="relative h-full" style={{ background: BLOOM_BG, color: BLOOM_CREAM }}>
      <div className="px-5 pt-3 pb-2">
        <div className="text-[10px] tracking-[.22em] uppercase" style={{ color: BLOOM_SAGE }}>IAP schedule</div>
        <div className="font-serif italic text-[22px] leading-tight mt-1">Healthcare</div>
      </div>
      <div className="mx-4 mt-1 mb-3 rounded-2xl p-3.5 flex items-center gap-3" style={{ background:'rgba(127,167,145,.08)', border:'1px solid rgba(127,167,145,.2)' }}>
        <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background:'rgba(127,167,145,.15)' }}>
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke={BLOOM_SAGE} strokeWidth="1.4"><path d="M10 2v4M10 14v4M2 10h4M14 10h4M5 5l3 3M12 12l3 3M5 15l3-3M12 8l3-3"/></svg>
        </div>
        <div>
          <div className="text-[12px] font-medium">Next: PCV at 14 weeks</div>
          <div className="text-[10px]" style={{ color: BLOOM_SAGE }}>Due in 5 weeks · Set reminder →</div>
        </div>
      </div>
      <div className="px-4 pb-4 overflow-y-auto" style={{ maxHeight:'calc(100% - 150px)' }}>
        {vaccines.map((v,i)=>(
          <div key={i}
               onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}
               className="flex items-center gap-3 py-2.5 cursor-pointer"
               style={{ borderBottom:`1px solid ${BLOOM_LINE}`, transform: hov===i ? 'translateX(4px)' : 'none', transition:'transform 180ms ease' }}>
            <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                 style={{ background: v.done ? BLOOM_DEEP : v.next ? 'rgba(127,167,145,.15)' : 'rgba(255,255,255,.04)', border: v.next ? `1px solid ${BLOOM_SAGE}` : 'none' }}>
              {v.done && <svg width="9" height="9" viewBox="0 0 9 9" fill="none" stroke="#fff" strokeWidth="1.6"><path d="M1.5 4.5l2 2 4-4"/></svg>}
            </div>
            <div className="flex-1">
              <div className="text-[13px]" style={{ color: v.done ? BLOOM_DIM : BLOOM_CREAM, textDecoration: v.done ? 'line-through' : 'none', textDecorationColor: BLOOM_DIM }}>{v.name}</div>
              <div className="text-[10px]" style={{ color:'rgba(234,228,210,.35)' }}>{v.age}</div>
            </div>
            {v.next && <div className="text-[10px] px-2 py-0.5 rounded-full" style={{ background:'rgba(127,167,145,.15)', color:BLOOM_SAGE }}>Next</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

// ── Screen: You
const YouScreen = () => {
  const [hov, setHov] = React.useState(null);
  const articles = [
    { tag:'Sleep',       title:'Why babies resist sleep — and what actually helps', mins:'3 min' },
    { tag:'Nutrition',   title:'Starting solids at 6 months: the gentle approach', mins:'4 min' },
    { tag:'Development', title:'Play at 9 months: what it looks like, what it builds', mins:'5 min' },
  ];
  return (
    <div className="relative h-full" style={{ background: BLOOM_BG, color: BLOOM_CREAM }}>
      <div className="px-5 pt-3 pb-3 flex items-center gap-3">
        <div className="w-11 h-11 rounded-full flex items-center justify-center font-serif italic text-[20px]" style={{ background: BLOOM_DEEP }}>V</div>
        <div>
          <div className="text-[11px] tracking-[.14em] uppercase" style={{ color: BLOOM_DIM }}>Your space</div>
          <div className="font-serif italic text-[20px] leading-tight">Vaibhav</div>
        </div>
      </div>
      <div className="mx-4 grid grid-cols-3 gap-2 mb-4">
        {[{l:'Days logged',v:'47'},{l:'Milestones',v:'12'},{l:'Streak',v:'9d'}].map((s,i)=>(
          <div key={i} className="rounded-xl p-3 text-center" style={{ background:BLOOM_CARD, border:`1px solid ${BLOOM_LINE}` }}>
            <div className="font-serif italic text-[22px]">{s.v}</div>
            <div className="text-[10px] mt-0.5" style={{ color: BLOOM_DIM }}>{s.l}</div>
          </div>
        ))}
      </div>
      <div className="px-4">
        <div className="text-[10px] tracking-[.2em] uppercase mb-2" style={{ color: BLOOM_DIM }}>For you today</div>
        <div className="space-y-2">
          {articles.map((a,i)=>(
            <div key={i}
                 onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}
                 className="rounded-2xl p-3.5 cursor-pointer"
                 style={{ background:BLOOM_CARD, border:`1px solid ${hov===i ? 'rgba(255,255,255,.1)' : BLOOM_LINE}`, transform: hov===i ? 'translateX(4px)' : 'none', transition:'all 200ms ease' }}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[9px] uppercase tracking-[.2em] px-1.5 py-0.5 rounded-full" style={{ background:'rgba(127,167,145,.12)', color:BLOOM_SAGE }}>{a.tag}</span>
                <span className="text-[10px]" style={{ color: BLOOM_DIM }}>{a.mins}</span>
              </div>
              <div className="text-[13px] leading-snug font-medium">{a.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ── ChildBloom: tab-switching phone
const ChildBloomMockup = () => {
  const [tab, setTab] = React.useState('home');
  const screens = { home: HomeScreen, timeline: TimelineScreen, bloom: BloomScreen, care: CareScreen, you: YouScreen };
  const Screen = screens[tab] || HomeScreen;
  return (
    <PhoneFrame statusDark>
      <div style={{ position:'relative', height:'100%', background:BLOOM_BG }}>
        <div style={{ position:'absolute', inset:0, paddingBottom:92, overflowY:'auto' }}>
          <Screen onTabChange={setTab}/>
        </div>
        <BloomNav active={tab} onTab={setTab}/>
      </div>
    </PhoneFrame>
  );
};

// ── Dr. Bloom: interactive chat
const DrBloomMockup = () => {
  const [messages, setMessages] = React.useState([]);
  const [typing, setTyping] = React.useState(false);
  const [hovChip, setHovChip] = React.useState(null);
  const msgEnd = React.useRef(null);

  const chips = [
    { q:'IAP vs government vaccine schedule?', a:'IAP adds Rotavirus, PCV, and Hib — not in the government schedule. These protect against diarrhea, pneumonia, and meningitis, which are significant causes of hospitalisation in Indian infants.' },
    { q:"Is Yuga's growth on track?",          a:'Based on the logs, Yuga is in the 65th percentile for weight and 72nd for height — well within healthy range for 9 months. The feeding rhythm looks good.' },
    { q:'What should I watch at this stage?',  a:'At 9 months: object permanence (does Yuga search for a hidden toy?), pincer grasp developing, and consistent response to their name. These are the key markers for this window.' },
  ];

  React.useEffect(() => {
    msgEnd.current && msgEnd.current.scrollIntoView({ behavior:'smooth' });
  }, [messages, typing]);

  const send = chip => {
    if (typing) return;
    setMessages(p => [...p, { from:'user', text:chip.q }]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(p => [...p, { from:'bloom', text:chip.a }]);
    }, 1800);
  };

  return (
    <PhoneFrame statusDark>
      <div className="relative h-full overflow-hidden" style={{ background: BLOOM_BG, color: BLOOM_CREAM }}>
        <div className="text-center text-[10px] tracking-[.24em] uppercase pt-3" style={{ color: BLOOM_DIM }}>Thursday, 21 May</div>

        {messages.length === 0 ? (
          <>
            <div className="mx-4 mt-3 relative rounded-2xl overflow-hidden p-4" style={{ background:BLOOM_CARD, border:`1px solid ${BLOOM_LINE}` }}>
              <div className="text-[10px] tracking-[.22em] uppercase" style={{ color: BLOOM_SAGE }}>Dr. Bloom · Greeting</div>
              <div className="font-serif italic text-[22px] leading-[1.18] mt-2">Good to see you, Vaibhav. I'm here for Yuga. What's on your mind?</div>
              <div className="absolute top-3 right-3 opacity-60">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke={BLOOM_SAGE} strokeWidth="1.2"><path d="M10 2v3M10 15v3M2 10h3M15 10h3M4.5 4.5l2 2M13.5 13.5l2 2M4.5 15.5l2-2M13.5 6.5l2-2"/></svg>
              </div>
            </div>
            <div className="px-4 mt-3 space-y-2">
              <div className="text-[10px] uppercase tracking-[.18em] mb-2" style={{ color: BLOOM_DIM }}>Tap to ask</div>
              {chips.map((c,i)=>(
                <div key={i}
                     onMouseEnter={() => setHovChip(i)} onMouseLeave={() => setHovChip(null)}
                     onClick={() => send(c)}
                     className="rounded-2xl px-3.5 py-2.5 text-[12.5px] leading-snug cursor-pointer"
                     style={{ background: hovChip===i ? 'rgba(234,228,210,.10)' : 'rgba(234,228,210,.05)', border:`1px solid ${hovChip===i ? 'rgba(255,255,255,.12)' : BLOOM_LINE}`, color:BLOOM_CREAM, transform: hovChip===i ? 'translateX(4px)' : 'none', transition:'all 180ms ease' }}>
                  {c.q}
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="px-4 mt-3 space-y-3 overflow-y-auto pb-3" style={{ maxHeight:'calc(100% - 210px)' }}>
            {messages.map((m,i)=>(
              <div key={i} className={`flex ${m.from==='user' ? 'justify-end' : 'justify-start'} items-end gap-2`}>
                {m.from==='bloom' && (
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background:BLOOM_DEEP }}>
                    <BloomMark size={12} color="#fff"/>
                  </div>
                )}
                <div className="max-w-[78%] px-3.5 py-2.5 text-[12.5px] leading-snug"
                     style={{ background: m.from==='user' ? BLOOM_DEEP : BLOOM_CARD, border: m.from==='user' ? 'none' : `1px solid ${BLOOM_LINE}`, color:BLOOM_CREAM, borderRadius: m.from==='user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px' }}>
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start items-end gap-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background:BLOOM_DEEP }}>
                  <BloomMark size={12} color="#fff"/>
                </div>
                <div className="rounded-2xl px-4 py-3 flex items-center gap-1.5" style={{ background:BLOOM_CARD, border:`1px solid ${BLOOM_LINE}` }}>
                  {[0,1,2].map(d=>(
                    <div key={d} className="w-1.5 h-1.5 rounded-full" style={{ background:BLOOM_SAGE, animation:`typingBounce 1.2s infinite`, animationDelay:`${d*160}ms` }}></div>
                  ))}
                </div>
              </div>
            )}
            <div ref={msgEnd}></div>
          </div>
        )}

        <div className="absolute pointer-events-none" style={{ inset:0, zIndex:0 }}>
          <div className="absolute rounded-full" style={{ width:120,height:120,top:360,left:30,background:'radial-gradient(closest-side,rgba(220,220,210,.18),transparent 70%)',filter:'blur(6px)' }}></div>
          <div className="absolute rounded-full" style={{ width:110,height:110,top:320,right:24,background:'radial-gradient(closest-side,rgba(212,150,80,.22),transparent 70%)',filter:'blur(6px)' }}></div>
        </div>

        <div className="absolute bottom-[112px] left-0 right-0 px-4 z-10">
          <div className="flex items-center gap-2 rounded-full px-4 py-3" style={{ background:BLOOM_CARD, border:`1px solid ${BLOOM_LINE}` }}>
            <span className="text-[12px] flex-1" style={{ color:BLOOM_DIM }}>Ask Dr. Bloom anything…</span>
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke={BLOOM_SAGE} strokeWidth="1.5"><rect x="6" y="2.5" width="6" height="9" rx="3"/><path d="M3.5 9.5a5.5 5.5 0 0 0 11 0M9 15v1.5"/></svg>
          </div>
          <div className="text-center text-[10px] mt-2" style={{ color:'rgba(234,228,210,.3)' }}>Evidence-based · IAP · WHO · AAP · Not a substitute for your pediatrician</div>
        </div>
        <BloomNav active="care" onTab={()=>{}}/>
      </div>
    </PhoneFrame>
  );
};

// ── Bloom Enterprise: animated chart + Programs tab
const BloomEnterpriseMockup = () => {
  const [activeNav, setActiveNav] = React.useState('Cohorts');
  const [hovBar, setHovBar] = React.useState(null);
  const [hovCard, setHovCard] = React.useState(null);
  const [hovRow, setHovRow] = React.useState(null);
  const [hovSide, setHovSide] = React.useState(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => { const t = setTimeout(() => setMounted(true), 120); return () => clearTimeout(t); }, []);

  const bars    = [[78,22],[82,18],[71,29],[88,12],[64,36],[91,9],[83,17],[76,24]];
  const ages    = ['0–6m','6–12m','1y','1.5y','2y','3y','4y','5y+'];
  const kpis    = [
    { l:'Active families',      v:'1,284', d:'+11%' },
    { l:'Milestones logged',    v:'38.6k', d:'+24%' },
    { l:'Risk flags this week', v:'26',    d:'−4'   },
    { l:'Avg. engagement',      v:'4.7×/wk', d:'+0.6' },
  ];
  const programs = [
    { name:'ASHA Clinic Kozhikode A',   families:124, risk:3,  status:'active' },
    { name:'Anganwadi Kannur District', families:87,  risk:1,  status:'active' },
    { name:'PHC Wayanad Pilot',         families:56,  risk:8,  status:'alert'  },
    { name:'Malappuram Block 2',        families:203, risk:2,  status:'active' },
    { name:'Tribal Health Idukki',      families:41,  risk:5,  status:'review' },
  ];
  const statusColor = s => s==='active' ? BLOOM_DEEP : s==='alert' ? '#EF4444' : '#F59E0B';

  return (
    <div className="relative mx-auto bg-white rounded-2xl overflow-hidden border border-white/10 shadow-[0_60px_120px_-30px_rgba(0,0,0,.55),0_30px_60px_-30px_rgba(0,0,0,.5)]"
         style={{ width:980, height:620 }}>
      {/* Title bar */}
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
        {/* Sidebar */}
        <div className="w-56 border-r border-black/5 px-3 py-4 bg-neutral-50/60 flex-shrink-0">
          <div className="flex items-center gap-2 px-2 mb-4">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background:BLOOM_DEEP }}><BloomMark size={14} color="#fff"/></div>
            <div className="text-[13px] font-semibold">Bloom <span className="text-neutral-400 font-normal">Enterprise</span></div>
          </div>
          <div className="text-[10px] uppercase tracking-wider text-neutral-400 px-2 mt-3 mb-1">Workspace</div>
          {['Overview','Cohorts','Children','Clinicians','Programs'].map((t,i)=>(
            <div key={i} onClick={() => setActiveNav(t)}
                 onMouseEnter={() => setHovSide(i)} onMouseLeave={() => setHovSide(null)}
                 className="flex items-center gap-2 px-2 py-1.5 rounded-md text-[12.5px] cursor-pointer mb-0.5"
                 style={{ background: activeNav===t ? '#000' : hovSide===i ? 'rgba(0,0,0,.05)' : 'transparent', color: activeNav===t ? '#fff' : '#404040', transition:'all 150ms ease' }}>
              <span className="w-3.5 h-3.5 rounded" style={{ background:'currentColor', opacity: activeNav===t ? 0.9 : 0.5 }}></span>{t}
            </div>
          ))}
          <div className="text-[10px] uppercase tracking-wider text-neutral-400 px-2 mt-4 mb-1">Insights</div>
          {['Outcomes','Risk flags','Reports'].map((t,i)=>(
            <div key={i}
                 onMouseEnter={() => setHovSide(10+i)} onMouseLeave={() => setHovSide(null)}
                 className="flex items-center gap-2 px-2 py-1.5 rounded-md text-[12.5px] cursor-pointer mb-0.5"
                 style={{ background: hovSide===10+i ? 'rgba(0,0,0,.05)' : 'transparent', color:'#404040', transition:'background 150ms ease' }}>
              <span className="w-3.5 h-3.5 rounded bg-current opacity-50"></span>{t}
            </div>
          ))}
        </div>

        {/* Main */}
        <div className="flex-1 p-6 overflow-hidden">
          <div className="flex items-end justify-between mb-5">
            <div>
              <div className="text-[11px] uppercase tracking-[.18em] text-neutral-400">Cohort</div>
              <div className="text-[22px] font-semibold tracking-tight">Kerala North · Q2 2026</div>
              <div className="text-[12px] text-neutral-500 mt-1">1,284 families · 12 ASHA clinics · 47 anganwadis</div>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-[12px] px-3 py-1.5 rounded-full border border-black/10 hover:bg-black/5 transition cursor-pointer">Export</button>
              <button className="text-[12px] px-3 py-1.5 rounded-full text-white cursor-pointer transition hover:opacity-90" style={{ background:BLOOM_DEEP }}>Run report</button>
            </div>
          </div>

          {activeNav === 'Programs' ? (
            <div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[{l:'Active programs',v:'12'},{l:'Families reached',v:'1,284'},{l:'Risk alerts',v:'26'}].map((k,i)=>(
                  <div key={i}
                       onMouseEnter={() => setHovCard(i)} onMouseLeave={() => setHovCard(null)}
                       className="rounded-xl border border-black/5 bg-white p-3.5 cursor-pointer"
                       style={{ boxShadow: hovCard===i ? '0 8px 24px -8px rgba(0,0,0,.14)' : '0 0 0 0 transparent', transform: hovCard===i ? 'translateY(-2px)' : 'none', transition:'all 200ms ease' }}>
                    <div className="text-[11px] text-neutral-500">{k.l}</div>
                    <div className="text-[22px] font-semibold tracking-tight mt-1">{k.v}</div>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-black/5 bg-white p-4" style={{ maxHeight:260, overflowY:'auto' }}>
                <div className="text-[13px] font-semibold mb-3">Clinic programs · Kerala North</div>
                {programs.map((p,i)=>(
                  <div key={i}
                       onMouseEnter={() => setHovRow(i)} onMouseLeave={() => setHovRow(null)}
                       className="flex items-center gap-3 py-2.5 cursor-pointer"
                       style={{ borderBottom: i<programs.length-1 ? '1px solid rgba(0,0,0,.05)' : 'none', transform: hovRow===i ? 'translateX(5px)' : 'none', transition:'transform 180ms ease' }}>
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background:statusColor(p.status), boxShadow: hovRow===i ? `0 0 6px ${statusColor(p.status)}` : 'none', transition:'box-shadow 200ms' }}></div>
                    <div className="flex-1">
                      <div className="text-[12.5px] font-medium text-neutral-800">{p.name}</div>
                      <div className="text-[11px] text-neutral-400">{p.families} families enrolled</div>
                    </div>
                    <div className="text-[11px] px-2 py-0.5 rounded-full" style={{ background: p.risk>=5 ? 'rgba(239,68,68,.08)' : 'rgba(46,89,68,.08)', color: p.risk>=5 ? '#EF4444' : BLOOM_DEEP }}>
                      {p.risk} flags
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-4 gap-3">
                {kpis.map((k,i)=>(
                  <div key={i}
                       onMouseEnter={() => setHovCard(i)} onMouseLeave={() => setHovCard(null)}
                       className="rounded-xl border border-black/5 bg-white p-3.5 cursor-pointer"
                       style={{ boxShadow: hovCard===i ? '0 8px 24px -8px rgba(0,0,0,.14)' : '0 0 0 0 transparent', transform: hovCard===i ? 'translateY(-2px)' : 'none', transition:'all 200ms ease' }}>
                    <div className="text-[11px] text-neutral-500">{k.l}</div>
                    <div className="text-[20px] font-semibold tracking-tight mt-1">{k.v}</div>
                    <div className="text-[11px] mt-0.5" style={{ color:BLOOM_DEEP }}>{k.d} vs last week</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-black/5 bg-white p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[13px] font-semibold">Milestone completion by age band</div>
                  <div className="flex items-center gap-3 text-[11px] text-neutral-500">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full" style={{ background:BLOOM_DEEP }}></span>On track</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-neutral-300"></span>Needs support</span>
                  </div>
                </div>
                <div className="grid grid-cols-8 gap-3 items-end relative" style={{ height:128 }}>
                  {bars.map(([a,b],i)=>(
                    <div key={i}
                         onMouseEnter={() => setHovBar(i)} onMouseLeave={() => setHovBar(null)}
                         className="flex flex-col gap-1 items-stretch relative cursor-pointer h-full justify-end">
                      {hovBar===i && (
                        <div className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md text-[10px] font-semibold text-white whitespace-nowrap z-10"
                             style={{ background:BLOOM_DEEP, boxShadow:'0 4px 12px -4px rgba(0,0,0,.3)' }}>
                          {a}%
                        </div>
                      )}
                      <div className="rounded-md"
                           style={{ height: mounted ? `${a*0.88}%` : '0%', background: hovBar===i ? BLOOM_SAGE : BLOOM_DEEP, transition:`height ${500+i*40}ms cubic-bezier(.2,.7,.2,1), background 150ms` }}></div>
                      <div className="rounded-md"
                           style={{ height: mounted ? `${b*0.88}%` : '0%', background: hovBar===i ? '#cbd5e1' : '#e2e8f0', transition:`height ${500+i*40}ms cubic-bezier(.2,.7,.2,1) ${i*30}ms, background 150ms` }}></div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-8 mt-2 text-[10px] text-neutral-400 text-center">
                  {ages.map((t,i)=>(<div key={i}>{t}</div>))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

window.PhoneFrame = PhoneFrame;
window.BloomMark  = BloomMark;
window.ChildBloomMockup      = ChildBloomMockup;
window.DrBloomMockup         = DrBloomMockup;
window.BloomEnterpriseMockup = BloomEnterpriseMockup;
