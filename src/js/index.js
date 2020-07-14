/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico"; //import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let pronoun = ["the", "our", "your"];
  let adj = ["awesome", "giant", "great"];
  let noun = ["dog", "flag", "horse"];
  let ext = [".com", ".us", ".net"];
  let emptyString = "";
  let myArray = [];
  for (let randomPronoun in pronoun)
    for (let randomAdj in adj)
      for (let randomNoun in noun)
        for (let randomExt in ext)
          emptyString +=
            "www." +
            pronoun[randomPronoun] +
            adj[randomAdj] +
            noun[randomNoun] +
            ext[randomExt] +
            "<br>";

  document.querySelector("#domainlist").innerHTML = emptyString;
};
