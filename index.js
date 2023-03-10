const CURRENT_YEAR = 2023;
const CURRENT_ANSEWER = 'Ответ правильный';
const ERROR_ANSEWER = 'Ответ неправильный';

const inputNode = document.querySelector('.js-input');
const buttonNode = document.querySelector('.js-button');
const outputNode = document.querySelector('.js-output');

buttonNode.addEventListener('click', function() {
  const inputValue = inputNode.value;

  if (!inputValue) {
    return;
  }

  const answer = Number(inputNode.value);
  let output = CURRENT_ANSEWER;

  if(answer !== CURRENT_YEAR) {
    output = ERROR_ANSEWER;
  }

  outputNode.innerHTML = output;
});