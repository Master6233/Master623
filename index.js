const toggle = document.querySelector(".navbar-toggle");

toggle.addEventListener("click", event => {
  const navUl = toggle.previousElementSibling;
  navUl.classList.toggle("active");
});

// Scroll to top functionality
document.getElementById('scrollToTopButton').addEventListener('click', function() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});

// Progress bar functionality
document.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;
  const scrollPercent = (scrollPosition / (documentHeight - windowHeight)) * 100;

  const progressBar = document.querySelector('.progress-bar');
  progressBar.style.width = scrollPercent + '%';
});

// Toggle navigation menu
function toggleMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}

// Set the font size of the specific <h1> element
document.getElementById("mainTitle").style.fontSize = "6vw";