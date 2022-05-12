const aboutH2 = document.getElementById("h2_about");
const aboutP = document.getElementById("p_about");
const aboutMeBlock = document.getElementById("about_me")
const bkgdH2 = document.getElementById("h2_bkgd");
const bkgdP = document.getElementById("p_bkgd");
const bioBkgBlock = document.getElementById("bio-background");
const presentH2 = document.getElementById("h2_present");
const presentP = document.getElementById("p_present");
const presentBlock = document.getElementById("bio-present");
const interestsH2 = document.getElementById("h2_interests");
const interestsP = document.getElementById("p_interests");
const interestBlock = document.getElementById("bio-interests"); 



const aboutOpenClose = () => {
    console.log(document.documentElement.scrollTop);
     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        aboutH2.style.display = "none";
        aboutP.style.display = "block";
        aboutMeBlock.style.filter = "brightness(90%)";
    } else if (document.body.scrollTop <= 210 || document.documentElement.scrollTop <= 210) {
        aboutH2.style.display = "block";
        aboutP.style.display = "none";
        aboutMeBlock.style.filter = "brightness(100%)";
    } else if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
        bkgdH2.style.display = "none";
        bkgdP.style.display = "block";
        bioBkgBlock.style.display = "brightness(90%)";
    } 
};

window.onscroll = () => {
    aboutOpenClose();
};


// about page scroll range: 50-210;
// background scroll range: 300 - 460;