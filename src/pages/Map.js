import React from 'react';
import GoogleMapReact from 'google-map-react'
import RequestAppointmentDialog from "../RequestAppointmentDialog";
import ReactDOM from 'react-dom';
import { Button, Col, Row } from 'react-bootstrap';
import MapLegend from "../MapLegend";

function makeAppointment(name) {
  alert(name);
}

class Map extends React.Component {
  infowindow = null;

  state = {
    showRequestAppointmentDialog: false,
    selectedPlace: null,
    map: null,
    maps: null,
    markers: null
  };

  static defaultProps = {
    center: {
      lat: 51.372733,
      lng: 10.279336
    },
    markers: [],
    zoom: 6
  };

  getColor = (place) => {
    var colors = ["rot", "gelb", "gruen"];
    return colors[Math.floor(Math.random() * 3)];
  }

  handleApiLoaded = (map, maps) => {
    const controlButtonDiv = document.createElement('div');
    ReactDOM.render(
      <MapLegend />,
      controlButtonDiv);
    map.controls[maps.ControlPosition.TOP_LEFT].push(controlButtonDiv);

    this.infowindow = new maps.InfoWindow({ content: '<div id="infowindow"></div>' });
    maps.event.addListener(this.infowindow, 'domready', this.renderInfoWindow);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        map.setCenter(new maps.LatLng(position.coords.latitude, position.coords.longitude));
        map.setZoom(14);
      });
    }

    this.setState({
      map: map,
      maps: maps
    }, this.renderMap);
  }

  renderMap = () => {
    var map = this.state.map;
    var maps = this.state.maps;

    if (!map || !maps)
      return;

    this.state.markers = [];

    this.props.markers.forEach((place) => {
      var latitude = parseFloat(place.lat);
      var longitude = parseFloat(place.lon);
      var color = this.getColor(place);

      var marker = new maps.Marker({
        position: {
          lat: latitude,
          lng: longitude,
        },
        map: map,
        icon: {
          url: "tropfen_" + color  + ".png",
          size: new maps.Size(18, 30),
          origin: new maps.Point(0, 0),
          anchor: new maps.Point(9, 0)
        }
      });
      this.state.markers.push(marker);
    });



    this.state.markers.forEach((marker, i) => {
      marker.addListener('click', () => {
        this.showInfoWindow(map, marker, this.props.markers[i]);
      });
    });

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
      url = new URL(place.url);
    } catch (e) { }

    ReactDOM.render((
      <div>
        <div style={{"font-size": "14pt"}}>
          {place.name}
        </div>
        <div style={{"font-size": "12pt"}}>
          {place.address}
        </div>
        <div style={{"font-size": "12pt"}}>
          {place.zip} {place.city}
        </div>
        <br />
        {place.phone && (<div style={{"font-size": "12pt"}}>
          <b>Telefon: </b> <a href={"tel:" + place.phone}>{place.phone}</a>
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
    this.renderMap();

    return (
      <div style={{ height: '90vh', width: '100%' }}>
        <RequestAppointmentDialog
          show={this.state.showRequestAppointmentDialog}
          onClose={() => this.showRequestAppointmentDialog(false)}
          id={this.state.selectedPlace ? this.state.selectedPlace.id : 'nichts'}
        />
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDwjSllCXFltaD1GG6z0svfURl1cHaSzv8' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
        >

        </GoogleMapReact>
      </div>
    )
  }
}

export default Map;
