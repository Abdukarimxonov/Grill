function openNav() {
   document.getElementById("mySidenav").classList.toggle('active');
   document.querySelector("body").classList.toggle('lock');
};


function change(x) {
   x.classList.toggle("change");
};
/*------------*/
const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   // And if we need scrollbar
});