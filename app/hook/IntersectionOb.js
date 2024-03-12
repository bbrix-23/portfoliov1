import { useAnimateHook } from "./useAnimate";

export function IntersectionOb({ children }) {
  const IntersectionObserverValue = useAnimateHook();

  return (
    <IntersectionObserverValue.Provider value={intersectionObserverValue}>
      {children}
    </IntersectionObserverValue.Provider>
  );
}
