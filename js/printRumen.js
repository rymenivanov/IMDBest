$(function () {
    $.ajax({
        url: "oscarWinners.json",
        success: function (result) {
            result.movies.forEach(function (el) {
                $('#printHereIdiot').append('<img src="' + el.Poster + '"<h3>' + el.Title + '</h3><p>' + el.Plot + '</p>');
            }, this);
        }
    });

    $('#oscarWinners').click(function (){
        $('#printHereIdiot').toggle();
    });
    

});
// var button = document.getElementById('oWinners');
// var div = document.getElementById('printHereIdiot');
// button.addEventListener('click', function () {
//     div.style.display = 'block';
// });

