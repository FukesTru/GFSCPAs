/**
 * GFSCPAs — AnimateIn Components
 * Reusable scroll-triggered animation wrappers
 * Used on every page for consistent, reliable reveal animations
 */
import React, { useEffect, useRef } from "react";

interface AnimateInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  type?: "up" | "left" | "right" | "fade";
}

function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let observer: IntersectionObserver;
    const raf = requestAnimationFrame(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (delay > 0) {
                setTimeout(() => el.classList.add("visible"), delay);
              } else {
                el.classList.add("visible");
              }
              observer.unobserve(el);
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
      );
      observer.observe(el);
    });
    return () => {
      cancelAnimationFrame(raf);
      observer?.disconnect();
    };
  }, [delay]);
  return ref;
}

export function FadeUp({ children, delay = 0, className = "" }: AnimateInProps) {
  const ref = useReveal(delay);
  return (
    <div ref={ref} className={`fade-up ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function FadeLeft({ children, delay = 0, className = "" }: AnimateInProps) {
  const ref = useReveal(delay);
  return (
    <div ref={ref} className={`fade-left ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function FadeRight({ children, delay = 0, className = "" }: AnimateInProps) {
  const ref = useReveal(delay);
  return (
    <div ref={ref} className={`fade-right ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function FadeIn({ children, delay = 0, className = "" }: AnimateInProps) {
  const ref = useReveal(delay);
  return (
    <div ref={ref} className={`fade-up ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default FadeUp;
