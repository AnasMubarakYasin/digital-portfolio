import {
  type ParentComponent,
  For,
  Switch,
  Match,
  createSignal,
  createResource,
  Show,
  createEffect,
  type Setter,
  batch,
} from "solid-js";
import { AspectRatio, HopeProvider, Image, useColorMode } from "@hope-ui/solid";
import { Box } from "@hope-ui/solid";
import { Flex, Spacer } from "@hope-ui/solid";
import { Grid, GridItem } from "@hope-ui/solid";
import { Divider } from "@hope-ui/solid";
import { Button } from "@hope-ui/solid";
import { IconButton } from "@hope-ui/solid";
import { Icon } from "@hope-ui/solid";
import { Heading } from "@hope-ui/solid";
import { Text } from "@hope-ui/solid";
import { Anchor } from "@hope-ui/solid";
import { Avatar, AvatarBadge, AvatarGroup, AvatarExcess } from "@hope-ui/solid";
import {
  Tag,
  TagCloseButton,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
} from "@hope-ui/solid";
import {
  Select,
  SelectTrigger,
  SelectPlaceholder,
  SelectValue,
  SelectTag,
  SelectTagCloseButton,
  SelectIcon,
  SelectContent,
  SelectListbox,
  SelectOptGroup,
  SelectLabel,
  SelectOption,
  SelectOptionText,
  SelectOptionIndicator,
  createDisclosure,
} from "@hope-ui/solid";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@hope-ui/solid";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
} from "@hope-ui/solid";
import {
  CircularProgress,
  CircularProgressIndicator,
  CircularProgressLabel,
} from "@hope-ui/solid";

// import { BsLinkedin } from "solid-icons/bs";
// import { RiBuildingsHomeSmile2Line } from "solid-icons/ri";
// import { FaRegularNoteSticky } from "solid-icons/fa";
// import { BiRegularNotepad } from "solid-icons/bi";
// import { BiRegularHistory } from "solid-icons/bi";
// import { BiRegularEditAlt } from "solid-icons/bi";
import { BiRegularMoon } from "solid-icons/bi";
import { BiRegularSun } from "solid-icons/bi";
import { RiSystemAppsLine } from "solid-icons/ri";
// import { IoNewspaperOutline } from "solid-icons/io";
import { HiOutlineArrowDownTray } from "solid-icons/hi";
import { FaBrandsSquareFacebook } from "solid-icons/fa";
import { FaBrandsSquareGithub } from "solid-icons/fa";
import { FaBrandsLinkedin } from "solid-icons/fa";
import { FaBrandsSquareTwitter } from "solid-icons/fa";
import { FaBrandsYoutube } from "solid-icons/fa";
import { RiSystemAddFill } from "solid-icons/ri";
// import { IoInformationCircleOutline } from 'solid-icons/io'
import { HiOutlineMapPin } from "solid-icons/hi";
// import { CgWorkAlt } from 'solid-icons/cg'
// import { RiDocumentBookLine } from 'solid-icons/ri'
import { BiRegularCertification } from "solid-icons/bi";
import { HiOutlineUser } from "solid-icons/hi";
import { HiOutlineInformationCircle } from "solid-icons/hi";
import { HiOutlineEnvelope } from "solid-icons/hi";
import { HiOutlinePencilSquare } from "solid-icons/hi";
import { HiOutlineBriefcase } from "solid-icons/hi";
import { HiOutlineBuildingOffice } from "solid-icons/hi";
import { HiOutlineSquares2x2 } from "solid-icons/hi";

import { FaSolidMinus } from "solid-icons/fa";
import { AiOutlineFlag } from "solid-icons/ai";
import { FiUser } from "solid-icons/fi";

import TopAppBar from "./TopAppBar";
import Footer from "./Footer";
import config from "@config/theme/hopeui";
import {
  AuthenticationProvider,
  use_authentication,
} from "@context/authentication";
import { LoadingProvider, useLoading } from "@context/loading";

export interface ProfileProps {
  name: string;
  nav: {
    text: string;
    href: string;
  }[];
  path: string;
}

const active_position_statuses = [
  "Employed",
  "Interview",
  "Invited",
  "Finished",
];
const career_status = [{ id: 1, text: "Actively Seeking Job" }];

