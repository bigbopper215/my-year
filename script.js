
 // use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  // gsap code here!
  const wrappedText = new SplitType('#wrapped', { types: 'chars'})

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

