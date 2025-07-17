let currentslide=0;
let slides = document.querySelectorAll(".bannerimg");
let slideslen=slides.length;

function showslide(index){
  slides.forEach((slide,i)=>{
    slide.classList.remove("active");
  })
  slides[index].classList.add('active');
}
function nextslide(){
  currentslide = (currentslide + 1) % slideslen;
  showslide(currentslide)
}

setInterval(nextslide, 3000);

showslide(currentslide);

const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const icon = btn.querySelector("i");
    icon.classList.toggle("fa-angle-down");
    icon.classList.toggle("fa-angle-up");
  });
});


