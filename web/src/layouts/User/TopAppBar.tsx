import { ParentComponent, For, Show } from "solid-js";
import {
  Flex,
  Avatar,
  AvatarGroup,
  Anchor,
  Text,
  Box,
  Button,
  Icon,
  Divider,
} from "@hope-ui/solid";
import {
  Menu,
  MenuTrigger,
  MenuContent,
  MenuGroup,
  MenuLabel,
  MenuItem,
} from "@hope-ui/solid";
import { HiSolidSelector } from "solid-icons/hi";
import { FiUser } from 'solid-icons/fi'
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

const TopAppBar: ParentComponent<TopAppBarProps> = function ({
  as = "div",
  logo,
  title,
  nav,
  path,
  children,
}) {
  const authc = use_authentication();

  return (
    <Flex
      as={as}
      h="$16"
      alignItems="center"
      gap="$12"
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
      <Flex as="nav" gap="$8" alignItems="center" flexGrow="1">
        <For each={nav} fallback={<div></div>}>
          {(item, index) => (
            <Anchor
              data-index={index()}
              // color={path == item.href ? "$primary11" : "$neutral12"}
              color={item.href.endsWith(path) ? "$primary11" : "$neutral12"}
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
      </Flex>
      <Flex gap="$4" alignItems="center">
        {/* <Button
          variant="ghost"
          rightIcon={<Icon as={HiSolidSelector} color="$neutral12"></Icon>}
        >
          <Flex gap="$4" alignItems="center">
            <Avatar
              size="sm"
              name="Alberto Sanchez"
              src="https://bit.ly/3q1WqrX"
            />
            <Text size="base" color="$neutral12" fontWeight="$medium">
              Anas Mubarak
            </Text>
          </Flex>
        </Button> */}

        {children}

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

        <Show when={authc.data.account}>
          <Menu>
            <MenuTrigger
              as={Button}
              colorScheme="info"
              variant="ghost"
              px="$2"
              rightIcon={<Icon as={HiSolidSelector} color="$neutral12"></Icon>}
            >
              <Flex gap="$4" alignItems="center">
                <Avatar size="sm" icon={(props) => (
                  <Icon
                    as={FiUser}
                    boxSize="$4"
                  ></Icon>
                )} />
                <Text size="base" color="$neutral12" fontWeight="$medium">
                  {authc.data.account.name}
                </Text>
              </Flex>
            </MenuTrigger>
            <MenuContent>
              <MenuGroup>
                <MenuItem>My Account</MenuItem>
                <MenuItem>Notifications</MenuItem>
              </MenuGroup>
              <Divider role="presentation" my="$1" />
              <MenuGroup>
                <MenuItem onSelect={authc.customer.signout}>Sign Out</MenuItem>
              </MenuGroup>
            </MenuContent>
          </Menu>
        </Show>
      </Flex>
    </Flex>
  );
};

export default TopAppBar;
