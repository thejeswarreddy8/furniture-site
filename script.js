"use strict";
var click = document.getElementById("main-background");
var sidedescription = document.getElementById("side-description");
var sidedescription1 = document.getElementById("side-description1");
var sidedescription2 = document.getElementById("side-description2");
function changeimage(){
    var imageafter = "images/desktop-image-hero-2.jpg";
    click.src = imageafter;
    sidedescription.style.display = "none";
    sidedescription1.style.display = "block";
    sidedescription2.style.display = "none";

}
function changeimage2(){
   var imagebefore = "images/desktop-image-hero-3.jpg";
   click.src = imagebefore;
   sidedescription1.style.display = "none";
   sidedescription2.style.display = "block";
}
