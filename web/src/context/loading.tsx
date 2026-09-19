import { createSignal, createContext, useContext } from "solid-js";

const LoadingContext = createContext();

export function LoadingProvider(props) {
  const [loading, setLoading] = createSignal(true);
  const [progress, setProgress] = createSignal(props.count || 0);
  const counter = [
    progress,
    {
      isLoading: loading,
      load() {
        setLoading(true);
      },
      loaded() {
        setLoading(false);
      },
      increment(v=1) {
        setProgress((c) => c + v);
      },
      decrement(v=1) {
        setProgress((c) => c - v);
      },
    },
  ];

  return (
    <LoadingContext.Provider value={counter}>
      {props.children}
    </LoadingContext.Provider>
  );
}

export function useLoading(): any {
  return useContext(LoadingContext);
}
