import { useState } from "react";
import "./App.css";
import { DataContainer } from "./components/data-container/DataContainer";
import { Map } from "./components/map/Map";
import { GeoJsonData } from "./types";

function App() {
  const [bounds, setBounds] = useState<string>("");
  const [data, setData] = useState<GeoJsonData>(null);
  return (
    <>
      <Map data={data} setBounds={setBounds} />
      <DataContainer data={data} bounds={bounds} setData={setData} />
    </>
  );
}

export default App;
