import type { ParentComponent } from "solid-js";

export interface IconProps {
  class?: string;
}

const Icon: ParentComponent<IconProps> = function ({
  class: class_name,
  children,
}) {
  class_name = `${class_name}`;
  return (
    <div sx-display="block" class={class_name}>
      {children}
    </div>
  );
};

export default Icon;
