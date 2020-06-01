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
let logo = document.getElementById("logo-img")
logo.setAttribute('src', siteContent["nav"]["img-src"])

const theNav = document.querySelector('nav')
const childrenOfNav = theNav.children

const navLink1 = childrenOfNav[0]
navLink1.href, navLink1.textContent = siteContent["nav"]["nav-item-1"]

const navLink2 = childrenOfNav[1]
navLink2.href, navLink2.textContent = siteContent["nav"]["nav-item-2"]

const navLink3 = childrenOfNav[2]
navLink3.href, navLink3.textContent = siteContent["nav"]["nav-item-3"]

const navLink4 = childrenOfNav[3]
navLink4.href, navLink4.textContent = siteContent["nav"]["nav-item-4"]

const navLink5 = childrenOfNav[4]
navLink5.href, navLink5.textContent = siteContent["nav"]["nav-item-5"]

const navLink6 = childrenOfNav[5]
navLink6.href, navLink6.textContent = siteContent["nav"]["nav-item-6"]

const ctaH1 = document.querySelector('h1')
ctaH1.textContent = siteContent["cta"]["h1"]

const ctaButton = document.querySelector('button')
ctaButton.textContent = siteContent["cta"]["button"]

const ctaImage = document.querySelector('#cta-img')
ctaImage.setAttribute('src', "img/header-img.png")

const topH4One = document.querySelector('.top-content h4:nth-of-type(1)')
topH4One.textContent = siteContent["main-content"]["features-h4"]

const topPOne = document.querySelector('.top-content p:nth-of-type(1)')
topPOne.textContent = siteContent["main-content"]["features-content"]

const middleImage = document.querySelector('#middle-img')
middleImage.setAttribute('src', "img/mid-page-accent.jpg")

const bottomH4One = document.querySelector('.bottom-content h4')
bottomH4One.textContent = siteContent["main-content"]["services-h4"]

const bottomPOne = document.querySelector('.bottom-content p')
bottomPOne.textContent = siteContent["main-content"]["services-content"]

const contactInfo2 = document.querySelector('.contact p:nth-of-type(1)')
contactInfo2.textContent = siteContent["contact"]["address"]

const contactInfo3 = document.querySelector('.contact p:nth-of-type(2)')
contactInfo3.textContent = siteContent["contact"]["phone"]

const contactInfo4 = document.querySelector('.contact p:nth-of-type(3)')
contactInfo4.textContent = siteContent["contact"]["email"]

const footerP = document.querySelector('footer p')
footerP.textContent = siteContent["footer"]["copyright"]

const headingText = {
  heading1: siteContent["main-content"]["features-h4"],
  heading2: siteContent["main-content"]["about-h4"],
  heading3: siteContent["main-content"]["services-h4"],
  heading4: siteContent["main-content"]["product-h4"],
  heading5: siteContent["main-content"]["vision-h4"],
  heading6: siteContent["contact"]["contact-h4"]
}
const theHeadingsArray = Object.values(headingText)
const allH4s = document.querySelectorAll('h4')

for (let i = 0; i < allH4s.length; i++) {
  allH4s[i].textContent = theHeadingsArray[i]
}

const paragraphContent = {
  paragraph1: siteContent["main-content"]["features-content"],
  paragraph2: siteContent["main-content"]["about-content"],
  paragraph3: siteContent["main-content"]["services-content"],
  paragraph4: siteContent["main-content"]["product-content"],
  paragraph5: siteContent["main-content"]["vision-content"]
}
const theParagraphsArray = Object.values(paragraphContent)
const allParagraphs = document.querySelectorAll('.text-content p')

for (let i = 0; i < allParagraphs.length; i++) {
  allParagraphs[i].textContent = theParagraphsArray[i]
}