export default class ScoreWidget {
  constructor(score) {
    this.listItem = document.createElement('li');
    this.listItem.className = 'list-item';
    this.listItem.textContent = `${score.user}: ${score.score}`;
  }
}