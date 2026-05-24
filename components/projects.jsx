// Each project: full-width dark section. Mockup big, copy concise.

const Pill = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[12px] font-medium bg-white/8 text-white/85 border border-white/10 backdrop-blur-sm">{children}</span>
);

const ProjectChrome = ({ index, label, kicker, name, year, status, blurb, tech, href, hrefLabel, mockup, layout = 'right', tone = 'black' }) => {
  const bg = tone === 'black' ? 'bg-black' : tone === 'graphite' ? 'bg-[#0E0E0E]' : 'bg-[#0A0A0A]';
  return (
    <section className={`relative grain ${bg} text-white py-28 sm:py-40 px-6 overflow-hidden`}>
      <div className="max-w-[1200px] mx-auto">
        {/* Project header line */}
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[.22em] text-white/45">
          <div className="flex items-center gap-3">
            <span className="font-mono">0{index}</span>
            <span className="w-8 h-px bg-white/20"></span>
            <span>{label}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1D9E75]"></span>
            <span>{status}</span>
          </div>
        </div>

        <div className={`mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center ${layout === 'left' ? 'lg:[direction:rtl]' : ''}`}>
          {/* Copy */}
          <Reveal variant={layout === 'left' ? 'right' : 'left'} className="lg:col-span-5 lg:[direction:ltr]">
            <div className="text-[12px] uppercase tracking-[.18em] text-white/45">{kicker}</div>
            <h3 className="mt-3 text-[clamp(24px,5.5vw,72px)] font-semibold tracking-tightest leading-[.95]">{name}</h3>
            <p className="mt-5 text-[18px] leading-snug text-white/75 max-w-md">{blurb}</p>

            <div className="mt-7 flex flex-wrap gap-2">
              {tech.map(t => <Pill key={t}>{t}</Pill>)}
            </div>

            {href && (
              <a href={href} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-2 text-[14px] font-medium text-white group">
                <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-black hover:bg-[#1D9E75] hover:text-white transition">
                  {hrefLabel}
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 9 L9 4 M5 4h4v4"/></svg>
                </span>
              </a>
            )}

            <div className="mt-8 grid grid-cols-2 gap-6 max-w-sm text-[12px]">
              <div>
                <div className="text-white/40 uppercase tracking-[.16em] text-[10px]">Year</div>
                <div className="mt-1 text-white/85">{year}</div>
              </div>
              <div>
                <div className="text-white/40 uppercase tracking-[.16em] text-[10px]">Role</div>
                <div className="mt-1 text-white/85">Founder · Design · Eng</div>
              </div>
            </div>
          </Reveal>

          {/* Mockup */}
          <Reveal variant={layout === 'left' ? 'left' : 'right'} className="d2 lg:col-span-7 lg:[direction:ltr] flex justify-center">
            <div className={layout === 'right' ? 'tilt-r' : layout === 'left' ? 'tilt-l' : 'tilt-flat'}>
              {mockup}
            </div>
          </Reveal>
        </div>

        {/* Big stroke number */}
        <div aria-hidden className="pointer-events-none select-none absolute -bottom-6 right-4 sm:right-10 stroke-num font-semibold tracking-tightest leading-none text-[clamp(140px,26vw,360px)]">
          0{index}
        </div>
      </div>
    </section>
  );
};

const Projects = () => (
  <div id="work">
    {/* Section opener */}
    <section className="px-6 pt-28 pb-6">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="text-[12px] uppercase tracking-[.2em] text-neutral-500 flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-neutral-400"></span>
            Selected work · 2024 — 2026
          </div>
        </Reveal>
        <Reveal className="d1 mt-4">
          <h2 className="text-[clamp(40px,7vw,96px)] font-semibold tracking-tightest leading-[.95]">
            Three products,<br/>one thesis.
          </h2>
        </Reveal>
        <Reveal className="d2 mt-6 max-w-xl text-[18px] text-neutral-600">
          Indian parents deserve software that respects their time, their
          language, and their context. So I'm building it.
        </Reveal>
      </div>
    </section>

    <ProjectChrome
      index={1}
      label="Consumer app"
      kicker="ChildBloom"
      name={<>ChildBloom.<br/><span className="text-[#1D9E75]">A calmer way to raise a child.</span></>}
      year="2024 — Live"
      status="Shipping weekly"
      blurb="Pregnancy through age 7, in one quiet companion. Daily prompts written in plain language. Milestones logged with one tap. A gentle, evidence-based path — not another feed of parenting noise."
      tech={['React Native','Supabase','Claude API','Razorpay','i18next','Vercel']}
      href="https://childbloom.in"
      hrefLabel="Visit childbloom.in"
      mockup={<ChildBloomMockup />}
      layout="right"
      tone="black"
    />

    <ProjectChrome
      index={2}
      label="AI assistant"
      kicker="Dr. Bloom"
      name={<>Dr. Bloom.<br/><span className="text-[#1D9E75]">A pediatrician in your pocket.</span></>}
      year="2025 — Live in app"
      status="In production"
      blurb="Context-aware AI assistant built into ChildBloom. Knows your child's age and history. Speaks English and Malayalam. Cites IAP, WHO and AAP — and knows when to hand off to a real doctor."
      tech={['Claude 3.5 Sonnet','Node.js','Postgres','pgvector','Whisper','SSE']}
      hrefLabel="See it in action"
      href="https://childbloom.in/dr-bloom"
      mockup={<DrBloomMockup />}
      layout="left"
      tone="graphite"
    />

    <ProjectChrome
      index={3}
      label="B2B platform"
      kicker="Bloom Enterprise"
      name={<>Bloom Enterprise.<br/><span className="text-[#1D9E75]">Child outcomes at population scale.</span></>}
      year="2026 — Pilots"
      status="Pilot · Kerala North"
      blurb="The same engine, for clinics, anganwadis and state programs. Cohort dashboards, risk flagging, multilingual outreach to families — and clinician tools that don't feel like 2008."
      tech={['React','Node.js','Postgres','TailwindCSS','Railway','Vite']}
      hrefLabel="Request access"
      href="mailto:hi@vaibhavvarun.com?subject=Bloom%20Enterprise"
      mockup={<BloomEnterpriseMockup />}
      layout="flat"
      tone="darker"
    />
  </div>
);

window.Projects = Projects;
