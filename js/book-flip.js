/* 
    這是製作翻書效果用的JS，
    若要使用要配合JQuery與book-flip.css。
*/

var currentPage = 0;

$('.book')
    .on('click', '.active', nextPage)
    .on('click', '.flipped', prevPage);

var hammertime = new Hammer($('.book')[0]);
hammertime.on("swipeleft", nextPage);
hammertime.on("swiperight", prevPage);

function prevPage() {

    $('.flipped')
        .last()
        .removeClass('flipped')
        .addClass('active')
        .siblings('.page')
        .removeClass('active');
}
function nextPage() {

    $('.active')
        .removeClass('active')
        .addClass('flipped')
        .next('.page')
        .addClass('active')
        .siblings();


}