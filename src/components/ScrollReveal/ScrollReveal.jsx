import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollReveal.css'; // pastikan path benar

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  enableSlide = true,
  enablePop = true,
  enableGradient = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 6,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom"
}) => {
  const containerRef = useRef(null);

  // split text into word spans, preserve whitespace as plain text nodes
  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\s+)/).map((token, idx) => {
      if (/\s+/.test(token)) return token; // keep spaces as text nodes
      return (
        <span className="sr-word" key={idx}>
          {token}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    // subtle rotation for the whole container
    gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: baseRotation },
      {
        ease: 'none',
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom',
          end: rotationEnd,
          scrub: true,
        },
      }
    );

    const wordElements = el.querySelectorAll('.sr-word');

    // per-word reveal (opacity, slide, scale, blur)
    gsap.fromTo(
      wordElements,
      {
        opacity: baseOpacity,
        y: enableSlide ? 30 : 0,
        scale: enablePop ? 0.96 : 1,
        filter: enableBlur ? `blur(${blurStrength}px)` : 'none',
        willChange: 'opacity, transform, filter'
      },
      {
        ease: 'power2.out',
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        stagger: 0.06,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom-=20%',
          end: wordAnimationEnd,
          scrub: true,
        },
      }
    );

    return () => {
      // bersihkan triggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [
    scrollContainerRef,
    enableBlur,
    enableSlide,
    enablePop,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength
  ]);

  return (
    <h2 ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
      <p
        className={`scroll-reveal-text ${textClassName} ${enableGradient ? 'sr-gradient' : ''}`}
      >
        {splitText}
      </p>
    </h2>
  );
};

export default ScrollReveal;
