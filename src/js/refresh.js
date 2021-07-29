import Game from "./game";

const setListRefresher = (scoreListWigdet) => {
  let btn = document.getElementById('refresh-btn');
  btn.addEventListener('click', () => {
    Game.getScoreList().then((list) => scoreListWigdet.update(list));
  });
}


export default setListRefresher;