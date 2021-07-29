import './css/style.css';
import ListWidget from './js/listWidget';
import Game from './js/game';
import setListRefresher from './js/refresh';
import form from './js/form';

const appInit = () => {
  const listWigdet = new ListWidget();
  Game.start('Racing Game');
  listWigdet.update();
  setListRefresher(listWigdet);
  form();
};

window.addEventListener('load', appInit);