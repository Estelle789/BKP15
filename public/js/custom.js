function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-116371524-1');
function negativeFunction(id){
    var input = 'input'
    input = input.concat(id);
    if(document.getElementById(input).value > 0){
        document.getElementById(input).value= Number(document.getElementById(input).value) - 1;
    }
    
}
/*
var getLocation = function() {
var currgeocoder;

//Set geo location lat and long

navigator.geolocation.getCurrentPosition(function(position, html5Error) {

    geo_loc = processGeolocationResult(position);
    currLatLong = geo_loc.split(",");
    initializeCurrent(currLatLong[0], currLatLong[1]);
})};

//Get geo location result

function processGeolocationResult(position) {
html5Lat = position.coords.latitude; //Get latitude
html5Lon = position.coords.longitude; //Get longitude
console.log(html5Lat,html5Lon);
return (html5Lat).toFixed(8) + ", " + (html5Lon).toFixed(8);
}

//Check value is present or not & call google api function

function initializeCurrent(latcurr, longcurr) {
currgeocoder = new google.maps.Geocoder();
console.log(latcurr + "-- ######## --" + longcurr);

if (latcurr != '' && longcurr != '') {
var myLatlng = new google.maps.LatLng(latcurr, longcurr);
console.log(myLatlng);
return getCurrentAddress(myLatlng);
}
}

//Get current address

function getCurrentAddress(location) {
currgeocoder.geocode({
 'location': location

}, function(results, status) {

if (status == google.maps.GeocoderStatus.OK) {
   console.log(results[1]);


   $("#address_input").val(results[1].formatted_address);
} else {
   alert('Geocode was not successful for the following reason: ' + status);
}
});
}
*/