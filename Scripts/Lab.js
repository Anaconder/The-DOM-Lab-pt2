// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

// H1 styling and creation
let mainEl = document.querySelector("main"); 

mainEl.style.backgroundColor = `var(--main-bg)`;

let title = document.createElement('h1');
title.textContent = `DOM Manipulation`;
mainEl.appendChild(title);

mainEl.classList.add("flex-ctr");

// Top menu styling
let topMenuEl = document.getElementById("top-menu"); 
topMenuEl.style.height = `100%`;

topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;
topMenuEl.classList.add("flex-around");

// Creating the Submenu
let subMenuEl = document.getElementById("sub-menu"); 
subMenuEl.style.height = `100%`;
subMenuEl.style.backgroundColor = `var(--sub-menu-bg)`;
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

// Adding Menu Interaction
for (let menu of menuLinks) {
  let anchor = document.createElement('a'); 
  anchor.setAttribute("href", menu.href);   
  anchor.textContent = menu.text;
  topMenuEl.appendChild(anchor);
}

let topMenuLinks = topMenuEl.querySelectorAll("a");

function Menu(event) {
  event.preventDefault();

  // Make sure the clicked element is an <a>
  if (event.target.tagName !== "A") return;

  let link = event.target;

  // Toggle the "active" class
  if (link.classList.contains("active")) {
    link.classList.remove("active");
  } else {
    //Initialisation of Top menu
    topMenuLinks.forEach(menulk => {
      menulk.classList.remove("active");
    });

    //Initialisation of Sub menu
    while (subMenuEl.firstChild) {
      subMenuEl.removeChild(subMenuEl.firstChild);
    }
    
    link.classList.toggle("active");

    // Adding Submenu Interaction
    let clickedText = link.textContent;
    let clickedObject = menuLinks.find(menu => menu.text === clickedText);

    if (clickedObject.subLinks !== undefined){
      for (let submenu of clickedObject.subLinks) {
        let subMenuLink = document.createElement('a');
        subMenuLink.setAttribute("href", submenu.href);
        subMenuLink.textContent = submenu.text;
        subMenuEl.appendChild(subMenuLink);
      };


      console.log(subMenuEl)

    }
  }
}

topMenuEl.addEventListener("click", Menu);

// Adding Submenu Interaction


 