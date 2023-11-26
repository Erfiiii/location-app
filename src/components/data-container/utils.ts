import { GeoJsonData } from "../../types";

export const downloadJson = (data: GeoJsonData) => {
  const jsonContent = JSON.stringify(data);
  const blob =
    "data:text/json;charset=utf-8," + encodeURIComponent(jsonContent);

  const link = document.createElement("a");
  link.setAttribute("href", blob);
  link.setAttribute("download", "data.json");
  link.click();
};
