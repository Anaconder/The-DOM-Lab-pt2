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
// FUNCTION DECLARATIONS
// Build Submenu
function buildSubmenu(subLinks){
  while (subMenuEl.firstChild) {
    subMenuEl.removeChild(subMenuEl.firstChild);
  }

  if (subLinks && subLinks.length > 0) {
    subLinks.forEach(sub => {
      let subMenuLink = document.createElement('a');
      subMenuLink.setAttribute('href', sub.href);
      subMenuLink.textContent = sub.text;
      subMenuEl.appendChild(subMenuLink);
    });
    subMenuEl.style.top = '100%';
  } else {
    subMenuEl.style.top = '0';
  }
}

// TOP MENU EVENT FUNCTION
function Menu(event) {
  event.preventDefault();
  if (event.target.tagName !== "A") return;

  const link = event.target;

  // Remove active from all top menu links
  topMenuLinks.forEach(men => men.classList.remove('active'));

  link.classList.add('active');

  title.textContent = capitalizeWords(link.textContent);

  const clickedObject = menuLinks.find(menu => menu.text === link.textContent);
  
  if(clickedObject.subLinks){
    buildSubmenu(clickedObject.subLinks);
    subMenuEl.style.top = '100%';
  } 
  
  else{
    subMenuEl.style.top = '0';
  }
}

// Capitalize Each Word
function capitalizeWords(text) {
  return text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

// SUBMENU EVENT FUNCTION
function subMenu(event) {
  event.preventDefault();
  if (event.target.tagName !== "A") return;

  const link = event.target;

  // Replace H1 text with capitalized words
  title.textContent = capitalizeWords(link.textContent);


  // Hide submenu and deactivate top menu
  subMenuEl.style.top = '0';
  topMenuLinks.forEach(sub => sub.classList.remove('active'));
}


// MAIN CODE
let mainEl = document.querySelector("main"); 
mainEl.style.backgroundColor = `var(--main-bg)`;

let title = document.createElement('h1');
title.textContent = `DOM Manipulation`;
mainEl.appendChild(title);
mainEl.classList.add("flex-ctr");

let topMenuEl = document.getElementById("top-menu"); 
topMenuEl.style.height = `100%`;
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;
topMenuEl.classList.add("flex-around");

let subMenuEl = document.getElementById("sub-menu"); 
subMenuEl.style.height = `100%`;
subMenuEl.style.backgroundColor = `var(--sub-menu-bg)`;
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

// CREATE TOP MENU LINKS
for (let menu of menuLinks) {
  let anchor = document.createElement('a'); 
  anchor.setAttribute("href", menu.href);   
  anchor.textContent = menu.text;
  topMenuEl.appendChild(anchor);
}

let topMenuLinks = topMenuEl.querySelectorAll("a");


// EVENT LISTENERS
topMenuEl.addEventListener("click", Menu);
subMenuEl.addEventListener("click", subMenu);
