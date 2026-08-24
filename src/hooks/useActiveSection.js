import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observers = new Map();

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      observer.observe(el);
      observers.set(id, observer);
    });

    return () => {
      observers.forEach((observer, id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
        observer.disconnect();
      });
    };
  }, [sectionIds]);

  return activeSection;
}
