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

function contentReposition() {
	var mainContent = document.getElementById('l-main-content');
	var mainContentHeight = $(mainContent).height();
	var screenHeight = $(window).height();
	console.log(mainContentHeight);
}

$(window).resize(function() {
	contentReposition();
})