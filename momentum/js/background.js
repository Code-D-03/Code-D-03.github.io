const html = document.querySelector("html");

const backgroundImages = [
  "arindam.jpg",
  "james.jpg",
  "hills.jpg",
  "nature.jpg",
];

const chosenImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

const url = `url("img/${chosenImage}")`;

html.classList.add("background");
html.style.backgroundImage = url;