"use strict";

const portfolioDropdown = document.getElementById("portfolio-dropdown");

const dropdownLinks = document.querySelectorAll("#portfolio-dropdown > *");
const navProjects = document.getElementById("nav-projects");
const portfolioSections = document.getElementById("portf-section");
const codeProjects = document.getElementById("portf-code");
const designProjects = document.getElementById("portf-design");

let pageShow = (e) => {
    console.log(e);
    if (e.target.hash === "#portf-code") {
        codeProjects.style.display = "block";
    } else if (e.target.hash === "#portf-design") {
        designProjects.style.display = "block";
    }
};

for (let link of dropdownLinks) {
    link.addEventListener('click', pageShow);
};

// let onLoad = () => {portfolioDropdown.style.display = "none"};

// onLoad();

let navDropdownShow = (e) => {
    portfolioDropdown.style.display = "flex";
    console.log("click working");
};

navProjects.addEventListener('click', navDropdownShow);

