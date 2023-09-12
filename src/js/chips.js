'use strict';

import crown from '../assets/images/chips/Crown.svg';
import crownBig from '../assets/images/chips/CrownBigWhite.svg';
import mBlue from '../assets/images/chips/MBlue.svg';
import mGreen from '../assets/images/chips/MGreen.svg';
import mWhite from '../assets/images/chips/MWhite.svg';
import sBlueBig from '../assets/images/chips/SBlueBig.svg';
import shieldViolet from '../assets/images/chips/ShieldViolet.svg';
import soccerViolet from '../assets/images/chips/SoccerViolet.svg';
import soccerWhite from '../assets/images/chips/SoccerWhite.svg';
import timer from '../assets/images/chips/Timer.svg';
import worldBigBlue from '../assets/images/chips/WorldBigBlue.svg';

const chipsArrFirst = [shieldViolet, sBlueBig, soccerViolet, mGreen];
const chipsArrSecond = [mWhite, timer, crown, worldBigBlue];
const chipsArrThird = [
  crownBig,
  mBlue,
  shieldViolet,
  soccerWhite,
  shieldViolet,
  crown,
  mBlue,
  shieldViolet,
  crownBig,
];

function generateChipsBoxes(section, el) {
  const chipsItem = document.querySelector(`.chips__item_${section}`);
  const chipsBox = document.createElement('img');
  chipsBox.className = 'chips__img';
  chipsBox.src = el;
  chipsBox.alt = 'chips';
  chipsItem.append(chipsBox);
}

function removeChips() {
  const chips = document.querySelectorAll('.chips__img');
  chips.forEach((el) => {
    el.remove();
  });
}

chipsArrFirst.forEach((el) => {
  generateChipsBoxes('first', el);
});

chipsArrFirst.forEach((el) => {
  generateChipsBoxes('first', el);
});

chipsArrSecond.forEach((el) => {
  generateChipsBoxes('second', el);
});

chipsArrSecond.forEach((el) => {
  generateChipsBoxes('second', el);
});

chipsArrThird.forEach((el) => {
  generateChipsBoxes('third', el);
});
