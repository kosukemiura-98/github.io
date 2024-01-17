// アコーディオン
$(function () {
  $('.faq__header').click(function () {
    $(this).next().slideToggle();
    $(this).toggleClass('is-open');
  });
});

// AOS
$(function () {
  AOS.init();
});

// スムーススクロール
$(function () {
  $('a[href^="#"]').click(function () {
    let speed = 500;
    let id = $(this).attr("href");
    let target = $("#" == id ? "html" : id);
    let position = $(target).offset().top - 100;
    $("html, body").animate({ scrollTop: position }, speed);
    return false;
  });
});

$(function () {
  $('a[href^="#about"]').click(function () {
    let speed = 500;
    let id = $(this).attr("href");
    let target = $("#" == id ? "html" : id);
    let position = $(target).offset().top - 200;
    $("html, body").animate({ scrollTop: position }, speed);
    return false;
  });
});