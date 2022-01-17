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
// const mediaSize01 = `screen and (min-width:768px)and (max-width:${setDevice[1].size}px)`
const mediaMatches = window.matchMedia(mediaSize);
console.log(mediaMatches); 

// 모바일때랑 태블릿, 랩탑피씨 이렇게 나눠놨는데 아까 만져보다가 모바일까진 제대로 들어가는데 
// 태블릿은 t로 들어가야하는데 lp로 들어가더라고요 근데 지금 또 세개 다 보임..
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
  }else if(!type){
    fetch(setDevice[1].script)
    .then(() => {elScript(setDevice[1].script)})  //1280 초과의 px에서 lp JS삽입
    .then(delScript()) //이전 JS삭제
  }else{
    fetch(setDevice[2].script)  
    .then(() => {elScript(setDevice[2].script)})  //1280 초과의 px에서 lp JS삽입
    .then(delScript()) //이전 JS삭제 //요기만 하면될꺼같은데 흠....흐음..
    //아마 이건  switch문으로 바꾸는 게 편할꺼야 음.. 우선 점심 먹고 옵시다요
  }
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

