const About = () => (
  <section id="about" className="px-6 py-28 sm:py-40">
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
      <Reveal variant="left" className="md:col-span-5">
        {/* Photo */}
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-100 border border-black/5">
          <img
            src="assets/vaibhav.jpg"
            alt="Vaibhav Varun"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: '50% 35%' }}
          />
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-[.16em] text-white/85" style={{ textShadow: '0 1px 12px rgba(0,0,0,.6)' }}>
            <span>vaibhav.jpg</span>
            <span>kochi, 2026</span>
          </div>
        </div>
      </Reveal>

      <div className="md:col-span-7 md:pt-6">
        <Reveal>
          <div className="text-[12px] uppercase tracking-[.2em] text-neutral-500 flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-neutral-400"></span>
            About
          </div>
        </Reveal>
        <Reveal variant="right" className="d1 mt-4">
          <h2 className="text-[clamp(32px,5vw,56px)] font-semibold tracking-tight leading-[1.02]">
            I build software that earns trust — quietly, deliberately, in plain language.
          </h2>
        </Reveal>
        <Reveal variant="right" className="d2 mt-8 space-y-5 text-[17px] leading-relaxed text-neutral-700 max-w-xl">
          <p>
            I'm a self-taught engineer who fell for product design somewhere
            between shipping my first weekend side-project and watching a
            parent use it for the first time. That feeling — of being
            <em className="not-italic text-black"> useful</em> — is what I optimize for.
          </p>
          <p>
            I work alone, mostly. Design, code, support, taxes — the whole loop.
            It keeps the work honest. If a button feels wrong, I'm the one who
            has to live with it.
          </p>
          <p>
            Outside the screen: long drives through the Western Ghats, weekend
            filter coffee, and an unhealthy interest in good packaging.
          </p>
        </Reveal>

        <Reveal className="d3 mt-10 grid grid-cols-3 gap-4 max-w-md">
          {[
            { k: 'Based in', v: 'Kochi, IN' },
            { k: 'Building', v: 'ChildBloom' },
            { k: 'Available', v: 'Q3 2026' },
          ].map((x,i) => (
            <div key={i}>
              <div className="text-[11px] uppercase tracking-[.16em] text-neutral-400">{x.k}</div>
              <div className="text-[14px] font-medium mt-1">{x.v}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </div>
  </section>
);

window.About = About;
