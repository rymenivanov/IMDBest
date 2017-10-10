$(function () {
    var theatersIndex = 0
    $.ajax({
        url: "inTheaters.json",
        success: function (result) {
            result.movies.forEach(function (el) {
                var theatersID = "btnInTheaters" + theatersIndex
                $('.inTheaters').append('<div class="tMovies" id=""><img src="' + el.Poster + '"/><span id=' + theatersID + '><a>' + el.Title + '</a></div>');
                theatersIndex++
                document.getElementById(theatersID).addEventListener("click", function (e) {
                    document.querySelector("#srch-term").value = e.target.textContent
                    $("#search-enter").trigger("click")
                })
            }, this);
        }
    });

    $('#inTheaters').on('click', function () {
        $('.inTheaters').toggle();
    });

});
