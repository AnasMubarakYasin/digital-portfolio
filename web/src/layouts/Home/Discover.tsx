import { ParentComponent, For, createSignal, createResource, createEffect, Show } from "solid-js";
import { Flex, HopeProvider } from "@hope-ui/solid";
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
import { Skeleton, SkeletonCircle, SkeletonText } from "@hope-ui/solid"

import { FiUser } from 'solid-icons/fi'

import TopAppBar from "./TopAppBar";
import BottomAppBar from "./BottomAppBar";
import Footer from "./Footer";

import config from "@config/theme/hopeui";
import * as nav from "@config/nav";
import { AuthenticationProvider, use_authentication } from "@context/authentication";

export interface DiscoverProps {
  path: string;
}

// const profiles = [
//   {
//     name: "anas",
//     job: "Sofware Developer",
//     location: "Indonesia, Jakarta",
//     location_work: "South Jakarta",
//     institute: "University",
//   },
//   {
//     name: "mubarak",
//     job: "Data Science",
//     location: "Indonesia, Bogor",
//     location_work: "West Java",
//     institute: "University",
//   },
//   {
//     name: "yasin",
//     job: "Data Analyst",
//     location: "Indonesia, Bandung",
//     location_work: "West Java",
//     institute: "University",
//   },
// ];



const Discover: ParentComponent<DiscoverProps> = function ({ path, children }) {
  const [source_profiles, get_profiles] = createSignal<string | undefined>();
  const [profiles] = createResource(source_profiles, fetcher_profiles);
  async function fetcher_profiles(token: string) {
    const res = await fetch("/api/profile", {
      headers: {
        "Authorization": `Bearer ${token}`
      },
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json() as Promise<Types.Profile[]>;
  }
  const authc = use_authentication();
  get_profiles(authc.data.token ?? "")

  return (
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
              Discover Portfolio
            </Heading>
            <Text
              as="p"
              fontSize="$lg"
              fontWeight="$medium"
              textAlign="center"
              opacity="0.8"
            >
              Find someone fit your company
            </Text>
          </Box>
        </Box>
        <Grid gap="$4" px={{ "@initial": "$8", "@sm": "$16", "@md": "$24" }}>
          <Show when={profiles.loading}>
            <For each={Array(4)}>
              {(item) => (
                <GridItem>
                  <Box
                    d="flex"
                    gap="$4"
                    p="$4"
                    alignItems="center"
                    shadow="$sm"
                    rounded="$xl"
                    background="$neutral1"
                    _hover={{ shadow: "$lg" }}
                  >
                    <Skeleton rounded="$full">
                      <Avatar
                        size="lg"
                        name="Wanda Fisher"
                        src="https://bit.ly/35N1hXl"
                      />
                    </Skeleton>
                    <Flex direction="column" gap="$2">
                      <Skeleton>
                        <Text size="xl" fontWeight="$semibold">{"_".repeat(50)}</Text>
                      </Skeleton>
                      <Skeleton>
                        <Text size="base">{"_".repeat(50)}</Text>
                      </Skeleton>
                      <Skeleton>
                        <Text size="base" opacity="0.8">{"_".repeat(50)}</Text>
                      </Skeleton>
                    </Flex>
                  </Box>
                </GridItem>
              )}
            </For>
          </Show>
          <Show when={profiles.latest}>
            <For each={profiles()}>
              {(item) => (
                <GridItem>
                  <Anchor
                    href={`/user/${item.name}/profile`}
                    _hover={{ textDecoration: "none" }}
                  >
                    <Box
                      d="flex"
                      gap="$4"
                      p="$4"
                      alignItems="center"
                      shadow="$sm"
                      rounded="$xl"
                      background="$neutral1"
                      _hover={{ shadow: "$lg" }}
                    >
                      <Avatar size="lg" icon={(props) => (
                        <Icon
                          as={FiUser}
                          boxSize="$8"
                        ></Icon>
                      )} />
                      <Box>
                        <Text size="xl" fontWeight="$semibold">
                          {item.name}
                        </Text>
                        <Text size="base">{item.headline}</Text>
                        <Text size="base" opacity="0.8">
                          {item.personal.location}
                        </Text>
                      </Box>
                    </Box>
                  </Anchor>
                </GridItem>
              )}
            </For>
          </Show>
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
  );
};

export default function (props) {
  return (
    <AuthenticationProvider guest>
      <HopeProvider config={config}>
        <Discover {...props}></Discover>
      </HopeProvider>
    </AuthenticationProvider>
  );
}
