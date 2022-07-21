let adddressbar = document.getElementById("header-address");
let headerAddress_row = document.getElementById("address");
let sidenav = document.getElementById("sidenav");
let headerul = document.getElementById("ul");
let appointButton = document.getElementById('appointment-button');
let Ulcont = document.getElementById("ul-cont");
let mainHeader = document.getElementById('main-header')
let MenuButton = document.getElementById("menuButtonCont");
let callButtonCont = document.getElementById("callButtonCont");
let closeButton = document.getElementById("closeButton");

let navButton = document.createElement("i");
navButton.style.fontSize = "26px"
navButton.style.color = "gray"
let callButton = document.createElement("i");
callButton.style.fontSize = "23px"
callButton.style.color = "gray"

let ped_bt = document.getElementById("Pediatrics");
let hem_bt = document.getElementById("Hematology");
let mri = document.getElementById("mri");
let diag = document.getElementById("diag");



let button_heading = document.getElementById("button_heading");
let button_images = document.getElementById("button_images");

let flag = false;

window.addEventListener('DOMContentLoaded',()=>{
    console.log(window.innerWidth);
    if(window.innerWidth<=1200){
        headerAddress_row.removeChild(adddressbar);
        Ulcont.removeChild(headerul);
        mainHeader.removeChild(appointButton);
        navButton.classList = "bi bi-list";
        MenuButton.appendChild(navButton);
        callButton.classList = "bi bi-telephone-fill";
        callButtonCont.appendChild(callButton);
    }else{
        headerAddress_row.appendChild(adddressbar);
        Ulcont.appendChild(headerul)
        mainHeader.appendChild(appointButton)
        navButton.classList = ""
        MenuButton.removeChild(navButton)
        callButtonCont.removeChild(callButton)
    }
})

window.addEventListener("resize",()=>{
    console.log(window.innerWidth);
    if(window.innerWidth<=1200){
        headerAddress_row.removeChild(adddressbar);
        Ulcont.removeChild(headerul);
        mainHeader.removeChild(appointButton);
        navButton.classList = "bi bi-list";
        MenuButton.appendChild(navButton);
        callButton.classList = "bi bi-telephone-fill";
        callButtonCont.appendChild(callButton);
    }else{
        headerAddress_row.appendChild(adddressbar);
        Ulcont.appendChild(headerul)
        mainHeader.appendChild(appointButton)
        navButton.classList = ""
        MenuButton.removeChild(navButton)
        callButtonCont.removeChild(callButton)
    }
})

window.addEventListener('load',()=>{
    console.log(window.innerWidth);
    if(window.innerWidth<=1200){
        headerAddress_row.removeChild(adddressbar);
        Ulcont.removeChild(headerul);
        mainHeader.removeChild(appointButton);
        navButton.classList = "bi bi-list";
        MenuButton.appendChild(navButton);
        callButton.classList = "bi bi-telephone-fill";
        callButtonCont.appendChild(callButton);
    }else{
        headerAddress_row.appendChild(adddressbar);
        Ulcont.appendChild(headerul)
        mainHeader.appendChild(appointButton)
        navButton.classList = ""
        MenuButton.removeChild(navButton)
        callButtonCont.removeChild(callButton)
    }
})

MenuButton.addEventListener("click",()=>{
    sidenav.style.width = "270px";
})
closeButton.addEventListener('click',()=>{
    sidenav.style.width = "0px";
})

ped_bt.addEventListener("click",()=>{
    button_images.setAttribute("src","./assets/pedButico.jpg")
    ped_bt.classList.add("active_but")
    hem_bt.classList.remove("active_but")
    mri.classList.remove("active_but")
    diag.classList.remove("active_but")
    button_heading.textContent = "Pediatrics"
})
hem_bt.addEventListener("click",()=>{

    button_images.setAttribute("src","./assets/HematologyICO.jpg")
    hem_bt.classList.add("active_but")
    ped_bt.classList.remove("active_but")
    mri.classList.remove("active_but")
    diag.classList.remove("active_but")
    button_heading.textContent = "Hematology"

})
mri.addEventListener("click",()=>{
    button_images.setAttribute("src","./assets/MRIICO.jpg")
    hem_bt.classList.remove("active_but")
    ped_bt.classList.remove("active_but")
    mri.classList.add("active_but")
    diag.classList.remove("active_but")
    button_heading.textContent = "MRI"


})
diag.addEventListener("click",()=>{
    button_images.setAttribute("src","./assets/DIAGICO.jpg")
    hem_bt.classList.remove("active_but")
    ped_bt.classList.remove("active_but")
    mri.classList.remove("active_but")
    diag.classList.add("active_but")
    button_heading.textContent = "X-Ray DIAGNOSTICS"

})

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
