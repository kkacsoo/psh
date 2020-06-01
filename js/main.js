'use strict';

const mainVisual = document.querySelector('.mainvisual');

function sectionLayout() {
    let heigtValue = window.innerHeight;
    mainVisual.style.height = `${heigtValue}px`;
    console.log(heigtValue);
    
}
sectionLayout();
addEventListener('resize', sectionLayout);