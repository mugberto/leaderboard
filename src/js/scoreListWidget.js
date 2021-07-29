import ScoreWidget from './scoreWigdet';

export default class ScoreListWidget {
  constructor() {
    this.scoreListWidget = document.getElementById('score-list');
  }

  update(scoreList) {
    this.scoreListWidget.innerHTML = '';
    scoreList.forEach((score) => {
      this.append(new ScoreWidget(score));
    });
  }

  append(scoreWigdet) {
    this.scoreListWidget.appendChild(scoreWigdet.listItem);
  }
}