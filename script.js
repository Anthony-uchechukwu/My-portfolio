// Simple welcome message
console.log("Welcome to Anthony's Portfolio!");

// Button click - show message
document.addEventListener("DOMContentLoaded", function() {
  const btn = document.querySelector("button");
  if (btn) {
    btn.addEventListener("click", function() {
      alert("Thank you for visiting my portfolio! - Anthony Uchechukwu");
    });
  }

  // Show current year in footer
  const year = new Date().getFullYear();
  console.log("Portfolio loaded - " + year);
});
