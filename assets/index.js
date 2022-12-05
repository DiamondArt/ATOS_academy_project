window.addEventListener('load', () => {
  let toTop = document.getElementById("toTop");
  // add button got to top
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      toTop.style.display = "block";
    } else {
      toTop.style.display = "none";
    }
  }
  // Image galerie full width
  for (let i of document.querySelectorAll('.gallery img')) {
    i.onclick = () => i.classList.toggle("full");
  }
}
);