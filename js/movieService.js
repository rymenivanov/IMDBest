var arrayMovies = []
// var searching = false;
function getMovieInfo(movieTitle) {
    // if (!searching) {
        
    searching=true;
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.addEventListener('load', function () {
            if ((xhr.readyState == 4) ||(xhr.readyState == 3)){
                if (xhr.status >= 200) {
                    var movie = JSON.parse(xhr.responseText);

                    resolve(movie)
                }
                else {
                    reject({ status: xhr.statusText})
                }
            }
        })
        xhr.open('GET', 'http://www.omdbapi.com/?t='+movieTitle+'&apikey=PlsBanMe', true)
        xhr.send(null)
    }).then(function(movie) {
       
        arrayMovies.push(movie)
        // searching=true
      }, function(err) {
        console.log(err)
      })
    }
// }
// getMovieInfo("the matrix")


// $('#tozibuton').on('click', function () {
//     $.get('http://www.theimdbapi.org/api/find/movie?title=jaws&year=').then(function (movie) {
//         console.log((movie[0].metadata+ " " + movie[0].title));
//     }).catch(function (err) {
//         console.log(err);
//         $('#result').text(err);
//     });
// });

// console.log("vliza we")