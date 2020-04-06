let postNumber;

function fetchAllPosts() {
    window.location.href = "./html/postslist.html";
}

function deletePost(post) {
    postNumber = post;
    document.getElementById("deletePostPopUp").style.display = 'block';
}

function permitDeleteOperation() {
    document.getElementById(postNumber).style.display = 'none';
    document.getElementById("deletePostPopUp").style.display = 'none';
}

function cancelDeleteOperation() {
    document.getElementById("deletePostPopUp").style.display = 'none';
}

function viewPost() {
    window.location.href = "./post.html";
}