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



let movieObject = {};

function renderMovie(movie) {
    let movieContentCard = `<div class="card h-100" id="movie-card">
            <img src=${movie.poster} class="card-img-top" alt="image">
            <div class="card-footer">
                <h4 class="text-center">${movie.title}</h4>
                <button id="edit-movie-button" type="button" class="btn btn-primary">Edit</button>
                <button id="delete-movie-button" type="button" class="btn btn-primary">Delete</button>
            </div>
        </div>`;

    return movieContentCard;
}

function renderMovies(movies) {
    var movieContentCard = '';
    for(var i = 0; i < movies.length; i++) {
        movieContentCard += renderMovie(movies[i]);
    }
    return movieContentCard;
}


$('#add-movie-button').click(function (e) {
    //console.log(e);
    movieObject = {
        "title": $('#title-input').val(),
        "director": $('#director-input').val(),
        "year": $('#year-input').val(),
        "genre": $('#genre-input').val(),
        "actors": $('#actors-input').val(),
        "plot": $('#plot-input').val(),
        "rating": $('#rating-input').val(),
        "poster": $('#image-upload').val()
    };
    console.log(movieObject);

    let options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movieObject)
    }

    console.log(movieObject);

    fetch(movieApiURL, options).then(function(response) {
        console.log(response)
    })
})

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



// let deleteMethod = {
//       method: "DELETE"
// }
// for (let i = 5; i <= 12; i++) {
// fetch(movieApiURL + `/${i}`, deleteMethod).then(function (response) {
//     console.log(response)
// })}