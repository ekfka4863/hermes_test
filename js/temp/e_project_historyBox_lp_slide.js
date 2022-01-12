// e_project_historyBox_tlp_slide.js


{
  const historyPart = document.querySelector('.history_part');
  const historyUl = historyPart.querySelector('.history_area');
  // const historyLi = historyUl.querySelectorAll('li');
  // const historyLiList = [].slice.call(historyLi);
  const indicators = document.querySelector('.indicatorBox'); 


  let historyLiList;
  const fnLi = () => {
    const historyLi = historyUl.querySelectorAll('li');
    historyLiList = [].slice.call(historyLi);
  }
  fnLi();
  console.log(historyLiList);

// li값 파악
  // const elLiMargin = parseInt(window.getComputedStyle(historyLiList[1]).marginLeft);
  const elLiWidth = historyLiList[1].clientWidth;
  const elMoveWidth = 20;

// 다음 버튼 클릭시 li 크기만큼 왼쪽으로 이동
  const fnNext = function() {
    historyUl.style.transition = 'margin 900ms ease'; 
    historyUl.style.marginLeft = -elMoveWidth+'%';
    setTimeout(()=>{
      historyUl.append(historyLiList[0]);
      fnLi();
    historyUl.style = null;
    }, 1500) 
  }

  const fnPrev = function() {
    historyUl.style.transition = 'margin 900ms ease';
    historyUl.style.marginLeft = elMoveWidth+'%';
    setTimeout(()=>{
      historyUl.append(historyLiList[historyLiList.length-1]);
      fnLi();
    historyUl.style = null;
    }, 1000)
  }

  let remove;
  const fnAuto = () => {
    remove = setInterval(()=>{
      fnNext();
    }, 3000);
  }
  const fnStop = () => {
    clearInterval(remove);
  }
  fnAuto();

  // 이벤트

  indicators.addEventListener('click', (e)=>{
    e.preventDefault();
    const targetCheck = e.target.classList.contains('.indicator02');
    (targetCheck) ? fnNext() : fnPrev();
  })

  historyPart.addEventListener('mouseenter', fnStop);
  historyPart.addEventListener('mouseleave', fnAuto);


}

// 그럼 뭐가 달라요?li사이즈도 100%로 주면 
// 그러면 그거 넘어갈때까지  스무스하게 넘어가지 
//아니면 배열화 해서 갯수로 가던가 음..
//일단 쉬운거는 100%로 해봐 그렇게 하면 굳이 사이즈별로 나눌 필요 없는거죠
// 그치 모바일도 100% 니까 ㅋㅋ 넵 그건 그럼 해볼게요 이따가!