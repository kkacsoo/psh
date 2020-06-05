'use strict';

// 리사이징 함수
const mainVisual = document.querySelector('.mainvisual');
const subVisual = document.querySelector('.subvisual');
const backBanner = document.querySelector('.backbanner');
const subVi = document.querySelector('.subvi');

function sectionLayout() {
    let heigtValue = window.innerHeight;
    let subHeigtValue = window.innerHeight - (window.innerHeight/10*3);
    let backHeigtvalue = window.innerHeight;
    let subviHeigtvalue = window.innerHeight - (window.innerHeight/10*3);
    mainVisual.style.height = `${heigtValue}px`;
    subVisual.style.height = `${subHeigtValue}px`;
    backBanner.style.height = `${backHeigtvalue}px`;
    subVi.style.height = `${subviHeigtvalue}px`;
}
sectionLayout();
addEventListener('resize', sectionLayout);

// 메인비주얼 애니메이션 함수
const visualTypo = document.querySelector('.mainvisual__typo');
visualTypo.classList.add('on');
// function clickHandler(){
//     visualTypo.classList.toggle('on');
// }
// addEventListener('click', clickHandler);

// 서브비주얼01 애니메이션 함수
const subElem = document.querySelector('.subvisual');
const subbannerElem = document.querySelector('.subvisual__subbanner');
const subbannerTypo01Elem = document.querySelector('.subvisual__typo');
const subbannerElem02 = document.querySelector('.subvi__subbanner');

function scrollHandler(){
    // let posY = window.pageYOffset; 
    // // console.log(subElem.offsetTop);
    // // console.log(subElem.getBoundingClientRect().top);    
    // let a = 1 - posY/subElem.offsetTop;
    console.log(subElem.getBoundingClientRect().top);

    if(subElem.getBoundingClientRect().top <= 86){
        subbannerElem.classList.add('on');
        subbannerElem02.classList.add('on');
        subbannerTypo01Elem.classList.add('on');
    }else{
        subbannerElem.classList.remove('on');
        subbannerElem02.classList.remove('on');

    }
}

addEventListener('scroll', scrollHandler);

/*top 버튼*/
const topBt = document.querySelector('.top__bt');
function topBtHandler(event){
    const target = event.currentTarget;
    const link = target.dataset.link;

    const scrollTo = document.querySelector(link);
      scrollTo.scrollIntoView({ behavior: "smooth" });

}
topBt.addEventListener('click',topBtHandler);



const globalNav = document.querySelector('.nav__global');
function navBtHandler(e){
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
      } 

      const scrollTo = document.querySelector(link);
      scrollTo.scrollIntoView({ behavior: "smooth" });      
}
globalNav.addEventListener('click', navBtHandler);
