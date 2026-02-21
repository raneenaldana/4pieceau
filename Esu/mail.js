function openEmail(evt, emailName) {
  var i, email, emaillink;
  email = document.getElementsByClassName("email");
  for (i = 0; i < email.length; i++) {
    email[i].style.display = "none";
  }
  emaillink = document.getElementsByClassName("emaillink");
  for (i = 0; i < emaillink.length; i++) {
    emaillink[i].className = emaillink[i].className.replace(" active", "");
  }
  document.getElementById(emailName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.addEventListener("DOMContentLoaded", function () {
  openEmail({ currentTarget: document.getElementById("default") }, "emails");
});