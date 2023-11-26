import { Dispatch, PropsWithChildren, SetStateAction } from "react";
import type { FeatureCollection, Geometry, GeoJsonProperties } from "geojson";
import "./Map.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { Marker } from "./Marker";
import { Box } from "./Box";
import { GeoJsonContainer } from "./GeoJsonContainer";

interface OwnProps {
  setBounds: Dispatch<SetStateAction<string>>;
  data: FeatureCollection<Geometry, GeoJsonProperties> | null;
}

type Props = PropsWithChildren<OwnProps>;

export function Map(props: Props) {
  return (
    <MapContainer
      className="map-container"
      center={[52.534283, 13.4283345]}
      zoom={18}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker />
      <Box setStringBounds={props.setBounds} />
      <GeoJsonContainer data={props.data} />
    </MapContainer>
  );
}
