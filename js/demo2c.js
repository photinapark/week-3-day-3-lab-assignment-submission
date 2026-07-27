var contactMethod = document.getElementById("contactMethod");

var emailInput = document.getElementById("emailInput");
var phoneInput = document.getElementById("phoneInput");

var emailLabel = document.getElementById("emailLabel");
var phoneLabel = document.getElementById("phoneLabel");

emailInput.style.display = "none";
emailLabel.style.display = "none";

phoneInput.style.display = "none";
phoneLabel.style.display = "none";

contactMethod.addEventListener("change", showContact);

function showContact() {

    if (contactMethod.value == "Email") {
        emailInput.style.display = "block";
        emailLabel.style.display = "block";
        phoneInput.style.display = "none";
        phoneLabel.style.display = "none";

    } else if (contactMethod.value == "Phone") {
        emailInput.style.display = "none";
        emailLabel.style.display = "none";
        phoneInput.style.display = "block";
        phoneLabel.style.display = "block";


    } else {
        emailInput.style.display = "none";
        emailLabel.style.display = "none";
        phoneInput.style.display = "none";
        phoneLabel.style.display = "none";
    }

}