let prevScrollPos = window.scrollY;

window.onscroll = function() {
  const currentScrollPos = window.scrollY;
  
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("scrolling-element").classList.add("hidden");
  } else {
    document.getElementById("scrolling-element").classList.remove("hidden");
  }
  
  prevScrollPos = currentScrollPos;
};
