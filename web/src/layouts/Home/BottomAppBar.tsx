import { ParentComponent, For } from "solid-js";
import { Box } from "@hope-ui/solid";
import { Flex, Spacer } from "@hope-ui/solid";
import { Button } from "@hope-ui/solid";
import { Icon } from "@hope-ui/solid";
import { IconButton } from "@hope-ui/solid";
import { Text } from "@hope-ui/solid";
import { Anchor } from "@hope-ui/solid";
import { Avatar, AvatarBadge, AvatarGroup, AvatarExcess } from "@hope-ui/solid";

export interface BottomAppBarProps {
  as?: any;
  nav: {
    icon: any;
    text: string;
    href: string;
  }[];
  path: string;
}

const BottomAppBar: ParentComponent<BottomAppBarProps> = function ({
  as = "div",
  nav,
  path,
  children,
}) {
  console.log(nav);
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
      <Flex
        as="nav"
        h="$full"
        gap="$8"
        flexGrow="1"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <For each={nav}>
          {(item, index) => (
            <Anchor
              data-index={index()}
              href={item.href}
              _hover={{
                // color: "$primary11",
                textDecoration: "none",
              }}
            >
              <Button
                variant={path == item.href ? "subtle" : "ghost"}
                w="$16"
                h="max-content"
                display="grid"
                gap="$0_5"
                py="$0_5"
                placeItems="center"
                color="inherit"
              >
                <Icon as={item.icon} boxSize="$6" />
                <Text size="sm" fontWeight="$medium">
                  {item.text}
                </Text>
              </Button>
            </Anchor>
          )}
        </For>
        {children}
      </Flex>
    </Flex>
  );
};

export default BottomAppBar;
