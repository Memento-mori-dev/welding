'use strict';

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