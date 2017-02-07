'use-strict'

var gllacyMap;

window.onload = function() {
  ymaps.ready(initMap);
  initSlider();
  initModal();
};

function initMap() {
  gllacyMap = new ymaps.Map('gllacy-map', {
    center: [59.939355, 30.329410],
    zoom: 16,
    controls: ['zoomControl']
  }),
  gllacyPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
    hintContent: 'GllacyShop',
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'icon/icon-map-pointer.png',
    iconImageSize: [218, 142],
    iconImageOffset: [-38, -142]
  });
  gllacyMap.behaviors.disable('scrollZoom');
  gllacyMap.geoObjects.add(gllacyPlacemark);
}

function initSlider() {
  var body = document.body;
  var sliderButton = Array.prototype.slice.call(document.querySelectorAll('.js-slider-button'), 0);
  var sliderList = Array.prototype.slice.call(document.querySelectorAll('.js-slider-item'), 0);

  sliderButton.forEach(function (button){
    button.onchange = function (e) {
      var data = e.target.dataset;
      var activeSlide = document.querySelector('.js-slider-item.m-show');
      if (activeSlide) {
        activeSlide.classList.remove('m-show');
      }
      body.style.backgroundColor = data.color;
      sliderList[data.slide - 1].classList.add('m-show');
    };
  });
}

function initModal() {
  var openModalButton = document.querySelector('.js-open-modal');
  var openCloseButton = document.querySelector('.js-close-modal');

  openModalButton.onclick = function (e) {
    event.preventDefault();
    var data = e.target.dataset;
    var modal = document.getElementById(data.modal);
    modal.classList.add('m-show');
  };

  openCloseButton.onclick = function () {
    var openModal = document.querySelector('.js-modal.m-show');
    openModal.classList.remove('m-show');
  };
}
