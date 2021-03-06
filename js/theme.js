!(function (e) {
  "use strict";
  var l = e("header").height() + 50;
  if (
    (e(".header_area").length &&
      e(window).scroll(function () {
        e(window).scrollTop() >= l
          ? e(".header_area").addClass("navbar_fixed")
          : e(".header_area").removeClass("navbar_fixed");
      }),
    e("#mc_embed_signup").find("form").ajaxChimp(),
    e("select").niceSelect(),
    e(window).on("load", function () {
      if (
        (e(".portfolio-filter ul li").on("click", function () {
          e(".portfolio-filter ul li").removeClass("active"),
            e(this).addClass("active");
          var t = e(this).attr("data-filter");
          l.isotope({ filter: t });
        }),
        document.getElementById("portfolio"))
      )
        var l = e(".portfolio-grid").isotope({
          itemSelector: ".all",
          percentPosition: !0,
          masonry: { columnWidth: ".all" },
        });
    }),
    e(".img-gal").length > 0 &&
      e(".img-gal").magnificPopup({ type: "image", gallery: { enabled: !0 } }),
    e(".testi_slider").length &&
      e(".testi_slider").owlCarousel({
        loop: !0,
        margin: 30,
        items: 2,
        autoplay: !0,
        smartSpeed: 2500,
        dots: !0,
        responsiveClass: !0,
        responsive: { 0: { items: 1 }, 991: { items: 2 } },
      }),
    e("#mapBox").length)
  ) {
    var t = e("#mapBox").data("lat"),
      o = e("#mapBox").data("lon"),
      a = e("#mapBox").data("zoom");
    e("#mapBox").data("marker"),
      e("#mapBox").data("info"),
      e("#mapBox").data("mlat"),
      e("#mapBox").data("mlon"),
      new GMaps({
        el: "#mapBox",
        lat: t,
        lng: o,
        scrollwheel: !1,
        scaleControl: !0,
        streetViewControl: !1,
        panControl: !0,
        disableDoubleClickZoom: !0,
        mapTypeControl: !1,
        zoom: a,
        styles: [
          {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [{ color: "#dcdfe6" }],
          },
          {
            featureType: "transit",
            stylers: [{ color: "#808080" }, { visibility: "off" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ visibility: "on" }, { color: "#dcdfe6" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffffff" }],
          },
          {
            featureType: "road.local",
            elementType: "geometry.fill",
            stylers: [
              { visibility: "on" },
              { color: "#ffffff" },
              { weight: 1.8 },
            ],
          },
          {
            featureType: "road.local",
            elementType: "geometry.stroke",
            stylers: [{ color: "#d7d7d7" }],
          },
          {
            featureType: "poi",
            elementType: "geometry.fill",
            stylers: [{ visibility: "on" }, { color: "#ebebeb" }],
          },
          {
            featureType: "administrative",
            elementType: "geometry",
            stylers: [{ color: "#a7a7a7" }],
          },
          {
            featureType: "road.arterial",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffffff" }],
          },
          {
            featureType: "road.arterial",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffffff" }],
          },
          {
            featureType: "landscape",
            elementType: "geometry.fill",
            stylers: [{ visibility: "on" }, { color: "#efefef" }],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#696969" }],
          },
          {
            featureType: "administrative",
            elementType: "labels.text.fill",
            stylers: [{ visibility: "on" }, { color: "#737373" }],
          },
          {
            featureType: "poi",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "road.arterial",
            elementType: "geometry.stroke",
            stylers: [{ color: "#d6d6d6" }],
          },
          {
            featureType: "road",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
          {},
          {
            featureType: "poi",
            elementType: "geometry.fill",
            stylers: [{ color: "#dadada" }],
          },
        ],
      });
  }
})(jQuery);
