function openNav() {
   document.getElementById("mySidenav").classList.toggle('active');
   document.querySelector("body").classList.toggle('lock');
};


function change(x) {
   x.classList.toggle("change");
};
/*------------*/
const swiper = new Swiper('.swiper', {
   direction: 'horizontal',
   loop: true,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   simulateTouch: true,
   touchRatio: 1,
   touchAngle: 45,
   grabCursor: true,
   slideToClickedSlide: false,
   effect: 'slide',
   lazy: {
      loadOnTransitionStart: true,
      loadPrevNext: true,
   },
});
