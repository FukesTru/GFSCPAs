/**
 * GFSCPAs — Scroll Animation Hook
 * Reliable IntersectionObserver-based scroll reveal
 * Works on live deployed site (not just dev preview)
 */
import { useEffect, useRef } from "react";

export function useScrollAnimation(options?: { threshold?: number; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Use requestAnimationFrame to ensure DOM is fully painted before observing
    const raf = requestAnimationFrame(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Small delay for stagger support
              const delay = options?.delay ?? 0;
              if (delay > 0) {
                setTimeout(() => el.classList.add("visible"), delay);
              } else {
                el.classList.add("visible");
              }
              observer.unobserve(el);
            }
          });
        },
        {
          threshold: options?.threshold ?? 0.05,
          rootMargin: "0px 0px -40px 0px",
        }
      );
      observer.observe(el);

      return () => observer.disconnect();
    });

    return () => cancelAnimationFrame(raf);
  }, [options?.threshold, options?.delay]);

  return ref;
}
