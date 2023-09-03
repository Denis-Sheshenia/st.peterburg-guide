//City slider
const slider = document.querySelector('.city__container');
const mySwiper = new Swiper('.city__swiper', {

  pagination: {
    el: ".city__pagination",
    type: "bullets",
    clickable: true
  },
  navigation: {
    nextEl: ".city__button-next",
    prevEl: ".city__button-prev"
  },


});

//Scroll
document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = 0;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});

//Map
ymaps.ready(init);
function init() {
  const mapElem = document.querySelector("#map");
  const myMap = new ymaps.Map(
    "map",
    {
      center: [59.938340, 30.289900],
      zoom: 12.3,
      controls: ["geolocationControl", "zoomControl"]
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition: { top: "300px", right: "20px" },
      geolocationControlFloat: "none",
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "200px", right: "20px" }
    }
  );
  
  if (window.matchMedia("(max-width: 1920px)").matches) {
    if (Object.keys(myMap.controls._controlKeys).length) {
      myMap.controls.remove('zoomControl');
      myMap.controls.remove('geolocationControl');
    }
  }

  myMap.behaviors.disable("scrollZoom");
  
  myMap.events.add("sizechange", function (e) {
    if (window.matchMedia("(max-width: 1280px)").matches) {
      if (Object.keys(myMap.controls._controlKeys).length) {
        myMap.controls.remove('zoomControl');
        myMap.controls.remove('geolocationControl');
      }
    } else {
      if (!Object.keys(myMap.controls._controlKeys).length) {
        myMap.controls.add('zoomControl');
        myMap.controls.add('geolocationControl');
      }
    }
  });

  const myPlacemark = new ymaps.Placemark(
    [59.943122, 30.303240],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/point.svg",
      iconImageSize: [50, 60],
      iconImageOffset: [27, -57]
    }
  );

  myMap.geoObjects.add(myPlacemark);
  myMap.container.fitToViewport();
}

// Animation
wow = new WOW({
  boxClass:     'wow',                // default
  animateClass: 'animate__animated',  // default
  offset:       0,                    // default
  mobile:       true,                 // default
  live:         true                  // default
});
wow.init();