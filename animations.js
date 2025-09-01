// Animation utility functions
function initAnimations() {
  // Даем время компонентам отрендериться
  setTimeout(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0) translateX(0)';
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
      '.slide-in-left, .slide-in-right, .fade-in-up, .card'
    );
    
    animatedElements.forEach(el => observer.observe(el));
  }, 100);
}

// Smooth scroll utility
function smoothScrollTo(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Parallax effect utility
function initParallax() {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
      const speed = element.dataset.speed || 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });
}

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initAnimations();
  initParallax();
});

// Делаем функции глобально доступными
window.initAnimations = initAnimations;
window.smoothScrollTo = smoothScrollTo;
window.initParallax = initParallax;