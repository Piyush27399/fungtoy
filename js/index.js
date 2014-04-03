// Navigation scroll down to links

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

window.onload = contentReposition;
$(window).resize(contentReposition);
$(document).ready(function() {
    mapTouchup(initialize());
});
