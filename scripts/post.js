let numOfLikes = 0;

function editPost() {
    document.getElementById("postDesc").style.border = "3px solid pink";
    document.getElementById("editButton").innerHTML = "Save <i class='fa fa-save'></i>";
    document.getElementById("editButton").addEventListener("click", save);
    document.getElementById("postDesc").contentEditable = 'true';
    document.getElementById("postTitle").contentEditable = 'true';
    document.getElementById("postTitle").style.border = "3px solid pink";
}

function save() {
    document.getElementById("postDesc").style.border = "none";
    document.getElementById("editButton").innerHTML = "Edit <i class='fa fa-edit'></i>";
    document.getElementById("editButton").addEventListener("click", editPost);
    document.getElementById("postDesc").contentEditable = 'false';
    document.getElementById("postTitle").contentEditable = 'false';
    document.getElementById("postTitle").style.border = "none";
}

function likePost() {
    document.getElementById("likeButton").innerHTML = "Liked!";
    numOfLikes++;
    if (numOfLikes === 1) {
        document.getElementById("likeTrack").innerHTML = numOfLikes + " person likes this!";
    }
    else {
        document.getElementById("likeTrack").innerHTML = numOfLikes + " people have liked this!";
    }
}

function commentPost() {
    let comment = document.getElementById("commentArea").value;
    let element = document.createElement("div");
    element.style.margin = "13px 13px 13px 13px";
    element.style.padding = "0 23px 23px 13px";
    element.style.backgroundColor = "white";
    let node = document.createTextNode(comment);
    element.appendChild(node);
    if (comment !== "") {
        let lastComment = document.getElementById("commentSection");
        lastComment.insertBefore(element, lastComment.childNodes[0]);
    }
}