import type { ParentComponent, Setter } from "solid-js";
import { createEffect, createSignal } from "solid-js";
import { HopeProvider } from "@hope-ui/solid";
import {
  Flex,
  Center,
  Text,
  Box,
  Grid,
  GridItem,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Button,
  Checkbox,
  Anchor,
} from "@hope-ui/solid";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@hope-ui/solid"
import {
  CircularProgress,
  CircularProgressIndicator,
  CircularProgressLabel
} from "@hope-ui/solid"

import { AuthenticationProvider, use_authentication } from "@context/authentication"
import theme from "@config/theme/hopeui";

interface SignUpProps { }
const SignUp: ParentComponent<SignUpProps> = function ({ children }) {
  const [name, set_name] = createSignal("");
  const [email, set_email] = createSignal("");
  const [password, set_password] = createSignal("");
  const [password_confirmation, set_password_confirmation] = createSignal("");
  const [tos, set_tos] = createSignal(false);
  const authc = use_authentication();
  function handle_input(setter: Setter<any>) {
    return function (evt: Event) {
      const target = evt.target as HTMLInputElement
      switch (target.type) {
        case "text":
        case "email":
        case "password":
          setter(target.value)
          break;
        case "checkbox":
          setter(target.checked)
          break;
        default:
          break;
      }
    }
  }
  function handle_submit(evt: Event) {
    evt.preventDefault()
    const payload = {
      name: name(),
      email: email(),
      password: password(),
      password_confirmation: password_confirmation(),
      tos: tos()
    }
    authc.customer.signup(payload)
  }
  return (
    <Box
      display="grid"
      maxWidth="$screenW"
      minHeight="$screenH"
      placeContent="center"
      bg="$neutral3"
      position="relative"
    >
      <Modal centered opened={authc.customer.signup_res.loading} onClose={() => { }}>
        <ModalOverlay />
        <ModalContent bg="none" shadow="none">
          <Box margin="auto">
            <CircularProgress indeterminate size="$16" thickness="$1_5" >
              <CircularProgressIndicator color="$primary11" />
            </CircularProgress>
          </Box>
        </ModalContent>
      </Modal>
      <Box
        as="main"
        maxWidth="400px"
        color="$neutral12"
        bg="$neutral1"
        rounded="$md"
        shadow="$sm"
      >
        <Grid
          as="form"
          p="$8"
          gap="$4"
          onSubmit={handle_submit}
        >
          <GridItem>
            <Text size="2xl" fontWeight="$bold" textAlign="center">Sign Up</Text>
          </GridItem>
          <GridItem>
            <FormControl required>
              <FormLabel for="name">Name</FormLabel>
              <Input id="name" type="text" value={name()} onInput={handle_input(set_name)} />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl required>
              <FormLabel for="email">Email Address</FormLabel>
              <Input id="email" type="email" value={email()} onInput={handle_input(set_email)} />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl required>
              <FormLabel for="password">Password</FormLabel>
              <Input id="password" type="password" value={password()} onInput={handle_input(set_password)} />
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl required>
              <FormLabel for="password_confirmation">Password Confirmation</FormLabel>
              <Input id="password_confirmation" type="password" value={password_confirmation()} onInput={handle_input(set_password_confirmation)} />
            </FormControl>
          </GridItem>
          <GridItem>
            <Checkbox name="tos" fontSize="$xs" checked={tos()} onChange={handle_input(set_tos)}>
              I agree to the Terms of Service and the Privacy Policy.
            </Checkbox>
          </GridItem>
          <GridItem>
            <Button type="submit" fullWidth>
              Submit
            </Button>
          </GridItem>
          <GridItem>
            <Text fontSize="$sm">
              Already registered? {" "} <Anchor color="$primary11" href="/user/signin">Sign In</Anchor>
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};


export default function (props: SignUpProps) {
  return (
    <AuthenticationProvider guest>
      <HopeProvider config={theme}>
        <SignUp {...props}></SignUp>
      </HopeProvider>
    </AuthenticationProvider>
  );
}
