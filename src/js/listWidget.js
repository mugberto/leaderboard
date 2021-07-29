import ListItemWidget from './listItemWigdet';
import Game from './game';

export default class ListWidget {
  static listWidget;

  static init() {
    this.listWidget = document.getElementById('score-list');
  }

  static async update() {
    const response = await Game.getScoreList();
    const json = await response.json();
    const scoreList = json.result;
    this.listWidget.innerHTML = '';
    scoreList.forEach((score) => {
      this.append(new ListItemWidget(score));
    });
  }

  static append(scoreWigdet) {
    this.listWidget.appendChild(scoreWigdet.listItem);
  }
}