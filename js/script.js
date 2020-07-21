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
      const card = document.createElement("div");
      card.setAttribute("class", "card");
      card.setAttribute("style", "width:30rem")

      const h1 = document.createElement("h1");
      h1.innerHTML = films.title;
      
      const p = document.createElement("p");
      films.description = films.description.substring(0, 800);
      p.innerHTML = `${films.description}...`;
      
      const director = document.createElement("h4");
      director.innerHTML = `Director: ${films.director}`;

      const producer = document.createElement("h4");
      producer.innerHTML = `Producer: ${films.producer}`;

      const release_date = document.createElement("h6");
      release_date.innerHTML = `Release date: ${films.release_date}`;

      const score = document.createElement("h6");
      score.innerHTML = `Rt Score: ${films.rt_score}%`;  

      container.appendChild(card);
  
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
