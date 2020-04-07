var movies = [
    {
        title: "In Bruges",
        estrelas: 5,
        hasWatched: false
    },
    {
        title: "Frozen",
        estrelas: 4.5,
        hasWatched: true
    },
    {
        title: "Mad Max",
        estrelas: 5,
        hasWatched: true
    },
    {
        title: "Les Miserables",
        estrelas: 3.5,
        hasWatched: false
    }
]

// Como eu fiz:
// movies.forEach(function (movie) {
//     if (movie.hasWatched === true) {
//         console.log("You have watched \"" + movie.title + "\" - " + movie.estrelas + " stars");
//     } else if (movie.hasWatched === false) {
//         console.log("You have not seen \"" + movie.title + "\" - " + movie.estrelas + " stars");
//     }
// });

// Forma mais dinâmica/como o prof fez:
movies.forEach(function (movie) {
    var result = "You have ";

    if (movie.hasWatched === true) {
        result += "watched ";
    } else if (movie.hasWatched === false) {
        result += "not seen ";
    }

    result += "\"" + movie.title + "\" - ";
    result += movie.estrelas + " stars";

    console.log(result);
});
