import './css/style.css';
import ScoreListWidget from './js/scoreListWidget';
import Game from './js/game';
import setListRefresher from './js/refresh';

const appInit = () => {
  const scoreListWigdet = new ScoreListWidget();
  Game.start('Racing Game');
  Game.getScoreList().then((list) => scoreListWigdet.update(list));
  setListRefresher(scoreListWigdet);
};

window.addEventListener('load', appInit);