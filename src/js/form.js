import Game from "./game";

const form = () => {
  let submitBtn = document.getElementById('submit-score');
  submitBtn.addEventListener('click', () => {
    Game.postScore(document.getElementById('name'), document.getElementById('score'));
  });
}

export default form;