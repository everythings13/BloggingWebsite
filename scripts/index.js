let createPostModal = document.getElementById("createPostPopUp");
let createPostButton = document.getElementById("createPostButton");
let createPostSpan = document.getElementsByClassName("close")[2];
createPostSpan.onclick = function () {
    createPostModal.style.display = "none";
};
createPostButton.onclick = function () {
    createPostModal.style.display = "block";
};
