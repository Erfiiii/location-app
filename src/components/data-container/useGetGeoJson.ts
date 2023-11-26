import { Dispatch, SetStateAction, useEffect, useState } from "react";
import osmtogeojson from "osmtogeojson";
import { GeoJsonData } from "../../types";

export const useGetGeoJson = (
  bounds: string,
  setGeoJsonData: Dispatch<SetStateAction<GeoJsonData>>
): [boolean, string] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<string>("");
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      if (bounds.length) {
        fetch(`https://www.openstreetmap.org/api/0.6/map?bbox=${bounds}`)
          .then((res) => res.text())
          .then((xmlData) => {
            const result = osmtogeojson(
              new DOMParser().parseFromString(xmlData, "application/xml")
            );
            setGeoJsonData(result);
            setData(JSON.stringify(result, null, 1));
            setLoading(false);
          })
          .catch(() => setLoading(false));
      }
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, [bounds, setGeoJsonData]);

  return [loading, data];
};
