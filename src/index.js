
var init = false;
var swiper= Swiper;
function swiperMode() {
  let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
  if(mobile.matches) {
    if (!init) {
        init = true;
        swiper = new Swiper('.swiper', {
          direction: 'horizontal',
                effect: 'coverflow',
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 0,
                  modifier: 0,
                  slideShadows: false,
              },
          // Настройки Swiper
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          spaceBetween: 16,
        });
        }
}

}

/* On Load
**************************************************************/
window.addEventListener('load', function() {
  swiperMode();
});

/* On Resize
**************************************************************/
window.addEventListener('resize', function() {
  swiperMode();
});



const buttonImg = document.querySelector("#button__img");
const btn = document.querySelector(".btn");
const content = document.querySelector(".content");

btn.addEventListener("click", btnClick);

function btnClick() {
    console.log(content.classList);

    if (content.classList.contains("hidden")) {
        btn.textContent = "Скрыть";
        buttonImg.classList.toggle ('active');
    } else {
      buttonImg.classList.toggle ('active');
        btn.textContent = "Показать всё";
    }

    content.classList.toggle("hidden");
  }
  

