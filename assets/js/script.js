let navBar = document.querySelector("#header");

document.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;

  if (scrollTop > 0) {
    navBar.classList.add("rolar");
  } else {
    navBar.classList.remove("rolar");
  }
});

// menu mob

let bntMenuMob = document.querySelector("#btn-menu-mob");
let line1 = document.querySelector(".line-menumob-1");
let line2 = document.querySelector(".line-menumob-2");
let menuMobile = document.querySelector("#menu-mobile");

let body = document.querySelector("body");

bntMenuMob.addEventListener("click", () => {
  line1.classList.toggle("ativo1");
  line2.classList.toggle("ativo2");
  menuMobile.classList.toggle("abrir");

  if (menuMobile.classList.contains('abrir')) {
    document.documentElement.style.overflow = 'hidden'; 
} else {
    document.documentElement.style.overflow = ''; 
}

});
