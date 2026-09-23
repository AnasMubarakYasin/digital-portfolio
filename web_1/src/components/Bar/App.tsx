import { JSX, ParentComponent } from "solid-js";

export interface AppProps {
  class?: string;
  icon?: JSX.Element;
  title?: JSX.Element;
  brand?: JSX.Element;
  center?: JSX.Element;
  nav?: JSX.Element;
  elevation?: number;
}

const App: ParentComponent<AppProps> = function ({
  class: class_name,
  icon,
  title,
  brand,
  center,
  nav,
  elevation = 1,
  children,
  ...etc
}) {
  icon ??= <div></div>;
  title ??= <div></div>;
  brand ??= <section class="flex"></section>;
  center ??= <section class="flex flex-grow"></section>;
  nav ??= <nav></nav>;
  return (
    <section
      data-component="AppBar"
      sx-display="flex"
      sx-h="[4rem]"
      sx-bg="surface"
      sx-text="on-surface"
      sx-sm="gap-[1rem]"
      class={`items-center gap-[0.5rem] shadow shadow-sm ${class_name}`}
      {...etc}
    >
      {brand}
      {center}
      {nav}
    </section>
  );
};

export default App;
