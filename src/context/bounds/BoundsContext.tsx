import { createContext, PropsWithChildren, useContext } from "react";

export const BoundsContext = createContext<string | undefined>(undefined);

export function useBounds(value?: string): string {
  const context = useContext(BoundsContext);
  if (value !== undefined) {
    return value;
  }
  if (context === undefined) {
    throw new Error(
      "useBounds must be used inside the <BoundsContextProvider/>"
    );
  }
  return context;
}

interface OwnProps {
  value: string;
}

type Props = PropsWithChildren<OwnProps>;

export function BoundsContextProvider(props: Props) {
  return (
    <BoundsContext.Provider value={props.value}>
      {props.children}
    </BoundsContext.Provider>
  );
}
