//javascript

//on DOM ready
$(document).ready(function () {
    var borderIndent = 25;

    console.log("jquery is her");
    $('.granite-landing-wrap').center(false).center(false);

    $('.granite-line-wrapper').css({
        "height": $(window).height() - borderIndent + "px",
        "width": $(window).width() - borderIndent + "px",
        "top": borderIndent / 2 + "px",
        "left": borderIndent / 2 + "px"
    });
});
$(window).load(function () {
    // initializeMap();
})
// on window resize
$(window).resize(function () {
    $('.granite-landing-wrap').center(false);
})

//custom centering function
jQuery.fn.center = function(parent) {
    parent = parent ? this.parent : window;
    console.log($(parent).width(), this.outerWidth(), $(parent).height(), this.outerHeight() )
    this.css({
        "position": "absolute",
        "top": ((($(parent).height() - this.outerHeight()) / 2) + $(parent).scrollTop() + "px"),
        "left": ((($(parent).width() - this.outerWidth()) / 2) + $(parent).scrollLeft() + "px")
    });
    return this;
};

$('.image-holder').bind('mouseenter mouseleave', function () {
    console.log('yes senpai');
    $(this).find('img').toggleClass('granite-image-focused');
    $(this).find('h6').toggleClass('granite-h6-focused');
});

$(document).bind('scroll', function () {
    var blurred = $('.granite-blur'),
    removedText = $('.granite-landing-wrap'),

    sectionHeight = $('.granite-background-image').height(),
    opacity = 0,
    multiplier = 1.5;

    opacity = $(window).scrollTop() / sectionHeight * multiplier;
    if (opacity <= 1){
        blurred.css('opacity', opacity);
        removedText.css('opacity', 1 - opacity);
    }
});

function initializeMap() {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
        center: new google.maps.LatLng(42.106228, -88.289212),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        // draggable: false,
        scaleControl: false,
        // zoomControl: false,
        // panControler: false,
        disableDoubleClickZoon: true


    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
    // google.maps.event.addDomListener(window, 'load', initializeMap);
    var graniteMarker = new google.maps.Marker({
        map: map,
        position: mapOptions.center,
        customInfo: 'Granite Factory'
    });
    var mapUrl = "https://www.google.com/maps/place/Granite+Factory+Inc/@42.1063118,-88.2912509,17z/data=!3m1!4b1!4m2!3m1!1s0x880f0e54b84f3661:0xfae68957b42b701c";
    google.maps.event.addListener(graniteMarker, 'click', function () {
        window.location.assign(mapUrl);
    })

}

function eqfeed_callback(results) {
    map.data.addGeoJson(results);
}
