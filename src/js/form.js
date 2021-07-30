import Game from './game';

const form = () => {
  const submitBtn = document.getElementById('submit-score');
  submitBtn.addEventListener('click', () => {
    const nameInput = document.getElementById('name');
    const scoreInput = document.getElementById('score');
    Game.postScore(nameInput.value, scoreInput.value);
    nameInput.value = '';
    scoreInput.value = '';
  });
};

export default form;