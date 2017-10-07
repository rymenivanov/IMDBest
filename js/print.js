document.addEventListener('DOMContentLoaded', function () {
    var movie = [];
    var index = 0
    var templateMovie = document.getElementById('movieDIv').innerHTML;
    var searchEnter = document.getElementById("search-enter").addEventListener("click", function (event) {
        event.preventDefault()
    // document.getElementById('printHere').innerHTML= ""
        
        // movie.push(getMovieInfo(document.querySelector("#srch-term").value))
        getMovieInfo(document.querySelector("#srch-term").value).then(function () {
            var allMovies = {
                news: [
                    {   image:arrayMovies[index].Poster, 
                        title:arrayMovies[index].Title,
                        year:arrayMovies[index].Year,
                        rated:arrayMovies[index].Rated,
                        released:arrayMovies[index].Released,
                        runtime:arrayMovies[index].Runtime,
                        genre:arrayMovies[index].Genre,
                        director:arrayMovies[index].Director,
                        writer:arrayMovies[index].Writer,                                
                        actors:arrayMovies[index].Actors,                                
                        plot:arrayMovies[index].Plot,                  
                        language:arrayMovies[index].Language,
                        country:arrayMovies[index].Country,
                        awards:arrayMovies[index].Awards,
                        text:arrayMovies[index].Title},
                ]
            }
            index++
            var template = Handlebars.compile(templateMovie);
            var readyHTML = template(allMovies);
            document.getElementById('printHere').innerHTML = readyHTML;
        })
    })
});