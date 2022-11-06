import { Marker, InfoWindow } from '@react-google-maps/api';
import { memo, useState } from 'react';

function CustomMarker({
  lat,
  long,
  children,
}: {
  lat: number;
  long: number;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Marker
      position={{
        lat,
        lng: long,
      }}
      data-testid="marker"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      {isOpen && (
        <InfoWindow
          position={{
            lat,
            lng: long,
          }}
          onCloseClick={() => {
            setIsOpen(false);
          }}
        >
          <div>{children}</div>
        </InfoWindow>
      )}
    </Marker>
  );
}

export default memo(CustomMarker);
