"use strict";

// Init session storage
if (!sessionStorage.getItem("diamonds"))
    sessionStorage.setItem("diamonds", "0");

if (!sessionStorage.getItem("diamondOreDeg"))
    sessionStorage.setItem("diamondOreDeg", "0");

if (!sessionStorage.getItem("diamondOreScale"))
    sessionStorage.setItem("diamondOreScale", "1");

if (!sessionStorage.getItem("martinDeg"))
    sessionStorage.setItem("martinDeg", "0");

if (!sessionStorage.getItem("martinDirection"))
    sessionStorage.setItem("martinDirection", "Right");

// Main shit
setInterval(function()
{
    // Diamond ore animation
    const diamondOre = document.querySelector(".diamondOre");

    let degrees = +sessionStorage.getItem("diamondOreDeg");
    degrees = Math.floor(Math.random() * 20);

    let scale = +sessionStorage.getItem("diamondOreScale");
    if (scale < 1)
        scale += 0.3;
    diamondOre.style.transform = `rotate(${degrees}deg) scale(${scale})`;
    sessionStorage.setItem("diamondOreDeg", degrees);
    sessionStorage.setItem("diamondOreScale", scale);

    // Update diamond counter
    let diamondCounter = document.querySelector(".diamondCounter p");
    let diamonds = sessionStorage.getItem("diamonds");
    diamondCounter.innerHTML = diamonds;

    // Animate Martin
    const martin = document.querySelector(".martin");

    let martinDegrees = +sessionStorage.getItem("martinDeg");
    let martinDirection = sessionStorage.getItem("martinDirection");

    if (martinDirection == "Right")
        martinDegrees += 1;
    else if (martinDirection == "Left")
        martinDegrees -= 1;

    if (martinDegrees > 20)
        martinDirection = "Left";
    if (martinDegrees < -20)
        martinDirection = "Right";

    martin.style.transform = `rotate(${martinDegrees}deg)`;

    sessionStorage.setItem("martinDeg", martinDegrees);
    sessionStorage.setItem("martinDirection", martinDirection);

}, 40);

// Make pickaxe follow 
const cursor = document.querySelector(".pickaxe");
document.addEventListener("mousemove", function(Event)
{
    const pickaxe = document.querySelector(".pickaxe");
    let x = Event.pageX;
    let y = Event.pageY;

    pickaxe.style.left = `${x-20}px`;
    pickaxe.style.top = `${y-30}px`;
});


// Click diamond ore
const diamondOre = document.querySelector(".diamondOre");
diamondOre.addEventListener("click", function()
{
    // Set ore scale
    sessionStorage.setItem("diamondOreScale", "0.2");

    // Increase diamond counter
    let diamonds = +sessionStorage.getItem("diamonds");
    diamonds++;
    sessionStorage.setItem("diamonds", diamonds);

    // Play sound
    var audio = document.getElementById("audio");
    audio.play();

});


