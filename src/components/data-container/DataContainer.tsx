import { PropsWithChildren, useCallback } from "react";
import "./DataContainer.css";
import { useGetGeoJson } from "./useGetGeoJson";

interface OwnProps {}

type Props = PropsWithChildren<OwnProps>;

export function DataContainer(props: Props) {
  const data = useGetGeoJson();
  const downloadJSON = useCallback(() => {
    const jsonContent = JSON.stringify(data, null,0);
    const blob = "data:text/json;charset=utf-8," + encodeURIComponent(jsonContent);

    const link = document.createElement("a");
    link.setAttribute("href", blob)
    link.setAttribute("download", "data.json")
    // link.href = window.URL.createObjectURL(blob);
    // link.download = "data.json";

    // document.body.appendChild(link);
    link.click();

    // document.body.removeChild(link);
  }, [data]);

  return (
    <div className="data-container">
      <div className="data-container__header">
        <div>Data</div>
        <button onClick={downloadJSON}>Download</button>
      </div>
      {!data ? <div>Loading...</div> : <pre>{data}</pre>}
    </div>
  );
}
