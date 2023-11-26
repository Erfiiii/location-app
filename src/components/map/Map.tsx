import { PropsWithChildren } from "react";
import "./Map.css";
import {
  MapContainer,
  TileLayer,
} from "react-leaflet";
import { Marker } from "./Marker";
import { Box } from "./Box";

interface OwnProps {}

type Props = PropsWithChildren<OwnProps>;

export function Map(props: Props) {

  return (
    <MapContainer
      className="map-container"
      center={[52.534283, 13.4283345]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker />
      <Box/>
    </MapContainer>
  );
}
