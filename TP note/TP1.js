"use strict";


const $startBtn = document.getElementById("start-btn");
const $guessBtn = document.getElementById("guess-btn");
const $cowBtn = document.getElementById("cow-btn");
const $output = document.getElementById("output");
const $numUsr = document.getElementById("num-usr");
const $maxUsr = document.getElementById("max-usr");
const $maxguesses=document.createElement("button");

let secretNumber = 0;
let nbGuesses = 0;
let maxGuesses = 0;
let message=""



function launchGame(_evt) {

  secretNumber = Math.floor(Math.random() * $maxUsr.value) + 1;
  maxGuesses = Math.ceil(Math.log($maxUsr.value)) + 1;
  $maxUsr.value;
  
  $startBtn.addEventListener("click",function(_evt){
    $guessBtn.disabled=false;
    $output.innerHTML=`jeu lancé, vous avez ${maxGuesses} tentatives`;
    nbGuesses=maxGuesses;
    $guessBtn.addEventListener("click",function(_evt){
      if($numUsr.value==secretNumber){
        $output.innerHTML="Vous avez gagné";
        $guessBtn.disabled=true;
        return 0;
      }
      if($numUsr.value<secretNumber){
        $output.innerHTML=`trop bas,il vous reste ${nbGuesses} tentatives`;
        nbGuesses-=1;

          
      }
      if($numUsr.value>secretNumber){
        $output.innerHTML=`trop haut,il vous reste ${nbGuesses} tentatives`;
        nbGuesses-=1;
      }
      if(nbGuesses==0){
        $output.innerHTML="Vous avez perdu"
        $guessBtn.disabled=true;
        return 0;
      }
      
    })
});

}




$startBtn.addEventListener("click", launchGame);



function addCow(evt) {
  console.debug(evt.x, evt.y);
  const vache=document.createElement("img");
  vache.src="https://upload.wikimedia.org/wikipedia/commons/3/30/Cowicon.svg";
  document.body.appendChild(vache);
}

function toggleCow(_evt) {
  if (document.onmousedown instanceof Function) {
    document.onmousedown = null;
  } else {
    document.onmousedown = addCow;
  }
}
$cowBtn.addEventListener("click", toggleCow);
