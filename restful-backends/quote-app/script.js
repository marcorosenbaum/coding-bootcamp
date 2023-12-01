"use strict";

const btnGetQuote = document.querySelector("#get-quote-btn");
const quoteText = document.querySelector("#default-quote");

btnGetQuote.addEventListener("click", () => {
  quoteText.innerText = "";
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const quote = document.createElement("p");
      quote.innerText = data.quote;
      const author = document.createElement("p");
      author.innerText = " - " + data.author;

      quoteText.append(quote);
      quoteText.append(author);
    });
});
