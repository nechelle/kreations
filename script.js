function ShowNav() {
  let navMenu = document.querySelectorAll('ul > li');
 for(let i = 0; i < navMenu.length; i++) {
    navMenu[i].classList.toggle('navigation');
  }
}
//var visible = false;
//function ShowNav() {
  //visible = !visible;
  //let navMenu = document.querySelectorAll('ul > li');
  //for (let i = 0; i < navMenu.length; i++) {
   // navMenu[i].style.display = visible ? 'inherit' : 'none';
  //}
//}