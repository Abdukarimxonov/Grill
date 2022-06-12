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
const iconMenu = document.querySelector('.container');
const menuBody = document.querySelector('#mySidenav');
const menuLinks = document.querySelectorAll('.menu_link[data-goto]');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

         if (iconMenu.classList.contains('change')) {
            document.body.classList.remove('lock');
            iconMenu.classList.remove('change');
            menuBody.classList.remove('active');
         }

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}