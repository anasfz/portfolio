let menuBtn = document.querySelector(".menu-btn");
let navbar = document.querySelector("#navbar");

menuBtn.onclick = () =>{
    navbar.classList.toggle("active");
}