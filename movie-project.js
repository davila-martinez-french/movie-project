"use strict";


const movieApiURL = "https://codeup-json-server.glitch.me/movies";

// Initial loading page below
// let pageLoader = setTimeout(function(){
//     $('#loading-container').fadeOut()
// }, 2000);
//
// window.addEventListener("load", pageLoader);

//Restful API below
// let movieData = $.ajax(`${movieApiURL}`)
// console.log(movieData);
// // let JSON = movieData;
// // console.log(JSON);
// $.ajax(movieData).done(function(data) {
//     //console.log(data);
//     console.log("Success!")
// }).fail(function(jqXhr) {
//     console.log("Error: Check your file path.");
// }).always(function() {
//     console.log("Looking through inventory!");
// });



let movieObject = {
    "title": $('#title-input').val()
};


//console.log(movieObject);

$('#add-movie-button').click(function (e) {
    //console.log(e);
    console.log(movieObject.title);
})

// let options = {
//     method: "POST",
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(movieObject)
// }
//
// fetch(movieApiURL, options).then(function(response) {
//     console.log(response)
// })


// Search Bar
function movies(movie) {
    let movieResponse = fetch(movieApiURL);
    return movieResponse
        .then(response => {
            //console.log(resp.json())
            return response.json()
        })
        .then(movieData => {
            for (let movies of movieData) {
                if(movie === movies.title) {
                    // console.log($('#movie-card'));
                }
            }
        })
}

movies("down");


// let deleteMethod = {
//       method: "DELETE"
// }
// for (let i = 5; i <= 66; i++) {
// fetch(movieApiURL + `/${i}`, deleteMethod).then(function (response) {
//     console.log(response)
// })}