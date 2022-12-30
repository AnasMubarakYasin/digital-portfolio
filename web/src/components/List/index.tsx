import { JSX, ParentComponent } from "solid-js";

export interface ListProps {
  class?: string;
  component?: string;
  variant?: string;
}

const List: ParentComponent<ListProps> = function ({
  class: class_name,
  children,
}) {
  class_name = `${class_name}`;
  return <ul class={class_name}>{children}</ul>;
};

export default List;
