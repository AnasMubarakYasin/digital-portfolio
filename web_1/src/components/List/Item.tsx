import { JSX, ParentComponent } from "solid-js";

export interface ItemProps {
  class?: string;
  component?: string;
  variant?: string;
}

const Item: ParentComponent<ItemProps> = function ({
  class: class_name,
  children,
}) {
  class_name = `${class_name}`;
  return <ul class={class_name}>{children}</ul>;
};

export default Item;
