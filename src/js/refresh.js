import ListWidget from "./listWidget";

const setListRefresher = (scoreListWigdet) => {
  const btn = document.getElementById('refresh-btn');
  btn.addEventListener('click', () => {
    ListWidget.update();
  });
};

export default setListRefresher;