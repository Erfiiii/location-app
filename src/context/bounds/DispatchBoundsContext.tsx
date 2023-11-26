import { createContext, PropsWithChildren, useContext } from "react";

export type DispatchBoundsContextType = (bounds: string) => void;
export const DispatchBoundsContext = createContext<
  DispatchBoundsContextType | undefined
>(undefined);

export function useDispatchBoundsContext(): DispatchBoundsContextType {
  const context = useContext(DispatchBoundsContext);
  if (context === undefined) {
    throw new Error(
      "useDispatchEnumListContext must be used inside the <DispatchEnumListContextProvider/>"
    );
  }
  return context;
}

interface OwnProps {
  value: DispatchBoundsContextType;
}

type Props = PropsWithChildren<OwnProps>;

export function DispatchBoundsContextProvider(props: Props) {
  return (
    <DispatchBoundsContext.Provider value={props.value}>
      {props.children}
    </DispatchBoundsContext.Provider>
  );
}
