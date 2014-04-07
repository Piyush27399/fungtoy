function initMap() {

    // Map Options!
    var mapOptions = {
        center: new google.maps.LatLng(37.73,-122.33),
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
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

    var locations = [
        ['Shakespeare Garden', 37.768682, -122.466783, 'img/wedding-date.png'],
        ['Academy of Science', 37.769979, -122.466288, 'img/wedding-glasses.png'],
        ['Grand Hyatt San Francisco', 37.78913, -122.40725, 'img/hotel.png'],
        ['Westin SFO', 37.604182, -122.376023, 'img/hotel.png'],
        ['Sutter & Stockton Parking', 37.78956, -122.4068945, 'img/wedding-parking.png']
    ]

    for (var i = 0; i < locations.length; i++) {
        var location = locations[i];
        var tempLatLong = new google.maps.LatLng(location[1],location[2]);
        var img = {
            url: location[3]
        };
        var marker = new google.maps.Marker({
            position: tempLatLong,
            map: map,
            icon: img
        });
        var infowindow = new google.maps.InfoWindow({
            content: location[0]
        });
    }

    google.maps.event.addListener(marker, 'click', function(i, marker) {
        infowindow.open(map, marker);
    });
}

google.maps.event.addDomListener(window, 'load', initMap);