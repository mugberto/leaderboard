import './css/style.css';
import sampleScoreList from './js/sampleScoreList';
import ScoreList from './js/scoreList';
import ScoreListWidget from './js/scoreListWidget';

const appInit = () => {
  const sampleScores = sampleScoreList();
  const scoreList = new ScoreList(sampleScores);
  const scoreListWigdet = new ScoreListWidget();
  scoreListWigdet.update(scoreList);
};

window.addEventListener('load', appInit);