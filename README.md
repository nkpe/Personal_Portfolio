# **Personal Portfolio - Project One**
The purpose of this website is to showcase myself and my work to potential employers and recruiters. The users of this website will be looking at my skills and abilities for potential employment. I have included an about page as an overview of myself and my achievements, along with a portfolio page so users can see examples of my work. A contact page allows any users of the website to get in touch with me.

# **UX**
The use of the navigation bar within the header allows for easy navigation to the about me, portfolio and contact me pages from every page on the website. The addition of on-hover font bolding informs the user that these are links and which link they are hovering over.

The about me page split into clearly defined sections, through the use of colour blocks and headers, making it easy for the user to follow as well as find a particular section. Section are split based on type of experience / personality information. 

The portfolio page is also split clearly into sections through the use of colour based on the type / skill of work, with most recent / relevant first.  

GitHub and LinkedIn links are included in footer so its easy to contact me from any page on the website using these channels. I have used the logo for each so they are easily recognised, while keeping the footer simple.

# **Features**
## **All Pages**
* Header with Nav bar and branding for easy navigation of the website. 
    * Use of CSS on hover on nav links so the user helps user experience, showing these are links. 
* Social Media links included withing the footer and links to contact page so the user can get in touch from any web page. 
## **index.html**
* Responsive area on left of page so text and image always show on varying screen sizes. 
* Clear and simple to the user can navigate easily to the section they are interested in. 
## **portfolio.html**
* **Flexbox** - used to create a fully responsive and even layout of images. 
## **contact.html**
* **Form with contact button** - Allows user to submit their details entered into the form. Currently using Formspree to handle the forwarding of this data to my email address. 
* **Form data list** - assists user when inputting the country they are contacting from.
* **Form dropdown lists** - ensures user picks an appropriate answer.
* **Form required attribute** - on all necessary form fields, ensuring enough contact information is sent should the user not wish to provide all the information on the form. 
# **Features to be implemented**
* **Project Pages** - Addition of project pages so portfolio images link to the projects themselves, including hosting websites in my portfolio and linking this.
* **Scroll animations** - on the about page so each section of text appears one at a time, so the user isn't overloaded with information.  
# **Technologies used**
* [**HTML 5**](https://developer.mozilla.org/en-US/docs/Glossary/HTML5) - used to create the basic content of the website.
* [**CSS3**](https://developer.mozilla.org/en-US/docs/Glossary/CSS) - used to add custom styling to the content of the webpage. 
* [**Font Awesome**](https://fontawesome.com/) - the project used Font Awesome GitHub and LinkedIn fonts for the social media links.
* [**Google Fonts**](https://fonts.google.com/) - used to import a custom font to style the text. 
* [**Git**](https://git-scm.com/) - this was used during production to efficiently commit and push changes to the GitHub repository so no code could be lost. 
* [**GitHub**](https://github.com/) - this was used to create and manage a remote repository which holds all commits and pushed from Git. I made uses of the repository branches to separate and track working changes, in case of bugs, before committing new changes to the master branch.
# **Testing**
While building the website I regularly used Google Chrome, FireFox, Safari and Edge browsers to render my code, checking for any broken code and incompatibility. One example I found that Firefox and Safari rendered the select tag in HTML with a grey background giving the form fields inconsistent styling. I fixed this by adding a class of form-field-background to each form field with a specified colour, for Edge and Firefox. Safari required the use of Webkit to remove the browser styling.

I used the Developer Tools built into Chrome to test responsiveness of the website, by selecting different devices. When conducting these tests I found the responsiveness of the home page photo and the form fields needed to be handled with media queries as they had specific break points.  
## **HTML & CSS Validator**   
To validate my HTML code I used [W3C Markup Validation Service](https://validator.w3.org/#validate_by_upload).

To validate my CSS code I used [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/#validate_by_upload).
# **Deployment**

The page has been deployed to GitHub pages for hosting - [My Portfolio hosted on GitHub pages](https://nkpe.github.io/Personal_Portfolio/index.html).

I followed the following steps to deploy to GitHub pages: 

1. Opened the repository on GitHub
2. Under 'settings' I found the 'Pages' section in the list on the left. 
3. Under 'source' I chose the master branch and ensured the '/root' folder was selected. 


## **Repo Link**
[https://github.com/nkpe/Personal_Portfolio](https://github.com/nkpe/Personal_Portfolio)
## **Running Code Locally**
The code can be run locally by downloading from my GitHub repository following these steps: 

1. Click on the green 'Code' button.
2. From the drop down menu select 'download ZIP' or select the relevant clone option.
3. If downloading ZIP, this should be unzipped before running the website locally. 


# **Credits**
## **Code** 
* The list of countries was taken and edited from a GitHub repo produced and shared [Dan Rovito](https://gist.github.com/danrovito/977bcb97c9c2dfd3398a) to save time in adding all countries. 
## **Acknowledgements** 
* Thank you to my boyfriend who helped direct me with the styling and using Git.
* Thank you to my mentor, Sunny Hebbar, for the feedback in ensuring my code readability and accuracy.  
