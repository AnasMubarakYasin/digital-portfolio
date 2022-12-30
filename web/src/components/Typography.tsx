import type { ParentComponent } from "solid-js";
import { Dynamic } from "solid-js/web";

export interface TypographyProps {
  class?: string;
  classList?: {
    [k: string]: boolean;
  };
  component?: string;
  unstyled?: boolean;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "base"
    | "overline"
    | "title"
    | "subtitle"
    | "body";
  family?: string;
  size?: string;
  weight?: string;
  leading?: string;
  spacing?: string;
  halign?: string;
  valign?: string;
  overflow?: string;
  color?: string;
  opacity?: string;
  transform?: string;
}
type Size =
  | "xs"
  | "sm"
  | "base"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl";
const families = ["sans", "serif", "mono"];
const sizes = [
  "xs",
  "sm",
  "base",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "5xl",
  "6xl",
  "7xl",
];
const weights = [
  "thin",
  "extralight",
  "light",
  "normal",
  "medium",
  "semibold",
  "bold",
  "extrabold",
];
const leadings = ["tight", "normal", "medium"];
const formats = {
  h1: {
    size: "text-6xl",
    weight: "font-bold",
  },
  h2: {
    size: "text-5xl",
    weight: "font-bold",
  },
  h3: {
    size: "text-4xl",
    weight: "font-bold",
  },
  h4: {
    size: "text-3xl",
    weight: "font-bold",
  },
  h5: {
    size: "text-2xl",
    weight: "font-bold",
  },
  h6: {
    size: "text-xl",
    weight: "font-bold",
  },
  base: {
    size: "text-base",
    weight: "font-normal",
  },
  overline: {
    size: "text-sm",
    weight: "font-medium",
  },
  title: {
    size: "text-lg",
    weight: "font-medium",
  },
  subtitle: {
    size: "text-base",
    weight: "font-medium",
  },
  body: {
    size: "text-base",
    weight: "font-normal",
  },
};

function px_to_rem(px: number) {
  return px / 16;
}

const Typography: ParentComponent<TypographyProps> = function ({
  class: class_name = "",
  component = "div",
  children,
  unstyled = false,
  variant = "base",
  color = "inherit",
  family = "sans",
  size = "base",
  weight = "normal",
  ...etc
}) {
  let class_list = [];
  let text_list = [];
  let font_list = [];
  if (!unstyled) {
    if (variant == "base") {
      // class_list.push(`text-${size}`, `font-${weight}`);
      // text_list.push(color, size);
      // font_list.push(family, weight);
      // @ts-ignore
      // class_list.push(sprinkles({ fontSize: size }));
    } else {
      const format = formats[variant];
      class_list.push(format.size, format.weight);
    }
  }
  const element = (
    <Dynamic
      component={component}
      data-component="Typography"
      // sx-text={text_list.join(" ")}
      // sx-font={font_list.join(" ")}
      class={`${class_list.join(" ")} ${class_name}`}
      {...etc}
    >
      {children}
    </Dynamic>
  );
  return element;
};

export default Typography;
