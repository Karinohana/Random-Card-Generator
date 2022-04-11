import "/workspace/vanillajs-hello/src/style.css";

window.onload = () => {
  /*generating Random numbers and Suits*/
  let randomNumber = Math.floor(Math.random() * 12);
  let randomSuit = Math.floor(Math.random() * 4);

  /*establishing possible numbers and suits*/
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let suits = ["&#9824", "&#9827", "&#9829", "&#9830"];

  /*assigning the randomly generated numbers and suits into the html*/
  document.querySelector(".card-number").innerHTML = numbers[randomNumber];
  document.querySelector(".top-suit").innerHTML = suits[randomSuit];
  document.querySelector(".bottom-suit").innerHTML = suits[randomSuit];

  /*changing colors based on the suit*/
  if (suits[randomSuit] == "&#9829" || suits[randomSuit] == "&#9830") {
    document.querySelector(".top-suit").style.color = "red";
    document.querySelector(".bottom-suit").style.color = "red";
    document.querySelector(".card-number").style.color = "red";
  } else {
    document.querySelector(".top-suit").style.color = "black";
    document.querySelector(".bottom-suit").style.color = "black";
    document.querySelector(".card-number").style.color = "black";
  }
};
