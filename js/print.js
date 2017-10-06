document.addEventListener('DOMContentLoaded', function () {
    var movie = [];

    var templateNews = document.getElementById('movieDIv').innerHTML;
    var searchEnter = document.getElementById("search-enter").addEventListener("click", function (event) {
        event.preventDefault()

        // movie.push(getMovieInfo(document.querySelector("#srch-term").value))
        getMovieInfo(document.querySelector("#srch-term").value).then(function () {
            var allNews = {
                news: [
                    { image:arrayMovies[0].Poster, title:arrayMovies[0].Title ,year:arrayMovies[0].Year,rated:arrayMovies[0].Rated,

                        released:arrayMovies[0].Released,
                        runtime:arrayMovies[0].Runtime,
                        genre:arrayMovies[0].Genre,
                        director:arrayMovies[0].Director,
                        writer:arrayMovies[0].Writer,                                
                        actors:arrayMovies[0].Actors,                                
                        plot:arrayMovies[0].Plot,                  
                        language:arrayMovies[0].Language,
                        country:arrayMovies[0].Country,
                        awards:arrayMovies[0].Awards,
                        text:arrayMovies[0].Title},
                ]
            }
            var template = Handlebars.compile(templateNews);
            var readyHTML = template(allNews);
            document.getElementById('printHere').innerHTML = readyHTML;
        })
    })
});