import ListItemWidget from './listItemWigdet';
import Game from './game';

export default class ListWidget {
  constructor() {
    this.listWidget = document.getElementById('score-list');
  }

  async update() {
    let response = await Game.getScoreList();
    let json = await response.json();
    let scoreList = json.result;
    this.listWidget.innerHTML = '';
    scoreList.forEach((score) => {
      this.append(new ListItemWidget(score));
    });
  }

  append(scoreWigdet) {
    this.listWidget.appendChild(scoreWigdet.listItem);
  }
}