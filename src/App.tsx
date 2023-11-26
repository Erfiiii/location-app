import "./App.css";
import { DataContainer } from "./components/data-container/DataContainer";
import { Map } from "./components/map/Map";
import { BoundsProvider } from "./context/bounds/BoundsProvider";

function App() {
  return (
    <BoundsProvider>
      <Map />
      <DataContainer />
    </BoundsProvider>
  );
}

export default App;
