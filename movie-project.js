"use strict";

const movieApiURL = "https://third-persistent-damselfly.glitch.me/movies";

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

// Search Bar
// $('#search-button').click(function (movie) {
//     const searchInput = $('#search-bar').val();
//     let movieResponse = fetch(movieApiURL);
//     return movieResponse
//         .then(response => {
//             return response.json()
//         })
//         .then(movieData => {
//             console.log(movieData);
//             for (let movies of movieData) {
//                 if(searchInput === movies.title) {
//                     return showMovies(movieApiURL + `/5`);
//                     // console.log($('#movie-card'));
//                 }
//             }
//         })
// })

// Show Movies/Create Movie cards
const grabMovies = () => {
    return fetch(movieApiURL).then(response =>
        response.json());
}


let showMovies = () => {
    grabMovies().then(function(movie){
        let movieContentCard = ``;
        console.log(movie);
        for (let i = 0; i < movie.length; i++) {
            // console.log(movie[i]);
            movieContentCard += `<div class="card" id="movie-card">
                    <img src="${movie[i].poster}" class="card-img-top" alt="image" style="width: 250px; height: 336px;">
                    <div class="card-footer">
                        <h4 class="text-center">${movie[i].title}</h4>
                    </div>
                </div>`
            document.getElementById('wrapper').innerHTML = (movieContentCard);
        }
    });
}
showMovies(movieApiURL);



// Search Bar
$('#search-button').click(function(e) {
    e.preventDefault();
    const searchInput = $('#search-bar').val();
    console.log(searchInput);
    fetch(movieApiURL).then(response => response.json()).then(function (movie) {
        let searchDisplay = ``;
        for (let i = 0; i < movie.length; i++) {
            if (movie[i].title.toLowerCase().includes(searchInput.toLowerCase())) {
                 searchDisplay += `<div class="card" id="movie-card">
                    <img src="${movie[i].poster}" class="card-img-top" alt="image" style="width: 250px; height: 336px;">
                    <div class="card-footer">
                        <h4 class="text-center">${movie[i].title}</h4>
                        <button id="edit-movie-button" type="button" class="btn btn-primary">Edit</button>
                        <button id="delete-movie-button" type="button" class="btn btn-primary">Delete</button>
                    </div>
                </div>`

                document.getElementById('wrapper').innerHTML = (searchDisplay);
            }
        }
    })
})

// Dropdown Options Function
let dropdownOptions = () => {
    grabMovies().then(function(movie){
        let options = ``;
        console.log(movie);
        for (let i = 0; i < movie.length; i++) {
            // console.log(movie[i]);
            options += `<option value="${movie[i].id}">${movie[i].title}</option>`
            document.getElementById('movie-ids').innerHTML = (options);
        }
    });
}
dropdownOptions();

// Delete Function
$('#delete-content').click(function(e) {
    e.preventDefault();
    let deleteMethod = {
        method: "DELETE"
    }
    console.log(`/${$('#movie-ids').val()}`)
    fetch(movieApiURL + `/${$('#movie-ids').val()}`, deleteMethod).then(function (response) {
        console.log(response)
    }).then(showMovies).then(dropdownOptions)
})



// Add movie function below
let movieObject = {};

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
    }).then(showMovies);
});

// $("#delete-movie-button").click(function (e) {
//     let deleteMethod = {
//         method: "DELETE"
//     }
//
//     fetch(movieApiURL + `/${movie[i].id}`, deleteMethod).then(function (response) {
//         console.log(response)
//     })
//
// })

// function deleteME(`${movie[i].id}`) {
//     $("delete-movie-button").click(function (e) {
//         let deleteMethod = {
//             method: "DELETE"
//         }
//     })
// }



// let deleteMethod = {
//       method: "DELETE"
// }
// for (let i = 5; i <= 12; i++) {
// fetch(movieApiURL + `/${i}`, deleteMethod).then(function (response) {
//     console.log(response)
// })}