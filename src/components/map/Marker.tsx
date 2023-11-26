import { PropsWithChildren, useEffect, useState } from "react";
import { Marker as LeafletMarker, Popup, useMapEvents } from "react-leaflet";

interface OwnProps {}

type Props = PropsWithChildren<OwnProps>;

export function Marker(props: Props) {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  useEffect(() => {
    map.locate();
  }, []);
  return position === null ? null : (
    <LeafletMarker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </LeafletMarker>
  );
}
