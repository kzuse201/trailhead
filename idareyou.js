import { google } from "google";

export default class MapMaker {
  constructor() {
    this.map = new google.maps.Map(document.getElementById("canvasmap"), {
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      streetViewControl: true
    });

    this.markers = [ { lat: -28.092472, lng: -52.419667 } ];

    this.setupTarget(savethedate);
    window.open(this.secret);
  }

  addMarker = data => {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(data.lat, data.lng),
      map: map,
      title: data.name
    });

    google.maps.event.addListener(marker, "click", function() {
      openInfoWindow(marker);
    });
  };

  setupTarget = num => {
    this.secret = `http://${num}.foo/`;
  };

  render = () => {
    return this.markers.map(marker => {
      return addMarker(marker);
    });
  };
}
