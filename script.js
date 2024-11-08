const createButton = document.getElementById("create-post");
const editButton = document.getElementById("edit-post");
const reloadButton = document.getElementById("reload-btn");
const loadPost = document.getElementById("load-post");

const blogPost = localStorage.getItem("create");


reloadButton.addEventListener("click", () => {
    window.location.reload();

})

createButton.addEventListener("click", () => {
    localStorage.setItem("create");
})


const title = document.getElementById("title").value.trim();
const content = document.getElementById("content").value.trim();

if (!title || !content) {
    alert("Both title and content are required.");
    return;
}