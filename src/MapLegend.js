import React from 'react';

class MapLegend extends React.Component {
  render() {
    return (
    <div style={{margin: "10px", backgroundColor: "white", padding: "5px", border: "1px solid #000", fontSize: "120%"}}>
      <div>
        <div style={{backgroundImage: "url(ampel.svg)", backgroundSize: "80px", height: "120px", paddingLeft: "70px", backgroundRepeat: "no-repeat", backgroundPosition: "left center"}}>
          <b style={{marginLeft: "-5px", marginRight: "10px", fontSize: "12pt"}}>Wartezeiten</b> <br />

          <div style={{marginTop: "2px"}}>
            <b>rot:</b> <br />
            &nbsp;über 30 Minuten<br />
          </div>


          <div style={{marginTop: "2px"}}>
            <b>gelb:</b> <br />
            &nbsp;bis 30 Minuten
          </div>

          <div style={{marginTop: "2px"}}>
            <b>grün:</b> <br />
            &nbsp;bis 15 Minuten <br />
          </div>

        </div>
      </div>
    </div>
    )
  }
}

export default MapLegend;
