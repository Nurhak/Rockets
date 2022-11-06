import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React, { memo } from 'react';

function Map({
  children,
  center,
  zoom,
}: {
  children?: React.ReactNode;
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
}) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: '',
  });

  const [, setMap] = React.useState(null);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{
        height: '100%',
        width: '100%',
      }}
      options={{
        fullscreenControl: false,
        zoomControl: false,
      }}
      center={center}
      zoom={zoom}
      onUnmount={onUnmount}
    >
      {children || null}
    </GoogleMap>
  ) : null;
}

Map.defaultProps = {
  children: null,
};

export default memo(Map);
