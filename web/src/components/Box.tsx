import { JSX, ParentComponent } from "solid-js";
import { Dynamic } from "solid-js/web";

export interface BoxProps {
  class?: string;
  classList?: {
    [k: string]: boolean;
  };
  component?: string;
  variant?: string;
  col?: boolean;
  row?: boolean;
  grow?: boolean;
  gap?: number;
  surface?: boolean;
  background?: boolean;
}

const Box: ParentComponent<BoxProps> = function ({
  class: class_name = "",
  children,
  component = "div",
  surface,
  background,
  col,
  row,
  grow,
  gap = 0,
  ...etc
}) {
  let style: any = {};
  if (row || col) {
    style.display = "flex";
    if (grow) {
      style["flex-grow"] = 1;
    }
    if (row) {
      style["flex-direction"] = "row";
    } else {
      style["flex-direction"] = "column";
    }
    style["--cm-gap"] = `${(gap * 8) / 16}rem`;
    style["gap"] = "var(--cm-gap)";
  }
  if (surface || background) {
    if (surface) {
      class_name = `bg-surface text-on-surface ${class_name}`;
    } else {
      class_name = `bg-background text-on-background ${class_name}`;
    }
  }
  const element = (
    <Dynamic
      component={component}
      sx-flex="col"
      data-component="Box"
      class={`${class_name}`}
      style={style}
      {...etc}
    >
      {children}
    </Dynamic>
  );
  return element;
};

export default Box;
