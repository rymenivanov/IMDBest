document.addEventListener('DOMContentLoaded', function () {
    var movie =[];

    var templateNews = document.getElementById('movieDIv').innerHTML;
    var searchEnter = document.getElementById("search-enter").addEventListener("click", function (event) {
        event.preventDefault()
        // movie.push(getMovieInfo(document.querySelector("#srch-term").value))
        console.log(getMovieInfo(document.querySelector("#srch-term").value))   

    })
    console.log(movie)

    var allNews = {
        news: [
            { image: "", title: "184-ти път Октоберфест!", text: "Прочутият празник на бирата 'Октоберфест' започна в Мюнхен за 184-ти път. Точно на обед кметът на аварската столица Дитер Райтер заби канелката на първото буре със специален чук." },
            { image: "", title: "Патета с полицейски ескорт", text: "Полицай ескортира патица и нейните малки, за да пресекат пернатите улица в САЩ. Впечатляващият момент е заснет в Уилямс каунти, в щата Северна Дакота." },
            { image: "", title: "Какво смятат жените за най-романтичен жест?", text: "Ако искате да спечелите сърцето на дамата, забравете цветята. В представите на съвременните жени най-романтичният жест е да получат храна за вкъщи." },
            { image: "", title: "Плешивците излъчват повече мъжественост", text: "Плешивите мъже се възприемат от околните като по-мъжествени, по-властни и доста по-силни физически." },
            { image: "", title: "Прасета плуват като торпили в Черно море", text: "Група диви прасета плуват в Черно море. Видеото е заснето преди година от бургазлията Пламен Петков в района на Приморско" },
            { image: "", title: "Викингите са имали вожд жена", text: "Намерените до шведското езеро Меларен останки от древен скандинавски вожд са женски. Статия за това публикува American Journal of Physical Anthropology." },
            { image: "", title: "Ето как звучи „Деспасито” само на два калкулатора", text: "Видео на японски музикант, изпълняващ нашумелият хит 'Деспасито' само на два калкулатора, събра близо 200 000 гледания в 'Ютюб' само три дни." }
        ]
    }

    var template = Handlebars.compile(templateNews);
    var readyHTML = template(allNews);
    document.getElementById('printHere').innerHTML = readyHTML;
console.log(arrayMovies)

});