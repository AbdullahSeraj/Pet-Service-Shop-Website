// Login Form
let loginForm = document.querySelector(".header .login-form");

document.getElementById("login-btn").addEventListener("click", () => {
  loginForm.classList.toggle("active");
  navbar.classList.remove("active");
});

// Menu Btn
let navbar = document.querySelector(".header .navbar");

document.getElementById("menu-btn").addEventListener("click", () => {
  navbar.classList.toggle("active");
  loginForm.classList.remove("active");
});

window.onscroll = () => {
  navbar.classList.remove("active");
  loginForm.classList.remove("active");

  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

window.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};