const boton = document.querySelector(".boton");
const nav = document.querySelector(".nav-box");

boton.addEventListener("click",()=>{
    nav.classList.toggle("active");
});
