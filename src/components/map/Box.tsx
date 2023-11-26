import { Dispatch, PropsWithChildren, SetStateAction, useState } from "react";
import { Rectangle, useMapEvents } from "react-leaflet";
import type { LatLngBoundsExpression } from "leaflet";

interface OwnProps {
  setStringBounds: Dispatch<SetStateAction<string>>;
}

type Props = PropsWithChildren<OwnProps>;

export function Box(props: Props) {
  const [bounds, setBounds] = useState<LatLngBoundsExpression | null>(null);
  const map = useMapEvents({});

  map.addEventListener("moveend", () => {
    const center = map.getCenter();
    const bounds = center.toBounds(100 * (map.getMaxZoom() / map.getZoom()));
    props.setStringBounds(bounds.toBBoxString());
    setBounds([
      [bounds.getSouth(), bounds.getWest()],
      [bounds.getNorth(), bounds.getEast()],
    ]);
  });
  return !bounds ? null : (
    <Rectangle bounds={bounds} pathOptions={{ color: "red" }} />
  );
}
