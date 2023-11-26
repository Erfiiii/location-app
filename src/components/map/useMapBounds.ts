import type { LatLngBoundsExpression } from "leaflet";
import { Dispatch, SetStateAction, useState } from "react";
import { useMapEvents } from "react-leaflet";

export const useMapBounds = (
  setStringBounds: Dispatch<SetStateAction<string>>
) => {
  const [bounds, setBounds] = useState<LatLngBoundsExpression | null>(null);
  const map = useMapEvents({});

  map.addEventListener("moveend", () => {
    const center = map.getCenter();
    const maxZoom = map.getMaxZoom();
    const zoom = map.getZoom();
    const bounds = center.toBounds(50 * map.getZoomScale(maxZoom, zoom));
    setStringBounds(bounds.toBBoxString());
    setBounds([
      [bounds.getSouth(), bounds.getWest()],
      [bounds.getNorth(), bounds.getEast()],
    ]);
  });

  return bounds;
};
