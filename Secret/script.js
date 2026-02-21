/* password */
window.onload = function() {
let password = 'NICE!Ra*bits';
while (true) {
let input = prompt('Enter password:');
if (input === password) {
window.location.href = '#';
break;
} else {
  window.location.href = '/Thunderbolt/index.html';
}
alert('Incorrect password. Please try again.');
}
}
/* end of password */

/* tabs */
function openTab(evt, tabName) {
  var i, txt, tablinks;
  txt = document.getElementsByClassName("txt");
  for (i = 0; i < txt.length; i++) {
    txt[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
/* end of tabs */