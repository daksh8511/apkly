// navbar scroll effect
window.addEventListener("scroll", () => {
  let myheader = document.querySelector("header");
  myheader.classList.toggle("sticky", window.scrollY > 150);
});

// solution box open and close function
let myh2 = document.querySelectorAll(".solutionQbox h2");
let myansbox = document.querySelectorAll(".solutionQbox .ans");

for (let i = 0; i < myh2.length; i++) {
  myh2[i].addEventListener("click", function () {
    for (let j = 0; j < myansbox.length; j++) {
      myansbox[j].classList.remove("active");
    }
    myansbox[i].classList.add("active");
  });
}

let myli = document.querySelectorAll(".menu ul li");

// header li function
for (let i = 0; i < myli.length; i++) {
  myli[i].addEventListener("click", () => {
    myli.forEach((item) => item.classList.remove("active"));

    myli[i].classList.add("active");
  });
}


// menu bar click event

let menuicon = document.querySelector(".menu-icon")
let responsivemenu = document.querySelector(".responsivemenuTwo")

menuicon.addEventListener("click", function(){
  responsivemenu.classList.toggle('active')
})