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

    // InfoBox Styles
    var infoBoxOptions = {
        boxStyle: { 
            background: "#fff",
            opacity: 0.9,
            width: "150px",
            height: "30px",
            padding: "5px",
            border: "1px solid #F1C6B3",
            borderRadius: "5px",
            textAlign: "center"
        }
    }

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
            url: location[3],
        };
        new google.maps.Marker({
            position: tempLatLong,
            map: map,
            icon: img
        });
    }

    google.maps.event.addListener(marker, 'click', function(marker, i) {
        infowindow.open(map, marker);
    });

    return map;
}

google.maps.event.addDomListener(window, 'load', initialize);

function setMapScrollWheel(pMap, pVal) {
    pMap.setOptions({ scrollwheel: pVal });
}

// Enable scrolling only when user clicks on map, and disable otherwise
function mapTouchup(map){
    google.maps.event.addListener(map, 'click', function(){
        setMapScrollWheel(map, true);
    });

    $(window).scroll(function() {
        setMapScrollWheel(map, false);
    });
}