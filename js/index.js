const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src',siteContent["nav"]["img-src"])

let tagNames = document.getElementsByTagName('a');
tagNames[0].textContent=siteContent['nav']['nav-item-1']
tagNames[1].textContent=siteContent['nav']['nav-item-2']
tagNames[2].textContent=siteContent['nav']['nav-item-3']
tagNames[3].textContent=siteContent['nav']['nav-item-4']
tagNames[4].textContent=siteContent['nav']['nav-item-5']
tagNames[5].textContent=siteContent['nav']['nav-item-6']

//cta
let headerName = document.querySelector('h1');
headerName.innerText= "DOM \n is \n awesome"

let btnName = document.querySelector('button');
btnName.textContent=siteContent["cta"]["button"];

let imgPic = document.querySelector('#cta-img');
imgPic.setAttribute('src',siteContent["cta"]["img-src"])

//middle-content

//top
let topLeft1=document.querySelectorAll(".top-content .text-content h4")
topLeft1[0].textContent = siteContent["main-content"]["features-h4"];

let topLeft2=document.querySelectorAll(".top-content .text-content p")
topLeft2[0].textContent = siteContent["main-content"]["features-content"];

let topRight1=document.querySelectorAll(".top-content .text-content h4")
topRight1[1].textContent = siteContent["main-content"]["about-h4"]

let topRight2=document.querySelectorAll(".top-content .text-content p")
topRight2[1].textContent=siteContent["main-content"]["about-content"]

//middle-image
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src',siteContent['main-content']['middle-img-src'])

//bottom
let bottomLeft1=document.querySelectorAll(".bottom-content .text-content h4")
bottomLeft1[0].textContent = siteContent["main-content"]["services-h4"];

let bottomLeft2=document.querySelectorAll(".bottom-content .text-content p")
bottomLeft2[0].textContent = siteContent["main-content"]["services-content"];

let bottomCenter1=document.querySelectorAll(".bottom-content .text-content h4")
bottomCenter1[1].textContent = siteContent["main-content"]["product-h4"];

let bottomCenter2=document.querySelectorAll(".bottom-content .text-content p")
bottomCenter2[1].textContent = siteContent["main-content"]["product-content"];

let bottomRight1=document.querySelectorAll(".bottom-content .text-content h4")
bottomRight1[2].textContent = siteContent["main-content"]["vision-h4"];

let bottomRight2=document.querySelectorAll(".bottom-content .text-content p")
bottomRight2[2].textContent = siteContent["main-content"]["vision-content"];

//contact
let contactHeader = document.querySelectorAll(".contact h4")
contactHeader[0].textContent=siteContent["contact"]["contact-h4"];

let contactParagraph = document.querySelectorAll(".contact p")
contactParagraph[0].textContent=siteContent["contact"]["address"];
contactParagraph[1].textContent=siteContent["contact"]["phone"];
contactParagraph[2].textContent=siteContent["contact"]["email"];

let footerParagraph=document.querySelectorAll("footer p")
footerParagraph[0].textContent = siteContent["footer"]["copyright"];

//add color

tagNames[0].style.color="green";
tagNames[1].style.color="green";
tagNames[2].style.color="green";
tagNames[3].style.color="green";
tagNames[4].style.color="green";
tagNames[5].style.color="green";


//add append and prepend

// create something for the DOM progratically
let myNewNav = document.createElement('a');

// added certain content and attributes
myNewNav.textContent = 'Home';
// // myNewParagraph.classList.add('cats', 'green');
// myNewParagraph.setAttribute('id', 'theBestParagraph');

// // we captured the element we wish to append to
// var section = document.querySelector('section');

// to it, we appended the newly created thing
tagNames.appendChild(myNewNav);













