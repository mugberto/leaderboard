import Score from './score';

export default class ScoreList {
  constructor(scoreList = []) {
    this.list = [];
    scoreList.forEach((score) => {
      this.list.push(new Score(score.name, score.score));
    });
  }

  add(form) {
    this.list.push(new Score(form.name, form.score));
  }
}