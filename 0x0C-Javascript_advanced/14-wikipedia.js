function createElement(data) {
  let parraf = document.createElement("p");
  parraf.innerText = data;
  document.body.appendChild(parraf);
}

function queryWikipedia(callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(r.responseText);
      callback(data.query.pages['21721040'].extract);
    }
  }
  xhttp.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow");
  xhttp.send();
}
queryWikipedia(createElement);

