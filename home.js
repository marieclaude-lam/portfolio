window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").style.padding = "10px";
    document.getElementById("logo").style.fontSize = "5rem";
  } else {
    document.getElementById("navbar").style.padding = "0";
    document.getElementById("logo").style.fontSize = "50px";
  }
}