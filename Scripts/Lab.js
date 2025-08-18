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
  let topMenuLinks = document.createElement('a'); 
  topMenuLinks.setAttribute("href", menu.href);   
  topMenuLinks.textContent = menu.text;
  topMenuEl.appendChild(topMenuLinks);
}

// for (let menu of menuLinks) {
//   let subMenuLinks = document.createElement('a'); 
//   subMenuLinks.setAttribute("href", menu.subLinks.href);   
//   subMenuLinks.textContent = menu.subLinks.text;
//   subMenuEl.appendChild(subMenuLinks);
// }




function Menu(topMenuEl){
  topMenuEl.preventDefault();
  if (topMenuEl.target.tagName !== "A") return;
  console.log("You clicked a link:", topMenuEl.target.textContent);

}

topMenuEl.addEventListener("click", Menu);






