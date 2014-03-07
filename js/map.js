function initialize() {

	// Map Options!

		var mapOptions = {
		center: new google.maps.LatLng(37.792694,-122.399724),
		zoom: 10,
		mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById("map-wedding"), mapOptions);

	// Map Styles!

		var styles = [
  			{stylers: [
      				{ hue: "#AECC8F" },
      				{ saturation: -40 }
    				]},
  			{featureType: "road",
    			elementType: "labels",
    			stylers: [
      				{ visibility: "off" }
    			]},
  			{featureType: "road.highway",
  				stylers: [
  					{ hue: "#9885c7" },
  					{ saturation: -10 },
  					{ lightness: 65 }
  				]},
  			{featureType: "administrative.locality",
    			elementType: "labels",
    			stylers: [
      				{ visibility: "off" }
    			]},
  			{featureType: "poi",
    			elementType: "labels",
    			stylers: [
      				{ visibility: "off" }
    			]},
  			{featureType: "water",
  				stylers: [
  				{ saturation: 5 }
  				]}
  		]

		map.setOptions({styles: styles});
}