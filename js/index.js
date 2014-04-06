// Navigation scroll down to links

function scrollDown(name, time) {
	var aTag = $("a[name='" + name + "']");
	$('html,body').animate({scrollTop: aTag.offset().top}, time, 'swing');
}

$('#adventure-link').click(function() {
	scrollDown('adventure', 500);
});
$('#wedding-party-link').click(function() {
	scrollDown('wedding-party', 1000);
});
$('#wedding-details-link').click(function() {
	scrollDown('wedding-details', 1500);
});
$('#registry-link').click(function() {
	scrollDown('registry', 2000);
});
$('#contact-link').click(function() {
	scrollDown('contact', 2000);
});
$('.nav-link').click(function() {
	scrollDown('nav', 1000);
});

// Reposition main div content to vertically center with background

function contentReposition() {
	var $mainDiv = $('#l-main-div');
	var $mainContent = $('#l-main-content');
	var $screenHeight = $(window).height();
	var $screenWidth = $(window).width();
	var $mainContentHeight = $mainContent.outerHeight(true);
	var marginTop = ($screenHeight - $mainContentHeight) / 2;

	if (marginTop <= 30) {
		$mainDiv.css("padding", "30px");
	}
	else if (marginTop > 30 && $mainContentHeight <= $screenHeight) {
		if ($screenWidth > 480) {
			$mainDiv.css({
				"padding-top": marginTop,
				"padding-bottom": marginTop,
				"padding-left": "30px",
				"padding-right": "30px"
			});
		}
		else if ($screenWidth <= 480) {
			$mainDiv.css({
				"padding-top": marginTop,
				"padding-bottom": marginTop,
				"padding-left": "10px",
				"padding-right": "10px"
			});		
		}
	}
}

window.onload = function() {
	contentReposition();
	mapTouchup(initialize());
};
$(window).resize(contentReposition);

