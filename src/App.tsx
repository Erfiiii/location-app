import { useState } from "react";
import "./App.css";
import { DataContainer } from "./components/data-container/DataContainer";
import { Map } from "./components/map/Map";
import type { FeatureCollection, Geometry, GeoJsonProperties } from "geojson";

function App() {
  const [bounds, setBounds] = useState<string>("");
  const [data, setData] = useState<FeatureCollection<
    Geometry,
    GeoJsonProperties
  > | null>(null);
  return (
    <>
      <Map data={data} setBounds={setBounds} />
      <DataContainer data={data} bounds={bounds} setData={setData} />
    </>
  );
}

export default App;
