"use strict";

const portfolioDropdown = document.getElementById("portfolio-dropdown");

const dropdownLinks = document.querySelectorAll("#portfolio-dropdown > *");
const navProjects = document.getElementById("nav-projects");
const portfolioSections = document.getElementById("portf-section");
const codeProjects = document.getElementById("portf-code");
const designProjects = document.getElementById("portf-design");

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

