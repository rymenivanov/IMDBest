$(function () {
    $.ajax({
        url: "oscarWinners.json",
        success: function (result) {
            result.movies.forEach(function (el) {
                $('#printHereIdiot').append('<img style="float: left;" class="videoStart" src="' + el.Poster +
                    '"/><div style="visibility: visible;" class="videoDiv"><video controls style="max-width:711.11px; height: 400px;"><source src="' + el.Trailer + '"></video></div><h3>Title: ' + el.Title +
                    '</h3><p>Year: ' + el.Year + '</p><p>Rated: ' + el.Rated + '</p><p>Rleased: ' + el.Released +
                    '</p><p>Runtime: ' + el.Runtime + '</p><p>Genre: ' + el.Genre + '</p><p>Director: ' + el.Director +
                    '</p><p>Writer: ' + el.Writer + '</p><p>Actors: ' + el.Actors + '</p>');
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

