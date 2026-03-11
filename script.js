const postsDiv = document.getElementById("posts");

let posts = JSON.parse(localStorage.getItem("posts")) || [];

posts.forEach(post => {

const div = document.createElement("div");

div.innerHTML = `
<h2>${post.title}</h2>
<p>${post.content}</p>
<a href="post.html?id=${post.id}">View Post</a>
`;

postsDiv.appendChild(div);

});