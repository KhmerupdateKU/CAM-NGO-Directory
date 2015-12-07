function getMap(element, map_latlng) {
    var split_latlng = map_latlng.split(",");
    var lat = split_latlng[0];
    var lng = split_latlng[1];
    var defaultLatLng = new google.maps.LatLng(lat, lng);
    if (navigator.geolocation) {
        function success(pos) {
            drawMap(defaultLatLng);
        }
        function fail(error) {
            drawMap(defaultLatLng);
        }
        navigator.geolocation.getCurrentPosition(success, fail, {maximumAge: 500000, enableHighAccuracy: true, timeout: 6000});
    } else {
        drawMap(defaultLatLng);
    }
    function drawMap(latlng) {
        var myOptions = {
            zoom: 15,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById(element), myOptions);
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "Greetings!"
        });
    }
}