const Profile: ParentComponent<ProfileProps> = function ({
  nav,
  path,
  name,
  children,
}) {
  const [, loading] = useLoading();
  const authc = use_authentication();
  const [source_profile, get_profile] = createSignal<
    { token: string; name: string } | undefined
  >();
  const [source_up_profile, up_profile] = createSignal<
    { token: string; id: string; profile: Types.Profile } | undefined
  >();
  const [profile, { refetch }] = createResource(
    source_profile,
    fetcher_profile
  );
  const [up_res, { mutate }] = createResource(
    source_up_profile,
    fetcher_up_profile
  );
  async function fetcher_profile(source: { token: string; name: string }) {
    const res = await fetch(`/api/profile/name/${source.name}`, {
      headers: {
        Authorization: `Bearer ${source.token}`,
      },
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json() as Promise<Types.Profile>;
  }
  async function fetcher_up_profile(source: {
    token: string;
    id: string;
    profile: Types.Profile;
  }) {
    const res = await fetch(`/api/profile/${source.id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${source.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(source.profile),
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json() as Promise<Types.Profile>;
  }
  const { colorMode, toggleColorMode } = useColorMode();
  function handleToggleColorMode() {
    toggleColorMode();
  }
  const {
    isOpen: isOpnProfile,
    onOpen: onOpnProfile,
    onClose: onClsProfile,
  } = createDisclosure();
  const {
    isOpen: isOpnPsProfile,
    onOpen: onOpnPsProfile,
    onClose: onClsPsProfile,
  } = createDisclosure();
  const {
    isOpen: isOpnExp,
    onOpen: onOpnExp,
    onClose: onClsExp,
  } = createDisclosure();
  const {
    isOpen: isOpnPrj,
    onOpen: onOpnPrj,
    onClose: onClsPrj,
  } = createDisclosure();
  const {
    isOpen: isOpnCert,
    onOpen: onOpnCert,
    onClose: onClsCert,
  } = createDisclosure();
  const {
    isOpen: isOpnEdu,
    onOpen: onOpnEdu,
    onClose: onClsEdu,
  } = createDisclosure();
  const {
    isOpen: isOpnLang,
    onOpen: onOpnLang,
    onClose: onClsLang,
  } = createDisclosure();
  const {
    isOpen: isOpnAPs,
    onOpen: onOpnAPs,
    onClose: onClsAPs,
  } = createDisclosure();
  const {
    isOpen: isOpnPPs,
    onOpen: onOpnPPs,
    onClose: onClsPPs,
  } = createDisclosure();
  const {
    isOpen: isOpnSkl,
    onOpen: onOpnSkl,
    onClose: onClsSkl,
  } = createDisclosure();
  const [pname, set_pname] = createSignal("");
  const [pphoto, set_pphoto] = createSignal("");
  const [pbackground, set_pbackground] = createSignal("");
  const [phl, set_phl] = createSignal("");
  const [email, set_email] = createSignal("");
  const [phone, set_phone] = createSignal("");
  const [dob, set_dob] = createSignal("");
  const [salary, set_salary] = createSignal("");
  const [location, set_location] = createSignal("");
  const [work, set_work] = createSignal("");
  const [project, set_project] = createSignal<
    (Types.Project & { id: string }) | null
  >(null);
  const [certificate, set_certificate] = createSignal<
    (Types.Certificate & { id: string }) | null
  >(null);
  const [education, set_education] = createSignal<
    (Types.Education & { id: string }) | null
  >(null);
  const [active_position, set_active_position] = createSignal<
    (Types.ActivePosition & { id: string }) | null
  >(null);
  const [preferred_position, set_preferred_position] = createSignal<
    (Types.PreferredPosition & { id: string }) | null
  >(null);
  const [skill, set_skill] = createSignal<
    (Types.Skill & { id: string }) | null
  >(null);
  const [language, set_language] = createSignal<
    (Types.Language & { id: string }) | null
  >(null);
  function handle_input(setter: Setter<any> | ((v: any) => void)) {
    return function (evt: Event) {
      const target = evt.target as HTMLInputElement;
      switch (target.type) {
        case "text":
        case "email":
        case "password":
          setter(target.value);
          break;
        case "checkbox":
          setter(target.checked);
          break;
        case "file":
          setter(URL.createObjectURL(target.files.item(0)));
          break;
        default:
          setter(target.value);
          break;
      }
    };
  }
  function download(path: string) {
    if (path) {
      return "/api/storage/file" + path;
    } else {
      return "";
    }
  }
  createEffect(() => {
    loading.loaded();
  });
  createEffect(() => {
    if (isOpnProfile()) {
      set_pname(profile.latest.name);
      set_pphoto(profile.latest.photo);
      set_phl(profile.latest.headline);
    }
    if (isOpnPsProfile()) {
      set_email(profile.latest.personal.email);
      set_phone(profile.latest.personal.phone);
      set_dob(profile.latest.personal.dob);
      set_salary(profile.latest.personal.salary);
      set_location(profile.latest.personal.location);
      set_work(profile.latest.personal.work);
    }
    if (!isOpnPrj()) {
      set_project(null);
    }
    if (!isOpnCert()) {
      set_certificate(null);
    }
    if (!isOpnEdu()) {
      set_education(null);
    }
    if (!isOpnAPs()) {
      set_active_position(null);
    }
    if (!isOpnPPs()) {
      set_preferred_position(null);
    }
    if (!isOpnSkl()) {
      set_skill(null);
    }
    if (!isOpnLang()) {
      set_language(null);
    }
    if (!up_res.error && !up_res.loading && up_res.latest) {
      batch(() => {
        mutate(undefined);
        refetch();
      });
    }
  });
  get_profile({ token: authc.data.token, name });
  return (
    <Box
      display="grid"
      alignContent="start"
      gap="$8"
      maxWidth="$screenW"
      minHeight="$screenH"
      background="$neutral3"
    >
      <TopAppBar
        as="header"
        logo={import.meta.env.PUBLIC_APP_LOGO}
        title={import.meta.env.PUBLIC_APP_NAME}
        path={path}
        nav={nav}
      >
        <Switch fallback={<div>Not Found</div>}>
          <Match when={colorMode() == "system"}>
            <IconButton
              size="sm"
              rounded="$full"
              colorScheme="neutral"
              aria-label="color schema"
              icon={<Icon boxSize="$5" as={RiSystemAppsLine} />}
              onclick={handleToggleColorMode}
            />
          </Match>
          <Match when={colorMode() == "light"}>
            <IconButton
              size="sm"
              rounded="$full"
              colorScheme="neutral"
              aria-label="color schema"
              icon={<Icon boxSize="$5" as={BiRegularSun} />}
              onclick={handleToggleColorMode}
            />
          </Match>
          <Match when={colorMode() == "dark"}>
            <IconButton
              size="sm"
              rounded="$full"
              colorScheme="neutral"
              aria-label="color schema"
              icon={<Icon boxSize="$5" as={BiRegularMoon} />}
              onclick={handleToggleColorMode}
            />
          </Match>
        </Switch>
      </TopAppBar>
      <Grid
        templateRows="auto"
        // templateColumns={{ "@initial": "auto", "@md": "8.5fr 3.5fr" }}
        gap="$4"
        px={{ "@initial": "$4", "@sm": "$12", "@md": "$16", "@lg": "$24" }}
      >
        {/* SECTION main */}
        <GridItem as="main">
          <Modal
            centered
            blockScrollOnMount={false}
            opened={loading.isLoading() || profile.loading || up_res.loading}
            onClose={() => {}}
          >
            <ModalOverlay />
            <ModalContent bg="none" shadow="none">
              <Box margin="auto">
                <CircularProgress indeterminate size="$16" thickness="$1_5">
                  <CircularProgressIndicator color="$primary11" />
                </CircularProgress>
              </Box>
            </ModalContent>
          </Modal>
          <Show when={profile.latest && !up_res.loading}>
            <Grid gap="$4">
              {/* SECTION HeadLine */}
              <GridItem
                as="section"
                p="$4"
                color="$neutral12"
                bg="$neutral1"
                rounded="$md"
                shadow="$sm"
              >
                <Box display="grid" position="relative">
                  <AspectRatio maxW="$screenW" ratio={16 / 3}>
                    <Show
                      when={profile.latest.image}
                      fallback={
                        <Box
                          display="grid"
                          background="$neutral8"
                          objectFit="cover"
                        ></Box>
                      }
                    >
                      <Image
                        src={profile.latest.image}
                        alt={profile.latest.name}
                        objectFit="cover"
                      />
                    </Show>
                  </AspectRatio>
                  <AvatarGroup
                    position="relative"
                    width="0"
                    height="0"
                    paddingLeft="$8"
                  >
                    <Show
                      when={profile.latest.photo}
                      fallback={
                        <Avatar
                          size={{
                            "@initial": "xl",
                            "@xs": "md",
                            "@sm": "lg",
                            "@md": "lg",
                            "@lg": "xl",
                            "@xl": "xl",
                          }}
                          icon={() => (
                            <Icon as={HiOutlineUser} boxSize="$9"></Icon>
                          )}
                        />
                      }
                    >
                      <Avatar
                        size={{
                          "@initial": "xl",
                          "@xs": "md",
                          "@sm": "lg",
                          "@md": "lg",
                          "@lg": "xl",
                          "@xl": "xl",
                        }}
                        name="photo"
                        src={download(profile.latest.photo)}
                        imageProps={{ crossorigin: "use-credentials" }}
                      />
                    </Show>
                  </AvatarGroup>
                  <Flex gap="$4" pt="$14" px="$8" alignItems="center">
                    <Flex direction="column" flexGrow="1" gap="$1">
                      <Text size="2xl" fontWeight="$bold">
                        {profile.latest.name}
                      </Text>
                      <Text size="base" fontWeight="$medium" opacity="0.9">
                        {profile.latest.headline}
                      </Text>
                      <Text size="sm" fontWeight="$light" opacity="0.75">
                        {profile.latest.personal.location}
                      </Text>
                    </Flex>
                    <Flex gap="$4" alignItems="center" alignSelf="start">
                      <Show when={authc.data.account}>
                        <IconButton
                          variant="ghost"
                          aria-label="Icon Name"
                          borderRadius="$full"
                          icon={
                            <Icon as={HiOutlinePencilSquare} boxSize="$5" />
                          }
                          onClick={onOpnProfile}
                        />
                      </Show>
                      {/* <Button size="sm" variant="outline">
                        Website
                      </Button> */}
                      <Button
                        size="sm"
                        variant="outline"
                        paddingLeft="$1"
                        iconSpacing="$1"
                        leftIcon={<Icon as={RiSystemAddFill} boxSize="$5" />}
                      >
                        Follow
                      </Button>
                    </Flex>
                  </Flex>
                  {/* <Flex gap="$4">
                    <IconButton
                      size="sm"
                      aria-label="Icon Name"
                      icon={<FaBrandsSquareFacebook />}
                      variant="outline"
                    />
                    <IconButton
                      size="sm"
                      aria-label="Icon Name"
                      icon={<FaBrandsSquareGithub />}
                      variant="outline"
                    />
                    <IconButton
                      size="sm"
                      aria-label="Icon Name"
                      icon={<FaBrandsLinkedin />}
                      variant="outline"
                    />
                    <IconButton
                      size="sm"
                      aria-label="Icon Name"
                      icon={<FaBrandsSquareTwitter />}
                      variant="outline"
                    />
                    <IconButton
                      size="sm"
                      aria-label="Icon Name"
                      icon={<FaBrandsYoutube />}
                      variant="outline"
                    />
                  </Flex> */}
                </Box>
              </GridItem>
              {/* !SECTION */}

              {/* SECTION About */}
              <GridItem
                as="section"
                py="$4"
                px="$6"
                color="$neutral12"
                bg="$neutral1"
                rounded="$md"
                shadow="$sm"
              >
                <Box display="grid" gap="$2">
                  <Flex justifyContent="space-between" alignItems="center">
                    <Heading size="xl">About Me</Heading>
                    <Show when={authc.data.account}>
                      <IconButton
                        variant="ghost"
                        aria-label="Icon Name"
                        borderRadius="$full"
                        icon={<Icon as={HiOutlinePencilSquare} boxSize="$5" />}
                        onClick={onOpnProfile}
                      />
                    </Show>
                  </Flex>
                  <Flex direction="column" flexGrow="1" gap="$2">
                    <Text
                      size="base"
                      fontWeight="$medium"
                      opacity="0.75"
                      width="55%"
                    >
                      {profile.latest.about}
                    </Text>
                  </Flex>
                  <Divider />
                  <Grid templateColumns="1fr 1fr 1fr" gap="$4">
                    <For
                      each={[
                        {
                          title: "Mail Address",
                          subtitle: profile.latest.personal.email,
                        },
                        {
                          title: "Phone Number",
                          subtitle: profile.latest.personal.phone,
                        },
                        // {
                        //   title: "Date of Birth",
                        //   subtitle: profile.latest.personal.dob,
                        // },
                        // {
                        //   title: "Salary Expectation",
                        //   subtitle: profile.latest.personal.salary,
                        // },
                      ]}
                    >
                      {(item, index) => (
                        <GridItem data-index={index()}>
                          <Flex gap="$4" alignItems="center">
                            {/* <AvatarGroup avatarBorderRadius="$xl">
                              <Avatar
                                size="md"
                                icon={(props) => (
                                  <Icon
                                    as={HiOutlineInformationCircle}
                                    boxSize="$7"
                                  ></Icon>
                                )}
                              ></Avatar>
                            </AvatarGroup> */}
                            <Flex direction="column">
                              <Text
                                size="sm"
                                fontWeight="$normal"
                                opacity="0.9"
                              >
                                {item.title}
                              </Text>
                              <Text size="base" fontWeight="$normal">
                                {item.subtitle}
                              </Text>
                            </Flex>
                          </Flex>
                        </GridItem>
                      )}
                    </For>
                  </Grid>
                </Box>
              </GridItem>
              {/* !SECTION */}

              {/* SECTION Project */}
              <GridItem
                as="section"
                py="$4"
                px="$6"
                color="$neutral12"
                bg="$neutral1"
                rounded="$md"
                shadow="$sm"
              >
                <Box display="grid" gap="$4">
                  <Flex justifyContent="space-between" alignItems="center">
                    <Heading size="xl">Projects</Heading>
                    <Show when={authc.data.account}>
                      <IconButton
                        variant="ghost"
                        aria-label="Icon Name"
                        borderRadius="$full"
                        icon={<Icon as={HiOutlinePencilSquare} boxSize="$5" />}
                        onClick={onOpnPrj}
                      />
                    </Show>
                  </Flex>
                  <Show when={profile.latest.projects.length}>
                    <Grid templateColumns="repeat(2, 1fr)" gap="$4">
                      <For each={profile.latest.projects}>
                        {(item, index) => (
                          <GridItem
                            data-index={index()}
                            display="flex"
                            flexDirection="column"
                            gap="$2"
                            padding="$2"
                            borderWidth="thin"
                            borderStyle="solid"
                            borderColor="$neutral7"
                            borderRadius="$lg"
                          >
                            <Box display="grid" gap="$2">
                              <AspectRatio maxW="$full" ratio={16 / 9}>
                                <Show
                                  when={item.image}
                                  fallback={
                                    <Box
                                      display="grid"
                                      background="$neutral8"
                                      objectFit="cover"
                                    ></Box>
                                  }
                                >
                                  <Image
                                    src={download(item.image)}
                                    alt={item.name}
                                    objectFit="cover"
                                  />
                                </Show>
                              </AspectRatio>
                              {/* <AvatarGroup avatarBorderRadius="$xl">
                                <Avatar
                                  size="md"
                                  icon={(props) => (
                                    <Icon
                                      as={HiOutlineSquares2x2}
                                      boxSize="$6"
                                    ></Icon>
                                  )}
                                ></Avatar>
                              </AvatarGroup> */}
                              <Flex
                                gap="$2"
                                direction="column"
                                alignItems="flex-start"
                                paddingLeft="$2"
                              >
                                <Show
                                  when={item.link}
                                  fallback={
                                    <Text size="lg" fontWeight="$semibold">
                                      {item.name}
                                    </Text>
                                  }
                                >
                                  <Anchor
                                    fontSize="$lg"
                                    fontWeight="$semibold"
                                    color="$primary11"
                                    href={item.link}
                                  >
                                    {item.name}
                                  </Anchor>
                                </Show>
                                {/* <Text
                                  size="sm"
                                  fontWeight="$medium"
                                  opacity="0.9"
                                >
                                  {item.client}
                                </Text> */}
                                <Text size="sm" fontWeight="$normal">
                                  {item.description}
                                </Text>
                                <Show when={item.tags.length}>
                                  <Flex wrap="wrap" gap="$1">
                                    <For each={item.tags}>
                                      {(item, index) => (
                                        <Text
                                          data-id={index()}
                                          py="$1"
                                          px="$2"
                                          size="xs"
                                          fontWeight="$normal"
                                          borderWidth="1px"
                                          borderStyle="solid"
                                          borderColor="$neutral7"
                                          borderRadius="$lg"
                                          css={{ whiteSpace: "nowrap" }}
                                        >
                                          {item}
                                        </Text>
                                      )}
                                    </For>
                                  </Flex>
                                </Show>
                              </Flex>
                            </Box>
                            <Box></Box>

                            {/* <Divider />
                            <Flex w="$full" justifyContent="end">
                              <Anchor
                                mx="$2"
                                fontSize="$sm"
                                fontWeight="$semibold"
                                color="$primary11"
                                href={item.link}
                              >
                                View
                              </Anchor>
                            </Flex> */}
                          </GridItem>
                        )}
                      </For>
                    </Grid>
                  </Show>
                </Box>
              </GridItem>
              {/* !SECTION */}
            </Grid>
          </Show>
        </GridItem>
        {/* !SECTION */}
      </Grid>
      <Modal
        centered
        blockScrollOnMount
        opened={isOpnProfile()}
        onClose={onClsProfile}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalBody>
            <Grid
              id="fprofile"
              as="form"
              gap="$4"
              onSubmit={(evt) => {
                evt.preventDefault();
                up_profile({
                  token: authc.data.token,
                  id: profile.latest.id,
                  profile: {
                    ...profile.latest,
                    name: pname(),
                    photo: pphoto(),
                    headline: phl(),
                  },
                });
                if (profile.latest.name != pname()) {
                  window.location.replace(
                    `/user/${encodeURI(pname())}/profile`
                  );
                } else {
                }
                onClsProfile();
              }}
            >
              <GridItem>
                <FormControl>
                  <FormLabel
                    for="photo"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    gap="$2"
                    cursor="pointer"
                  >
                    <Show
                      when={pphoto()}
                      fallback={
                        <Avatar
                          size="lg"
                          icon={(props) => (
                            <Icon as={HiOutlineUser} boxSize="$7"></Icon>
                          )}
                        />
                      }
                    >
                      <Avatar
                        size="lg"
                        name="photo"
                        src={pphoto()}
                        imageProps={{ crossorigin: "use-credentials" }}
                      />
                    </Show>
                    <Text>Photo</Text>
                  </FormLabel>
                  <Input
                    hidden
                    id="photo"
                    type="file"
                    onInput={handle_input(set_pphoto)}
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl>
                  <FormLabel for="name">Name</FormLabel>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    value={pname()}
                    onInput={handle_input(set_pname)}
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl>
                  <FormLabel for="email">Headline</FormLabel>
                  <Input
                    id="email"
                    type="text"
                    placeholder="ex. Software Enginer or UI/UX Designer"
                    value={phl()}
                    onInput={handle_input(set_phl)}
                  />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl>
                  <FormLabel for="website">Website URL</FormLabel>
                  <Input
                    id="website"
                    type="url"
                    placeholder="ex. portfolio.web"
                  />
                </FormControl>
              </GridItem>
            </Grid>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" form="fprofile" fullWidth>
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Footer as="footer"></Footer>
    </Box>
  );
};

export default function (props: ProfileProps) {
  return (
    <AuthenticationProvider guest>
      <HopeProvider config={config}>
        <LoadingProvider>
          <Profile {...props}></Profile>
        </LoadingProvider>
      </HopeProvider>
    </AuthenticationProvider>
  );
}
