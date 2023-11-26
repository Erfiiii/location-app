import { GeoJsonData } from "../../types";

export const downloadJson = (data: GeoJsonData) => {
  const jsonContent = JSON.stringify(data);
  const content =
    "data:text/json;charset=utf-8," + encodeURIComponent(jsonContent);

  const link = document.createElement("a");
  link.setAttribute("href", content);
  link.setAttribute("download", "geo-json-data.json");
  link.click();
};
