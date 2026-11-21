// Part 1 - Initial news data from the lab
let news = [
    {
        id: 1,
        title: 'Election Results',
        content: "Newly elected minister..."
    },
    {
        id: 2,
        title: 'Sporting Success',
        content: "World Cup winners..."
    },
    {
        id: 3,
        title: 'Tornado Warning',
        content: "Residents should prepare..."
    }
];


// Generate an individual news card
function addCard(article) {
    const template = document
        .getElementById("news-template")
        .content.cloneNode(true);

    template.querySelector(".card-title").textContent = article.title;
    template.querySelector(".card-text").textContent = article.content;

    document.getElementById("news-list").appendChild(template);
}

function renderNews() {
    const newsList = document.getElementById("news-list");
    newsList.innerHTML = "";
    news.forEach(article => {
        addCard(article);
    });

    console.log("News feed refreshed");
}


// Display news immediately when the page loads and refresh every 5 seconds
renderNews();
const intervalId = setInterval(renderNews, 5000);


// Part 2 - Handling form submission
const newsForm = document.getElementById("news-form");

newsForm.addEventListener("submit", event => {
    event.preventDefault();

    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();

    if (!title || !content) {
        return;
    }

    // Create a new article object and add it to the news array
    const newArticle = {
        id: news.length + 1,
        title: title,
        content: content
    };
    news.push(newArticle);

    console.log("Article added:", newArticle);

    newsForm.reset();
});