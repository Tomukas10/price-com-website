$(window).on('resize', function() {
    if($(window).height() < 400) {
        $('#body').addClass('limit1980');
        $('#body').removeClass('limit1200');
    }else{
        $('#body').addClass('limit1980');
        $('#body').removeClass('limit400');
    }
})