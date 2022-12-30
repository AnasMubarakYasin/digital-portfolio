import type { ParentComponent } from "solid-js";
import { HopeProvider } from "@hope-ui/solid";

import config from "@config/theme/hopeui";

const Theme: ParentComponent = function ({ children }) {
  return <HopeProvider config={config}>{children}</HopeProvider>;
}

export default Theme
