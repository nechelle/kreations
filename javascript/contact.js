function contactFieldEmpty() {
  var emptyField = "";
  //If Name field is empty, notify with red border
 if (document.getElementById('name').value == "") {
    emptyField += 'Please provide your name. \n';
   document.getElementById('name').style.border = "4px solid #8B0000";
  }
  //If Phone# field is empty, notify with red border
  if (document.getElementById('tel').value =="") {
    emptyField += 'Please provide a good contact number. \n';
    document.getElementById('tel').style.border = "4px solid #8B0000";
  }
  //If Email field is empty, notify with red border
 if (document.getElementById('email').value =="") {
    emptyField += 'Please provide a good email address.\n';
    document.getElementById('email').style.border = "4px solid #8B0000";
  }
//If field empty, then alert per Id and cannot submit form. If not empty then form is submitted and alerts success. logs a comment in console as successful (briefly) before page reloads
if (emptyField !=="") {
 alert(emptyField);
 return false;
} else {
  alert('Thank you for taking the time to visit our site!');
  console.log('user succesfully submitted contact form');
  window.location.reload(true);
  return true;
  
}
} 
