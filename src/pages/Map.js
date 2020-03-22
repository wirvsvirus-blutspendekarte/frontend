import React from 'react';
import GoogleMapReact from 'google-map-react'
import RequestAppointmentDialog from "../RequestAppointmentDialog";
import ReactDOM from 'react-dom';
import { Button, Col, Row } from 'react-bootstrap';
import MapLegend from "../MapLegend";

const MARKERS = require('../data.json');

function makeAppointment(name) {
  alert(name);
}

class Map extends React.Component {
  infowindow = null;

  state = {
    showRequestAppointmentDialog: false,
    selectedPlace: null
  };

  static defaultProps = {
    center: {
      lat: 51.372733,
      lng: 10.279336
    },
    zoom: 6
  };



  showCurrentLocation = () => {

  }


  componentDidMount() {
    this.showCurrentLocation()
  }

  getColor = (place) => {
    var colors = ["rot", "gelb", "gruen"];
    return colors[Math.floor(Math.random() * 3)];
  }

  handleApiLoaded = (map, maps, places) => {
    const markers = [];
    this.infowindow = new maps.InfoWindow({ content: '<div id="infowindow">test</div>' });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        map.setCenter(new maps.LatLng(position.coords.latitude, position.coords.longitude));
        map.setZoom(14);
      });
    }

    maps.event.addListener(this.infowindow, 'domready', this.renderInfoWindow);


    places.forEach((place) => {
      var latitude = place.Latitude;
      var longitude = place.Longitude;
      var color = this.getColor(place);

      var marker = new maps.Marker({
        position: {
          lat: latitude,
          lng: longitude,
        },
        map: map,
        icon: {
          url: "tropfen_" + color  + ".png",
          // This marker is 20 pixels wide by 32 pixels high.
          size: new maps.Size(18, 30),
          // The origin for this image is (0, 0).
          origin: new maps.Point(0, 0),
          // The anchor for this image is the base of the flagpole at (0, 32).
          anchor: new maps.Point(9, 0)
        }
      });
      markers.push(marker);
    });



    markers.forEach((marker, i) => {
      marker.addListener('click', () => {
        this.showInfoWindow(map, marker, places[i]);
      });
    });

    const controlButtonDiv = document.createElement('div');
    ReactDOM.render(
      <MapLegend />,
      controlButtonDiv);
    map.controls[maps.ControlPosition.TOP_LEFT].push(controlButtonDiv);
  }

  showInfoWindow = (map, marker, place) => {
    this.setState({
      selectedPlace: place
    }, function() {
      this.infowindow.open(map, marker);
    });
  }

  showRequestAppointmentDialog = (show) => {
    this.setState({
      showRequestAppointmentDialog: show
    });
  }

  renderInfoWindow = () => {
    var place = this.state.selectedPlace;
    var url = null;

    try {
      url = new URL(place.Website);
    } catch (e) { }

    ReactDOM.render((
      <div>
        <div style={{"font-size": "14pt"}}>
          {place.Name}
        </div>
        <div style={{"font-size": "12pt"}}>
          {place.Adresse}
        </div>
        <div style={{"font-size": "12pt"}}>
          {place.PLZ} {place.Ort}
        </div>
        <br />
        {place.Telefon && (<div style={{"font-size": "12pt"}}>
          <b>Telefon: </b> <a href={"tel:" + place.Telefon}>{place.Telefon}</a>
        </div>)}
        {url && (<div style={{"font-size": "12pt"}}>
          <b>Web:</b> <a href={url}>{url.hostname}</a>
        </div>)}
        <br />
        <Button
          style={{width: "100%"}}
          size={"sm"}
          onClick={this.showRequestAppointmentDialog}>Termin vereinbaren</Button>
      </div>
    ), document.getElementById('infowindow'))
  }


  render () {
    return (
      <div style={{ height: '90vh', width: '100%' }}>
        <RequestAppointmentDialog
          show={this.state.showRequestAppointmentDialog}
          onClose={() => this.showRequestAppointmentDialog(false)}
        />
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDwjSllCXFltaD1GG6z0svfURl1cHaSzv8' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps, MARKERS)}
        >

        </GoogleMapReact>
      </div>
    )
  }
}

export default Map;
