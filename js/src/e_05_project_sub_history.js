// e_05_project_sub_history.js

// ------------------------------------------------------------------

const elBody = document.querySelector('body');
const elHeadBox = document.querySelector('#headBox');
const headerData = '../html/temp/e_project_header.html';
// header html 불러오기
fetch(headerData)
.then((importText) => { return importText.text(); })
.then((data) => {
  elHeadBox.innerHTML = data;
})
// header js 불러오기
.then(() => {
  let elScript = document.createElement('script');
  elScript.setAttribute('src', '../js/temp/e_project_header.js');
  elBody.append(elScript);
})


// historyBox 슬라이드
const setDevice = [
  {type:'mobile', size:'767', script:'../js/temp/e_project_historyBox_m_slide.js'}, // tablet과 mobile의 JS가 같아서 통합
  {type:'tablet', size:'1279', script:'../js/temp/e_project_historyBox_t_slide.js'}, // tablet과 mobile의 JS가 같아서 통합
  {type:'pc', script:'../js/temp/e_project_historyBox_lp_slide.js'}
]
const mediaSize = `screen and (max-width:${setDevice[0].size}px)`
const mediaSizeT = `screen and (min-width:768px)and (max-width:${setDevice[1].size}px)`
const mediaMatches = window.matchMedia(mediaSize);
const mediaMatchesT = window.matchMedia(mediaSizeT);
console.log(mediaMatches); 
console.log(mediaMatchesT); 

// 스크립트 삽입하는 코드 
const elScript = (data)=>{
  const elsc = document.createElement('script');
  elsc.setAttribute('src', data);
  elsc.setAttribute('class', 'navScript');
  elBody.append(elsc);
}


// 스크립트 제거하는 코드
const delScript=()=>{ // 사이즈가 변경될때 삽입되어있던 JS코드 삭제하는 함수
  const scScript=document.querySelector('.navScript');
  if(scScript){scScript.remove();}
}

// fetch(setDevice[0].script)
// .then(() => {elScript(setDevice[0].script)}) 



const MbCk = (type=mediaMatches.matches) =>{
  if(type){
    fetch(setDevice[0].script)    
    .then(() => {elScript(setDevice[0].script)}) // 모바일 사이즈 일때 모바일 js 불러오기
    .then(delScript())  //이전 JS 삭제 
  }else if(!type && mediaMatchesT.matches){
    fetch(setDevice[1].script)
    .then(() => {elScript(setDevice[1].script)})  // 모바일 사이즈랑 일치하지 않고 태블릿 js 불러오기
    .then(delScript()) //이전 JS삭제
  }else{
    fetch(setDevice[2].script)  
    .then(() => {elScript(setDevice[2].script)})  
    .then(delScript()) //이전 JS삭제 
  }

  // switch 문으로 변환
  
};  

MbCk();

mediaMatches.addEventListener('change',(e)=>{ // 변화감지 이벤트 
  MbCk(e.matches);
})

// ------------------------------------------------------------------
// footer 불러오기
const elFootBox = document.querySelector('#footBox');
const footerData = '../html/temp/e_project_footer.html';
// footer html 불러오기
fetch(footerData)
.then((importText) => {return importText.text();})
.then((data) => {
  elFootBox.innerHTML = data;
})
// footer js 불러오기
.then(() => {
  let elScript = document.createElement('script');
  elScript.setAttribute('src', '../js/temp/e_project_footer.js');
  elBody.append(elScript);
})

