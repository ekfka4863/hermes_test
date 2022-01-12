// e_project_contentBox_02_mt_slide.js


// 버튼을 선택하여 클릭
{
  const bestWrap = document.querySelector('.best_wrap');
  const bestUl = bestWrap.querySelector('.best_inner_01');
  // const bestLi = bestUl.querySelectorAll('li');
  // const bestLiList = [].slice.call(bestLi);
  const btns = document.querySelector('.prev_next_Box');  

  let bestLiList;// 첫요소를 마지막으로 이동한 후 재배치처리를 위해 변수 별도로 지정
  const fnLiSet = ()=>{
    const bestLi = bestUl.querySelectorAll('li');
    bestLiList = [].slice.call(bestLi);
  } 
  fnLiSet();
  console.log( bestLiList )
  
  // li값 파악
  const liMargin = parseInt(window.getComputedStyle(bestLiList[1]).marginRight);
  const liWidth = bestLiList[1].clientWidth;
  const moveWidth = 300; // 300

  //다음버튼 클릭시 -> bestUl을 li크기만큼 왼쪽으로 이동!!
  const fnMoveNext = function() {
    bestUl.style.transition = 'margin 500ms ease'; // animation을 위해 transition 첨부
    bestUl.style.marginLeft = -moveWidth+'px';  // 움직인 이동치 처리
    setTimeout(()=>{  // 이동시간 후 수행
      bestUl.append(bestLiList[0]);  // 1번째요소를 마지막으로 이동
      fnLiSet();  // 순서 재정비
    bestUl.style = null; //animation수행한 기능 제거    
    }, 500)
  }

    //다음버튼 클릭시 -> bestUl을 li크기만큼 왼쪽으로 이동!!
    const fnMovePrev = function() {
      bestUl.style.transition = 'margin 500ms ease'; // animation을 위해 transition 첨부
      bestUl.style.marginLeft = moveWidth+'px';  // 움직인 이동치 처리
      setTimeout(()=>{  // 이동시간 후 수행
        bestUl.prepend(bestLiList[bestLiList.length-1]);  // 1번째요소를 마지막으로 이동
        fnLiSet();  // 순서 재정비
      bestUl.style = null; //animation수행한 기능 제거    
      }, 500)
    }

    let move;
    const fnAutoMove = () => {
      move = setInterval(()=>{
        fnMoveNext();
      }, 5000);
    }
    const fnPause =() => {
      clearInterval(move);
    }
    fnAutoMove();

  // event
  btns.addEventListener('click', (e)=>{
    e.preventDefault();
    const targetCk = e.target.classList.contains('next_btn'); // 선택요소가 next_btns인제 체크
    (targetCk) ? fnMoveNext() : fnMovePrev();
  })

  bestWrap.addEventListener('mouseenter', fnPause);
  bestWrap.addEventListener('mouseleave', fnAutoMove);
}

