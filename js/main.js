'use strict';

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
    console.log(heigtValue);
}
sectionLayout();
addEventListener('resize', sectionLayout);
