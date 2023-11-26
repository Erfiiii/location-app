import { useEffect, useState } from "react";
import { useBounds } from "../../context/bounds/BoundsContext";
import osmtogeojson from "osmtogeojson";

export const useGetGeoJson = () => {
  const bounds = useBounds();
  const [data, setData] = useState<string>();
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (bounds.length) {
        fetch(`https://www.openstreetmap.org/api/0.6/map?bbox=${bounds}`)
          .then((res) => res.text())
          .then((xmlData) => {
            const result = osmtogeojson(
              new DOMParser().parseFromString(xmlData, "application/xml"),
              { polygonFeatures: true }
            );
            setData(JSON.stringify(result, null, 1));
          });
      }
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, [bounds]);

  return data;
};
