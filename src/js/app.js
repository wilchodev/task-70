
window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const image = document.querySelector(".image");
  image.addEventListener("click", function (event) {
      image.classList.add('active');
  });
});
