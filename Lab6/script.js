// Generate a card for each post
function addCard(post) {
    const template = document
        .getElementById("post-template")
        .content.cloneNode(true);

    template.querySelector(".card-title").textContent = post.title;
    template.querySelector(".card-text").textContent = post.body;

    document.getElementById("post-list").appendChild(template);
}
// Fetch posts with a default limit of 10
function fetchPosts(limit = 10) {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => addCard(post));
        });
}
fetchPosts();