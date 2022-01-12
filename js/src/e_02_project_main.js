// e_02_project_main.js
window.alert('교육목적으로 제작된 웹페이지입니다.')


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

// contentBox_02 슬라이드 - mobile, tablet

const setDevice = [
  {type:'mobile', size:'1279', script:'../js/temp/e_project_contentBox_02_mt_slide.js'}, // tablet과 mobile의 JS가 같아서 통합
  {type:'pc', script:'../js/temp/e_project_contentBox_02_lp_slide.js'}
]
const mediaSize = `screen and (max-width:${setDevice[0].size}px)`
const mediaMatches = window.matchMedia(mediaSize);
console.log(mediaMatches); 


const elScript = (data)=>{
  const elsc = document.createElement('script');
  elsc.setAttribute('src', data);
  elsc.setAttribute('class', 'navScript');
  elBody.append(elsc);
}


const delScript=()=>{ // 사이즈가 변경될때 삽입되어있던 JS코드 삭제하는 함수
  const scScript=document.querySelector('.navScript');
  if(scScript){scScript.remove();}
}

// fetch(setDevice[0].script)
// .then(() => {elScript(setDevice[0].script)}) 


const MbCk = (type=mediaMatches.matches)=>{
  if(type){
    fetch(setDevice[0].script)    
    .then(() => {elScript(setDevice[0].script)}) //1280 이하의 PX에서 mobile JS삽입
    .then(delScript())  //이전 JS 삭제 
  }else{
    fetch(setDevice[1].script)    
    .then(() => {elScript(setDevice[1].script)})  //1280 초과의 px에서 lp JS삽입
    .then(delScript()) //이전 JS삭제
  }
};
MbCk();

mediaMatches.addEventListener('change',(e)=>{ // 변화감지 이벤트 
  MbCk(e.matches);
})





// .then(() => {
//   let elScript = document.createElement('script');
//   elScript.setAttribute('src', '../js/temp/e_project_contentBox_02_mt_slide.js');
//   elBody.append(elScript);
// })
// // contentBox_02 슬라이드 - laptop, pc
// .then(() => {
//   let elScript = document.createElement('script');
//   elScript.setAttribute('src', '../js/temp/e_project_contentBox_02_lp_slide.js');
//   elBody.append(elScript);
// })

// ------------------------------------------------------------------
















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












