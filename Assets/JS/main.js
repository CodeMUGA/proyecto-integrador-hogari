// $(".owl-carousel").owlCarousel({
//   loop: true,
//   margin: 10,
//   nav: true,
//   responsiveClass: true,
//   responsive: {
//     0: {
//       items: 1,
//       nav: true,
//     },
//     600: {
//       items: 2,
//       nav: false,
//     },
//     1000: {
//       items: 3,
//       nav: true,
//       loop: false,
//     },
//   },
// });

// $(".owl-carousel").owlCarousel({
//   center: true,
//   items: 2,
//   loop: true,
//   margin: 10,
//   responsive: {
//     600: {
//       items: 4,
//     },
//   },
// });
// $(".nonloop").owlCarousel({
//   center: true,
//   items: 2,
//   loop: false,
//   margin: 10,
//  responsive: {
//    0: {
//      items: 1,
//      nav: true,
//    },
//    600: {
//      items: 3,
//      nav: false,
//    },
//    1000: {
//      items: 5,
//      nav: true,
//      loop: false,
//    },
//  },
// });

var owl = $(".owl-carousel");
owl.owlCarousel({
  loop: true,
  nav: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 4,
      nav: true,
    },
  },
});
owl.on("mousewheel", ".owl-stage", function (e) {
  if (e.deltaY > 0) {
    owl.trigger("next.owl");
  } else {
    owl.trigger("prev.owl");
  }
  e.preventDefault();
});
