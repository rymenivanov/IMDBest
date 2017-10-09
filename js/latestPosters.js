$(function(){
    $.ajax({
        url: "latestPosters.json",
        success: function(result){
            result.posters.forEach(function(element) {
                $('.latestPosters').append('<div class="postersImgs"><div class="pImgs"><img src="'+element.url+'"></div></div>');
            }, this);
        }
    });
    $('#latestPosters').on('click', function () {
        $('.latestPosters').toggle();
    });
});