
 // use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  // gsap code here!
  const wrappedText = new SplitType('#wrapped', { types: 'chars'})

  gsap.to('.intro-img', {
    filter: "blur(0px)", // End state
    delay: 2,
    x: "0%",
    duration: 1,         // Animation duration
    scrollTrigger: {
      trigger: ".intro-img", // Element to trigger the animation
      start: "top 80%",     // Trigger animation when image is 80% into view
      end: "top 50%",       
      scrub: true,   
    }
  });

  gsap.to(wrappedText.chars, {
    y: 0,
    stagger: 0.05, 
    delay: 0.2,
    duration: .1
  })

  gsap.from('.jan-header', { 
    scrollTrigger: {
      trigger: '.jan-header',
      toggleActions: 'restart none none none'
    },
    duration: 1, 
    y: '100%' 
  });

  document.querySelectorAll('.flashcard').forEach(card => {
    let isFlipped = false;
  
    card.addEventListener('click', () => {
      const cardInner = card.querySelector('.card-inner');
  
      isFlipped = !isFlipped;
      
      gsap.to(cardInner, {
        rotateY: isFlipped ? 180 : 0,
        duration: 0.6,
        ease: "power2.out"
      });
    });
  });

});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));


