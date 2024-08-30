const btnCounterElement = document.getElementById('js-counter-btn');
const btnResetElement = document.getElementById('js-reset-btn');

let counterText = document.querySelector('.counter');

const COUNTER_INITIAL_VALUE = 0;

let counter = COUNTER_INITIAL_VALUE;

counterText.innerText = counter;

btnCounterElement.addEventListener('click', function () {
  counter++;
  counterText.innerText = counter;
});

btnResetElement.addEventListener('click', function () {
  counter = COUNTER_INITIAL_VALUE;
  counterText.innerText = counter;
});



