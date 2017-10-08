document.addEventListener('DOMContentLoaded', function () {
    /////////print movies////////////////////////////////

    
    var loggedUser = JSON.parse(sessionStorage.getItem("Loged user"))
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
                var spanID = "btnRecentlyViewed"+index
                // var buttonID = "btnAddToWatchlist"+index
                var div = document.createElement("div")
                div.className = "col-sm-12"
                div.style.height = "65px"
                var divImg = document.createElement("div")
                var img = document.createElement("img")
                img.src = arrayMovies[index].Poster
                var span = document.createElement("span")
                span.id = spanID
                var a = document.createElement("a")
                // var button = document.createElement("button")
                // button.innerText = "Add To Watchlist"
                // button.id = btnAddToWatchlist
                a.innerText = arrayMovies[index].Title
                span.appendChild(a)
                divImg.appendChild(img)
                div.appendChild(divImg)
                div.appendChild(span)
                // div.appendChild(button)
                document.querySelector(".aside").appendChild(div)
                // $(".aside").append('<div class="col-sm-12" style="height: 65px;"><div><img src="'+arrayMovies[index].Poster+'"></div><span id="'+spanID+'"><a>"'+arrayMovies[index].Title+'"</a></span></div></div>")
                
                recentlyWatched.push(arrayMovies[index].Title)


                // document.getElementById(btnAddToWatchlist).addEventListener("click",function() {
                //     alert("WOHOOOO")
                // })

                document.getElementById(spanID).addEventListener("click",function(e) {
                        arrayMovies.forEach(function(element) {
                            if (e.target.textContent == element.Title) {
                                document.querySelector("#srch-term").value= e.target.textContent
                                $("#search-enter").trigger("click")
                            }
                        })
                    })
            }
            // document.getElementById("#btnRecentlyViewed"+index).addEventListener("click",function(e) {
            //     arrayMovies.forEach(function(element) {
            //         if (e.value == element.Title) {
            //             var newTemplate = {
            //                 news: [
            //                     {
            //                         image: arrayMovies[element].Poster,
            //                         title: arrayMovies[element].Title,
            //                         year: arrayMovies[element].Year,
            //                         rated: arrayMovies[element].Rated,
            //                         released: arrayMovies[element].Released,
            //                         runtime: arrayMovies[element].Runtime,
            //                         genre: arrayMovies[element].Genre,
            //                         director: arrayMovies[element].Director,
            //                         writer: arrayMovies[element].Writer,
            //                         actors: arrayMovies[element].Actors,
            //                         plot: arrayMovies[element].Plot,
            //                         language: arrayMovies[element].Language,
            //                         country: arrayMovies[element].Country,
            //                         awards: arrayMovies[element].Awards,
            //                         text: arrayMovies[element].Title,
            //                         boxoffice: arrayMovies[element].BoxOffice,
            //                     } 
            //                 ]
            //             }
            //             var template = Handlebars.compile(templateMovie);
            //             var readyHTML = template(newTemplate);
            //             document.getElementById('printHere').innerHTML = readyHTML;
            //         }
            //     })
            // })

            


            index++
            var template = Handlebars.compile(templateMovie);
            var readyHTML = template(allMovies);
            document.getElementById('printHere').innerHTML = readyHTML;

        }).then(function () {
            $("#buttonForWatch").append('<button id="addToWatchlist" style="position:fixed;bottom:0;background-color: rgb(52, 52, 52);"class="btn btn-primary btn-block">Add to Watchlist</button>')
            $("#addToWatchlist").on("click",function () {
                // povtarqSe = false
                if (loggedUser != -1)
                
                // loggedUser.arrayWatchList.forEach(function (element) {
                //     arrayMovies.forEach(function (element2){
                //         if (element.Title == element2.Title) {
                //             povtarqSe = true
                //         }
                //     })
                    if (loggedUser.arrayWatchList.forEach(function (element) {
                        arrayMovies.some(movie => movie.Title === element.Title)})) {
                        loggedUser.arrayWatchList.push(arrayMovies[arrayMovies.length-1])
                        console.log(loggedUser.arrayWatchList)
                        console.log(loggedUser)
                        console.log(arrayMovies)
                        }
                // })  
                // if (povtarqSe==false) {
                    
                // }
                console.log(arrayMovies)
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
            var toHide = document.getElementById("toHide").style.display = "none"
            var logout = document.getElementById("logout").style.display = "block"
        }
    })
    /////////userNamelogin////////////////////////////////
    /////////userNameRegistration////////////////////////////////  
    document.getElementById("joinBtn").addEventListener("click", function () {
        event.preventDefault();
        var userNameRegister = document.getElementById("inputRegisterName").value
        var userPasswordRegister = document.getElementById("inputRegisterPassword").value
        var userEmailRegister = document.getElementById("inputRegisterEmail").value

        if (userList.addUser(userNameRegister, userPasswordRegister, userEmailRegister)) {
            userList.addUser(userNameRegister, userPasswordRegister, userEmailRegister)
            // alert("BRAVO VLEZNA")            
        }
    })
    /////////userNameRegistration////////////////////////////////  
    //////// logout//////////////////////////////////////////////
    document.getElementById("logout").addEventListener("click", function () {
        location.reload();
    })
    // $('#something').click(function() {
    //     location.reload();
    // });
    /////////////logout//////////////

});