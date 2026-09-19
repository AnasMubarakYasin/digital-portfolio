<<<<<<< HEAD
import { ParentComponent, Setter, createSignal } from "solid-js";
=======
import { type ParentComponent, Setter, createSignal } from "solid-js";
>>>>>>> 75f4020 (feat: add storage service)
import {
  HopeProvider,
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
<<<<<<< HEAD
} from "@hope-ui/solid"
import {
  CircularProgress,
  CircularProgressIndicator,
  CircularProgressLabel
} from "@hope-ui/solid"

import { AuthenticationProvider, use_authentication } from "@context/authentication"
import theme from "@config/theme/hopeui";

export interface SignInProps { }
=======
} from "@hope-ui/solid";
import {
  CircularProgress,
  CircularProgressIndicator,
  CircularProgressLabel,
} from "@hope-ui/solid";

import {
  AuthenticationProvider,
  use_authentication,
} from "@context/authentication";
import theme from "@config/theme/hopeui";

export interface SignInProps {}
>>>>>>> 75f4020 (feat: add storage service)

const SignIn: ParentComponent<SignInProps> = function ({ children }) {
  const [email, set_email] = createSignal("");
  const [password, set_password] = createSignal("");
  const authc = use_authentication();
  function handle_input(setter: Setter<any>) {
    return function (evt: Event) {
<<<<<<< HEAD
      const target = evt.target as HTMLInputElement
=======
      const target = evt.target as HTMLInputElement;
>>>>>>> 75f4020 (feat: add storage service)
      switch (target.type) {
        case "text":
        case "email":
        case "password":
<<<<<<< HEAD
          setter(target.value)
          break;
        case "checkbox":
          setter(target.checked)
=======
          setter(target.value);
          break;
        case "checkbox":
          setter(target.checked);
>>>>>>> 75f4020 (feat: add storage service)
          break;
        default:
          break;
      }
<<<<<<< HEAD
    }
  }
  function handle_submit(evt: Event) {
    evt.preventDefault()
    const payload = {
      email: email(),
      password: password(),
    }
    authc.customer.signin(payload)
=======
    };
  }
  function handle_submit(evt: Event) {
    evt.preventDefault();
    const payload = {
      email: email(),
      password: password(),
    };
    authc.customer.signin(payload);
>>>>>>> 75f4020 (feat: add storage service)
  }

  return (
    <Box
      display="grid"
      maxWidth="$screenW"
      minHeight="$screenH"
      placeContent="center"
      bg="$neutral3"
    >
<<<<<<< HEAD
      <Modal centered opened={authc.customer.signin_res.loading} onClose={() => { }}>
        <ModalOverlay />
        <ModalContent bg="none" shadow="none">
          <Box margin="auto">
            <CircularProgress indeterminate size="$16" thickness="$1_5" >
=======
      <Modal
        centered
        opened={authc.customer.signin_res.loading}
        onClose={() => {}}
      >
        <ModalOverlay />
        <ModalContent bg="none" shadow="none">
          <Box margin="auto">
            <CircularProgress indeterminate size="$16" thickness="$1_5">
>>>>>>> 75f4020 (feat: add storage service)
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
<<<<<<< HEAD
        <Grid
          as="form"
          p="$8"
          gap="$4"
          onSubmit={handle_submit}
        >
          <GridItem>
            <Text size="2xl" fontWeight="$bold" textAlign="center">Sign In</Text>
=======
        <Grid as="form" p="$8" gap="$4" onSubmit={handle_submit}>
          <GridItem>
            <Text size="2xl" fontWeight="$bold" textAlign="center">
              Sign In
            </Text>
>>>>>>> 75f4020 (feat: add storage service)
          </GridItem>
          <GridItem>
            <FormControl required>
              <FormLabel for="email">Email Address</FormLabel>
<<<<<<< HEAD
              <Input id="email" type="email" value={email()} onInput={handle_input(set_email)} />
=======
              <Input
                id="email"
                type="email"
                value={email()}
                onInput={handle_input(set_email)}
                autocomplete="email"
              />
>>>>>>> 75f4020 (feat: add storage service)
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl required>
              <FormLabel for="password">Password</FormLabel>
<<<<<<< HEAD
              <Input id="password" type="password" value={password()} onInput={handle_input(set_password)} />
=======
              <Input
                id="password"
                type="password"
                value={password()}
                onInput={handle_input(set_password)}
                autocomplete="current-password"
              />
>>>>>>> 75f4020 (feat: add storage service)
            </FormControl>
          </GridItem>
          <GridItem>
            <Button type="submit" fullWidth>
              Submit
            </Button>
          </GridItem>
          <GridItem>
            <Text fontSize="$sm">
<<<<<<< HEAD
              Not registered? {" "} <Anchor color="$primary11" href="/user/signup">Sign Up</Anchor>
=======
              Not registered?{" "}
              <Anchor color="$primary11" href="/user/signup">
                Sign Up
              </Anchor>
>>>>>>> 75f4020 (feat: add storage service)
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default function (props: SignInProps) {
  return (
    <AuthenticationProvider guest>
      <HopeProvider config={theme}>
        <SignIn {...props}></SignIn>
      </HopeProvider>
    </AuthenticationProvider>
  );
}
