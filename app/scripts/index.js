const initMobileMenu = () => {
  const mobileMenuButton = document.querySelector('.header__mobile-button');
  const mobileMenuInner = document.querySelector('.header__mobile .header__menu');
  const menuLinks = document.querySelectorAll('.header__mobile .header__menu-item');

  const toggleMenu = () => {
    mobileMenuInner.classList.toggle('is-active');
    document.body.classList.toggle('scroll-block');
  };

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenuInner.classList.remove('is-active');
      document.body.classList.remove('scroll-block');
    });
  });

  mobileMenuButton.addEventListener('click', toggleMenu);
};

const initAccordion = () => {
  new Accordion('.page-section__column--accordion', {
    duration: 400,
    showMultiple: false,
  });
};

document.addEventListener('DOMContentLoaded', function () {
  new WOW().init();
  initMobileMenu();
  initAccordion();
});
