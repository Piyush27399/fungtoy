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
        ['Shakespeare Garden', 37.768682, -122.466783, 'img/wedding-date.png', 'Martin Luther King Jr Dr', 'San Francisco, CA 94118'],
        ['Academy of Science', 37.769979, -122.466288, 'img/wedding-glasses.png', '55 Music Concourse Dr', 'San Francisco, CA 94118'],
        ['Grand Hyatt San Francisco', 37.78913, -122.40725, 'img/hotel.png', '345 Stockton St', 'San Francisco, CA 94108'],
        ['The Westin San Francisco Airport', 37.604182, -122.376023, 'img/hotel.png', '444 Stockton St', 'San Francisco, CA 94108'],
        ['Sutter & Stockton Parking', 37.78956, -122.4068945, 'img/wedding-parking.png', '1 Old Bayshore Hwy', 'Millbrae, CA 94030']
    ]

    var marker;
    var markers = [];
    var infowindow = new google.maps.InfoWindow();

    var directionsDisplay = new google.maps.DirectionsRenderer();
    var directionsService = new google.maps.DirectionsService();
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById('directions-panel'));

    for (var i = 0; i < locations.length; i++) {
        var location = locations[i];
        var img = {url: location[3]};
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(location[1],location[2]),
            map: map,
            icon: img
        });
        google.maps.event.addListener(marker, 'click', (function(mark, i) {
            return function() {
                var contentDiv = document.createElement('div');
                var title = document.createElement('h3');
                title.innerHTML = locations[i][0];

                var address = document.createElement('p');
                address.innerHTML = locations[i][4] + "<br/>" + locations[i][5];

                var starting = document.createElement('span');
                starting.innerHTML = 'Start &nbsp;';                

                var input = document.createElement('input');
                input.setAttribute('type', 'textbox');

                var directions = document.createElement('p');
                var directionsLink = document.createElement('a');
                directionsLink.innerHTML = 'Get Directions!';
                directions.appendChild(directionsLink);

                contentDiv.appendChild(title);
                contentDiv.appendChild(address);
                contentDiv.appendChild(starting);
                contentDiv.appendChild(input);
                contentDiv.appendChild(directions);
                contentDiv.appendChild(document.createElement("br"));

                directionsLink.addEventListener('click', function() {
                    var start = input.value;
                    var request = {
                        origin: start,
                        destination: locations[i][4] + ", " + locations[i][5],
                        travelMode: google.maps.TravelMode.DRIVING
                    };
                    directionsService.route(request, function(result, status) {
                        if (status == google.maps.DirectionsStatus.OK) {
                            directionsDisplay.setDirections(result);
                        }
                    });
                    infowindow.close();
                });

                infowindow.setContent(contentDiv);
                infowindow.open(map, mark);
            }
        })(marker, i));
    }
}

google.maps.event.addDomListener(window, 'load', initMap);