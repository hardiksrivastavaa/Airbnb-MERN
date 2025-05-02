const map = new maplibregl.Map({
    container: "map",
    zoom: 9,
    center: listing.geometry.coordinates,
    style: `https://api.maptiler.com/maps/streets/style.json?key=${mapToken}`,
});

const marker = new maplibregl.Marker({ color: "red" })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(
        new maplibregl.Popup({ offset: 45 }).setHTML(
            `<h5><strong>${listing.title}</strong></h5><h6>${listing.location}</h6>`
        )
    )
    .addTo(map);
