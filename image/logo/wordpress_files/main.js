'use strict';var nav;var about;var header;var services;var parcours;var portfolio;var contact;var menu;var navBar;var chevron;var slider;var sliderControl;var sliderLinks;var items;var form;var nom;var email;var sujet;var message;var robot;var inputs;var errorsDiv;var nbOf;var tout;var development;var integration;var portfolioDivs;var indexImage=1;var sectionsOffsetTop=[];var liens;var fadeInElements;var errorList;document.addEventListener("DOMContentLoaded",function(){nav=document.querySelector("nav");header=document.querySelector("header");about=document.querySelector(".about");services=document.querySelector(".services");parcours=document.querySelector(".parcours");portfolio=document.querySelector(".portfolio");contact=document.querySelector(".contact");liens=document.querySelectorAll(".navbar a");menu=document.querySelector("#menu");navBar=document.querySelector(".navbar");chevron=document.querySelector(".chevron");fadeInElements=document.querySelectorAll(".animate");slider=document.querySelector("#slider-content");sliderControl=document.querySelector("#slider-control");items=document.querySelectorAll(".item");form=document.querySelector("form");errorsDiv=document.querySelector("#errors");email=document.querySelector("#email");nom=document.querySelector("#name");sujet=document.querySelector("#sujet");message=document.querySelector("#message");robot=document.querySelector("#robot");nbOf=document.querySelectorAll(".nbOf");tout=document.querySelector("#tout");development=document.querySelector("#development");integration=document.querySelector("#integration");portfolioDivs=document.querySelectorAll(".portfolio section div");menu.hasClick=!1;nav.isFixed=!1;menu.style.visibility="visible";portfolioGestion();hide();animate();startSlider();numbersAnimation();if(window.matchMedia("(max-width:900px)").matches){itemsGestion()}
window.onscroll=function(){onScrollNavFix();onScrollNavlinkAnimation();animate()};window.onresize=function(){onScrollNavFix();onScrollNavlinkAnimation();animate()};menu.addEventListener("click",menuGestion);$(".navbar a").on("click",scrollToID);$(".home a.link").on("click",scrollToID);$(".about a.js").on("click",scrollToID);form.addEventListener("submit",formControl)})