import ScoreWidget from './scoreWigdet';
import Game from './game';

export default class ScoreListWidget {
  constructor() {
    this.scoreListWidget = document.getElementById('score-list');
  }

  async update() {
    let response = await Game.getScoreList();
    let json = await response.json();
    let scoreList = json.result;
    this.scoreListWidget.innerHTML = '';
    scoreList.forEach((score) => {
      this.append(new ScoreWidget(score));
    });
  }

  append(scoreWigdet) {
    this.scoreListWidget.appendChild(scoreWigdet.listItem);
  }
}