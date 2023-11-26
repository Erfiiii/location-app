import { PropsWithChildren, useState } from "react";
import { Rectangle, useMapEvents, Ge } from "react-leaflet";
import { useDispatchBoundsContext } from "../../context/bounds/DispatchBoundsContext";
import { Bounds } from "../../context/bounds/types";

interface OwnProps {}

type Props = PropsWithChildren<OwnProps>;

export function Box(props: Props) {
  const [bounds, setBounds] = useState<Bounds>([]);
  const setStringBounds = useDispatchBoundsContext();
  const map = useMapEvents({});

  map.addEventListener("moveend", () => {
    const center = map.getCenter();
    // const bounds = map.getBounds();
    console.log(map.getZoom() / map.getMaxZoom())
    const bounds = center.toBounds(100 * (map.getMaxZoom() / map.getZoom()));
    setStringBounds(bounds.toBBoxString());
    setBounds([
      [bounds.getSouth(), bounds.getWest()],
      [bounds.getNorth(), bounds.getEast()],
    ]);
  });
  return !bounds.length ? null : (
    <Rectangle bounds={bounds} pathOptions={{ color: "red" }} />
  );
}
