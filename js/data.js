// window.addEventListener('DOMContentLoaded', (event) => {
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://ghibliapi.herokuapp.com/films/");
//   xhr.send();

//   xhr.onload = function () {
//     var data = JSON.parse(this.response);

//     if (this.readyState == 4 && this.status == 200) {
//       var linkout = "";
//       var i;
//       for (i = 0; i < data.length; i++) {
//         linkout += `<a class="film-url" target="_blank" onclick="populatemodal('${data[i].url}')>${data[i].title} + '</a><br>`;
//       }

//       document.getElementById("placeholder").innerHTML = linkout;
//     }
//   }
// });

const urls = [];

window.addEventListener("DOMContentLoaded", (event) => {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://ghibliapi.herokuapp.com/films/");
  xhr.send();

  xhr.onload = function () {
    var data = JSON.parse(this.response);

    if (this.readyState == 4 && this.status == 200) {
      var linkout = "";
      var i;
      for (i = 0; i < data.length; i++) {
        linkout +=
          `<a class="film-url" href="javascript:populatemodal('${
            data[i].url
          }', '${data[i].title.replace(/'/gi, "")}')">` +
          data[i].title +
          "</a><br>";
      }

      document.getElementById("placeholder").innerHTML = linkout;
    }
  };
});

const getdata = async function () {
  const arrayOfPromises = urls.map((url) => axios.get(url[0]));
  for await (let request of arrayOfPromises) {
    $("#modalBody").text(JSON.stringify(request.data));
  }
};

async function populatemodal(url, title) {
  // set the modal title
  $("#staticBackdropLabel").html(title);

  // Get the data from the selected URL
  const response = await axios.get(url);

  await buildView(response.data.people, 'People');
  await buildView(response.data.species, 'Species');
  await buildView(response.data.locations, 'Locations');
  await buildView(response.data.vehicles, 'Vehicles');

  // Show Modalspecies
  $("#staticBackdrop").modal("toggle");
}

async function buildView(array_data, header) {
  const arrayOfPromises = array_data.map((url) => axios.get(url));
  for await (let response of arrayOfPromises) {
    // $("#modalBody").text(JSON.stringify(response.data));
    $(`<h3>${header}</h3><p>${JSON.stringify(response.data).replace(/,/g, '<br>')}</p>`).appendTo('#modalBody');
  }
}
