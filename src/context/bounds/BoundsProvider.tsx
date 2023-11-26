import { PropsWithChildren, useState } from "react";
import { BoundsContextProvider } from "./BoundsContext";
import { DispatchBoundsContextProvider } from "./DispatchBoundsContext";

interface OwnProps {}

type Props = PropsWithChildren<OwnProps>;

export function BoundsProvider(props: Props) {
  const [bounds, setBounds] = useState<string>("");
  return (
    <BoundsContextProvider value={bounds}>
      <DispatchBoundsContextProvider value={setBounds}>
        {props.children}
      </DispatchBoundsContextProvider>
    </BoundsContextProvider>
  );
}
