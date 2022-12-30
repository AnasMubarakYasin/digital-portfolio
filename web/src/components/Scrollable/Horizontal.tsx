import { JSX, ParentComponent } from "solid-js";

export interface HorizontalProps {
  class?: string;
  component?: string;
}

const Horizontal: ParentComponent<HorizontalProps> = function ({
  class: class_name,
  children,
}) {
  class_name = `${class_name}`;
  return <div class={class_name}>{children}</div>;
};

export default Horizontal;
