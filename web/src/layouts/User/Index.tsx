import type { ParentComponent } from "solid-js";
import { HopeProvider, Box } from "@hope-ui/solid";

import TopAppBar from "./TopAppBar";
import config from "@config/theme/hopeui";

export interface HomeProps {
  nav: {
    text: string;
    href: string;
  }[];
  path: string;
}

const Home: ParentComponent<HomeProps> = function ({ nav, path, children }) {
  return (
    <HopeProvider config={config}>
      <Box
        display="grid"
        maxWidth="$screenW"
        minHeight="$screenH"
        background="$neutral3"
      >
        <TopAppBar
          as="header"
          logo={import.meta.env.PUBLIC_APP_LOGO}
          title={import.meta.env.PUBLIC_APP_NAME}
          path={path}
          nav={nav}>
        </TopAppBar>
      </Box>
    </HopeProvider>
  );
};

export default Home;
