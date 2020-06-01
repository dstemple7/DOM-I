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
    "h1": "DOM <br/> Is <br/> Awesome",
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
    "address" : "123 Way 456 Street <br/> Somewhere, USA",
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

const theNav = document.querySelectorAll('header nav a')
const navLinkText = Object.values(siteContent.nav)
for (let i = 0; i < theNav.length; i++){
  theNav[i].textContent = navLinkText[i]
}

const ctaH1 = document.querySelector('h1')
ctaH1.innerHTML = siteContent["cta"]["h1"]

const ctaButton = document.querySelector('button')
ctaButton.textContent = siteContent["cta"]["button"]

const ctaImage = document.querySelector('#cta-img')
ctaImage.setAttribute('src', "img/header-img.png")

const middleImage = document.querySelector('#middle-img')
middleImage.setAttribute('src', "img/mid-page-accent.jpg")

const contactInfo2 = document.querySelector('.contact p:nth-of-type(1)')
contactInfo2.innerHTML = siteContent["contact"]["address"]

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
  heading6: siteContent["contact"]["contact-h4"],
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

// Task 3: Add new content
// Change the color of the navigation text to be green.

const allNavText = document.querySelectorAll('a')

allNavText.forEach(nav =>{
  nav.style.color = 'green'
})

// Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
const nav = document.querySelector('nav')

const newLinksProps = {
  href: '#',
  textContent: 'FAQ',
  href2: '#',
  textContent2: 'Deals',
}
const newlink = document.createElement('a')
const newlink2 = document.createElement('a')

newlink.href = newLinksProps.href
newlink.textContent = newLinksProps.textContent

newlink2.href = newLinksProps.href2
newlink2.textContent = newLinksProps.textContent2

nav.appendChild(newlink)
nav.prepend(newlink2)