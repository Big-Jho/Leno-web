// Toggle mobile menu navbar
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".navbar__mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar__mobile-menu-items");
  const navbar = document.querySelector(".navbar");
  const closeButton = document.querySelector(".modal__close-button");
  const modal = document.getElementById("modal");
  const modalVideo = document.getElementById("modal__video");
  const videoPlayerButton = document.querySelector(".preview__play-button");

  // Mobile Menu open / close
  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
  console.log(mobileMenu.classList);

  // Change the background of navbar when scrolled
  window.addEventListener("scroll", function () {
    if (this.window.scrollY > 1) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Open Modal section when the video-player button is clicked
  videoPlayerButton.addEventListener("click", function () {
    modal.style.display = "block";
    modalVideo.src =
      "https://www.youtube.com/embed/G0cmfY7qdmY?si=nvEFCm5TU8SrsQP-";
  });

  // Close modal section on closeButton click
  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
    modalVideo.src = "";
  });

  modal.addEventListener("click", function () {
    modal.style.display = "none";
    modal.src = "";
  });
});
