// Stack — clean icon grid with monogram tiles, no logo trademarks.

const stackItems = [
  { k: 'React',       sub: 'UI runtime',     mono: '⌘R', color: '#000' },
  { k: 'Node.js',     sub: 'Server runtime', mono: 'JS', color: '#000' },
  { k: 'Supabase',    sub: 'Auth · DB',      mono: 'SB', color: '#1D9E75' },
  { k: 'Claude API',  sub: 'LLM',            mono: 'C',  color: '#000' },
  { k: 'TailwindCSS', sub: 'Styling',        mono: 'TW', color: '#000' },
  { k: 'Vite',        sub: 'Build tool',     mono: 'V',  color: '#000' },
  { k: 'Railway',     sub: 'Infra',          mono: 'RW', color: '#000' },
  { k: 'Vercel',      sub: 'Edge hosting',   mono: '▲',  color: '#000' },
  { k: 'Razorpay',    sub: 'Payments · IN',  mono: 'Rz', color: '#000' },
  { k: 'i18next',     sub: 'Localization',   mono: 'i18',color: '#1D9E75' },
];

const Stack = () => (
  <section id="stack" className="px-6 py-28 sm:py-40 bg-[#FAFAF7]">
    <div className="max-w-[1200px] mx-auto">
      <Reveal>
        <div className="text-[12px] uppercase tracking-[.2em] text-neutral-500 flex items-center gap-2">
          <span className="inline-block w-6 h-px bg-neutral-400"></span>
          Tools
        </div>
      </Reveal>
      <Reveal className="d1 mt-4 grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
        <h2 className="md:col-span-7 text-[clamp(36px,6vw,72px)] font-semibold tracking-tightest leading-[.98]">
          What I reach for, most days.
        </h2>
        <p className="md:col-span-5 text-[16px] leading-relaxed text-neutral-600 md:pb-2">
          A small, boring stack on purpose. The interesting parts live above
          it — in the product, the copy, the timing of an animation.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-black/[.06] rounded-2xl overflow-hidden border border-black/[.06]">
        {stackItems.map((s, i) => (
          <Reveal key={s.k} variant="scale" delay={(i % 5) + 1} className="bg-white">
            <div className="group p-6 h-full flex flex-col items-start gap-4 hover:bg-[#FAFAF7] transition-colors">
              <div className="w-12 h-12 rounded-2xl border border-black/10 bg-white flex items-center justify-center text-[13px] font-semibold tracking-tight" style={{ color: s.color }}>
                {s.mono}
              </div>
              <div>
                <div className="text-[15px] font-semibold tracking-tight">{s.k}</div>
                <div className="text-[12px] text-neutral-500 mt-0.5">{s.sub}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

window.Stack = Stack;
