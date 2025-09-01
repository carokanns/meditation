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
});
