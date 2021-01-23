"use strict";

const images = document.querySelectorAll('.img-12-min');
const big_image = document.querySelector('.img-12-max');

let count = 0;

const next = document.querySelector('.next');
next.addEventListener('click', nextFunction);

const prev = document.querySelector('.prev');
prev.addEventListener('click', prevFunction);

const reset = document.querySelector('.reset');
reset.addEventListener('click', resetFunction);

function nextFunction() {
  if(count < images.length - 1) {
    images[count].classList.remove('active-img');
    count++;
  } 
  else {
    count = 0;
    images[images.length - 1].classList.remove('active-img');
  }

  images[count].classList.add('active-img');
  big_image.src = images[count].src;

  next.removeEventListener('click', nextFunction);
}

function prevFunction() {
  if(count <= images.length - 1 && count !== 0) {
    images[count].classList.remove('active-img');
    count--;
  } 
  else {
    images[count].classList.remove('active-img');
    count = images.length - 1;
  }

  images[count].classList.add('active-img');
  big_image.src = images[count].src;

  prev.removeEventListener('click', prevFunction);
}

function resetFunction() {
  images[count].classList.remove('active-img');
  count = 0;

  images[count].classList.add('active-img');
  big_image.src = images[count].src;
  
  reset.removeEventListener('click', resetFunction);
}
