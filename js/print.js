document.addEventListener('DOMContentLoaded', function () {
    // var movie = [];
    var index = 0
    var templateMovie = document.getElementById('movieDIv').innerHTML;
    var searchEnter = document.getElementById("search-enter").addEventListener("click", function (event) {
        event.preventDefault()
    // document.getElementById('printHere').innerHTML= ""
        
        // movie.push(getMovieInfo(document.querySelector("#srch-term").value))
        getMovieInfo(document.querySelector("#srch-term").value).then(function () {
            document.querySelector("#srch-term").value = ""
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
                        text:arrayMovies[index].Title,
                        boxoffice:arrayMovies[index].BoxOffice,}
                ]
            }

            var div = document.createElement("div")
            div.className = "col-sm-12 aside"
            var divImg = document.createElement("div")
            var img = document.createElement("img")
            img.src = arrayMovies[index].Poster
            var divTitle = document.createElement("div")
            var a = document.createElement("a")
            // a.className = "printMovie"
            // a.setAttribute("onclick","printMovie()")
            a.innerText = arrayMovies[index].Title
            divTitle.appendChild(a)
            divImg.appendChild(img)
            div.appendChild(divImg)
            div.appendChild(divTitle)
            document.querySelector(".aside").appendChild(div)
            buton = true
            
                
            

            index++
            var template = Handlebars.compile(templateMovie);
            var readyHTML = template(allMovies);
            document.getElementById('printHere').innerHTML = readyHTML;
        
        })
    })
        // var printMovie= function() {
        // console.log("asd")
        // var film = arrayMovies.find(function(movie) {
        //     movie.Title == searchlink.innerText
        // })
        // console.log(film)
    // }

});