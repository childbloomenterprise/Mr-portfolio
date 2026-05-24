const Hero = () => {
  return (
    <section id="top" className="relative min-h-[100svh] flex flex-col justify-center px-6 pt-24 pb-16 overflow-hidden">
      <div id="hero-content" className="max-w-[1200px] w-full mx-auto">
        <Reveal className="d1">
          <div className="flex items-center gap-2 text-[12px] uppercase tracking-[.2em] text-neutral-500">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1D9E75]"></span>
            <span>Kochi · Kerala · India</span>
          </div>
        </Reveal>

        <Reveal className="d2 mt-6">
          <h1 className="parallax-hero font-semibold tracking-tightest leading-[.92] text-[clamp(30px,10vw,180px)]">
            Building AI<br/>
            products for the<br/>
            next billion.<span className="text-[#1D9E75]">_</span>
          </h1>
        </Reveal>

        <Reveal className="d3 mt-10 max-w-2xl">
          <p className="parallax-hero text-[18px] sm:text-[20px] leading-snug text-neutral-700">
            I'm <span className="text-black font-medium">Vaibhav Varun</span> — a solo founder and AI engineer
            shipping calm, useful software from Kerala. Currently building <span className="text-black font-medium">ChildBloom</span>,
            an AI companion for Indian parents.
          </p>
        </Reveal>

        <Reveal className="d4 mt-10 flex flex-wrap items-center gap-3">
          <a href="#work" className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-black text-white text-[14px] font-medium hover:bg-neutral-800 transition">
            See my work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" className="transition group-hover:translate-x-0.5"><path d="M3 7h8M7 3l4 4-4 4"/></svg>
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-black/15 text-black text-[14px] font-medium hover:bg-black/[.04] transition">
            Get in touch
          </a>
        </Reveal>
      </div>

      {/* Footer cue */}
      <div className="absolute bottom-6 left-0 right-0 flex items-center justify-between max-w-[1200px] mx-auto px-6 text-[11px] uppercase tracking-[.18em] text-neutral-400">
        <span>Solo founder · AI engineer · Builder</span>
        <span className="hidden sm:inline-flex items-center gap-2">
          Scroll
          <svg width="10" height="14" viewBox="0 0 10 14" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="1" y="1" width="8" height="12" rx="4"/><path d="M5 4v3"/></svg>
        </span>
      </div>
    </section>
  );
};

window.Hero = Hero;
