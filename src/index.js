import './css/style.css';
import sampleScoreList from './js/sampleScoreList';
import ScoreList from './js/scoreList';
import ScoreListWidget from './js/scoreListWidget';
import Game from './js/game';

const appInit = () => {
  const scoreListWigdet = new ScoreListWidget();
  Game.start('Racing Game');
  Game.getScoreList().then((list) => scoreListWigdet.update(list));
};

window.addEventListener('load', appInit);