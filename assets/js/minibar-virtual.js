$(document).ready(function () { $(".main-menu").each(function () { var t = $(this).find(".menu-link"), e = $(window).width(); t.click(function (t) { var i = $(this), a = i.attr("href"), n = $(a).offset().top; return e = $(window).width(), "#" == a.charAt(0) && (t.preventDefault(), i.parent().addClass("active"), i.parent().siblings().removeClass("active")), $("body, html").animate({ scrollTop: n }, 1e3), e < 600 && setTimeout(function () { $(".minibar").slideUp() }, 500), !1 }) }), $.fn.toggleSelected = function (t) { var e = $.extend({ classes: "selected", itemSelector: this.children() }); return this.each(function () { $(this); var t = e; t.itemSelector.click(function () { var e = $(this); e.addClass(t.classes), e.siblings().removeClass(t.classes) }) }) }, $('[data-toggle="selected"]').toggleSelected() }), $(document).ready(function () { $(".vg-select").niceSelect(), $('[data-toggle="tooltip"]').tooltip(), new WOW().init(); var t = $(".btn-back_to_top"); $(window).scroll(function () { $(document).scrollTop() > 400 ? t.css("visibility", "visible") : 400 > $(document).scrollTop() && t.css("visibility", "hidden") }), t.click(function () { return $("html").animate({ scrollTop: 0 }, 1e3), !1 }); var e = $(".gridder").isotope({ itemSelector: ".grid-item", percentPosition: !0 }); $(".filterable-button").on("click", "button", function () { var t = $(this).attr("data-filter"); e.isotope({ filter: t }) }), $(".testi-carousel").owlCarousel({ margin: 0, loop: !0, autoplay: !0, dots: !1, autoplayTimeout: 4e3, items: 1 }), $(".toggle-menu").click(function () { $(".minibar").slideToggle() }), $("#sideel").click(function () { $(this).parents(".config").toggleClass("active") }), $("body").data("bodyClassList", ""), $(".color-item").click(function () { var t = $(this).data("class"); $("body").attr("class", $("body").data("bodyClassList")), $("body").addClass(t) }), $("#change-page").on("change", function () { var t = $(this).val() + ".html"; $(this).val() && window.location.assign(t) }), $('[data-animate="scrolling"]').each(function () { var t = $(this), e = $(this).data("target") ? $(this).data("target") : $(this).attr("href"); t.click(function (t) { return $("body, html").animate({ scrollTop: $(e).offset().top }, 1e3), !1 }) }) }), $(document).ready(function () { $(".section-counter").length > 0 && $(".section-counter").waypoint(function (t) { if ("down" === t && !$(this.element).hasClass("ftco-animated")) { var e = $.animateNumber.numberStepFactories.separator(","); $(".number").each(function () { var t = $(this), i = t.data("number"); t.animateNumber({ number: i, numberStep: e }, 5e3) }) } }, { offset: "95%" }) }), document.addEventListener("DOMContentLoaded", function () { let t = document.querySelectorAll(".menu-item"); function e() { let e = window.scrollY; t.forEach(t => { let i = t.querySelector(".menu-link"), a = i.getAttribute("href").substring(1), n = document.getElementById(a); n && e >= n.offsetTop && e < n.offsetTop + n.offsetHeight ? t.classList.add("active") : t.classList.remove("active") }) } window.addEventListener("scroll", e), e() });