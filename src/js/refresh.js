import Game from './game';

const setListRefresher = () => {
  const btn = document.getElementById('refresh-btn');
  btn.addEventListener('click', () => {
    Game.getScoreList();
  });
};

export default setListRefresher;