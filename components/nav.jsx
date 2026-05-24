const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'glass' : ''}`}>
      <nav className="max-w-[1200px] mx-auto h-14 px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 tracking-tight">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-black text-white font-serif italic text-[15px] leading-none pb-0.5">V</span>
          <span className="hidden sm:inline font-serif italic text-[20px] leading-none text-black" style={{ fontFamily: "Manrope" }}>Vaibhav Varun</span>
        </a>
        <div className="flex items-center gap-1 sm:gap-2 text-[13.5px]">
          <a href="#work" className="px-3 py-1.5 rounded-full hover:bg-black/5 text-black/70 hover:text-black transition">Work</a>
          <a href="#about" className="px-3 py-1.5 rounded-full hover:bg-black/5 text-black/70 hover:text-black transition">About</a>
          <a href="#stack" className="px-3 py-1.5 rounded-full hover:bg-black/5 text-black/70 hover:text-black transition hidden sm:inline-flex">Stack</a>
          <a href="#contact" className="ml-1 px-3.5 py-1.5 rounded-full bg-black text-white text-[13px] font-medium hover:bg-neutral-800 transition">Hire me</a>
        </div>
      </nav>
    </header>);

};

window.Nav = Nav;