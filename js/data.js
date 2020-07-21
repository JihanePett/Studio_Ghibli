var xhr = new XMLHttpRequest();
xhr.open("GET", "https://ghibliapi.herokuapp.com/films/");
xhr.send();

xhr.onload = function () {
  var data = JSON.parse(this.response);

  if (this.readyState == 4 && this.status == 200) {
    var linkout = "";
    var i;
    for(i = 0; i < data.length; i++) {
        linkout += '<a class="film-url" target="_blank" onclick="window.open(href, width=100,height=100)" href="' + data[i].url + '">' +
        data[i].title + '</a><br>';
    }

    document.getElementById("placeholder").innerHTML = linkout;
}
}
