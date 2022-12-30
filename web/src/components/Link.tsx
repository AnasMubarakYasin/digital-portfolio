import { ParentComponent, onMount } from "solid-js";

export interface LinkProps {
  class?: string;
  classList?: {
    [k: string]: boolean;
  };
  class_on_active?: string;
  class_on_deactive?: string;
  active?: boolean;
  active_auto?: boolean;
  component?: string;
  variant?: string;
  href: string;
  rel?: string;
}

const Link: ParentComponent<LinkProps> = function ({
  class: class_name = "",
  class_on_active = "",
  class_on_deactive = "",
  active = false,
  active_auto = false,
  href,
  rel,
  children,
  ...etc
}) {
  let ref: HTMLAnchorElement|undefined;
  onMount(() => {
    if (active_auto || active) {
      if (location.pathname == href) {
        ref?.classList.add(class_on_active);
        ref?.classList.remove(class_on_deactive);
      }
    }
  });
  return (
    <a
      ref={ref}
      data-component="Link"
      class={`${class_name}`}
      href={href}
      rel={rel}
      {...etc}
    >
      {children}
    </a>
  );
};

export default Link;
