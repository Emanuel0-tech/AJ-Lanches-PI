function loadHTML(url, elementId) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    });
}

document.addEventListener("DOMContentLoaded", function () {
  loadHTML("../components/header.html", "header");
  loadHTML("../components/footer.html", "footer");
});