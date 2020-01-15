'use strict';function onScrollNavFix(){if(window.scrollY>=about.offsetTop-80&&!nav.isFixed){nav.classList.add("fixed");nav.isFixed=!0}
if(window.scrollY==0&&nav.isFixed){nav.classList.remove("fixed");nav.isFixed=!1}
if(nav.isFixed){header.style.paddingTop=nav.offsetHeight+"px"}
else{header.style.paddingTop=0}}
function onScrollNavlinkAnimation(){sectionsOffsetTop=[header.offsetTop,about.offsetTop,services.offsetTop,parcours.offsetTop,portfolio.offsetTop,contact.offsetTop,document.body.offsetHeight];for(var i=0;i<sectionsOffsetTop.length;i++){if(sectionsOffsetTop[i]-nav.offsetHeight<window.scrollY&&window.scrollY<=sectionsOffsetTop[i+1]){liens[i].classList.add("hover");if(i>0){liens[i-1].classList.remove("hover")}
if(i<liens.length-1){liens[i+1].classList.remove("hover")}}}}
function openNav(){menu.style.backgroundColor="#05B3D8";menu.style.color="white";navBar.classList.add("slide-down");navBar.classList.remove("slide-up")}
function closeNav(){menu.style.backgroundColor="inherit";menu.style.color="inherit";navBar.classList.remove("slide-down");navBar.classList.add("slide-up");menu.hasClick=!1}
function menuGestion(evt){evt.preventDefault();if(menu.hasClick){closeNav()}
else{menu.hasClick=!0;openNav();chevron.addEventListener("click",function(evt){evt.preventDefault();closeNav()});liens.forEach(function(lien){lien.addEventListener("click",function(evt){closeNav()})})}}