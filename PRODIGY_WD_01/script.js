window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  var scrolled = window.scrollY;
  var maxScroll = document.body.scrollHeight - window.innerHeight;
  var scrollPercentage = (scrolled / maxScroll) * 100;

  // Calculate the new background color based on the scroll percentage
  var newBackgroundColor = "rgba(30, 129, 176, " + scrollPercentage / 100 + ")";

  // Set the new background color
  navbar.style.backgroundColor = newBackgroundColor;

  // Change text color based on scroll
  if (scrollPercentage > 50) {
    navbar.style.color = "#fff"; // Change text color when scrolled more than 50%
  } else {
    navbar.style.color = "#000"; // Revert back to original text color
  }
});
