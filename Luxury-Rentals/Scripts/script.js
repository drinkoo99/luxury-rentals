// info: navbar hamburger menu
const menuBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('.nav-content');

menuBtn.addEventListener('click', ()=>{
  navList.classList.toggle('active');
})

// info: autotyping js
const typed = new Typed('.auto-type', {
  strings: ['red V12 beast', 'raging Italian bull', 'design of Italian luxury'],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
  backDelay: 1000,
  cursorChar: '|',
  smartBackspace: true,
});

// info: onscroll animation
const cards = document.querySelectorAll('.card');

// first we set initial styles
cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(50px)';
});

function checkCards() {
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      // animation only if not already visible
      if (!card.classList.contains('visible')) {
        card.classList.add('visible');

        let opacity = 0;
        let pos = 50;

        const animate = () => {
          if (opacity < 1) {
            opacity += 0.05;
            pos -= 2.5;
            card.style.opacity = opacity;
            card.style.transform = `translateY(${pos}px)`;
            requestAnimationFrame(animate);
          } else {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0px)';
          }
        };

        animate();
      }
    } else {
      // when out of view, reset styles
      card.classList.remove('visible');
      card.style.opacity = 0;
      card.style.transform = 'translateY(50px)';
    }
  });
}

window.addEventListener('scroll', checkCards);
checkCards();