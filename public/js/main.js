!(function (t) {
    "use strict";
    t(document).on("ready", function () {
        jQuery(window).on("scroll", function () {
            200 < t(this).scrollTop() ? t("#header .header-inner").addClass("sticky") : t("#header .header-inner").removeClass("sticky");
        }),
            jQuery(window).on("scroll", function () {
                100 < t(this).scrollTop() ? t(".header").addClass("sticky") : t(".header").removeClass("sticky");
            }),
            t(".pro-features .get-pro").on("click", function () {
                t(".pro-features").toggleClass("active");
            }),
            t(".search a").on("click", function () {
                t(".search-top").toggleClass("active");
            }),
            t(".menu").slicknav({ prependTo: ".mobile-nav", duration: 300, closeOnClick: !0 }),
            t(".hero-slider").owlCarousel({
                loop: !0,
                autoplay: !0,
                smartSpeed: 500,
                autoplayTimeout: 3500,
                singleItem: !0,
                autoplayHoverPause: !0,
                items: 1,
                nav: !0,
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                dots: !1,
            }),
            t(".testimonial-slider").owlCarousel({
                items: 3,
                autoplay: !0,
                autoplayTimeout: 4500,
                smartSpeed: 300,
                autoplayHoverPause: !0,
                loop: !0,
                merge: !0,
                nav: !1,
                dots: !0,
                responsive: { 1: { items: 1 }, 300: { items: 1 }, 480: { items: 1 }, 768: { items: 2 }, 1170: { items: 3 } },
            }),
            t(".portfolio-slider").owlCarousel({
                autoplay: !0,
                autoplayTimeout: 4e3,
                margin: 15,
                smartSpeed: 300,
                autoplayHoverPause: !0,
                loop: !0,
                nav: !0,
                dots: !1,
                responsive: { 300: { items: 1 }, 480: { items: 2 }, 768: { items: 2 }, 1170: { items: 4 } },
            }),
            t(".counter").counterUp({ delay: 20, time: 2e3 }),
            t(".clients-slider").owlCarousel({
                items: 5,
                autoplay: !0,
                autoplayTimeout: 3500,
                margin: 15,
                smartSpeed: 400,
                autoplayHoverPause: !0,
                loop: !0,
                nav: !1,
                dots: !1,
                responsive: { 300: { items: 1 }, 480: { items: 2 }, 768: { items: 3 }, 1170: { items: 5 } },
            }),
            t(".pf-details-slider").owlCarousel({
                items: 1,
                autoplay: !1,
                autoplayTimeout: 5e3,
                smartSpeed: 400,
                autoplayHoverPause: !0,
                loop: !0,
                merge: !0,
                nav: !0,
                dots: !1,
                navText: ['<i class="icofont-rounded-left"></i>', '<i class="icofont-rounded-right"></i>'],
            }),
            t(".accordion > li:eq(0) a").addClass("active").next().slideDown(),
            t(".accordion a").on("click", function (e) {
                var o = t(this).closest("li").find("p");
                t(this).closest(".accordion").find("p").not(o).slideUp(300),
                    t(this).hasClass("active") ? t(this).removeClass("active") : (t(this).closest(".accordion").find("a.active").removeClass("active"), t(this).addClass("active")),
                    o.stop(!1, !0).slideToggle(300),
                    e.preventDefault();
            }),
            t("select").niceSelect(),
            t(function () {
                t("#datepicker").datepicker();
            }),
            t('input[type="checkbox"]').change(function () {
                t(this).is(":checked") ? t(this).parent("label").addClass("checked") : t(this).parent("label").removeClass("checked");
            }),
            t(".right-bar .bar").on("click", function () {
                t(".sidebar-menu").addClass("active");
            }),
            t(".sidebar-menu .cross").on("click", function () {
                t(".sidebar-menu").removeClass("active");
            }),
            t(".video-popup").magnificPopup({ type: "video" }),
            767 < t(window).width() && new WOW().init(),
            t.scrollUp({ scrollText: '<span><i class="fa fa-angle-up"></i></span>', easingType: "easeInOutExpo", scrollSpeed: 900, animation: "fade" }),
            t(".scroll").on("click", function (e) {
                var o = t(this);
                t("html, body")
                    .stop()
                    .animate({ scrollTop: t(o.attr("href")).offset().top - 100 }, 1e3),
                    e.preventDefault();
            }),
            t.stellar({ horizontalOffset: 0, verticalOffset: 0 });
    }),
        t(window).on("load", function () {
            t(".preloader").addClass("preloader-deactivate");
        });
})(jQuery),
    document.addEventListener("DOMContentLoaded", function () {
        var a = document.querySelector(".form-check-input");
        a.addEventListener("change", function () {
            var e,
                o = window.location.href,
                t = window.location.protocol + "//" + window.location.host;
            a.checked
                ? o.includes(t + "/en/") ||
                  ((e = t + "/en" + o.split(t)[1]),
                  setTimeout(function () {
                      window.location.href = e;
                  }, 100))
                : o.includes(t + "/en/") &&
                  ((e = t + o.split(t + "/en")[1]),
                  setTimeout(function () {
                      window.location.href = e;
                  }, 100));
        });
    });
