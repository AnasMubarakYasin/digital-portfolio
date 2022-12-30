import { ParentComponent, For } from "solid-js";
import { HopeProvider } from "@hope-ui/solid";
import { Box } from "@hope-ui/solid";
import { Heading } from "@hope-ui/solid";
import { Text } from "@hope-ui/solid";
import { Grid, GridItem } from "@hope-ui/solid";
import { Image } from "@hope-ui/solid";
import { Button } from "@hope-ui/solid";
import { Icon } from "@hope-ui/solid";
import {
  Tag,
  TagCloseButton,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
} from "@hope-ui/solid";

import { FiChevronRight } from "solid-icons/fi";

import TopAppBar from "./TopAppBar";
import BottomAppBar from "./BottomAppBar";
import Footer from "./Footer";

import config from "@config/theme/hopeui";
import * as nav from "@config/nav";
import { AuthenticationProvider } from "@context/authentication";

export interface EventProps {
  path: string;
}

const events = [
  {
    image: "https://bit.ly/2Z4KKcF",
    title: "Hackathon",
    subtitle: "Indonesia, Jakarta",
    state: "Proggress",
  },
  {
    image: "https://bit.ly/2Z4KKcF",
    title: "Hackathon",
    subtitle: "Indonesia, Jakarta",
    state: "Proggress",
  },
  {
    image: "https://bit.ly/2Z4KKcF",
    title: "Hackathon",
    subtitle: "Indonesia, Jakarta",
    state: "Proggress",
  },
];

const Event: ParentComponent<EventProps> = function ({ path, children }) {
  return (
    <HopeProvider config={config}>
      <Box
        display="flex"
        flexDirection="column"
        maxWidth="$screenW"
        minHeight="$screenH"
        background="$neutral3"
        gap="$8"
      >
        <Box as="header" position="sticky" top="0" zIndex="1">
          <TopAppBar
            logo={import.meta.env.PUBLIC_APP_LOGO}
            title={import.meta.env.PUBLIC_APP_NAME}
            path={path}
            nav={nav.main}
          ></TopAppBar>
        </Box>
        <Box as="main" flexGrow="1">
          <Box d="grid" placeContent="center" h="200px">
            <Box w="480px">
              <Heading
                as="h1"
                fontSize="$3xl"
                fontWeight="bold"
                textAlign="center"
                opacity="0.9"
              >
                Our Event
              </Heading>
              <Text
                as="p"
                fontSize="$lg"
                fontWeight="$medium"
                textAlign="center"
                opacity="0.8"
              >
                Find Event
              </Text>
            </Box>
          </Box>
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap="$8"
            px={{ "@initial": "$8", "@sm": "$16", "@md": "$24" }}
          >
            <For each={events}>
              {(item) => (
                <GridItem>
                  <Box
                    d="grid"
                    gap="$4"
                    p="$4"
                    shadow="$sm"
                    rounded="$xl"
                    background="$neutral1"
                    _hover={{ shadow: "$lg" }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      objectFit="cover"
                      rounded="$md"
                      css={{ aspectRatio: "4 / 3" }}
                    />
                    <Box textAlign="center">
                      <Heading as="h2" size="xl">
                        {item.title}
                      </Heading>
                      <Text opacity="0.9">{item.subtitle}</Text>
                    </Box>
                    <Tag size="md" variant="subtle" justifySelf="center">{item.state}</Tag>
                    <Box d="flex" justifyContent="space-between">
                      <Box textAlign="center">
                        <Text size="sm" opacity="0.9">
                          Deadline
                        </Text>
                        <Text size="sm" fontWeight="$medium">29 Juli</Text>
                      </Box>
                      <Box textAlign="center">
                        <Text size="sm" opacity="0.9">
                          Start
                        </Text>
                        <Text size="sm" fontWeight="$medium">5 Juli</Text>
                      </Box>
                      <Box textAlign="center">
                        <Text size="sm" opacity="0.9">
                          End
                        </Text>
                        <Text size="sm" fontWeight="$medium">31 Juli</Text>
                      </Box>
                    </Box>
                    <Button
                      rightIcon={
                        <Icon
                          as={FiChevronRight}
                          boxSize="$5"
                          rounded="$full"
                        ></Icon>
                      }
                    >
                      More Info
                    </Button>
                  </Box>
                </GridItem>
              )}
            </For>
          </Grid>
          {children}
        </Box>
        <Footer title={import.meta.env.PUBLIC_APP_NAME} as="footer"></Footer>
        <Box
          position="sticky"
          bottom="0"
          display={{ "@initial": "block", "@sm": "none" }}
          zIndex="1"
        >
          <BottomAppBar path={path} nav={nav.main_bottom}></BottomAppBar>
        </Box>
      </Box>
    </HopeProvider>
  );
};

export default function (props) {
  return (
    <AuthenticationProvider guest>
      <HopeProvider config={config}>
        <Event {...props}></Event>
      </HopeProvider>
    </AuthenticationProvider>
  );
}
