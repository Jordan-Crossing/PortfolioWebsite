console.log("body");

fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let image = document.querySelector("img");
    image.src = data.message;
  });

//for each
