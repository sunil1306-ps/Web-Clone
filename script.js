let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  const currentSlide = slides[slideIndex - 1];
  currentSlide.style.opacity = 1;

  // Smooth scroll to the current slide
  currentSlide.scrollIntoView({ behavior: 'smooth' });
  updateCircles();

  setTimeout(showSlides, 50000);
}

function currentSlide(n) {
  slideIndex = n;
  showSlides();
}

function updateCircles() {
  const circles = document.querySelectorAll(".circle");
  for (let i = 0; i < circles.length; i++) {
    circles[i].classList.remove("cactive");
  }
  circles[slideIndex - 1].classList.add("cactive");
}

