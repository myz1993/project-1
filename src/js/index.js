'use strict';

let menuButton;
let sidebarMenu;

const init = () => {
  menuButton = document.querySelector('svg#menuButton');
  sidebarMenu = document.querySelector('div#sidebarMenu');
};

const handleMenuButtonClick = () => {
  sidebarMenu.classList.toggle('active');
};

const handleWindowResize = () => {
  sidebarMenu.classList.remove('active');
};

const addListeners = () => {
  menuButton.onclick = handleMenuButtonClick;
  window.onresize = handleWindowResize;
};

window.onload = () => {
  //init
  init();
  //add liseners
  addListeners();
};
