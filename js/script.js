'use-strict';

window.onload = function() {
  ymaps.ready(initMap);
  initSlider();
  initModal();
};

function initMap() {
  var gllacyMap = new ymaps.Map('gllacy-map', {
    center: [59.939355, 30.329410],
    zoom: 16,
    controls: ['zoomControl']
  }),
  gllacyPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
    hintContent: 'GllacyShop'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/icon/icon-map-pointer.png',
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
      var dataSlide = e.target.getAttribute('data-slide');
      var activeSlide = document.querySelector('.js-slider-item.m-show');
      if (activeSlide) {
        activeSlide.classList.remove('m-show');
        for (var i = 0; i < body.classList.length; i++) {
          if (body.classList[i].indexOf('m-slide') !== -1) {
            body.classList.remove(body.classList[i]);
          }
        }
      }
      body.classList.add('m-slide-' + dataSlide);
      sliderList[dataSlide - 1].classList.add('m-show');
    };
  });
}

function initModal() {
  var openModalButton = Array.prototype.slice.call(document.querySelectorAll('.js-open-modal'), 0);
  var openModal;

  openModalButton.forEach(function (button) {
    button.onclick = function (e) {
      e.preventDefault();
      var dataModal = e.target.getAttribute('data-modal');
      openModal = document.getElementById(dataModal);
      var overlayModal = openModal.querySelector('.js-overlay-modal');
      var closeModalButton = openModal.querySelector('.js-close-modal');
      openModal.classList.add('m-show');

      closeModalButton.onclick = function (e) {
        e.preventDefault();
        closeModal();
      };

      overlayModal.onclick = function (e) {
        if (e.target.classList.contains('js-overlay-modal')) {
          closeModal();
        }
      };
    };
  });

  window.onkeydown = function (e) {
    if (e.keyCode === 27) {
      closeModal();
    }
  }

  function closeModal() {
    if (openModal) {
      openModal.classList.remove('m-show');
      openModal = false;
    }
  }
}
