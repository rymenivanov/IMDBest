// // var movie1=""
// var arrayM=[{}]
// // var title="++"
function getMovieInfo(movieTitle) {
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
        xhr.open('GET', 'http://www.omdbapi.com/?t=' + movieTitle + '&apikey=PlzBanMe', true)
        xhr.send(null)
    })
}
// var m={};
// var movies=(function(){
//     getMovieInfo('world war z').then(function (movie) {
//         console.log(movie.Actors)
//         title=movie.Title
//         console.log(movie.Genre)
//         console.log(title)
//         arrayM.push(movie.Actors)
//         console.log(arrayM[1])

// for(prop in movie){
//     // if(movie.hasOwnProperty(prop)){
//     //     m[prop]=movie[prop];
//     //     m[prop.value]=movie[prop.value];
//     //     console.log(prop.name)
//     // }
//     for(prop in movie){
//      m[prop]=movie[prop];
//     //  console.log(m[prop])
//     }
// }
// console.log(m)
// })


// return m;
//     })();
//     for(prop in movies){
//         alert(movies[prop]);
//     }
// getMovieInfo("it").then(function (movie) {
//     // console.log(movie.Title)
//     // console.log(movie.Genre)
//     // console.log(movie.Title)
//     // console.log(movie.Title)
//     // console.log(movie.Title)
//     // arrayM.push(movie)
//     // console.log(arrayM[1])

// for(prop in movie){
// // if(movie.hasOwnProperty(prop)){
// //     m[prop]=movie[prop];
// //     m[prop.value]=movie[prop.value];
// //     console.log(prop.name)
// // }
// for(prop in movie){
//  m[prop]=movie[prop];
// //  console.log(m[prop])
// }
// }
// console.log(m)
// }).catch(function () {
// console.log("Promise Rejected");
// });

    
// // console.log(m)

// for (prop in m)
// console.log(arrayM)
// // console.log()
// // console.log(title)

