(function () {
  'use strict';

  const targets = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    targets.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px -18px 0px',
    }
  );

  targets.forEach((element) => observer.observe(element));
})();
