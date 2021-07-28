export default class ScoreWidget {
  constructor(score) {
    this.li = document.createElement('li');
    this.li.className = 'list-item';
    this.li.textContent = `${score.scorer}: ${score.points}`;
  }

  get element() {
    return this.li;
  }
}