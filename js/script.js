var app = document.getElementById("main");
console.log(main);

const container = document.createElement("div");
container.setAttribute("class", "container");
app.appendChild(container);

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://ghibliapi.herokuapp.com/films/");
xhr.send();

xhr.onload = function () {
  // accesss JSON data here
  var data = JSON.parse(this.response);

  if (this.readyState == 4 && this.status == 200) {
    data.forEach((films) => {
      // Create a div with a card class
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      // Create an h1 and set the text content to the film's title
      const h1 = document.createElement("h1");
      h1.innerHTML = films.title;

      // Create h3 and set the text content to the film's director producer
      const director = document.createElement("h4");
      director.innerHTML = films.director;
      
      const producer = document.createElement("h4");
      producer.innerHTML = films.producer;
      
      const release_date = document.createElement("h4");
      release_date.innerHTML = films.release_date;

      const p = document.createElement("p");
      films.description = films.description.substring(0, 250);
      p.innerHTML = `${films.description}...`;

      // Create an a tag and set the text content to the url
      const score = document.createElement("h4");
      score.innerHTML = `${films.rt_score}%`;

      // Append the cards to the container element
      container.appendChild(card);

      // Each card will contain an h1 and a p
      card.appendChild(h1);
      card.appendChild(p);
      card.appendChild(director);
      card.appendChild(producer);
      card.appendChild(release_date);
      card.appendChild(score);
    });
  } else {
    console.log("error");
  }
};