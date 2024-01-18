import { Fragment, useState } from "react";
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import { observer } from "mobx-react-lite";



const markers = [
  {
    id: 1,
    name: "CUVC",
    position: { lat: 35.2030418, lng: 81.0046322 },
  },
  {
    id: 2,
    name: "VBGB",
    position: { lat: 35.2030420, lng: 81.0046311 },
  },
  {
    id: 3,
    name: "Csrolina Courts",
    position: { lat: 35.2030411, lng: 81.0046301 },
  }
];





export default observer( function ActivityMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDXkGpLIvZ297mV1dpkRNkkHNMayqWvFXo',
  });

  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker:any) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  return (
    <Fragment>
      <div className="container">
       
        <div style={{ height: "90vh", width: "100%" }}>
          {isLoaded ? (
            <GoogleMap
              center={{ lat: 35.2271, lng: 80.8431 }}
              zoom={6}
              onClick={() => setActiveMarker(null)}
              mapContainerStyle={{ width: "100%", height: "90vh" }}
            >
              {markers.map(({ id, name, position }) => (
                <MarkerF
                  key={id}
                  position={position}
                  onClick={() => handleActiveMarker(id)}
                  // icon={{
                  //   url:"https://t4.ftcdn.net/jpg/02/85/33/21/360_F_285332150_qyJdRevcRDaqVluZrUp8ee4H2KezU9CA.jpg",
                  //   scaledSize: { width: 50, height: 50 }
                  // }}
                >
                  {activeMarker === id ? (
                    <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                      <div>
                        <p>{name}</p>
                      </div>
                    </InfoWindowF>
                  ) : null}
                </MarkerF>
              ))}
            </GoogleMap>
          ) : null}
        </div>
      </div>
    </Fragment>
  );
})

