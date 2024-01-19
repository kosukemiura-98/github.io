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
  $('.header a[href^="#"]').click(function () {
    let speed = 500;
    let id = $(this).attr("href");
    let target = $("#" == id ? "html" : id);
    let position = $(target).offset().top - 100;
    $("html, body").animate({ scrollTop: position }, speed);
    return false;
  });
});

$(function () {
  $('.header a[href^="#about"]').click(function () {
    let speed = 500;
    let id = $(this).attr("href");
    let target = $("#" == id ? "html" : id);
    let position = $(target).offset().top - 200;
    $("html, body").animate({ scrollTop: position }, speed);
    return false;
  });
});

$(function () {
  $('.footer a[href^="#"]').click(function () {
    let speed = 500;
    let id = $(this).attr("href");
    let target = $("#" == id ? "html" : id);
    let position = $(target).offset().top;
    $("html, body").animate({ scrollTop: position }, speed);
    return false;
  });
});

$(function () {
  $('.banner__wrapper a[href^="#"]').click(function () {
    let speed = 500;
    let id = $(this).attr("href");
    let target = $("#" == id ? "html" : id);
    let position = $(target).offset().top - 100;
    $("html, body").animate({ scrollTop: position }, speed);
    return false;
  });
});

$(function () {
  $('.drawer a[href^="#"]').click(function () {
    let speed = 500;
    let id = $(this).attr("href");
    let target = $("#" == id ? "html" : id);
    let position = $(target).offset().top - 100;
    $("html, body").animate({ scrollTop: position }, speed);
    return false;
  });
});

$(function () {
  $('.cta a[href^="#"]').click(function () {
    let speed = 500;
    let id = $(this).attr("href");
    let target = $("#" == id ? "html" : id);
    let position = $(target).offset().top - 100;
    $("html, body").animate({ scrollTop: position }, speed);
    return false;
  });
});

$(function () {
  $('.float a[href^="#"]').click(function () {
    let speed = 500;
    let id = $(this).attr("href");
    let target = $("#" == id ? "html" : id);
    let position = $(target).offset().top - 150;
    $("html, body").animate({ scrollTop: position }, speed);
    return false;
  });
});

// ハンバーガーメニュー
$(function () {
  $('.header__hamburger').click(function () {
    $('.header__line').toggleClass('is-open');
    $('.drawer').toggleClass('is-open');
    $('body').toggleClass('is-open');
  });
});

$(function () {
  $('.drawer__item--link').click(function () {
    $('.header__line').toggleClass('is-open');
    $('.drawer').toggleClass('is-open');
    $('body').toggleClass('is-open');
  });
});

$(function () {
  $('.drawer__btn').click(function () {
    $('.header__line').toggleClass('is-open');
    $('.drawer').toggleClass('is-open');
    $('body').toggleClass('is-open');
  });
});