// Initialize and add the map
function initMap() {
    // The location of the center of the map
    const center = { lat: -34.397, lng: 150.644 };
    // The map, centered at the center location
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: center,
    });
    // The marker, positioned at the center location
    const marker = new google.maps.Marker({
        position: center,
        map: map,
    });
}
