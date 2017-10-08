$(function(){
    // var id = 1;
    // for(var i = 0; i < 5; i++){
    $.ajax({
        url: "inTheaters.json",
        success: function(result){
            result.movies.forEach(function(el) {
                // $('.inTheaters').append('<div class="tMovies"><img src="'+el.Poster+'"/><p>'+el.Title+'</p></div>');
                $('.inTheaters').append('<div class="tMovies" id=""><img src="'+el.Poster+'"/><p>'+el.Title+'</p></div>');
            }, this);
        }
    });

    $('#inTheaters').on('click', function () {
        $('.inTheaters').toggle();
    });
// }

});
