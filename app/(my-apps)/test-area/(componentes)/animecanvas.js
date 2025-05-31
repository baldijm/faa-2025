import anime from 'animejs/lib/anime.es.js';

const $time = document.querySelector('#time');
const $count = document.querySelector('#count');

let loopCount = 0;

function startTimer() {
  anime({
    targets: { value: 0 },
    value: 1000,
    duration: 1000,
    easing: 'linear',
    round: 1,
    update: anim => {
      $time.innerText = anim.animations[0].currentValue;
    },
    complete: () => {
      loopCount++;
      $count.innerText = loopCount.toString();
      startTimer(); // loop manually
    }
  });
}

startTimer();
