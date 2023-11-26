import { PropsWithChildren, useEffect, useState } from "react";
import { Marker as LeafletMarker, useMapEvents } from "react-leaflet";
import type { LocationEvent, LatLng } from "leaflet";

interface OwnProps {}

type Props = PropsWithChildren<OwnProps>;

export function Marker(props: Props) {
  const [position, setPosition] = useState<LatLng | null>(null);
  const map = useMapEvents({
    locationfound(e: LocationEvent) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  useEffect(() => {
    map.locate();
  }, []);
  return position === null ? null : <LeafletMarker position={position} />;
}
