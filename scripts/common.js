let signUpModal = document.getElementById("signUpPopUp");
let signInModal = document.getElementById("signInPopUp");
let signUpButton = document.getElementById("signUpButton");
let signInButton = document.getElementById("signInButton");
let signUpSpan = document.getElementsByClassName("close")[0];
let signInSpan = document.getElementsByClassName("close")[1];

signUpSpan.onclick = function () {
    signUpModal.style.display = "none";
};
signInSpan.onclick = function () {
    signInModal.style.display = "none";
};
signUpButton.onclick = function () {
    signUpModal.style.display = "block";
};
signInButton.onclick = function () {
    signInModal.style.display = "block";
};

function openSignUpPopUp() {
    signInModal.style.display = "none";
    signUpModal.style.display = "block";
}
