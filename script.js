let burger = document.querySelector(".burger");
let nav = document.querySelector("nav");
let nav_list = document.querySelector(".nav__list");
let nav_name = document.querySelector(".nav__name");
burger.addEventListener("click",()=>{
    nav_list.classList.toggle("active");
    nav.classList.toggle("active");
    nav_name.classList.toggle("active");
    burger.classList.toggle("active");
})
document.querySelectorAll(".nav__list-link").forEach(n=>n.addEventListener("click",()=>{
    nav_list.classList.remove("active");
    nav.classList.remove("active");
    nav_name.classList.remove("active");
    burger.classList.remove("active");
}))
   

