import type { FeatureCollection, Geometry, GeoJsonProperties } from "geojson";

export const downloadJson = (
  data: FeatureCollection<Geometry, GeoJsonProperties> | null
) => {
  const jsonContent = JSON.stringify(data);
  const blob =
    "data:text/json;charset=utf-8," + encodeURIComponent(jsonContent);

  const link = document.createElement("a");
  link.setAttribute("href", blob);
  link.setAttribute("download", "data.json");
  link.click();
};
