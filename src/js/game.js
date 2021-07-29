import ListWidget from './listWidget';
import showResponseMsg from './messageWidget';

export default class Game {
  static gameID = localStorage.getItem('gameID') || '';

  static async start(name) {
    if (localStorage.getItem('gameID') == null) {
      const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
        method: 'POST',
        body: JSON.stringify({
          name,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const json = await response.json();
      [,,, Game.gameID] = json.result.split(' ');
      localStorage.setItem('gameID', Game.gameID);
    } else {
      this.getScoreList();
    }
  }

  static async postScore(name, score) {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${Game.gameID}/scores`, {
      method: 'POST',
      body: JSON.stringify({
        user: name,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const json = await response.json();
    showResponseMsg(json.result);
  }

  static async getScoreList() {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${Game.gameID}/scores`);
    const json = await response.json();
    ListWidget.update(json.result);
  }
}