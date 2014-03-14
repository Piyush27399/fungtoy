function scrollDown(name) {
	var aTag = $("a[name='" + name + "']");
	$('html,body').animate({scrollTop: aTag.offset().top}, 'slow');
}

$('#adventure-link').click(function() {
	scrollDown('adventure');
});

$('#wedding-party-link').click(function() {
	scrollDown('wedding-party');
});

$('#wedding-details-link').click(function() {
	scrollDown('wedding-details');
});

$('#registry-link').click(function() {
	scrollDown('registry');
});

$('#contact-link').click(function() {
	scrollDown('contact');
});


function setMapScrollWheel(pMap, pVal) {
    pMap.setOptions({ scrollwheel: pVal });
}

//enable scrolling only when user clicks on map, and disable otherwise
function mapTouchup(map){
    google.maps.event.addListener(map, 'click', function(){
        setMapScrollWheel(map, true);
    });

    $(window).scroll(function() {
        setMapScrollWheel(map, false);
    });
}

