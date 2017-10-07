document.addEventListener('DOMContentLoaded', function () {
    /////////print movies////////////////////////////////
   
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
                        text:arrayMovies[index].Title,
                        boxoffice:arrayMovies[index].BoxOffice,}
                ]
            }
            index++
            var template = Handlebars.compile(templateMovie);
            var readyHTML = template(allMovies);
            document.getElementById('printHere').innerHTML = readyHTML;
        })
    })
    /////////print movies/////////////////////////////////
    /////////userNamelogin////////////////////////////////
    document.getElementById("signIN").addEventListener("click",function () {
        event.preventDefault();
        var userName = document.getElementById("inputLoginName").value
        var userPassword = document.getElementById("inputLoginPassword").value

        if (userList.login(userName,userPassword)) {
            var watchlist = document.getElementById("watchlist").style.display="block"
            // alert("BRAVO VLEZNA")
            var toHide =document.getElementById("toHide").style.display="none"
            var logout = document.getElementById("logout").style.display="block"
        }
    })
    /////////userNamelogin////////////////////////////////
    /////////userNameRegistration////////////////////////////////  
    document.getElementById("joinBtn").addEventListener("click",function () {
        event.preventDefault();
        var userNameRegister = document.getElementById("inputRegisterName").value
        var userPasswordRegister = document.getElementById("inputRegisterPassword").value
        var userEmailRegister = document.getElementById("inputRegisterEmail").value

        if (userList.addUser(userNameRegister,userPasswordRegister,userEmailRegister)) {
            userList.addUser(userNameRegister,userPasswordRegister,userEmailRegister)
            // alert("BRAVO VLEZNA")            
        }
    })
    /////////userNameRegistration////////////////////////////////  
    //////// logout//////////////////////////////////////////////
    document.getElementById("logout").addEventListener("click",function () {
        location.reload();
    })
    // $('#something').click(function() {
    //     location.reload();
    // });
    /////////////logout//////////////
    
});