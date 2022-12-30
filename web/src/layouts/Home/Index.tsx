import type { ParentComponent } from "solid-js";
import { HopeProvider, Box } from "@hope-ui/solid";

import { Text } from "@hope-ui/solid";

import TopAppBar from "./TopAppBar";
import BottomAppBar from "./BottomAppBar";
import Footer from "./Footer";

import config from "@config/theme/hopeui";
import * as nav from "@config/nav";
import { AuthenticationProvider, use_authentication } from "@context/authentication"

interface IndexProps {
  path: string;
}
const Index: ParentComponent<IndexProps> = function ({ path, children }) {
  return (
    <HopeProvider config={config}>
      <Box
        display="flex"
        flexDirection="column"
        maxWidth="$screenW"
        minHeight="$screenH"
        background="$neutral3"
      >
        <Box as="header" position="sticky" top="0">
          <TopAppBar
            logo={import.meta.env.PUBLIC_APP_LOGO}
            title={import.meta.env.PUBLIC_APP_NAME}
            path={path}
            nav={nav.main}
          ></TopAppBar>
          <Box
            d="grid"
            placeContent="center"
            h="$80"
          // px={{ "@initial": "$8", "@sm": "$16", "@md": "400px" }}
          >
            {/* <Box w="480px">
              <Text
                fontFamily="$sans"
                fontSize="$2xl"
                fontWeight="bold"
                textAlign="center"
              >
                Welcome to {import.meta.env.PUBLIC_APP_NAME}
              </Text>
              <Text
                fontFamily="$sans"
                fontSize="$2xl"
                fontWeight="bold"
                textAlign="center"
              >
                Create your Profile and show your skill.
              </Text>
            </Box> */}
          </Box>
        </Box>
        <Box as="main" flexGrow="1">
          {children}
        </Box>
        <Footer as="footer" title={import.meta.env.PUBLIC_APP_NAME}></Footer>
        <Box
          position="sticky"
          bottom="0"
          display={{ "@initial": "block", "@sm": "none" }}
        >
          <BottomAppBar path="/" nav={nav.main_bottom}></BottomAppBar>
        </Box>
      </Box>
    </HopeProvider>
  );
};

export default function (props: IndexProps) {
  return (
    <AuthenticationProvider guest>
      <HopeProvider config={config}>
        <Index {...props}></Index>
      </HopeProvider>
    </AuthenticationProvider>
  );
}
