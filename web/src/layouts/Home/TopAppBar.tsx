import { ParentComponent, For, Show } from "solid-js";
import { Box } from "@hope-ui/solid";
import { Flex, Spacer } from "@hope-ui/solid";
import { Button } from "@hope-ui/solid";
import { Icon } from "@hope-ui/solid";
import { Text } from "@hope-ui/solid";
import { Anchor } from "@hope-ui/solid";
import { Avatar, AvatarBadge, AvatarGroup, AvatarExcess } from "@hope-ui/solid";
import {
  Menu,
  MenuTrigger,
  MenuContent,
  MenuGroup,
  MenuLabel,
  MenuItem,
} from "@hope-ui/solid";

import { HiSolidSelector } from "solid-icons/hi";
import type { Account } from "@stores/authentication";
import { use_authentication } from "@context/authentication";

export interface TopAppBarProps {
  as?: any;
  logo: string;
  title: string;
  nav: {
    text: string;
    href: string;
  }[];
  path: string;
}
const langs = [
  { id: 1, text: "EN" },
  { id: 2, text: "ID" },
];
const TopAppBar: ParentComponent<TopAppBarProps> = function ({
  as = "div",
  logo,
  title,
  nav,
  path,
  children,
}) {
  const authc = use_authentication();
  const account = authc.data.account;
  return (
    <Flex
      as={as}
      gap="$8"
      h={{ "@initial": "$14", "@sm": "$16" }}
      alignItems="center"
      px={{ "@initial": "$4", "@sm": "$8" }}
      background="$neutral1"
      shadow="$sm"
    >
      <Box>
        <Flex gap="$2" alignItems="center">
          <AvatarGroup avatarBorderRadius="$md">
            <Avatar
              p="$1"
              size="md"
              name="logo"
              src={logo}
              background="transparent"
            />
          </AvatarGroup>
          <Anchor
            href="/"
            color="$neutral12"
            fontSize="$lg"
            fontWeight="$semibold"
            _hover={{ color: "$primary11", textDecoration: "none" }}
          >
            {title}
          </Anchor>
        </Flex>
      </Box>
      <Spacer />
      <Flex
        as="nav"
        gap="$8"
        alignItems="center"
        display={{ "@initial": "none", "@sm": "flex" }}
      >
        <For each={nav}>
          {(item, index) => (
            <Anchor
              data-index={index()}
              color={path == item.href ? "$primary11" : "$neutral12"}
              fontWeight="$semibold"
              href={item.href}
              _hover={{
                color: "$primary11",
              }}
            >
              {item.text}
            </Anchor>
          )}
        </For>
        {children}
      </Flex>
      <Flex gap="$2">
        <Show when={account}>
          <Menu>
            <MenuTrigger
              as={Button}
              size="sm"
              rounded="$full"
              color="$neutral1"
              background="$primary11"
              rightIcon={<Icon as={HiSolidSelector} color="$neutral12"></Icon>}
            >
              {account.name}
            </MenuTrigger>
            <MenuContent>
              <MenuItem onSelect={authc.customer.dashboard}>Dashboard</MenuItem>
              <MenuItem onSelect={authc.customer.signout}>Sign Out</MenuItem>
            </MenuContent>
          </Menu>
        </Show>
        <Show when={!account}>
          <a href="/user/signup">
            <Button size="sm" color="$neutral1" bg="$primary11" rounded="$full">
              Sign Up
            </Button>
          </a>
          <a href="/user/signin">
            <Button size="sm" variant="outline" rounded="$full">
              Sign In
            </Button>
          </a>
        </Show>
      </Flex>
      <Menu>
        <MenuTrigger
          as={Button}
          size="sm"
          variant="subtle"
          rounded="$full"
          color="$neutral12"
          background="$neutral4"
          rightIcon={<Icon as={HiSolidSelector} color="$neutral12"></Icon>}
        >
          EN
        </MenuTrigger>
        <MenuContent>
          <MenuItem>English</MenuItem>
          <MenuItem>Indonesia</MenuItem>
        </MenuContent>
      </Menu>
    </Flex>
  );
};

export default TopAppBar;
