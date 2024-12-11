"use strict";

const quoteTxt = document.querySelector(".quote");
const btnQuote = document.querySelector(".btn-quote");



async function randomQuote() {
    const data = await fetch("https://api.quotable.io/random");
    const result = await data.json();
    const { content } = result;
    quoteTxt.textContent = content;
    btnQuote.textContent = "New Quote";
}


btnQuote.addEventListener("click", randomQuote)