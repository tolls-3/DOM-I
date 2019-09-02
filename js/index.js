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

//middle
let topLeft1=document.querySelectorAll(".main-content .text-content h4")
topLeft1[0].textContent = siteContent["main-content"]["features-h4"];
let topLeft2=document.querySelectorAll(".main-content .text-content p")
topLeft2[0].textContent = siteContent["main-content"]["features-content"];

let topRight1=document.querySelectorAll(".main-content .text-content h4")
topRight1[1].textContent = siteContent["main-content"]["about-h4"]
let topRight2=document.querySelectorAll(".main-content .text-content p")
topRight2[1].textContent=siteContent["main-content"]["about-content"]

// let featureName=document.querySelectorAll(".main-content .text-content h4")[0].textContent = siteContent["main-content"]["features-h4"];



let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src',siteContent['main-content']['middle-img-src'])










