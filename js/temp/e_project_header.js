// e_project_header.js


// mobile 햄버거 메뉴
const elNavInner01 = document.querySelector('.nav_inner01');
const elMenuBtnPart = elNavInner01.querySelector('.menu_btn_part');
const elMenuBtn = elMenuBtnPart.querySelector('.menu_btn');
const elMenuBtnInner = elMenuBtnPart.querySelector('.menu_btn_inner');

elMenuBtn.addEventListener('click', e => {
  e.preventDefault();
  // let check = elMenuBtnInner.style.display === 'none';
  let check = elMenuBtnInner.classList.contains('on');
  (check) ? elMenuBtnInner.classList.remove('on') : elMenuBtnInner.classList.add('on');
  // elMenuBtnInner.classList.toggle('on');
});

// tablet~ 햄버거 메뉴
const elNavInner03 = document.querySelector('.nav_inner03');
const elMenutBtnPart03 = elNavInner03.querySelector('.menu_btn_part');
const elMenuBtn03 = elMenutBtnPart03.querySelector('.menu_btn');
const elMenuBtnInner03 = elMenutBtnPart03.querySelector('.menu_btn_inner');

elMenuBtn03.addEventListener('click', e => {
  e.preventDefault();
  // let check = elMenuBtnInner.style.display === 'none';
  let check = elMenuBtnInner03.classList.contains('on');
  (check) ? elMenuBtnInner03.classList.remove('on') : elMenuBtnInner03.classList.add('on');
  // elMenuBtnInner.classList.toggle('on');
});
// ------------------------------------------------------------------


// ------------------------------------------------------------------
// mobile 검색창
// const elNavInner01 = document.querySelector('.nav_inner01');
const elSearchBtnPart = document.querySelector('.search_btn_part');
const elSearchBtn = elSearchBtnPart.querySelector('.search_btn');
const elSearchTextArea = elSearchBtnPart.querySelector('.search_text_area');
const elSearchTextInner = elSearchTextArea.querySelector('.search_text_inner');

elSearchBtn.addEventListener('click', e => {
  e.preventDefault();
  let check = elSearchTextArea.classList.contains('on');
  (check) ? elSearchTextArea.classList.remove('on') : elSearchTextArea.classList.add('on');
});

// ------------------------------------------------------------------
// 언어 선택
//navinner2 선택, language part 선택, language_bt선택 ul 선택
const elNavInner02 = document.querySelector('.nav_inner02');
const elLanPart = elNavInner02.querySelector('.language_part');
const elLanBtn = elLanPart.querySelector('.language_btn');
const elUl = elLanPart.querySelector('ul');

elLanBtn.addEventListener('click', e => {
  e.preventDefault();
  let check = elUl.classList.contains('on');
  (check) ? elUl.classList.remove('on') : elUl.classList.add('on');
});

// ------------------------------------------------------------------

// gnb 고정
const elGnb = document.querySelector('.gnb');

const OPTION_FIX = 'fix';
const offsetCheck = elGnb.offsetTop;
// console.log(offsetCheck);

window.addEventListener('scroll', e => {
  const target = parseInt(e.currentTarget.scrollY);
  const gnbClass = elGnb.classList;
  (target >= offsetCheck) ? gnbClass.add(OPTION_FIX) : gnbClass.remove(OPTION_FIX);
});


