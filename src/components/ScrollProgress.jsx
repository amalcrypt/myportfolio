import { useEffect, useRef } from 'react';

// Thin gradient bar at the top of the page that fills as you scroll.
export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-0.5">
      <div
        ref={barRef}
        className="h-full origin-left scale-x-0 bg-gradient-to-r from-primary via-fuchsia-500 to-indigo-500"
      />
    </div>
  );
}
