import { useEffect } from "react";

/**
 * Adds `is-visible` to any `.reveal` element inside `containerRef` once it
 * enters the viewport. Uses IntersectionObserver so it stays performant and
 * automatically unobserves elements after they've revealed once.
 */
export function useReveal(containerRef, deps = []) {
  useEffect(() => {
    const root = containerRef?.current || document;
    const targets = root.querySelectorAll(".reveal");
    if (!targets.length) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.dataset.revealDelay || i * 60;
            el.style.transitionDelay = `${delay}ms`;
            el.classList.add("is-visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
