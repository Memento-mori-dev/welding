'use strict';

// выбор языка
let lang = document.getElementById('lang');

lang.onclick = function (e) {
    let content = lang.querySelector('.languages__content');
    let nav = content.querySelector('nav');

    let height = window.getComputedStyle(nav).height;
    let newHeight = Number(height.split('px')[0]) + 25;

    if (content.classList.contains('show')) {
        content.classList.remove('show');
        content.style.cssText = 'height: 0';
    }else{
        content.classList.add('show');
        content.style.cssText = `height: ${newHeight}px`;
    }
}

// меню для телефона
let menu = document.getElementById('menu');

menu.onclick = function (e) {
    let menuContent = document.getElementById('menu-content');

    let height = window.getComputedStyle(menuContent.querySelector('.menu-content')).height;
    let newHeight = Number(height.split('px')[0]) + 25;

    console.log(newHeight);
    

    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        menuContent.style.cssText = 'height: 0';
    }else{
        menu.classList.add('active');
        menuContent.style.cssText = `height: 100vh`;
    }
}

// slider
const slider = new Swiper('.slider', {
    // loop: true,
    // effect: "creative",
    // creativeEffect: {
    //   prev: {
    //     shadow: true,
    //     translate: ["-120%", 0, -500],
    //   },
    //   next: {
    //     shadow: true,
    //     translate: ["120%", 0, -500],
    //   },
    // },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function(index, className) {
        return `<div class="slider-item__number ${className}"> 
                   ${(index < 10 ? '0' + (index + 1) : (index + 1))} 
                   <div class="slider-item-number__line"></div>
                </div>`;
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});