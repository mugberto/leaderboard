import './css/style.css';
import ScoreListWidget from './js/scoreListWidget';
import Game from './js/game';
import setListRefresher from './js/refresh';
import form from './js/form';

const appInit = () => {
  const scoreListWigdet = new ScoreListWidget();
  Game.start('Racing Game');
  scoreListWigdet.update();
  setListRefresher(scoreListWigdet);
  form();
};

window.addEventListener('load', appInit);