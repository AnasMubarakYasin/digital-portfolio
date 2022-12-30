import { ParentComponent, For } from "solid-js";
import {
  Flex,
  Avatar,
  AvatarGroup,
  Anchor,
  Text,
  Box,
  Button,
  Icon,
} from "@hope-ui/solid";
import { HiSolidSelector } from "solid-icons/hi";

export interface FooterProps {
  as?: any;
}

const Footer: ParentComponent<FooterProps> = function ({
  as = "div",
  children,
}) {
  return (
    <Flex
      as={as}
      h="$16"
      gap="$12"
      alignItems="center"
      px={{ "@initial": "$4", "@sm": "$8" }}
      background="$neutral1"
      shadow="$sm"
    >
      <Box display="grid" placeContent="center" flexGrow="1">
        <Text>
          Copyright &copy; 2022 Digital Portfolio | bladerlaiga, All Right
          Reserved.
        </Text>
      </Box>
    </Flex>
  );
};

export default Footer;
