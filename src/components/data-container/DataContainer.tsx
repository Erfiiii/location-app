import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useCallback,
} from "react";
import "./DataContainer.css";
import { useGetGeoJson } from "./useGetGeoJson";
import type { FeatureCollection, Geometry, GeoJsonProperties } from "geojson";
import { downloadJson } from "./utils";

interface OwnProps {
  setData: Dispatch<
    SetStateAction<FeatureCollection<Geometry, GeoJsonProperties> | null>
  >;
  bounds: string;
  data: FeatureCollection<Geometry, GeoJsonProperties> | null
}

type Props = PropsWithChildren<OwnProps>;

export function DataContainer(props: Props) {
  const [isLoading, data] = useGetGeoJson(props.bounds, props.setData);
  const downloadJSON = useCallback(() => downloadJson(props.data),[props.data] );

  return (
    <div className="data-container">
      <div className="data-container__header">
        <div>Data</div>
        <button disabled={isLoading} onClick={downloadJSON}>Download</button>
      </div>
      {isLoading ? <div>Loading...</div> : <pre>{data}</pre>}
    </div>
  );
}
