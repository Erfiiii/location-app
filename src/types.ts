import type { FeatureCollection, Geometry, GeoJsonProperties } from "geojson";

export type GeoJsonData = FeatureCollection<Geometry, GeoJsonProperties> | null;
