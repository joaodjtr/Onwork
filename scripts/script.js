var inputs = document.getElementsByClassName("input-form");
var labels = document.getElementsByClassName("label-form");
var btn = document.getElementById("button-form");
var elementDefault = document.querySelector("#landing-header");
elementDefault.positionY = document.querySelector("#landing").offsetTop;
var header = document.querySelector("#header");
var stateMenu = true
var mobileMode = true
function init() {
  if(mobileMode){
    header.style.top = 0;
  } 
  window.addEventListener("scroll", () => {
    if(mobileMode == false) verifiesHeader();
    changesHeaderLinks()
  });
  labelsForm()
  addClickMenu("nav-header-mobile")
  addClickMenu("mobile-link")
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
}

function verifiesHeader() {
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

function addClickMenu(e){
  e = document.getElementsByClassName(e)
  for(i=0;i<e.length;i++){
    e[i].addEventListener("click", ()=>{
      changeMenu(stateMenu)
    })
  }
}

function changeMenu(state){
  menu = document.getElementsByClassName("overlay-menu")[0]
  if(state){
    menu.style.right = 0
    menu.style.opacity = 1
    stateMenu = false
  }else{
    menu.style.opacity = 0
    setTimeout(()=>{
      menu.style.right = "-100%"
    }, 300)
    stateMenu = true
  }
}