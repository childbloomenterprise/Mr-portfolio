// FadeUp (and directional variants) on scroll using IntersectionObserver.
const Reveal = ({ as: Tag = 'div', delay = 0, className = '', children, once = true, threshold = 0.18, variant = 'up' }) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          el.classList.add('in');
          if (once) io.unobserve(el);
        } else if (!once) {
          el.classList.remove('in');
        }
      });
    }, { threshold, rootMargin: '0px 0px -8% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, [once, threshold]);
  const delayClass = delay ? `d${delay}` : '';
  const baseClass = variant === 'left' ? 'reveal-left' : variant === 'right' ? 'reveal-right' : variant === 'scale' ? 'reveal-scale' : variant === 'blur' ? 'reveal-blur' : 'reveal';
  return <Tag ref={ref} className={`${baseClass} ${delayClass} ${className}`}>{children}</Tag>;
};

window.Reveal = Reveal;
