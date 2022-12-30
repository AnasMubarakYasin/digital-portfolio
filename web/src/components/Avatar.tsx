import { Dynamic } from "solid-js/web";
import { JSX, ParentComponent } from "solid-js";

export interface AvatarProps {
  class?: string;
  classList?: {
    [k: string]: boolean;
  };
  component?: string;
  variant?: string;
  src?: string;
  alt?: string;
}

const Avatar: ParentComponent<AvatarProps> = function ({
  component = "div",
  class: class_name = "",
  src,
  children,
  ...etc
}) {
  if (src) {
    component = "img";
  }
  const node = (
    <Dynamic
      sx-display="grid"
      sx-place="content-center"
      sx-w="[2rem]"
      sx-h="[2rem]"
      data-component="Avatar"
      component={component}
      class={`rounded-sm ${class_name}`}
      src={src}
      {...etc}
    >
      {children}
    </Dynamic>
  );
  return node;
};

export default Avatar;
