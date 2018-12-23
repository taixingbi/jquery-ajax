
function changeSlide(direction) {
    var currentImg = $('.active');
    var nextImg = currentImg.next();
    var previousImg = currentImg.prev();

    if (direction == 'next') {
        if (nextImg.length)
            nextImg.addClass('active');
        else
            $('.slider img').first().addClass('active');
    } 

    if (direction == 'previous') {
        if (previousImg.length)
            previousImg.addClass('active');
        else
            $('.slider img').last().addClass('active');
    }

    currentImg.removeClass('active');
}
