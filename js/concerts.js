const concerts = [
    {
        artist: "L'impératrice",
        description: "L'impératrice est un groupe français aux influences disco, pop et funk.",
        price: 38,
        date: "16-06-2025",
        time: "19:00",
        ticketsSold: 1000,
        image: "img/limperatrice.jpeg" // Chemin de l'image
    }
];

const container = document.getElementById("concerts-container");
const maxCapacity = 1000;

concerts.forEach((concert) => {
    const percentageSold = ((concert.ticketsSold / maxCapacity) * 100).toFixed(1);

    const card = document.createElement("div");
    card.classList.add("card");

    
    card.innerHTML = `
       <h3 class="card-title">${concert.artist}</h3>
        <p class="description">${concert.description}</p>
        <div class="card-content">
            <div class="card-info">
                <p class="price">Prix : ${concert.price}€</p>
                <p class="date">Date : ${concert.date}</p>
                <p class="horaire">Horaire : ${concert.time}</p>
            </div>
            <div class="card-image-container">
                <img src="${concert.image}" alt="${concert.artist}" class="card-image">
            </div>
        </div>
        <div class="places-vendues-container">
            <h4>Places vendues</h4>
        </div>
        <div class="progress-bar">
            <div class="progress"
                 style="width:${percentageSold}%; 
                        background-color: ${percentageSold > 90 ? "#FF0000" : ""};">
                <span>${percentageSold}%</span>
            </div>
        </div>
        
`;

container.appendChild(card);
});

