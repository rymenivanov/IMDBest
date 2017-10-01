function getMovieInfo(movieTitle ) {
    return new Promise(function (resolve,reject) {
        var xhr = new HMLHttpRequest();

        xhr.addEventListener('readystatechange',function (params) {
            if (xhr.readyState == 4) {
                if ((xhr.status>=200) && (xhr.status <=299)) {
                    var movie = JSON.parse(xhr.responseText);
                    
                    resolve(movie)
                }
                else{
                    reject({status:xhr.statusText,error})
                }
            }
        })
        xhr.open('GET', 'http://www.omdbapi.com/?t=t='+movieTitle+'&apikey=PlzBanMe',true)
        xhr.send(null)
    })
}