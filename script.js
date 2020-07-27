function ShowNav() {
  let navItems = document.querySelectorAll('ul > li');
 for(let i = 0; i < navItems.length; i++) {
    navItems[i].classList.toggle('nav');
  }
}
//var visible = false;
//function ShowNav() {
  //visible = !visible;
  //let navItems = document.querySelectorAll('ul > li');
  //for (let i = 0; i < navItems.length; i++) {
   // navItems[i].style.display = visible ? 'inherit' : 'none';
  //}
//}