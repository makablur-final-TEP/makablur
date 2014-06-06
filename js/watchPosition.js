var watchId = null;
    function geoloc() {
    if (navigator.geolocation) {
        var optn = {
                enableHighAccuracy : true,
                timeout : Infinity,
                maximumAge : 0
        };
    watchId = navigator.geolocation.watchPosition(showPosition, showError, optn);
    } else {
            alert('Tu navegador no soporta la Geolocalización');
    }
    }
 
function showPosition(position) {
        var googlePos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var mapOptions = {
            zoom : 12,
            center : googlePos,
            mapTypeId : google.maps.MapTypeId.ROADMAP
        };
        var mapObj = document.getElementById('mapdiv');
        var googleMap = new google.maps.Map(mapObj, mapOptions);
        var markerOpt = {
            map : googleMap,
            position : googlePos,
            title : 'USTED ESTÁ AQUÍ',
            animation : google.maps.Animation.DROP
        };
        var googleMarker = new google.maps.Marker(markerOpt);
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            'latLng' : googlePos
            }, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                if (results[1]) {
                    var popOpts = {
                        content : results[1].formatted_address,
                        position : googlePos
                    };
                var popup = new google.maps.InfoWindow(popOpts);
                google.maps.event.addListener(googleMarker, 'click', function() {
                popup.open(googleMap);
            });
                } else {
                    alert('No se hanencontrado resultados');
                }
                } else {
                    alert('Geocoder fallido debido a ' + status);
                }
            });
            }
 
            function stopWatch() {
                if (watchId) {
                    navigator.geolocation.clearWatch(watchId);
                    watchId = null;
 
                }
            }
 
        function showError(error) {
        var err = document.getElementById('mapdiv');
        switch(error.code) {
        case error.PERMISSION_DENIED:
        err.innerHTML = "El usuario ha denegado la solicitus de ubicación."
        break;
        case error.POSITION_UNAVAILABLE:
        err.innerHTML = "La informacion de ubicación no está disponible."
        break;
        case error.TIMEOUT:
        err.innerHTML = "La peticion para obtener la ubicación ha excedido el tiempo."
        break;
        case error.UNKNOWN_ERROR:
        err.innerHTML = "Error desconocido."
        break;
        }
        }