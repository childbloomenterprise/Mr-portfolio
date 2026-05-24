// Root app + Tweaks panel.

const App = () => {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.documentElement.style.setProperty('--accent', t.accent);
  }, [t.accent]);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
        <Stack />
        <Contact />
      </main>
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Accent">
          <TweakColor
            label="Color"
            value={t.accent}
            onChange={(v) => setTweak('accent', v)}
            options={['#1D9E75','#0A84FF','#FF6B35','#000000']}
          />
        </TweakSection>
        <TweakSection title="Hero">
          <TweakToggle
            label="Show caret"
            value={t.showCursor}
            onChange={(v) => setTweak('showCursor', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
