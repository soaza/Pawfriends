import * as React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

const Map: React.FC = () => {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 1.3813121317746935, lng: 103.72557829405687 }}
    >
      <Marker
        position={{
          lat: 1.3813121317746935,
          lng: 103.72557829405687,
        }}
      />
    </GoogleMap>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

const ContactMap: React.FC = () => {
  return (
    <WrappedMap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
};

export default ContactMap;
