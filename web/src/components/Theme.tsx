import type { ParentComponent } from "solid-js";

export interface ThemeProps {
  class?: string;
  component?: string;
  variant?: string;
  mode: "dark" | "light";
}

const Theme: ParentComponent<ThemeProps> = function ({
  class: class_name,
  mode,
  children,
}) {
  return (
    <div data-component="Theme" class={`relative ${mode} ${class_name}`}>
      {children}
    </div>
  );
};

export default Theme;
