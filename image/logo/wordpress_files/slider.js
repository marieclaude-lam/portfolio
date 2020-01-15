function startSlider(){for(var i=1;i<=8;i++){var a=document.createElement("a");a.setAttribute('href','#');a.setAttribute('data-index',i);sliderControl.appendChild(a)}
sliderLinks=document.querySelectorAll("#slider-control a");slide();sliderLinks.forEach(function(link){link.addEventListener("click",function(evt){evt.preventDefault();clearInterval(slider.chronoID);indexImage=link.getAttribute("data-index");slide()})});var positionXInitial;slider.addEventListener("touchstart",function(e){positionXInitial=e.touches[0].clientX});slider.addEventListener("touchmove",function(e){e.preventDefault()});slider.addEventListener("touchend",function(e){clearInterval(slider.chronoID);if(positionXInitial>e.changedTouches[0].clientX){slide()}
else if(positionXInitial<e.changedTouches[0].clientX){indexImage=indexImage-2;slide()}})}
function slide(){if(indexImage==9){indexImage=1}
if(indexImage==0){indexImage=8}
if(slider.style.animationName=="slider1"){slider.style.animationName="slider2"}
else{slider.style.animationName="slider1"}
slider.style.backgroundImage="url('www/css/slider/"+indexImage+".jpg')";slideLinks();indexImage++;slider.chronoID=window.setTimeout(slide,8000)}
function slideLinks(){sliderLinks.forEach(function(link){if(link.getAttribute("data-index")==indexImage){link.classList.add("blue")}
else{link.classList.remove("blue")}})}
function itemsGestion(){items.forEach(function(item){item.hasBeenClicked=!1;item.classList.add("js");var itemLink=item.querySelector("a");item.addEventListener("click",function(){item.style.opacity="1";item.hasBeenClicked=!0});itemLink.addEventListener("click",function(evt){if(item.style.opacity!=1){evt.preventDefault()}});item.addEventListener("mouseleave",function(){if(item.hasBeenClicked){item.style.opacity="0";item.hasBeenClicked=!1;console.log("ok")}});document.addEventListener("touchmove",function(){if(item.hasBeenClicked){item.style.opacity="0";item.hasBeenClicked=!1;console.log("ok")}})})}