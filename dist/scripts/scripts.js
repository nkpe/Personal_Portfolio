"use strict";

const portfolioDropdown = document.getElementById("portfolio-dropdown");

const dropdownLinks = document.querySelectorAll("#portfolio-dropdown > *");
const navProjects = document.getElementById("nav-projects");
const portfolioSections = document.getElementById("portf-section");
const codeProjects = document.getElementById("portf-code");
const designProjects = document.getElementById("portf-design");

window.onload = function (e) {
   if (pageHTML === "portfolio.html"){
    if (e.target.hash === "#portf-code") {
        alert("#portf-code running");
        codeProjects.style.display = "flex";
        designProjects.style.display = "none";
    } else if (e.target.hash === "#portf-design") {
        codeProjects.style.display = "none";
        designProjects.style.display = "flex";
    };
}};

let pageHTML = null;
let pageShow = (e) => {
    console.log(e);
    portfolioDropdown.style.display = "none";
    let pageHTMLArray = location.pathname.split("/");
    pageHTML = pageHTMLArray[pageHTMLArray.length-1];
    console.log(pageHTML);
};

for (let link of dropdownLinks) {
    link.addEventListener('click', pageShow);
};

let dropdownState = null;

let onLoad = () => {
    portfolioDropdown.style.display = "none";
    dropdownState = false};

onLoad();

let navDropdownShow = (e) => {
    if (dropdownState === false){
    console.log(dropdownState);
    portfolioDropdown.style.display = "flex";
    dropdownState = true;
    console.log(dropdownState);
} else {
    portfolioDropdown.style.display = "none";
    dropdownState = false;
}};

navProjects.addEventListener('click', navDropdownShow);

