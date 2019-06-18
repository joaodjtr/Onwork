function init() {
  var didScroll = false;
  var lastScrollPosition;
  var actualScrollPosition;
  var landingPosition = document.getElementById("landing").getBoundingClientRect().bottom + 300;
  var whoWeAreScroll = document.getElementById("who-we-are").getBoundingClientRect().top - 100;
  var teamScroll = document.getElementById("team").getBoundingClientRect().top - 100;
  var worksScroll = document.getElementById("works").getBoundingClientRect().top - 100;
  var contactScroll = document.getElementById("contact").getBoundingClientRect().top - 400; /* FUTURAMENTE EDITÁVEL*/;
  var links = document.getElementsByClassName("link-menu");
  var trueActualScrollPosition;
  var header = document.getElementById("fixed-header");

  window.addEventListener("scroll", function() {
    trueActualScrollPosition = window.scrollY;
    checksPositionSection(trueActualScrollPosition);
    var x = trueActualScrollPosition - landingPosition;
    this.console.log(x);
    if(x > -300){
      if (!didScroll) {
        didScroll = true;
        actualScrollPosition = window.scrollY;
      } else {
        didScroll = false;
        lastScrollPosition = window.scrollY;
        if (lastScrollPosition < actualScrollPosition) {
          header.style.top = 0;
          header.style.height = "100px";
        } else {
          header.style.top = 0;
          header.style.height = "75px";
        }
      }
    }else if(x < -500){
      header.style.top = "-130px";
    }
    
  });

  for(var i = 0; i < links.length; i++){
    links[i].addEventListener("click", function() {
      resetStyleLinks();
      links[i-1].style.color = "#1ab7ea";
      
    });
  }

  function checksPositionSection(scroll){
    if(scroll > contactScroll){
      resetStyleLinks();
      links[3].style.color = "#1ab7ea";
    }else if(scroll > worksScroll){
      resetStyleLinks();
      links[2].style.color = "#1ab7ea";
    }else if(scroll > teamScroll){
      resetStyleLinks();
      links[1].style.color = "#1ab7ea";
    }else if(scroll > whoWeAreScroll){
      resetStyleLinks();
      links[0].style.color = "#1ab7ea";
    }
  }

  function resetStyleLinks() {
    for(var i = 0; i < links.length; i++){
      links[i].style.color = "#103f4e";
    }
  }
}


