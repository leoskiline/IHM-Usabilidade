function collapse() {
  var x = document.getElementById("menu");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}

function hideButton()
{
  document.getElementById("btnScrollUp").classList.remove("d-block")
  document.getElementById("btnScrollUp").classList.add("d-none")
}

function showHideButton()
{
  if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) 
  { 
    document.getElementById("btnScrollUp").classList.remove("d-none")
    document.getElementById("btnScrollUp").classList.add("d-block")
  } 
  else { 
    document.getElementById("btnScrollUp").classList.remove("d-block")
    document.getElementById("btnScrollUp").classList.add("d-none")
  }
}

var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x

if (document.attachEvent) //if IE (and Opera depending on user setting)
    document.attachEvent("on"+mousewheelevt, function(e){
      showHideButton();
    })
else if (document.addEventListener) //WC3 browsers
    document.addEventListener(mousewheelevt, function(e){
      showHideButton();
    }, false)
