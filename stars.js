// Skapa slumpmässiga stjärnor
document.addEventListener("DOMContentLoaded", () => {
  const starContainer = document.querySelector('.stars');
  if (!starContainer) return;

  const numStars = 120; // antal stjärnor
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    star.style.animationDuration = (2 + Math.random() * 3) + 's';
    star.style.opacity = Math.random();
    starContainer.appendChild(star);
  }

  // Låt några stjärnor slumpmässigt få en "flare" ibland
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion) {
    const allStars = () => starContainer.querySelectorAll('.star');
    const flareOne = () => {
      const stars = allStars();
      if (!stars.length) return;
      const idx = Math.floor(Math.random() * stars.length);
      const s = stars[idx];
      // undvik dubbla flares
      if (s.classList.contains('flare')) return;
      s.classList.add('flare');
      const duration = 1200 + Math.random() * 1200; // 1.2–2.4s
      setTimeout(() => s.classList.remove('flare'), duration);
    };
    // Flare då och då (ca var 900–1400 ms)
    const schedule = () => {
      flareOne();
      const nextIn = 900 + Math.random() * 500;
      setTimeout(schedule, nextIn);
    };
    schedule();
  }
});
