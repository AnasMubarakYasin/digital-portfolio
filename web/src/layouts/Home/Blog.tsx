import { ParentComponent, For } from "solid-js";
import { HopeProvider } from "@hope-ui/solid";
import { Box } from "@hope-ui/solid";
import { Anchor } from "@hope-ui/solid";
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
import { Avatar, AvatarBadge, AvatarGroup, AvatarExcess } from "@hope-ui/solid";

import TopAppBar from "./TopAppBar";
import BottomAppBar from "./BottomAppBar";
import Footer from "./Footer";

import config from "@config/theme/hopeui";
import * as nav from "@config/nav";
import { AuthenticationProvider } from "@context/authentication";

export interface BlogProps {
  path: string;
}

const blogs = [
  {
    image: "https://bit.ly/2Z4KKcF",
    title: "The quick brown fox",
    subtitle: "Indonesia, Jakarta",
    description: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`,
    author: "John Doe",
    published: "20 Juli 2022",
    tags: ["Security", "Performance", "Community"],
  },
  {
    image: "https://bit.ly/2Z4KKcF",
    title: "The quick brown fox",
    subtitle: "Indonesia, Jakarta",
    description: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`,
    author: "John Doe",
    published: "20 Juli 2022",
    tags: ["Security", "Performance", "Community"],
  },
  {
    image: "https://bit.ly/2Z4KKcF",
    title: "The quick brown fox",
    subtitle: "Indonesia, Jakarta",
    description: `Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`,
    author: "John Doe",
    published: "20 Juli 2022",
    tags: ["Security", "Performance", "Community"],
  },
];

const Blog: ParentComponent<BlogProps> = function ({ path, children }) {
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
                opacity="0.8"
              >
                Our Blog
              </Heading>
              <Text
                as="p"
                fontSize="$lg"
                fontWeight="$medium"
                textAlign="center"
                opacity="0.8"
              >
                Find Blog
              </Text>
            </Box>
          </Box>
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap="$8"
            px={{ "@initial": "$8", "@sm": "$16", "@md": "$24" }}
          >
            <For each={blogs}>
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
                    <Box d="grid" gap="$2" textAlign="left">
                      <Heading as="h2" size="xl">
                        <Anchor href="/">{item.title}</Anchor>
                      </Heading>
                      <Text opacity="0.9">{item.description}</Text>
                    </Box>
                    <Box d="flex" gap="$4" alignItems="center">
                      <Avatar
                        size="sm"
                        name="Wanda Fisher"
                        src="https://bit.ly/35N1hXl"
                      />
                      <Box>
                        <Text size="sm" fontWeight="$medium">{item.author}</Text>
                        <Text size="sm" opacity="0.9">
                          {item.published}
                        </Text>
                      </Box>
                    </Box>
                    <Box d="flex" gap="$1">
                      <For each={item.tags}>
                        {(item) => (
                          <Tag size="md" variant="outline">
                            {item}
                          </Tag>
                        )}
                      </For>
                    </Box>
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
        <Blog {...props}></Blog>
      </HopeProvider>
    </AuthenticationProvider>
  );
}
