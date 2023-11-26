import { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { Rectangle } from "react-leaflet";
import { useMapBounds } from "./useMapBounds";

interface OwnProps {
  setStringBounds: Dispatch<SetStateAction<string>>;
}

type Props = PropsWithChildren<OwnProps>;

export function Box(props: Props) {
  const bounds = useMapBounds(props.setStringBounds);
  return !bounds ? null : (
    <Rectangle bounds={bounds} pathOptions={{ color: "red" }} />
  );
}
