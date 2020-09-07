'use strict';

let menuButton;
let sidebarMenu;
let cardSectionForEducation;
let cardSectionForExperience;
let skillBarSectionForDesign;
let skillBarSectionForCoding;
let mainWindow;
let headerDiv;

const data = {
  education: {
    target: undefined,
    data: [
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
    ],
  },
  experience: {
    target: undefined,
    data: [
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
    ],
  },
};

const skillBarDataForDesign = [
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

const skillBarDataForCoding = [
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

const cardDataForEducation = [
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

const cardDataForExperience = [
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

const init = () => {
  menuButton = document.querySelector('svg#menuButton');
  sidebarMenu = document.querySelector('div#sidebarMenu');
  data.education.target = document.querySelector('div.resume_body_container_left .cardSection');
  data.experience.target = document.querySelector('div.resume_body_container_right .cardSection');
  skillBarSectionForDesign = document.querySelector('div.resume_footer_container_left .skillbarSection');
  skillBarSectionForCoding = document.querySelector('div.resume_footer_container_right .skillbarSection');
  mainWindow = document.querySelector('main');
  headerDiv = document.querySelector('header');
};

const handleMenuButtonClick = () => {
  sidebarMenu.classList.toggle('active');
};

const handleWindowResize = () => {
  sidebarMenu.classList.remove('active');
};

const addOnScrollClassForHeader = (() => {
  let isScrollDownBefore = false;

  return () => {
    if (mainWindow.scrollTop === 0) {
      headerDiv.classList.remove('onScroll');
      isScrollDownBefore = false;
    }

    if (mainWindow.scrollTop > 0 && !isScrollDownBefore) {
      headerDiv.classList.add('onScroll');
      isScrollDownBefore = true;
    }
  };
})();

const addListeners = () => {
  menuButton.onclick = handleMenuButtonClick;
  window.onresize = handleWindowResize;
  mainWindow.onscroll = addOnScrollClassForHeader;
};

// create cards for resume page
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

  return divCard;
};

const insertCardToPage = (card, target) => {
  target.appendChild(card);
};

// create skillbar for resume page

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

const paintCards = (data) => {
  const categories = Object.keys(data);
  categories.forEach((category) => {
    const target = data[category].target;
    const cardsData = data[category].data;
    cardsData.forEach((currentData) => {
      const newCard = createCard(currentData);
      insertCardToPage(newCard, target);
    });
  });
};

window.onload = () => {
  //init
  init();
  //add liseners
  addListeners();

  paintCards(data);

  skillBarDataForDesign.forEach(createSkillbarForDesign);
  skillBarDataForCoding.forEach(createSkillbarForCoding);

  // TODO
  //paintSkillBar(data2);
};
