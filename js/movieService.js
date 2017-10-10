var arrayMovies = []
function getMovieInfo(movieTitle) {
        
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
        xhr.open('GET', 'http://www.omdbapi.com/?t='+movieTitle+'&apikey=PlzBanMe', true)
        xhr.send(null)
    }).then(function(movie) {
       
        arrayMovies.push(movie)
      }, function(err) {
        console.log(err)
      })
    }