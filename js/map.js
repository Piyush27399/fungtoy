function initialize() {

    // Map Options!

    var mapOptions = {
        center: new google.maps.LatLng(37.792694,-122.399724),
        zoom: 10,
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
        [],
    ]

    return map;
}

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