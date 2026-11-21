function addCard(name, age) {
    const template = document
        .getElementById('card-template')
        .content.cloneNode(true); // Copy template and children

    // Find elements in copy
    template.querySelector(".card-title").textContent = name;
    template.querySelector(".card-text").textContent = `Age: ${age}`;

    // Insert filled copy into document
    document.getElementById('card-list').appendChild(template);
}

const data = [
    {name: 'bob', age: 23},
    {name: 'alice', age: 39}
];

data.forEach(person => {
    addCard(person.name, person.age);
});

const artist = {
    name: "Van Gogh",
    portfolio: [
        {
            title: "portrait",
            url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image"
        },
        {
            title: "sky", 
            url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg"
        }
    ]
};

function addArtist(artist) {
    const template = document
        .getElementById("artist-template")
        .content.cloneNode(true);

    template.querySelector(".artist-name").textContent = artist.name;

    const portfolio = template.querySelector(".portfolio");

    artist.portfolio.forEach(art => {
        const artCard = document
            .getElementById("portfolio-template")
            .content.cloneNode(true);

        artCard.querySelector(".art-title").textContent = art.title;
        artCard.querySelector(".art-image").src = art.url;
        artCard.querySelector(".art-image").alt = art.title;

        portfolio.appendChild(artCard);
    });

    document.getElementById("artist-list").appendChild(template);
}

addArtist(artist);