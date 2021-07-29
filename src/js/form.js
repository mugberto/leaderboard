import Game from './game';

const form = () => {
  const submitBtn = document.getElementById('submit-score');
  submitBtn.addEventListener('click', () => {
    Game.postScore(document.getElementById('name').value, document.getElementById('score').value);
  });
};

export default form;