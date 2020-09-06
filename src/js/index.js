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
// create cards for resume page
const cardSectionForEducation = document.querySelector('div.resume_body_container_left .cardSection');
const cardSectionForExperience = document.querySelector('div.resume_body_container_right .cardSection');
console.log(cardSectionForEducation);
let cardDataForEducation = [
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

let cardDataForExperience = [
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

const createCardForEducation = (currentData) => {
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

  cardSectionForEducation.appendChild(divCard);
};

const createCardForExperience = (currentData) => {
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

  cardSectionForExperience.appendChild(divCard);
};
cardDataForEducation.forEach(createCardForEducation);
cardDataForExperience.forEach(createCardForExperience);

// create skillbar for resume page
const skillBarSectionForDesign = document.querySelector('div.resume_footer_container_left .skillbarSection');
const skillBarSectionForCoding = document.querySelector('div.resume_footer_container_right .skillbarSection');

let skillBarDataForDesign = [
  {
    title: 'Web Design',
    width: '90%',
  },
  {
    title: 'Web Design',
    width: '90%',
  },
  {
    title: 'Web Design',
    width: '90%',
  },
];

let skillBarDataForCoding = [
  {
    title: 'Web Design',
    width: '90%',
  },
  {
    title: 'Web Design',
    width: '90%',
  },
  {
    title: 'Web Design',
    width: '90%',
  },
];

const createSkillbarForDesign = (currentData) => {
  const skillBar = document.createElement('div');
  skillBar.classList.add('skillbar');

  const skillBarTitle = document.createElement('div');
  skillBarTitle.classList.add('skillbar_title');
  skillBarTitle.innerText = currentData.title;

  const skillBarContainer = document.createElement('div');
  skillBarContainer.classList.add('skillbar_container');

  const topBar = document.createElement('div');
  topBar.classList.add('topBar');
  topBar.style.width = currentData.width;

  skillBarContainer.appendChild(topBar);
  skillBar.appendChild(skillBarTitle);
  skillBar.appendChild(skillBarContainer);
  skillBarSectionForDesign.appendChild(skillBar);
};

const createSkillbarForCoding = (currentData) => {
  const skillBar = document.createElement('div');
  skillBar.classList.add('skillbar');

  const skillBarTitle = document.createElement('div');
  skillBarTitle.classList.add('skillbar_title');
  skillBarTitle.innerText = currentData.title;

  const skillBarContainer = document.createElement('div');
  skillBarContainer.classList.add('skillbar_container');

  const topBar = document.createElement('div');
  topBar.classList.add('topBar');
  topBar.style.width = currentData.width;

  skillBarContainer.appendChild(topBar);
  skillBar.appendChild(skillBarTitle);
  skillBar.appendChild(skillBarContainer);
  skillBarSectionForCoding.appendChild(skillBar);
};

skillBarDataForDesign.forEach(createSkillbarForDesign);
skillBarDataForCoding.forEach(createSkillbarForCoding);
