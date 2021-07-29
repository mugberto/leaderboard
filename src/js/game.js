export default class Game {
  static gameID = localStorage.getItem('gameID') || '';

  static start(name) {
    if (localStorage.getItem('gameID') == null) {
      fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
          method: 'POST',
          body: JSON.stringify({
            name,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then((response) => response.json())
        .then((json) => Game.setGameID(json));
    }
  }

  static setGameID(json) {
    Game.gameID = json.result.split(':')[1].trim().split(' ')[0];
    localStorage.setItem('gameID', Game.gameID);
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
    return fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${Game.gameID}/scores`)
      .then((response) => response.json())
      .then((json) => json.result );
  }
}