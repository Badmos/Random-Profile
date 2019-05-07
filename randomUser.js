"use strict";
let url = "https://randomuser.me/api",
    image = document.querySelector("img"),
    fullName = document.querySelector("#fullName"),
    moniker = document.querySelector("#moniker"),
    email = document.querySelector("#email"),
    city = document.querySelector("#city"),
    button = document.querySelector("#button");

button.addEventListener("click", fetchUserData);

// refactored code to show just the flow of fetch.

function fetchUserData() {
    var url = "https://randomuser.me/api";
    fetch(url)
        .then(throwError)
        .then(returnPromiseAsJson)
        .then(processData)
        .catch(logError)
}


function throwError(response) {
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response;
}

function returnPromiseAsJson(response) {
    return response.json();
}

function processData(data) {
    fullName.innerText = data.results[0].name.first + " " + data.results[0].name.last;
    moniker.innerText = data.results[0].login.username;
    email.innerText = data.results[0].email;
    city.innerText = data.results[0].location.city;
    image.src = data.results[0].picture.large;
}

function logError(error) {
    console.log(error);
}