//Hamburger Menu, variable gets all list items within unordered list, declared variable, condition, and increment (for while loop), on onclick function will toggle navigation between being visible and not
function ShowNav() {
  let navMenu = document.querySelectorAll('ul > li');
 for(let i = 0; i < navMenu.length; i++) {
    navMenu[i].classList.toggle('navigation');
  }
}
