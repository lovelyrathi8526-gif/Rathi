// Animate skill bars when visible

const skillBars = document.querySelectorAll(".skill-fill");

window.addEventListener("scroll", () => {

  skillBars.forEach(bar => {

    const rect = bar.getBoundingClientRect();

    if (rect.top < window.innerHeight - 50) {

      bar.style.width = bar.getAttribute("data-percent");

    }

  });

});

// Contact form validation

document.getElementById("contactForm").addEventListener("submit", function(e) {

  e.preventDefault();

  alert("Thank you for contacting me! I’ll get back to you soon.");

  this.reset();

});