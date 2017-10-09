$(function(){
    var theatersIndex = 0
    $.ajax({
        url: "inTheaters.json",
        success: function(result){
            result.movies.forEach(function(el) {
                var theatersID = "btnInTheaters" + theatersIndex
                // $('.inTheaters').append('<div class="tMovies"><img src="'+el.Poster+'"/><p>'+el.Title+'</p></div>');
                $('.inTheaters').append('<div class="tMovies" id=""><img src="'+el.Poster+'"/><span id='+theatersID+'><a>'+el.Title+'</a></div>');
            }, this);
        }
    });

    $('#inTheaters').on('click', function () {
        $('.inTheaters').toggle();
    });
// }

});
