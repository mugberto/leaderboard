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
      Game.gameID = json.result.split(':')[1].trim().split(' ')[0];
      localStorage.setItem('gameID', Game.gameID);
    }
  }

  static postScore(name, score) {
    fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${Game.gameID}/scores`, {
      method: 'POST',
      body: JSON.stringify({
        user: name,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  static getScoreList() {
    return fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${Game.gameID}/scores`);
  }
}