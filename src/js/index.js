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

const cardSection = document.querySelector('div.cardSection');

let cardData = [
  {
    title: 'Melbourne University',
    companyYear: '2020',
    companyName: 'Apple Inc',
    Description: 'Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.',
  },

  {
    title: 'Melbourne University',
    companyYear: '2020',
    companyName: 'Apple Inc',
    Description: 'Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.',
  },

  {
    title: 'Melbourne University',
    companyYear: '2020',
    companyName: 'Apple Inc',
    Description: 'Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.',
  },
];

const createCard = (currentData) => {
  const divCard = document.createElement('div');
  divCard.classList.add('card');

  const divCardTitle = document.createElement('div');
  divCardTitle.classList.add('card_title');
  divCardTitle.innerText = currentData.title;
  console.log(divCardTitle);

  const divCardCompany = document.createElement('div');
  divCardCompany.classList.add('card_company');

  const spanCompanyYear = document.createElement('span');
  spanCompanyYear.classList.add('companyYear');
  spanCompanyYear.innerText = currentData.companyYear;

  const spanCompanyName = document.createElement('span');
  spanCompanyName.classList.add('companyName');
  spanCompanyName.innerText = currentData.companyName;

  const p = document.createElement('p');
  p.innerText = currentData.Description;

  divCardCompany.appendChild(spanCompanyYear);
  divCardCompany.appendChild(spanCompanyName);

  divCard.appendChild(divCardTitle);
  divCard.appendChild(divCardCompany);
  divCard.appendChild(p);

  cardSection.appendChild(divCard);
};

cardData.forEach(createCard);
