import { PropsWithChildren, useEffect, useState } from "react";
import type { FeatureCollection, Geometry, GeoJsonProperties } from "geojson";
import { GeoJSON } from "react-leaflet";

interface OwnProps {
  data: FeatureCollection<Geometry, GeoJsonProperties> | null;
}

type Props = PropsWithChildren<OwnProps>;

export function GeoJsonContainer(props: Props) {
  const [updateKey, setUpdateKey] = useState<number>(0);

  useEffect(() => {
    setUpdateKey((prevState) => prevState + 1);
  }, [props.data]);

  if (!props.data) {
    return null;
  }
  return (
    <GeoJSON
      data={props.data}
      key={updateKey}
      style={() => ({
        color: "blue",
        weight: 2,
        opacity: 0.6,
        fillOpacity: 0.1,
      })}
    />
  );
}
