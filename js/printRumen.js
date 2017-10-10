$(function () {
    $.ajax({
        url: "oscarWinners.json",
        success: function (result) {
            result.movies.forEach(function (el) {
                $('#printHereIdiot').append('<div><div class="card1"><div class="front"><img src="' + el.Poster +
                    '"/></div><div class="back"><div><h3>' + el.Title + ' (' + el.Year + ') ' +
                    '</h3></p><p>Rated: ' + el.Rated + '</p><p>Rleased: ' + el.Released +
                    '</p><p>Runtime: ' + el.Runtime + '</p><p>Genre: ' + el.Genre + '</p><p>Director: ' + el.Director +
                    '</p><p>Writer: ' + el.Writer + '</p><p>Actors: ' + el.Actors + '</p></div></div></div></div>');
            }, this);
        }
        
    });
    $('#oscarWinners').on('click', function () {
        $('#printHereIdiot').toggle();
    });
    $('.videoStart').on('click', function () {
        $('.videoDiv').css('visiblity', 'hidden');
    });
});

