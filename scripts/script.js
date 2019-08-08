var inputs = document.getElementsByClassName("input-form");
var labels = document.getElementsByClassName("label-form");
var btn = document.getElementById("button-form");
function init() {
  window.addEventListener("scroll", () => {
    verifiesHeader();
    changesHeaderLinks()
  });

  labelsForm()
}

function changesHeaderLinks () {
  sections = document.getElementsByClassName('section')
  links = document.getElementsByClassName('link-header')
  for(i = 0; i < sections.length; i++){
    sections[i].positionY = sections[i].offsetTop;
    sections[3].positionY -= 500
    if(window.scrollY > sections[i].positionY){
      for(j = 0; j < links.length; j++){
        links[j].style.fontWeight = "normal";
        if(j == i) links[j].style.fontWeight = "bold";       
      }
    }
  }
  
  for(i = 0; i < sections.length; i++){
    // if(window.scrollY > sections[0].positionY) console.log("olá")
    // if(window.scrollY > sections[1].positionY) console.log("td bem")
    // if(window.scrollY > sections[2].positionY) console.log("tchau")
    // if(window.scrollY > sections[3].positionY) console.log(sections[0].positionY)
  }
}

function verifiesHeader() {
  elementDefault = document.querySelector("#landing-header");
  elementDefault.positionY = document.querySelector("#landing").offsetTop;
  header = document.querySelector("#header");
  if (window.scrollY > elementDefault.positionY) header.style.top = 0;
  if (window.scrollY < elementDefault.positionY) header.style.top = "-100%";
}

function labelsForm(){
  for (i = 0; i < inputs.length; i++) {
    inputs[i].orderNumber = i;
    inputs[i].addEventListener("input", e => {
      e = e.target;
      if (e.value != "") {
        labels[e.orderNumber].style.color = "rgba(0,0,0,0.5)";
      } else {
        labels[e.orderNumber].style.color = "black";
      }
      checksForm();
    });
  }
}

function checksForm() {
  var c = true;
  for (i = 0; i < inputs.length; i++) {
    if (inputs[i].value == "") c = false;
  }
  if (c) btn.disabled = false;
  if (!c) btn.disabled = true;
}
