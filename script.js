const postsDiv = document.getElementById("posts");

let posts = JSON.parse(localStorage.getItem("posts")) || [];

if (postsDiv) {

posts.forEach(post => {

const div = document.createElement("div");

div.innerHTML = `
<h2>${post.title}</h2>
<p>${post.content}</p>
<a href="post.html?id=${post.id}">View Post</a>
`;

postsDiv.appendChild(div);

});

}

const form = document.getElementById("postForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

let title = document.getElementById("title").value;
let content = document.getElementById("content").value;

if(title === "" || content === ""){
alert("Title and content required");
return;
}

let newPost = {
id: Date.now(),
title: title,
content: content
};

posts.push(newPost);

localStorage.setItem("posts", JSON.stringify(posts));

window.location.href = "index.html";

});

}

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

let post = posts.find(p => p.id == id);

if(post){

document.getElementById("title").innerText = post.title;
document.getElementById("content").innerText = post.content;

}