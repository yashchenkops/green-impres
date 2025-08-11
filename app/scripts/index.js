const initAccordion = () => {
  new Accordion('.page-section__column--accordion', {
    duration: 400,
    showMultiple: false,
  });
};

document.addEventListener('DOMContentLoaded', function () {
  new WOW().init();
  initAccordion();
});
