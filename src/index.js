import './css/style.css';
import ListWidget from './js/listWidget';
import Game from './js/game';
import setListRefresher from './js/refresh';
import form from './js/form';

const appInit = () => {
  ListWidget.init();
  Game.start('Racing Game');
  setListRefresher();
  form();
};

window.addEventListener('load', appInit);