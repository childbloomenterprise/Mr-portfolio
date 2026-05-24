const Contact = () => {
  const channels = [
    { k: 'Email',    v: 'hi@vaibhavvarun.com', href: 'mailto:hi@vaibhavvarun.com' },
    { k: 'X · Twitter', v: '@vaibhav_varun33', href: 'https://x.com/vaibhav_varun33' },
    { k: 'Instagram', v: '@mrvaibhavvarun', href: 'https://www.instagram.com/mrvaibhavvarun' },
  ];
  return (
    <section id="contact" className="px-6 py-28 sm:py-40">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="text-[12px] uppercase tracking-[.2em] text-neutral-500 flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-neutral-400"></span>
            Contact
          </div>
        </Reveal>
        <Reveal className="d1 mt-4">
          <h2 className="text-[clamp(48px,9vw,140px)] font-semibold tracking-tightest leading-[.94]">
            Let's<br/>
            <span className="text-[#1D9E75]">build something.</span>
          </h2>
        </Reveal>
        <Reveal className="d2 mt-8 max-w-xl text-[18px] text-neutral-600">
          Open to small, well-considered collaborations from <strong className="text-black font-medium">Q3 2026</strong>.
          Founders, clinicians, or anyone serious about software for India — I read every email.
        </Reveal>

        <div className="mt-16 border-t border-black/10">
          {channels.map((c, i) => (
            <Reveal key={c.k} delay={i+1}>
              <a href={c.href} target="_blank" rel="noreferrer" className="group flex items-baseline justify-between gap-6 py-7 border-b border-black/10 hover:pl-3 transition-all">
                <div className="flex items-baseline gap-6">
                  <span className="font-mono text-[12px] text-neutral-400 uppercase tracking-[.18em] w-12">0{i+1}</span>
                  <span className="text-[clamp(28px,4.5vw,56px)] font-semibold tracking-tightest group-hover:text-[#1D9E75] transition-colors">{c.k}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="hidden sm:inline text-[14px] text-neutral-500">{c.v}</span>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-neutral-400 group-hover:text-[#1D9E75] group-hover:translate-x-1 transition"><path d="M6 16 L16 6 M8 6h8v8"/></svg>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="px-6 py-12 border-t border-black/5">
    <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12px] text-neutral-500">
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-black text-white text-[11px]">V</span>
        <span>Vaibhav Varun · Kochi, India</span>
      </div>
      <div className="font-mono text-[11px] uppercase tracking-[.18em]">
        Designed & built in {new Date().getFullYear()} · v2.0
      </div>
    </div>
  </footer>
);

window.Contact = Contact;
window.Footer = Footer;
