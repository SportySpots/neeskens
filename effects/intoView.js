import React from 'react';

const intoViewEffect = (refs, callback) => React.useEffect(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.hasAnimated) {
        entry.target.dataset.hasAnimated = true;
        callback(entry.target);
      }
    });
  }, {
    threshold: 0.2,
  });
  refs.map(ref => ref.current).forEach(ref => observer.observe(ref));
}, []);

export default intoViewEffect;
