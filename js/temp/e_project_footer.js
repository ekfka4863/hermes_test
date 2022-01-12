// // e_project_footer.js

// fnb 모든 사이즈 적용
const elFnbBox = document.querySelector('.fnb_box');
const elFnbChildren = elFnbBox.children;  // .fnb_box의 자식
const elFnbBtn = elFnbBox.querySelectorAll('.btn_part');
const elFnbChildList = [].slice.call(elFnbChildren);
const elFnbList = [].slice.call(elFnbBtn);

const fnCloseFnbList = (n)=>{
  elFnbChildList.forEach( (el,idx) => {
    // 자식의 여러 순서중에서 해당사항이 없는것을 찾아 제외하고 사라지게
    if(n !== idx){
      const ul = el.querySelector('ul')
      ul.classList.remove('on')
    }
  })
}

elFnbList.forEach( (el,i)=>{ // forEach는 각각 클릭 될수 있게 만드는 것
  el.addEventListener('click', e=>{
    e.preventDefault();
    let ul = el.nextElementSibling; // ul 바로 뒤에 오는 애들을 호출 -> li
    ul.classList.toggle('on');

    // 선택한 요소의 순번을 파악 (i)
    // ul을 담고있는 다른 목록처리된 함수에서 해당요소의 순번을 제외하고 class를 제거
    fnCloseFnbList(i);
  });
});

// ------------------------------------------------------------------

