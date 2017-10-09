document.addEventListener('DOMContentLoaded', function () {
    /////////print movies////////////////////////////////
    
    function searchAgainEvent(id) {
        document.getElementById(id).addEventListener("click", function (e) {
            arrayMovies.forEach(function (element) {
                if (e.target.textContent == element.Title) {
                    document.querySelector("#srch-term").value = e.target.textContent
                    $("#search-enter").trigger("click")
                }
            })
        })
    }

    var liIndex = 0
    var recentlyWatched = [];
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
                    {
                        image: arrayMovies[index].Poster,
                        title: arrayMovies[index].Title,
                        year: arrayMovies[index].Year,
                        rated: arrayMovies[index].Rated,
                        released: arrayMovies[index].Released,
                        runtime: arrayMovies[index].Runtime,
                        genre: arrayMovies[index].Genre,
                        director: arrayMovies[index].Director,
                        writer: arrayMovies[index].Writer,
                        actors: arrayMovies[index].Actors,
                        plot: arrayMovies[index].Plot,
                        language: arrayMovies[index].Language,
                        country: arrayMovies[index].Country,
                        awards: arrayMovies[index].Awards,
                        text: arrayMovies[index].Title,
                        boxoffice: arrayMovies[index].BoxOffice,
                    }
                ]
            }
            var povtarqSe = false
            recentlyWatched.forEach(function (element) {
                if (element == arrayMovies[index].Title) {
                    povtarqSe = true
                }
            })

            if (povtarqSe == false) {
                var spanID = "btnRecentlyViewed" + index
                $(".aside").append('<div class="col-sm-12 asideDivs" style="height: 65px;"><div><img src="'+arrayMovies[index].Poster+'"></div><span id="'+spanID+'"><a>'+arrayMovies[index].Title+'</a></span></div></div>')
                recentlyWatched.push(arrayMovies[index].Title)
                searchAgainEvent(spanID)  
            }

            index++
            var template = Handlebars.compile(templateMovie);
            var readyHTML = template(allMovies);
            document.getElementById('printHere').innerHTML = readyHTML;

        }).then(function () {
            $("#buttonForWatch").append('<button id="addToWatchlist" style="position:fixed;bottom:0;background-color: rgb(52, 52, 52);"class="btn btn-primary btn-block">Add to Watchlist</button>')
            // $("#buttonForWatch").append('<button id="addToWatchlist" style="position:fixed;bottom:0;background-color: rgb(52, 52, 52);"class="btn btn-primary btn-block"></button>')
            $("#addToWatchlist").on("click", function () {
                if (!loggedUser) {
                    alert("You need to be logged to add movies your whatchlist, maaaaaafaka ")
                }else
                var loggedUser = JSON.parse(sessionStorage.getItem("Loged user"))
                povtarqSe = false
                if (loggedUser != -1) {

                if (loggedUser.arrayWatchList.length == 0) {
                    printWatchlist(arrayMovies[arrayMovies.length - 1])
                } else {

                    loggedUser.arrayWatchList.forEach(function (element) {
                        if (element.Title == arrayMovies[arrayMovies.length - 1].Title) {
                            povtarqSe = true
                        }
                    })

                    if (povtarqSe == false) {
                        printWatchlist(arrayMovies[arrayMovies.length - 1])
                    }
                }
                sessionStorage.setItem("Loged user", JSON.stringify(loggedUser))
                var local = JSON.parse(localStorage.getItem("users"))
                local.forEach(function (element) {
                    if (element.username == loggedUser.username) {
                        element.arrayWatchList = loggedUser.arrayWatchList.slice(0)
                    }
                })
                localStorage.setItem("users", JSON.stringify(local))


                function printWatchlist(movie) {
                    var liID = "btnWatchlistLi" + liIndex
                    $("#watchlistDropdown").append("<li id='"+liID+"'><a href='#'>" + movie.Title + "</a></li>")
                    searchAgainEvent(liID)
                    liIndex++
                    loggedUser.arrayWatchList.push(movie)
                }

            }

            })
        })
    })



    /////////print movies/////////////////////////////////
    /////////userNamelogin////////////////////////////////
    document.getElementById("signIN").addEventListener("click", function () {
                
                 event.preventDefault();
                 var userName = document.getElementById("inputLoginName").value
                 var userPassword = document.getElementById("inputLoginPassword").value
         
                 if (userList.login(userName, userPassword)) {
                     var watchlist = document.getElementById("watchlist").style.display = "block"
                    // alert("BRAVO VLEZNA")
                    $("#signedINusername").text(userName) 
                    alert("Loged in")
                     var toHide = document.getElementById("toHide").style.display = "none"
                     var logout = document.getElementById("logout").style.display = "block"
                }
                else{
        
                    document.getElementById("inputLoginName").value=""
                    document.getElementById("inputLoginPassword").value=""
                    alert("oburka si parolata pich ili imeto , da ne sum vrachka murzi me da pisha proverki v 2 chasa prez noshta")
                 }
                
             })
             /////////userNamelogin////////////////////////////////
             /////////userNameRegistration////////////////////////////////  
         document.addEventListener('DOMContentLoaded', function () {
                 var userEmailRegister = document.getElementById("inputRegisterEmail").value
         
                 if (userList.addUser(userNameRegister, userPasswordRegister, userEmailRegister)) {
                    alert("bravo regna se ")
                    document.getElementById("inputLoginName").value=userNameRegister
                    document.getElementById("inputLoginPassword").value=userPasswordRegister
                     userList.addUser(userNameRegister, userPasswordRegister, userEmailRegister)
                    // alert("BRAVO VLEZNA")            
                                
                }else{
                    document.getElementById("inputRegisterName").value=""
                    document.getElementById("inputRegisterEmail").value=""
                    document.getElementById("inputRegisterPassword").value=""
                    alert("Ima drug pichata s tova ime i vse oshte ne sum pisal kachestveni regexi,nadqvam se da imash chustvo za humor")
        
                 }
        
             })
             /////////userNameRegistration//////////////////////////////// 
    /////////userNameRegistration////////////////////////////////  
    //////// logout//////////////////////////////////////////////
    document.getElementById("logout").addEventListener("click", function () {
        sessionStorage.clear()        
        location.reload();
    })
    // $('#something').click(function() {
    //     location.reload();
    // });
    /////////////logout//////////////

});