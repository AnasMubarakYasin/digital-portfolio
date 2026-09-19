<<<<<<< HEAD
import { ParentComponent, For, Switch, Match, createSignal, createResource, Show, createEffect, Setter, batch } from "solid-js";
import { HopeProvider, useColorMode } from "@hope-ui/solid";
=======
import {
  ParentComponent,
  For,
  Switch,
  Match,
  createSignal,
  createResource,
  Show,
  createEffect,
  Setter,
  batch,
  Accessor,
} from "solid-js";
import {
  HopeProvider,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useColorMode,
} from "@hope-ui/solid";
>>>>>>> 75f4020 (feat: add storage service)
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
<<<<<<< HEAD
=======
import { Image } from "@hope-ui/solid";
>>>>>>> 75f4020 (feat: add storage service)
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
<<<<<<< HEAD
} from "@hope-ui/solid"
=======
} from "@hope-ui/solid";
>>>>>>> 75f4020 (feat: add storage service)
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
<<<<<<< HEAD
} from "@hope-ui/solid"
import {
  CircularProgress,
  CircularProgressIndicator,
  CircularProgressLabel
} from "@hope-ui/solid"

import { BsLinkedin } from "solid-icons/bs";
import { RiBuildingsHomeSmile2Line } from "solid-icons/ri";
import { FaRegularNoteSticky } from "solid-icons/fa";
import { BiRegularNotepad } from "solid-icons/bi";
import { BiRegularHistory } from "solid-icons/bi";
import { BiRegularEditAlt } from "solid-icons/bi";
import { HiOutlineTemplate } from "solid-icons/hi";
import { BiRegularMoon } from "solid-icons/bi";
import { BiRegularSun } from "solid-icons/bi";
import { RiSystemAppsLine } from "solid-icons/ri";
import { IoNewspaperOutline } from "solid-icons/io";
import { HiSolidDownload } from "solid-icons/hi";
import { FaBrandsFacebookSquare } from 'solid-icons/fa'
import { FaBrandsGithubSquare } from 'solid-icons/fa'
import { FaBrandsLinkedin } from 'solid-icons/fa'
import { FaBrandsSquareTwitter } from 'solid-icons/fa'
import { FaBrandsYoutube } from 'solid-icons/fa'
import { RiSystemAddFill } from 'solid-icons/ri'
import { IoInformationCircleOutline } from 'solid-icons/io'
import { HiOutlineLocationMarker } from 'solid-icons/hi'
import { CgWorkAlt } from 'solid-icons/cg'
import { RiDocumentBookLine } from 'solid-icons/ri'
import { TbSchool } from 'solid-icons/tb'
import { TbCertificate } from 'solid-icons/tb'
import { BiRegularCertification } from 'solid-icons/bi'
import { HiOutlinePhotograph } from 'solid-icons/hi'
import { FaSolidMinus } from 'solid-icons/fa'
import { AiOutlineFlag } from 'solid-icons/ai'
=======
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
import { TbOutlineSchool } from "solid-icons/tb";
import { TbOutlineCertificate } from "solid-icons/tb";
import { BiRegularCertification } from "solid-icons/bi";
import { HiOutlineUser } from "solid-icons/hi";
import { HiOutlineInformationCircle } from "solid-icons/hi";
import { HiOutlineEnvelope } from "solid-icons/hi";
import { HiOutlinePencilSquare } from "solid-icons/hi";
import { HiOutlineBriefcase } from "solid-icons/hi";
import { HiOutlineBuildingOffice } from "solid-icons/hi";
import { HiOutlineSquares2x2 } from "solid-icons/hi";
import { HiOutlineDocument } from "solid-icons/hi";

import { FaRegularImage } from 'solid-icons/fa'

import { FaSolidMinus } from "solid-icons/fa";
import { AiOutlineFlag } from "solid-icons/ai";
import { FiUser } from "solid-icons/fi";
>>>>>>> 75f4020 (feat: add storage service)

import TopAppBar from "./TopAppBar";
import Footer from "./Footer";
import config from "@config/theme/hopeui";
<<<<<<< HEAD
import { AuthenticationProvider, use_authentication } from "@context/authentication";
import { FiUser } from "solid-icons/fi";
=======
import {
  AuthenticationProvider,
  use_authentication,
} from "@context/authentication";
import { LoadingProvider, useLoading } from "@context/loading";
>>>>>>> 75f4020 (feat: add storage service)

export interface ProfileProps {
  name: string;
  nav: {
    text: string;
    href: string;
  }[];
  path: string;
}

<<<<<<< HEAD
const active_position_statuses = ["Employed", "Interview", "Invited", "Finished"]
=======
const active_position_statuses = ["Hired", "Offering", "Interview"];
>>>>>>> 75f4020 (feat: add storage service)
const career_status = [{ id: 1, text: "Actively Seeking Job" }];

const Profile: ParentComponent<ProfileProps> = function ({
  nav,
  path,
  name,
  children,
}) {
<<<<<<< HEAD
  const authc = use_authentication();
  const [source_profile, get_profile] = createSignal<{ token: string, name: string } | undefined>();
  const [source_up_profile, up_profile] = createSignal<{ token: string, id: string, profile: Types.Profile } | undefined>();
  const [profile, { refetch }] = createResource(source_profile, fetcher_profile);
  const [up_res, { mutate }] = createResource(source_up_profile, fetcher_up_profile);
  async function fetcher_profile(source: { token: string, name: string }) {
    const res = await fetch(`/api/profile/name/${source.name}`, {
      headers: {
        "Authorization": `Bearer ${source.token}`
=======
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
>>>>>>> 75f4020 (feat: add storage service)
      },
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json() as Promise<Types.Profile>;
  }
<<<<<<< HEAD
  async function fetcher_up_profile(source: { token: string, id: string, profile: Types.Profile }) {
    const res = await fetch(`/api/profile/${source.id}`, {
      method: "PATCH",
      headers: {
        "Authorization": `Bearer ${source.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(source.profile)
=======
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
>>>>>>> 75f4020 (feat: add storage service)
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json() as Promise<Types.Profile>;
  }
<<<<<<< HEAD
=======
  async function upload(path: string, file: File) {
    const headers = new Headers();
    //  headers.set("Authorization", `Bearer ${source.token}`);
    headers.set("Content-Type", file.type);
    headers.set("Content-Length", file.size.toString());
    const res = await fetch(`/api/storage/file/` + path, {
      method: "POST",
      headers,
      body: file,
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.text();
  }
  function download(path: string) {
    if (path) {
      return "/api/storage/file" + path;
    } else {
      return "";
    }
  }
>>>>>>> 75f4020 (feat: add storage service)
  const { colorMode, toggleColorMode } = useColorMode();
  function handleToggleColorMode() {
    toggleColorMode();
  }
<<<<<<< HEAD
  const { isOpen: isOpnProfile, onOpen: onOpnProfile, onClose: onClsProfile } = createDisclosure()
  const { isOpen: isOpnPsProfile, onOpen: onOpnPsProfile, onClose: onClsPsProfile } = createDisclosure()
  const { isOpen: isOpnExp, onOpen: onOpnExp, onClose: onClsExp } = createDisclosure()
  const { isOpen: isOpnPrj, onOpen: onOpnPrj, onClose: onClsPrj } = createDisclosure()
  const { isOpen: isOpnCert, onOpen: onOpnCert, onClose: onClsCert } = createDisclosure()
  const { isOpen: isOpnEdu, onOpen: onOpnEdu, onClose: onClsEdu } = createDisclosure()
  const { isOpen: isOpnLang, onOpen: onOpnLang, onClose: onClsLang } = createDisclosure()
  const { isOpen: isOpnAPs, onOpen: onOpnAPs, onClose: onClsAPs } = createDisclosure()
  const { isOpen: isOpnPPs, onOpen: onOpnPPs, onClose: onClsPPs } = createDisclosure()
  const { isOpen: isOpnSkl, onOpen: onOpnSkl, onClose: onClsSkl } = createDisclosure()
  const [pname, set_pname] = createSignal("");
  const [phl, set_phl] = createSignal("");
=======
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
  const {
    isOpen: isOpnDoc,
    onOpen: onOpnDoc,
    onClose: onClsDoc,
  } = createDisclosure();
  const [pname, set_pname] = createSignal("");
  const [pphoto, set_pphoto] = createSignal("");
  const [pimage, set_pimage] = createSignal("");
  const [phl, set_phl] = createSignal("");
  const [pab, set_pab] = createSignal("");
>>>>>>> 75f4020 (feat: add storage service)
  const [email, set_email] = createSignal("");
  const [phone, set_phone] = createSignal("");
  const [dob, set_dob] = createSignal("");
  const [salary, set_salary] = createSignal("");
  const [location, set_location] = createSignal("");
  const [work, set_work] = createSignal("");
<<<<<<< HEAD
  const [project, set_project] = createSignal<Types.Project & { id: string } | null>(null);
  const [certificate, set_certificate] = createSignal<Types.Certificate & { id: string } | null>(null);
  const [education, set_education] = createSignal<Types.Education & { id: string } | null>(null);
  const [active_position, set_active_position] = createSignal<Types.ActivePosition & { id: string } | null>(null);
  const [preferred_position, set_preferred_position] = createSignal<Types.PreferredPosition & { id: string } | null>(null);
  const [skill, set_skill] = createSignal<Types.Skill & { id: string } | null>(null);
  const [language, set_language] = createSignal<Types.Language & { id: string } | null>(null);
  function handle_input(setter: Setter<any> | ((v: any) => void)) {
    return function (evt: Event) {
      const target = evt.target as HTMLInputElement
=======
  const [project, set_project] = createSignal<
    (Types.Project & { id: string }) | null
  >(null);
  const [tag, set_tag] = createSignal<string | null>(null);
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
  const [cv, set_cv] = createSignal("");
  const oidm = new Map<string, File>();
  function handle_input(
    setter: Setter<any> | ((v: any) => void),
    getter?: Accessor<any> | (() => any)
  ) {
    return function (evt: Event) {
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
          break;
        default:
          setter(target.value)
          break;
      }
    }
  }
  createEffect(() => {
    if (isOpnProfile()) {
      set_pname(profile.latest.name)
      set_phl(profile.latest.headline)
    }
    if (isOpnPsProfile()) {
      set_email(profile.latest.personal.email)
      set_phone(profile.latest.personal.phone)
      set_dob(profile.latest.personal.dob)
      set_salary(profile.latest.personal.salary)
      set_location(profile.latest.personal.location)
      set_work(profile.latest.personal.work)
    }
    if (!isOpnPrj()) {
      set_project(null)
    }
    if (!isOpnCert()) {
      set_certificate(null)
    }
    if (!isOpnEdu()) {
      set_education(null)
    }
    if (!isOpnAPs()) {
      set_active_position(null)
    }
    if (!isOpnPPs()) {
      set_preferred_position(null)
    }
    if (!isOpnSkl()) {
      set_skill(null)
    }
    if (!isOpnLang()) {
      set_language(null)
    }
    if (!up_res.error && !up_res.loading && up_res.latest) {
      batch(() => {
        mutate(undefined)
        refetch()
      })
    }
  })
  get_profile({ token: authc.data.token, name })
=======
          setter(target.value);
          break;
        case "checkbox":
          setter(target.checked);
          break;
        case "file":
          if (getter && getter()) {
            URL.revokeObjectURL(getter());
            oidm.delete(getter());
          }
          const oid = URL.createObjectURL(target.files.item(0));
          oidm.set(oid, target.files.item(0));
          setter(oid);
          break;
        default:
          setter(target.value);
          break;
      }
    };
  }
  createEffect(() => {
    loading.loaded();
  });
  createEffect(() => {
    if (isOpnProfile()) {
      set_pname(profile.latest.name);
      set_pphoto(download(profile.latest.photo));
      set_phl(profile.latest.headline);
      set_pab(profile.latest.about);
    }
    if (isOpnPsProfile()) {
      set_email(profile.latest.personal.email);
      set_phone(profile.latest.personal.phone);
      set_dob(profile.latest.personal.dob);
      set_salary(profile.latest.personal.salary);
      set_location(profile.latest.personal.location);
      set_work(profile.latest.personal.work);
    }
    if(isOpnDoc()) {
      set_cv(profile.latest.resume)
    }
    if (!isOpnPrj()) {
      set_pimage("");
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
>>>>>>> 75f4020 (feat: add storage service)
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
        templateColumns={{ "@initial": "auto", "@md": "8.5fr 3.5fr" }}
        gap="$4"
        px={{ "@initial": "$4", "@sm": "$12", "@md": "$16", "@lg": "$24" }}
      >
<<<<<<< HEAD

        {/* SECTION main */}
        <GridItem as="main">
          <Modal centered blockScrollOnMount={false} opened={profile.loading || up_res.loading} onClose={() => { }}>
            <ModalOverlay />
            <ModalContent bg="none" shadow="none">
              <Box margin="auto">
                <CircularProgress indeterminate size="$16" thickness="$1_5" >
=======
        {/* SECTION main */}
        <GridItem as="main">
          <Modal
            centered
            blockScrollOnMount
            opened={loading.isLoading() || profile.loading || up_res.loading}
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
                <Box display="grid" gap="$6">
                  <Flex gap="$4" alignItems="center">
                    <AvatarGroup>
<<<<<<< HEAD
                      <Avatar size="lg" icon={(props) => (
                        <Icon
                          as={FiUser}
                          boxSize="$7"
                        ></Icon>
                      )} />
=======
                      <Show
                        when={pphoto() || profile.latest.photo}
                        fallback={
                          <Avatar
                            size="lg"
                            icon={(props) => (
                              <Icon as={FiUser} boxSize="$7"></Icon>
                            )}
                          />
                        }
                      >
                        <Avatar
                          size="lg"
                          name={pname() || profile.latest.name}
                          src={pphoto() || download(profile.latest.photo)}
                          imageProps={{ crossorigin: "use-credentials" }}
                        />
                      </Show>
>>>>>>> 75f4020 (feat: add storage service)
                    </AvatarGroup>
                    <Flex direction="column" flexGrow="1">
                      <Text size="2xl" fontWeight="$bold">
                        {profile.latest.name}
                      </Text>
                      <Text size="base" fontWeight="$medium" opacity="0.9">
                        {profile.latest.headline}
                      </Text>
                    </Flex>
<<<<<<< HEAD
                    <Flex gap="$4">
                      <Show when={authc.data.account}>
                        <IconButton variant="ghost" aria-label="Icon Name" borderRadius="$full"
                          icon={<Icon as={BiRegularEditAlt} boxSize="$5" />}
                          onClick={onOpnProfile}
                        />
                      </Show>
                      <Button size="sm" variant="outline">Website</Button>
                      <Button size="sm" leftIcon={<Icon as={RiSystemAddFill} boxSize="$5" />}>Follow</Button>
                    </Flex>
                  </Flex>
                  <Flex gap="$4">
                    <IconButton size="sm" aria-label="Icon Name" icon={<FaBrandsFacebookSquare />} variant="outline" />
                    <IconButton size="sm" aria-label="Icon Name" icon={<FaBrandsGithubSquare />} variant="outline" />
                    <IconButton size="sm" aria-label="Icon Name" icon={<FaBrandsLinkedin />} variant="outline" />
                    <IconButton size="sm" aria-label="Icon Name" icon={<FaBrandsSquareTwitter />} variant="outline" />
                    <IconButton size="sm" aria-label="Icon Name" icon={<FaBrandsYoutube />} variant="outline" />
=======
                    <Flex gap="$4" alignItems="center">
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
                      {/* <Button size="sm" variant="outline">Website</Button> */}
                      {/* <Button size="sm" leftIcon={<Icon as={RiSystemAddFill} boxSize="$5" />}>Follow</Button> */}
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
                  <Flex gap="$4">
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
>>>>>>> 75f4020 (feat: add storage service)
                  </Flex>
                </Box>
              </GridItem>
              {/* !SECTION */}

              {/* SECTION Personal Information */}
              <GridItem
                as="section"
                p="$4"
                color="$neutral12"
                bg="$neutral1"
                rounded="$md"
                shadow="$sm"
              >
                <Box display="grid" gap="$4">
                  <Flex justifyContent="space-between" alignItems="center">
                    <Heading size="xl">Personal Information</Heading>
                    <Show when={authc.data.account}>
<<<<<<< HEAD
                      <Button
                        variant="ghost"
                        leftIcon={<Icon as={BiRegularEditAlt} boxSize="$5"></Icon>}
                        onClick={onOpnPsProfile}
                      >
                        Edit
                      </Button>
                    </Show>
                  </Flex>
                  <Grid templateColumns="1fr 1fr" gap="$4">
                    <For each={[
                      { title: profile.latest.personal.email, subtitle: "Mail Address" },
                      { title: profile.latest.personal.dob, subtitle: "Date of Birth" },
                      { title: profile.latest.personal.phone, subtitle: "Phone Number" },
                      { title: profile.latest.personal.salary, subtitle: "Salary Expectation" },
                    ]}>
                      {(item, index) => (
                        <GridItem data-index={index()}>
                          <Flex gap="$4" alignItems="center">
=======
                      {/* <Button
                        variant="ghost"
                        leftIcon={<Icon as={HiOutlinePencilSquare} boxSize="$5"></Icon>}
                        onClick={onOpnPsProfile}
                      >
                        Edit
                      </Button> */}
                      <IconButton
                        variant="ghost"
                        aria-label="Icon Name"
                        borderRadius="$full"
                        icon={<Icon as={HiOutlinePencilSquare} boxSize="$5" />}
                        onClick={onOpnPsProfile}
                      />
                    </Show>
                  </Flex>
                  <Grid templateColumns="1fr 1fr" gap="$4">
                    <For
                      each={[
                        {
                          title: profile.latest.personal.email,
                          subtitle: "Mail Address",
                        },
                        {
                          title: profile.latest.personal.dob,
                          subtitle: "Date of Birth",
                        },
                        {
                          title: profile.latest.personal.phone,
                          subtitle: "Phone Number",
                        },
                        {
                          title: profile.latest.personal.salary,
                          subtitle: "Salary Expectation",
                        },
                      ]}
                    >
                      {(item, index) => (
                        <GridItem data-index={index()}>
                          <Flex gap="$3" alignItems="center">
>>>>>>> 75f4020 (feat: add storage service)
                            <AvatarGroup avatarBorderRadius="$xl">
                              <Avatar
                                size="md"
                                icon={(props) => (
                                  <Icon
<<<<<<< HEAD
                                    as={IoInformationCircleOutline}
=======
                                    as={HiOutlineInformationCircle}
>>>>>>> 75f4020 (feat: add storage service)
                                    boxSize="$7"
                                  ></Icon>
                                )}
                              ></Avatar>
                            </AvatarGroup>
                            <Flex direction="column">
                              <Text size="lg" fontWeight="$normal">
                                {item.title}
                              </Text>
                              <Text
                                size="base"
                                fontWeight="$normal"
                                opacity="0.8"
                              >
                                {item.subtitle}
                              </Text>
                            </Flex>
                          </Flex>
                        </GridItem>
                      )}
                    </For>
                    <GridItem colSpan="2">
                      <Divider />
                    </GridItem>
                    <GridItem colSpan="2">
<<<<<<< HEAD
                      <Flex gap="$4" alignItems="center">
                        <AvatarGroup avatarBorderRadius="$xl">
                          <Avatar
                            size="md"
                            icon={(props) => (<Icon as={HiOutlineLocationMarker} boxSize="$6"></Icon>)}
=======
                      <Flex gap="$3" alignItems="center">
                        <AvatarGroup avatarBorderRadius="$xl">
                          <Avatar
                            size="md"
                            icon={(props) => (
                              <Icon as={HiOutlineMapPin} boxSize="$6"></Icon>
                            )}
>>>>>>> 75f4020 (feat: add storage service)
                          ></Avatar>
                        </AvatarGroup>
                        <Flex direction="column">
                          <Text size="lg" fontWeight="$normal">
                            {profile.latest.personal.location}
                          </Text>
<<<<<<< HEAD
                          <Text
                            size="base"
                            fontWeight="$normal"
                            opacity="0.8"
                          >Location</Text>
=======
                          <Text size="base" fontWeight="$normal" opacity="0.8">
                            Location
                          </Text>
>>>>>>> 75f4020 (feat: add storage service)
                        </Flex>
                      </Flex>
                    </GridItem>
                    <GridItem colSpan="2">
<<<<<<< HEAD
                      <Flex gap="$4" alignItems="center">
                        <AvatarGroup avatarBorderRadius="$xl">
                          <Avatar
                            size="md"
                            icon={(props) => (<Icon as={CgWorkAlt} boxSize="$6"></Icon>)}
=======
                      <Flex gap="$3" alignItems="center">
                        <AvatarGroup avatarBorderRadius="$xl">
                          <Avatar
                            size="md"
                            icon={(props) => (
                              <Icon as={HiOutlineBriefcase} boxSize="$6"></Icon>
                            )}
>>>>>>> 75f4020 (feat: add storage service)
                          ></Avatar>
                        </AvatarGroup>
                        <Flex direction="column">
                          <Text size="lg" fontWeight="$normal">
                            {profile.latest.personal.work}
                          </Text>
<<<<<<< HEAD
                          <Text
                            size="base"
                            fontWeight="$normal"
                            opacity="0.8"
                          >Work Type</Text>
=======
                          <Text size="base" fontWeight="$normal" opacity="0.8">
                            Work Type
                          </Text>
>>>>>>> 75f4020 (feat: add storage service)
                        </Flex>
                      </Flex>
                    </GridItem>
                  </Grid>
                </Box>
              </GridItem>
              {/* !SECTION */}

<<<<<<< HEAD
              {/* SECTION Resume */}
              {/* <GridItem
              as="section"
              p="$4"
              color="$neutral12"
              bg="$neutral1"
              rounded="$md"
              shadow="$sm"
            >
              <Box display="grid" gap="$4">
                <Heading size="xl">Resume</Heading>
                <Flex gap="$4" alignItems="center">
                  <AvatarGroup avatarBorderRadius="$xl">
                    <Avatar
                      size="md"
                      icon={(props) => (
                        <Icon as={IoNewspaperOutline} boxSize="$6"></Icon>
                      )}
                    ></Avatar>
                  </AvatarGroup>
                  <Flex direction="column" flexGrow="1">
                    <Text size="lg" fontWeight="$medium">
                      my-poftfolio.pdf
                    </Text>
                  </Flex>
                  <Button
                    rightIcon={<Icon as={HiSolidDownload} boxSize="$5"></Icon>}
                  >
                    Download
                  </Button>
                </Flex>
              </Box>
            </GridItem> */}
              {/* !SECTION */}

=======
>>>>>>> 75f4020 (feat: add storage service)
              {/* SECTION Experience */}
              <GridItem
                as="section"
                p="$4"
                color="$neutral12"
                bg="$neutral1"
                rounded="$md"
                shadow="$sm"
              >
                <Box display="grid" gap="$4">
                  <Flex justifyContent="space-between" alignItems="center">
                    <Heading size="xl">Experiences</Heading>
                    <Show when={authc.data.account}>
<<<<<<< HEAD
                      <Button
                        variant="ghost"
                        leftIcon={<Icon as={BiRegularEditAlt} boxSize="$5"></Icon>}
                      >
                        Edit
                      </Button>
=======
                      {/* <Button
                        variant="ghost"
                        leftIcon={<Icon as={HiOutlinePencilSquare} boxSize="$5"></Icon>}
                      >
                        Edit
                      </Button> */}
                      <IconButton
                        variant="ghost"
                        aria-label="Icon Name"
                        borderRadius="$full"
                        icon={<Icon as={HiOutlinePencilSquare} boxSize="$5" />}
                      />
>>>>>>> 75f4020 (feat: add storage service)
                    </Show>
                  </Flex>
                  <For each={profile.latest.experiences}>
                    {(item, index) => (
                      <Flex data-index={index()} gap="$4" alignItems="center">
                        <AvatarGroup avatarBorderRadius="$xl">
                          <Avatar
                            size="md"
                            icon={(props) => (
<<<<<<< HEAD
                              <Icon as={BiRegularCertification} boxSize="$6"></Icon>
=======
                              <Icon
                                as={BiRegularCertification}
                                boxSize="$6"
                              ></Icon>
>>>>>>> 75f4020 (feat: add storage service)
                            )}
                          ></Avatar>
                        </AvatarGroup>
                        {/* <Flex direction="column">
                          <Flex gap="$2" alignItems="center">
                            <Text size="lg" fontWeight="$bold">
                              {item.title}
                            </Text>
                            <Tag rounded="$md" fontWeight="$semibold">
                              {item.status}
                            </Tag>
                          </Flex>
                          <Flex gap="$2" alignItems="center">
                            <Text size="base" fontWeight="$normal">
                              {item.subtitle}
                            </Text>
                            {" - "}
                            <Text size="base" fontWeight="$normal" opacity="0.7">
                              {item.present}
                            </Text>
                          </Flex>
                        </Flex> */}
                      </Flex>
                    )}
                  </For>
                </Box>
              </GridItem>
              {/* !SECTION */}

              {/* SECTION Project */}
              <GridItem
                as="section"
                p="$4"
                color="$neutral12"
                bg="$neutral1"
                rounded="$md"
                shadow="$sm"
              >
                <Box display="grid" gap="$4">
                  <Flex justifyContent="space-between" alignItems="center">
                    <Heading size="xl">Projects</Heading>
                    <Show when={authc.data.account}>
<<<<<<< HEAD
                      <Button
                        variant="ghost"
                        leftIcon={<Icon as={BiRegularEditAlt} boxSize="$5"></Icon>}
                        onClick={onOpnPrj}
                      >
                        Edit
                      </Button>
=======
                      {/* <Button
                        variant="ghost"
                        leftIcon={<Icon as={HiOutlinePencilSquare} boxSize="$5"></Icon>}
                        onClick={onOpnPrj}
                      >
                        Edit
                      </Button> */}
                      <IconButton
                        variant="ghost"
                        aria-label="Icon Name"
                        borderRadius="$full"
                        icon={<Icon as={HiOutlinePencilSquare} boxSize="$5" />}
                        onClick={onOpnPrj}
                      />
>>>>>>> 75f4020 (feat: add storage service)
                    </Show>
                  </Flex>
                  <Show when={profile.latest.projects.length}>
                    <Grid templateColumns="repeat(2, 1fr)" gap="$4">
                      <For each={profile.latest.projects}>
                        {(item, index) => (
<<<<<<< HEAD
                          <GridItem data-index={index()}
=======
                          <GridItem
                            data-index={index()}
>>>>>>> 75f4020 (feat: add storage service)
                            display="flex"
                            flexDirection="column"
                            gap="$2"
                            padding="$2"
                            borderWidth="thin"
                            borderStyle="solid"
                            borderColor="$neutral7"
                            borderRadius="$lg"
                          >
<<<<<<< HEAD
                            <Flex
                              gap="$2"
                              alignItems="center"
                            >
                              <AvatarGroup avatarBorderRadius="$xl">
                                <Avatar size="md" icon={(props) => (
                                  <Icon as={RiDocumentBookLine} boxSize="$6"></Icon>
                                )}>
                                </Avatar>
                              </AvatarGroup>
                              <Flex direction="column">
                                <Text size="base" fontWeight="$semibold">
                                  {item.name}
                                </Text>
                                <Text size="sm" fontWeight="$medium" opacity="0.8">
=======
                            <Flex gap="$2" alignItems="center">
                              <AvatarGroup avatarBorderRadius="$xl">
                                <Avatar
                                  size="md"
                                  icon={(props) => (
                                    <Icon
                                      as={HiOutlineSquares2x2}
                                      boxSize="$6"
                                    ></Icon>
                                  )}
                                ></Avatar>
                              </AvatarGroup>
                              <Flex direction="column" alignItems="flex-start">
                                <Text size="base" fontWeight="$semibold">
                                  {item.name}
                                </Text>
                                <Text
                                  size="sm"
                                  fontWeight="$medium"
                                  opacity="0.8"
                                >
>>>>>>> 75f4020 (feat: add storage service)
                                  {item.client}
                                </Text>
                              </Flex>
                            </Flex>
                            <Text size="base" fontWeight="$normal">
                              {item.description}
                            </Text>
                            <Divider />
                            <Flex w="$full" justifyContent="end">
<<<<<<< HEAD
                              <Anchor mx="$2" fontSize="$sm" fontWeight="$semibold" color="$primary11" href={item.link}>
=======
                              <Anchor
                                mx="$2"
                                fontSize="$sm"
                                fontWeight="$semibold"
                                color="$primary11"
                                href={item.link}
                                target="_blank"
                              >
>>>>>>> 75f4020 (feat: add storage service)
                                View
                              </Anchor>
                            </Flex>
                          </GridItem>
                        )}
                      </For>
                    </Grid>
                  </Show>
                </Box>
              </GridItem>
              {/* !SECTION */}

<<<<<<< HEAD
              {/* SECTION Certificate */}
              <GridItem
                as="section"
                p="$4"
                color="$neutral12"
                bg="$neutral1"
                rounded="$md"
                shadow="$sm"
              >
                <Box display="grid" gap="$4">
                  <Flex justifyContent="space-between" alignItems="center">
                    <Heading size="xl">Certificates</Heading>
                    <Show when={authc.data.account}>
                      <Button
                        variant="ghost"
                        leftIcon={<Icon as={BiRegularEditAlt} boxSize="$5"></Icon>}
                        onClick={onOpnCert}
                      >
                        Edit
                      </Button>
                    </Show>
                  </Flex>
                  <For each={profile.latest.certificates}>
                    {(item, index) => (
                      <Flex data-index={index()} gap="$4" alignItems="center">
                        <AvatarGroup avatarBorderRadius="$xl" alignSelf="start">
                          <Avatar
                            size="md"
                            icon={(props) => (
                              <Icon as={TbCertificate} boxSize="$6"></Icon>
                            )}
                          ></Avatar>
                        </AvatarGroup>
                        <Flex direction="column">
                          <Flex gap="$2" alignItems="center">
                            <Text size="lg" fontWeight="$bold">
                              {item.name}
                            </Text>
                            {/* <Tag>{item.status}</Tag> */}
                          </Flex>
                          <Flex gap="$2" direction="column">
                            <Text size="base" fontWeight="$normal">
                              {item.publisher}
                            </Text>
                            <Text size="base" fontWeight="$normal" opacity="0.7">
                              {item.published}
                            </Text>
                          </Flex>
                        </Flex>
                      </Flex>
                    )}
                  </For>
                </Box>
              </GridItem>
              {/* !SECTION */}

=======
>>>>>>> 75f4020 (feat: add storage service)
              {/* SECTION Education */}
              <GridItem
                as="section"
                p="$4"
                color="$neutral12"
                bg="$neutral1"
                rounded="$md"
                shadow="$sm"
              >
                <Box display="grid" gap="$4">
                  <Flex justifyContent="space-between" alignItems="center">
                    <Heading size="xl">Educations</Heading>
                    <Show when={authc.data.account}>
<<<<<<< HEAD
                      <Button
                        variant="ghost"
                        leftIcon={<Icon as={BiRegularEditAlt} boxSize="$5"></Icon>}
                        onClick={onOpnEdu}
                      >
                        Edit
                      </Button>
=======
                      {/* <Button
                        variant="ghost"
                        leftIcon={<Icon as={HiOutlinePencilSquare} boxSize="$5"></Icon>}
                        onClick={onOpnEdu}
                      >
                        Edit
                      </Button> */}
                      <IconButton
                        variant="ghost"
                        aria-label="Icon Name"
                        borderRadius="$full"
                        icon={<Icon as={HiOutlinePencilSquare} boxSize="$5" />}
                        onClick={onOpnEdu}
                      />
>>>>>>> 75f4020 (feat: add storage service)
                    </Show>
                  </Flex>
                  <For each={profile.latest.educations}>
                    {(item, index) => (
<<<<<<< HEAD
                      <Flex data-index={index()} gap="$4" alignItems="center">
=======
                      <Flex data-index={index()} gap="$3" alignItems="center">
>>>>>>> 75f4020 (feat: add storage service)
                        <AvatarGroup avatarBorderRadius="$xl" alignSelf="start">
                          <Avatar
                            size="md"
                            icon={(props) => (
<<<<<<< HEAD
                              <Icon as={TbSchool} boxSize="$6"></Icon>
=======
                              <Icon as={TbOutlineSchool} boxSize="$6"></Icon>
                            )}
                          ></Avatar>
                        </AvatarGroup>
                        <Flex direction="column" alignItems="flex-start">
                          <Flex gap="$2" alignItems="center">
                            <Text size="base" fontWeight="$semibold">
                              {item.name}
                            </Text>
                            {/* <Tag>{item.status}</Tag> */}
                          </Flex>
                          <Flex gap="$2" direction="column">
                            <Text size="sm" fontWeight="$normal">
                              {item.title}
                            </Text>
                            <Text size="sm" fontWeight="$normal" opacity="0.75">
                              {item.graduated}
                            </Text>
                          </Flex>
                        </Flex>
                      </Flex>
                    )}
                  </For>
                </Box>
              </GridItem>
              {/* !SECTION */}

              {/* SECTION Certificate */}
              <GridItem
                as="section"
                p="$4"
                color="$neutral12"
                bg="$neutral1"
                rounded="$md"
                shadow="$sm"
              >
                <Box display="grid" gap="$4">
                  <Flex justifyContent="space-between" alignItems="center">
                    <Heading size="xl">Certificates</Heading>
                    <Show when={authc.data.account}>
                      {/* <Button
                        variant="ghost"
                        leftIcon={<Icon as={HiOutlinePencilSquare} boxSize="$5"></Icon>}
                        onClick={onOpnCert}
                      >
                        Edit
                      </Button> */}
                      <IconButton
                        variant="ghost"
                        aria-label="Icon Name"
                        borderRadius="$full"
                        icon={<Icon as={HiOutlinePencilSquare} boxSize="$5" />}
                        onClick={onOpnCert}
                      />
                    </Show>
                  </Flex>
                  <For each={profile.latest.certificates}>
                    {(item, index) => (
                      <Flex data-index={index()} gap="$3" alignItems="center">
                        <AvatarGroup avatarBorderRadius="$xl" alignSelf="start">
                          <Avatar
                            size="md"
                            icon={(props) => (
                              <Icon as={TbOutlineCertificate} boxSize="$6"></Icon>
>>>>>>> 75f4020 (feat: add storage service)
                            )}
                          ></Avatar>
                        </AvatarGroup>
                        <Flex direction="column">
                          <Flex gap="$2" alignItems="center">
<<<<<<< HEAD
                            <Text size="lg" fontWeight="$bold">
                              {item.title}
                            </Text>
                            {/* <Tag>{item.status}</Tag> */}
                          </Flex>
                          <Flex gap="$2" direction="column">
                            <Text size="base" fontWeight="$normal">
                              {item.title}
                            </Text>
                            <Text size="base" fontWeight="$normal" opacity="0.7">
                              {item.graduated}
=======
                            <Text size="base" fontWeight="$semibold">
                              {item.name}
                            </Text>
                            {/* <Tag>{item.status}</Tag> */}
                          </Flex>
                          <Flex
                            gap="$2"
                            direction="column"
                            alignItems="flex-start"
                          >
                            <Text size="sm" fontWeight="$normal">
                              {item.publisher}
                            </Text>
                            <Text size="sm" fontWeight="$normal" opacity="0.75">
                              {item.published}
>>>>>>> 75f4020 (feat: add storage service)
                            </Text>
                          </Flex>
                        </Flex>
                      </Flex>
                    )}
                  </For>
                </Box>
              </GridItem>
              {/* !SECTION */}

              {/* SECTION Language */}
              <GridItem
                as="section"
                p="$4"
                color="$neutral12"
                bg="$neutral1"
                rounded="$md"
                shadow="$sm"
              >
                <Box display="grid" gap="$4">
                  <Flex justifyContent="space-between" alignItems="center">
                    <Heading size="xl">Languages</Heading>
                    <Show when={authc.data.account}>
<<<<<<< HEAD
                      <Button
                        variant="ghost"
                        leftIcon={<Icon as={BiRegularEditAlt} boxSize="$5"></Icon>}
                        onClick={onOpnLang}
                      >
                        Edit
                      </Button>
=======
                      {/* <Button
                        variant="ghost"
                        leftIcon={<Icon as={HiOutlinePencilSquare} boxSize="$5"></Icon>}
                        onClick={onOpnLang}
                      >
                        Edit
                      </Button> */}
                      <IconButton
                        variant="ghost"
                        aria-label="Icon Name"
                        borderRadius="$full"
                        icon={<Icon as={HiOutlinePencilSquare} boxSize="$5" />}
                        onClick={onOpnLang}
                      />
>>>>>>> 75f4020 (feat: add storage service)
                    </Show>
                  </Flex>
                  <Show when={profile.latest.languages.length}>
                    <Grid templateColumns="repeat(3, 1fr)" gap="$4">
                      <For each={profile.latest.languages}>
                        {(item, index) => (
                          <GridItem data-index={index()}>
                            <Flex
                              gap="$2"
                              alignItems="center"
                              padding="$2"
                              borderWidth="thin"
                              borderStyle="solid"
                              borderColor="$neutral7"
                              borderRadius="$lg"
                            >
                              <AvatarGroup avatarBorderRadius="$xl">
                                <Avatar
                                  size="md"
                                  icon={() => (
<<<<<<< HEAD
                                    <Icon as={AiOutlineFlag} boxSize="$6"></Icon>
                                  )}
                                ></Avatar>
                              </AvatarGroup>
                              <Flex direction="column">
                                <Text size="base" fontWeight="$semibold">
                                  {item.name}
                                </Text>
                                <Text size="sm" fontWeight="$medium" opacity="0.8">
=======
                                    <Icon
                                      as={AiOutlineFlag}
                                      boxSize="$6"
                                    ></Icon>
                                  )}
                                ></Avatar>
                              </AvatarGroup>
                              <Flex direction="column" alignItems="flex-start">
                                <Text size="base" fontWeight="$semibold">
                                  {item.name}
                                </Text>
                                <Text
                                  size="sm"
                                  fontWeight="$medium"
                                  opacity="0.8"
                                >
>>>>>>> 75f4020 (feat: add storage service)
                                  {item.level}
                                </Text>
                              </Flex>
                            </Flex>
                          </GridItem>
                        )}
                      </For>
                    </Grid>
                  </Show>
                </Box>
              </GridItem>
              {/* !SECTION */}
<<<<<<< HEAD

            </Grid >
          </Show>
        </GridItem >
=======
            </Grid>
          </Show>
        </GridItem>
>>>>>>> 75f4020 (feat: add storage service)
        {/* !SECTION */}

        {/* SECTION aside */}
        <Show when={profile.latest && !up_res.loading}>
<<<<<<< HEAD

          < GridItem as="aside" >
=======
          <GridItem as="aside">
>>>>>>> 75f4020 (feat: add storage service)
            <Grid gap="$4">
              {/* SECTION Positions */}
              <GridItem
                as="section"
                p="$4"
                color="$neutral12"
                bg="$neutral1"
                rounded="$md"
                shadow="$sm"
              >
                <Box display="grid" gap="$4">
                  <Flex justifyContent="space-between" alignItems="center">
                    <Heading size="lg">Active Positions</Heading>
                    <Show when={authc.data.account}>
                      <Button
                        variant="ghost"
                        size="sm"
<<<<<<< HEAD
                        leftIcon={<Icon as={BiRegularEditAlt} boxSize="$5"></Icon>}
                        onClick={onOpnAPs}
                      >
                        Edit
=======
                        p="$1"
                        iconSpacing="0"
                        leftIcon={
                          <Icon as={HiOutlinePencilSquare} boxSize="$5"></Icon>
                        }
                        onClick={onOpnAPs}
                      >
                        {/* Edit */}
>>>>>>> 75f4020 (feat: add storage service)
                      </Button>
                    </Show>
                  </Flex>
                  <For each={profile.latest.active_positions}>
                    {(item, index) => (
                      <>
                        {index() && <Divider />}
                        <Box data-index={index()} display="grid" gap="$4">
                          <Flex alignItems="self-start" gap="$2">
                            <AvatarGroup>
                              <Avatar
                                size="md"
                                icon={(props) => (
<<<<<<< HEAD
                                  <Icon as={HiOutlineTemplate} boxSize="$6"></Icon>
=======
                                  <Icon
                                    as={HiOutlineBuildingOffice}
                                    boxSize="$6"
                                  ></Icon>
>>>>>>> 75f4020 (feat: add storage service)
                                )}
                              ></Avatar>
                            </AvatarGroup>
                            <Flex direction="column">
                              <Text size="base" fontWeight="$semibold">
                                {item.name}
                              </Text>
                              <Text
                                size="base"
                                fontWeight="$normal"
                                opacity="0.9"
                              >
                                {item.company}
                              </Text>
<<<<<<< HEAD
                              <Button w="fit-content" mt="$1_5" variant="subtle" size="sm">
=======
                              <Button
                                w="fit-content"
                                mt="$1_5"
                                fontSize="$xs"
                                variant="subtle"
                                size="sm"
                                compact
                              >
>>>>>>> 75f4020 (feat: add storage service)
                                {item.status}
                              </Button>
                            </Flex>
                          </Flex>
                        </Box>
                      </>
                    )}
                  </For>
                </Box>
              </GridItem>
              <GridItem
                as="section"
                p="$4"
                color="$neutral12"
                bg="$neutral1"
                rounded="$md"
                shadow="$sm"
              >
                <Box display="grid" gap="$4">
                  <Flex justifyContent="space-between" alignItems="center">
                    <Heading size="lg">Preferred Positions</Heading>
                    <Show when={authc.data.account}>
                      <Button
                        variant="ghost"
                        size="sm"
<<<<<<< HEAD
                        leftIcon={<Icon as={BiRegularEditAlt} boxSize="$5"></Icon>}
                        onClick={onOpnPPs}
                      >
                        Edit
=======
                        p="$1"
                        iconSpacing="0"
                        leftIcon={
                          <Icon as={HiOutlinePencilSquare} boxSize="$5"></Icon>
                        }
                        onClick={onOpnPPs}
                      >
                        {/* Edit */}
>>>>>>> 75f4020 (feat: add storage service)
                      </Button>
                    </Show>
                  </Flex>
                  <Show when={profile.latest.preferred_positions.length}>
                    <Grid gap="$4">
                      <For each={profile.latest.preferred_positions}>
                        {(item, index) => (
<<<<<<< HEAD
                          <GridItem data-index={index()} >
=======
                          <GridItem data-index={index()}>
>>>>>>> 75f4020 (feat: add storage service)
                            <Flex
                              gap="$2"
                              alignItems="center"
                              px="$2"
                              borderWidth="2px"
                              borderStyle="solid"
                              borderColor="$neutral7"
                              borderRadius="$lg"
                            >
<<<<<<< HEAD
                              <Flex justifyContent="space-between" w="$full" gap="$4">
                                <Text py="$1" size="base" fontWeight="$normal" flexGrow="1">
                                  {item.name}
                                </Text>
                                <Divider orientation="vertical" thickness="2px" w="0" h="auto">
=======
                              <Flex
                                justifyContent="space-between"
                                w="$full"
                                gap="$4"
                              >
                                <Text
                                  py="$1"
                                  size="base"
                                  fontWeight="$normal"
                                  flexGrow="1"
                                >
                                  {item.name}
                                </Text>
                                <Divider
                                  orientation="vertical"
                                  thickness="2px"
                                  w="0"
                                  h="auto"
                                >
>>>>>>> 75f4020 (feat: add storage service)
                                  {"\u2800"}
                                </Divider>
                                <Text py="$1" size="base" fontWeight="$normal">
                                  {item.experience}
                                </Text>
                              </Flex>
                            </Flex>
                          </GridItem>
                        )}
                      </For>
                    </Grid>
                  </Show>
                </Box>
              </GridItem>
              {/* !SECTION */}
<<<<<<< HEAD
=======

              {/* SECTION Skills */}
>>>>>>> 75f4020 (feat: add storage service)
              <GridItem
                as="section"
                p="$4"
                color="$neutral12"
                bg="$neutral1"
                rounded="$md"
                shadow="$sm"
              >
                <Box display="grid" gap="$4">
                  <Flex justifyContent="space-between" alignItems="center">
                    <Heading size="lg">Skills</Heading>
                    <Show when={authc.data.account}>
                      <Button
                        variant="ghost"
                        size="sm"
<<<<<<< HEAD
                        leftIcon={<Icon as={BiRegularEditAlt} boxSize="$5"></Icon>}
                        onClick={onOpnSkl}
                      >
                        Edit
=======
                        p="$1"
                        iconSpacing="0"
                        leftIcon={
                          <Icon as={HiOutlinePencilSquare} boxSize="$5"></Icon>
                        }
                        onClick={onOpnSkl}
                      >
                        {/* Edit */}
>>>>>>> 75f4020 (feat: add storage service)
                      </Button>
                    </Show>
                  </Flex>
                  <Show when={profile.latest.skills.length}>
                    <Flex wrap="wrap" gap="$2">
                      <For each={profile.latest.skills}>
                        {(item, index) => (
                          <Text
                            data-id={index()}
                            py="$1"
                            size="base"
                            fontWeight="$normal"
                            px="$2"
                            borderWidth="2px"
                            borderStyle="solid"
                            borderColor="$neutral7"
                            borderRadius="$lg"
                            css={{ whiteSpace: "nowrap" }}
                          >
                            {item.name}
                          </Text>
                        )}
                      </For>
                    </Flex>
                  </Show>
                </Box>
              </GridItem>
<<<<<<< HEAD
=======
              {/* !SECTION */}

>>>>>>> 75f4020 (feat: add storage service)
              <GridItem
                as="section"
                p="$4"
                color="$neutral12"
                bg="$neutral1"
                rounded="$md"
                shadow="$sm"
              >
                <Box display="grid" gap="$4">
                  <Heading size="lg">Career Status</Heading>
<<<<<<< HEAD
                  <Select value={1}>
                    <SelectTrigger>
                      {/* <SelectPlaceholder>Choose a framework</SelectPlaceholder> */}
                      <SelectValue />
                      <SelectIcon />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectListbox>
                        <For each={career_status}>
                          {(item) => (
                            <SelectOption value={item.id}>
                              <SelectOptionText>{item.text}</SelectOptionText>
                              <SelectOptionIndicator />
                            </SelectOption>
                          )}
                        </For>
                      </SelectListbox>
                    </SelectContent>
                  </Select>
                </Box>
              </GridItem>
              {/* <GridItem
              as="section"
              p="$4"
              color="$neutral12"
              bg="$neutral1"
              rounded="$md"
              shadow="$sm"
            >
              <Box display="grid" gap="$4">
                <Heading size="lg">Personal Informations</Heading>
              </Box>
            </GridItem> */}
=======
                  <Show
                    when={authc.data.account}
                    fallback={
                      <Text size="base" fontWeight="$normal" flexGrow="1">
                        {career_status.at(0)}
                      </Text>
                    }
                  >
                    <Select value={1}>
                      <SelectTrigger>
                        <SelectPlaceholder>Choose a status</SelectPlaceholder>
                        <SelectValue />
                        <SelectIcon />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectListbox>
                          <For each={career_status}>
                            {(item) => (
                              <SelectOption value={item.id}>
                                <SelectOptionText>{item.text}</SelectOptionText>
                                <SelectOptionIndicator />
                              </SelectOption>
                            )}
                          </For>
                        </SelectListbox>
                      </SelectContent>
                    </Select>
                  </Show>
                </Box>
              </GridItem>
>>>>>>> 75f4020 (feat: add storage service)
              <GridItem
                as="section"
                p="$4"
                color="$neutral12"
                bg="$neutral1"
                rounded="$md"
                shadow="$sm"
              >
                <Box display="grid" gap="$4">
<<<<<<< HEAD
                  <Heading size="lg">Resume</Heading>
                </Box>
                <Flex alignItems="center">
                  <Text size="lg" fontWeight="$medium" flexGrow="1">
                    my-resume.pdf
                  </Text>
                  <IconButton aria-label="Icon Name" borderRadius="$full" size="sm" icon={<HiSolidDownload />} />
                  {/* <Button
                  rightIcon={<Icon as={HiSolidDownload} boxSize="$5"></Icon>}
                >
                  Download
                </Button> */}
                </Flex>
              </GridItem>
            </Grid>
          </GridItem >
        </Show>
        {/* !SECTION */}
      </Grid >
      <Footer as="footer"></Footer>
      {/* SECTION Modal */}
      <>
        <Modal
          centered
          blockScrollOnMount={false}
=======
                  <Flex justifyContent="space-between" alignItems="center">
                    <Heading size="lg">Document</Heading>
                    <Show when={authc.data.account}>
                      <Button
                        variant="ghost"
                        size="sm"
                        p="$1"
                        iconSpacing="0"
                        leftIcon={
                          <Icon as={HiOutlinePencilSquare} boxSize="$5"></Icon>
                        }
                        onClick={onOpnDoc}
                      >
                        {/* Edit */}
                      </Button>
                    </Show>
                  </Flex>
                  <Flex alignItems="center">
                    <Text size="base" fontWeight="$normal" flexGrow="1">
                      {profile.latest.resume?.split("/").pop() || "resume.pdf"}
                    </Text>
                    <IconButton
                      aria-label="my-resume.pdf"
                      borderRadius="$full"
                      size="sm"
                      disabled={!profile.latest.resume}
                      icon={<HiOutlineArrowDownTray />}
                      onclick={() =>
                        document
                          .querySelector<HTMLInputElement>("#url-cv")
                          .click()
                      }
                    />
                    <a
                      id="url-cv"
                      hidden
                      download=""
                      href={download(profile.latest.resume)}
                    ></a>
                    {/* <Button
                    rightIcon={<Icon as={HiOutlineArrowDownTray} boxSize="$5"></Icon>}
                  >
                    Download
                  </Button> */}
                  </Flex>
                </Box>
              </GridItem>
            </Grid>
          </GridItem>
        </Show>
        {/* !SECTION */}
      </Grid>
      <Footer as="footer"></Footer>
      {/* SECTION modal */}

      {/* SECTION Headline */}
      <>
        <Modal
          centered
          blockScrollOnMount
          scrollBehavior="inside"
>>>>>>> 75f4020 (feat: add storage service)
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
<<<<<<< HEAD
                onSubmit={(evt) => {
                  evt.preventDefault()
                  up_profile({
                    token: authc.data.token, id: profile.latest.id,
                    profile: { ...profile.latest, name: pname(), headline: phl() }
                  })
                  if (profile.latest.name != pname()) {
                    window.location.replace(`/user/${encodeURI(pname())}/profile`)
                  } else {
                  }
                  onClsProfile()
=======
                onSubmit={async (evt) => {
                  evt.preventDefault();
                  const file = oidm.get(pphoto());
                  let photo = "";
                  if (file) {
                    loading.load();
                    photo = await upload(
                      "images/" +
                        pname() +
                        "/" +
                        "photo." +
                        file.name.split(".").pop(),
                      file
                    ).finally(loading.loaded);
                  }
                  up_profile({
                    token: authc.data.token,
                    id: profile.latest.id,
                    profile: {
                      ...profile.latest,
                      name: pname(),
                      photo,
                      headline: phl(),
                      about: pab(),
                    },
                  });
                  if (profile.latest.name != pname()) {
                    window.location.replace(
                      `/user/${encodeURI(pname())}/profile`
                    );
                  } else {
                  }
                  onClsProfile();
>>>>>>> 75f4020 (feat: add storage service)
                }}
              >
                <GridItem>
                  <FormControl>
<<<<<<< HEAD
                    <FormLabel for="photo" display="flex" flexDirection="column" alignItems="center" gap="$2">
                      <Avatar size="lg" icon={(props) => (
                        <Icon
                          as={HiOutlinePhotograph}
                          boxSize="$7"
                        ></Icon>
                      )} />
                      <Text>Photo</Text>
                    </FormLabel>
                    <Input hidden id="photo" type="file" />
=======
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
                            icon={() => (
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
                      accept="image/*"
                      onInput={handle_input(set_pphoto, pphoto)}
                    />
>>>>>>> 75f4020 (feat: add storage service)
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl>
                    <FormLabel for="name">Name</FormLabel>
<<<<<<< HEAD
                    <Input id="name" type="text" placeholder="Your Name" value={pname()} onInput={handle_input(set_pname)} />
=======
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your Name"
                      value={pname()}
                      onInput={handle_input(set_pname)}
                    />
>>>>>>> 75f4020 (feat: add storage service)
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl>
                    <FormLabel for="email">Headline</FormLabel>
<<<<<<< HEAD
                    <Input id="email" type="text" placeholder="ex. Software Enginer or UI/UX Designer" value={phl()} onInput={handle_input(set_phl)} />
=======
                    <Input
                      id="email"
                      type="text"
                      placeholder="Software Enginer or UI/UX Designer"
                      value={phl()}
                      onInput={handle_input(set_phl)}
                    />
>>>>>>> 75f4020 (feat: add storage service)
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl>
<<<<<<< HEAD
                    <FormLabel for="website">Website URL</FormLabel>
                    <Input id="website" type="url" placeholder="ex. portfolio.web" />
=======
                    <FormLabel for="website">Website</FormLabel>
                    <Input
                      id="website"
                      type="url"
                      placeholder="https://portfolio.web"
                    />
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl>
                    <FormLabel for="about">About Me</FormLabel>
                    <Textarea
                      placeholder="describe your self"
                      value={pab()}
                      onInput={handle_input(set_pab)}
                    />
>>>>>>> 75f4020 (feat: add storage service)
                  </FormControl>
                </GridItem>
              </Grid>
            </ModalBody>
            <ModalFooter>
<<<<<<< HEAD
              <Button type="submit" form="fprofile" fullWidth>Update</Button>
=======
              <Button type="submit" form="fprofile" fullWidth>
                Update
              </Button>
>>>>>>> 75f4020 (feat: add storage service)
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
<<<<<<< HEAD
      <>
        <Modal
          centered
          blockScrollOnMount={false}
=======
      {/* !SECTION*/}

      {/* SECTION Personal Profile */}
      <>
        <Modal
          centered
          blockScrollOnMount
          scrollBehavior="inside"
>>>>>>> 75f4020 (feat: add storage service)
          opened={isOpnPsProfile()}
          onClose={onClsPsProfile}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalHeader>Edit Personal Profile</ModalHeader>
            <ModalBody>
              <Grid
                id="fpsprofile"
                as="form"
                gap="$4"
                onSubmit={(evt) => {
<<<<<<< HEAD
                  evt.preventDefault()
                  up_profile({
                    token: authc.data.token, id: profile.latest.id,
=======
                  evt.preventDefault();
                  up_profile({
                    token: authc.data.token,
                    id: profile.latest.id,
>>>>>>> 75f4020 (feat: add storage service)
                    profile: {
                      ...profile.latest,
                      personal: {
                        email: email(),
                        phone: phone(),
                        dob: dob(),
                        salary: salary(),
                        location: location(),
                        work: work(),
<<<<<<< HEAD
                      }
                    }
                  })
                  onClsPsProfile()
=======
                      },
                    },
                  });
                  onClsPsProfile();
>>>>>>> 75f4020 (feat: add storage service)
                }}
              >
                <GridItem>
                  <FormControl>
                    <FormLabel for="email">Email</FormLabel>
<<<<<<< HEAD
                    <Input id="email" type="email" placeholder="Email Address" value={email()} onInput={handle_input(set_email)} />
=======
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email Address"
                      value={email()}
                      onInput={handle_input(set_email)}
                    />
>>>>>>> 75f4020 (feat: add storage service)
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl>
                    <FormLabel for="phone">Phone Number</FormLabel>
<<<<<<< HEAD
                    <Input id="phone" type="tel" placeholder="Phone Number" value={phone()} onInput={handle_input(set_phone)} />
=======
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Phone Number"
                      value={phone()}
                      onInput={handle_input(set_phone)}
                    />
>>>>>>> 75f4020 (feat: add storage service)
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl>
                    <FormLabel for="dob">Date of Birth</FormLabel>
<<<<<<< HEAD
                    <Input id="dob" type="date" placeholder="Date of Birth" value={dob()} onInput={handle_input(set_dob)} />
=======
                    <Input
                      id="dob"
                      type="date"
                      placeholder="Date of Birth"
                      value={dob()}
                      onInput={handle_input(set_dob)}
                    />
>>>>>>> 75f4020 (feat: add storage service)
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl>
                    <FormLabel for="salary">Salary Expectation</FormLabel>
<<<<<<< HEAD
                    <Input id="salary" type="number" min={0} placeholder="Salary" value={salary()} onInput={handle_input(set_salary)} />
=======
                    <Input
                      id="salary"
                      type="number"
                      min={0}
                      placeholder="Salary"
                      value={salary()}
                      onInput={handle_input(set_salary)}
                    />
>>>>>>> 75f4020 (feat: add storage service)
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl>
                    <FormLabel for="location">Location</FormLabel>
<<<<<<< HEAD
                    <Input id="location" type="address" placeholder="Location" value={location()} onInput={handle_input(set_location)} />
=======
                    <Input
                      id="location"
                      type="address"
                      placeholder="Location"
                      value={location()}
                      onInput={handle_input(set_location)}
                    />
>>>>>>> 75f4020 (feat: add storage service)
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl>
                    <FormLabel for="work">Work Type</FormLabel>
<<<<<<< HEAD
                    <Input id="work" type="text" placeholder="Work Type" value={work()} onInput={handle_input(set_work)} />
=======
                    <Input
                      id="work"
                      type="text"
                      placeholder="Work Type"
                      value={work()}
                      onInput={handle_input(set_work)}
                    />
>>>>>>> 75f4020 (feat: add storage service)
                  </FormControl>
                </GridItem>
              </Grid>
            </ModalBody>
            <ModalFooter>
<<<<<<< HEAD
              <Button type="submit" form="fpsprofile" fullWidth>Update</Button>
=======
              <Button type="submit" form="fpsprofile" fullWidth>
                Update
              </Button>
>>>>>>> 75f4020 (feat: add storage service)
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
<<<<<<< HEAD
      <>
        <Modal
          centered
          blockScrollOnMount={false}
=======
      {/* !SECTION */}

      {/* SECTION Projects */}
      <>
        <Modal
          centered
          blockScrollOnMount
          scrollBehavior="inside"
>>>>>>> 75f4020 (feat: add storage service)
          opened={isOpnPrj()}
          onClose={onClsPrj}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalHeader>Edit Projects</ModalHeader>
            <ModalBody>
              <Show when={!project()}>
                <Grid gap="$2">
                  <For each={profile.latest.projects}>
                    {(item, index) => (
<<<<<<< HEAD
                      <GridItem data-index={index()}
                      >
=======
                      <GridItem data-index={index()}>
>>>>>>> 75f4020 (feat: add storage service)
                        <Button
                          variant="outline"
                          w="$full"
                          h="$full"
                          display="flex"
                          flexDirection="column"
                          gap="$2"
                          padding="$2"
                          alignItems="start"
                          color="inherit"
                          borderWidth="thin"
                          borderStyle="solid"
                          borderColor="$neutral7"
                          borderRadius="$lg"
<<<<<<< HEAD
                          onClick={() => set_project({ ...item, id: item.name })}
=======
                          onClick={() =>{
                            set_pimage(download(item.image))
                            set_project({ ...item, id: item.name })
                          }}
>>>>>>> 75f4020 (feat: add storage service)
                        >
                          <Flex
                            gap="$2"
                            alignItems="center"
                            position="relative"
                          >
                            <AvatarGroup avatarBorderRadius="$xl">
<<<<<<< HEAD
                              <Avatar size="md" icon={(props) => (
                                <Icon as={RiDocumentBookLine} boxSize="$6"></Icon>
                              )}>
                              </Avatar>
                            </AvatarGroup>
                            <Flex direction="column">
                              <Text size="base" fontWeight="$semibold">
                                {item.name}
                              </Text>
                              <Text size="sm" fontWeight="$medium" opacity="0.8">
=======
                              <Avatar
                                size="md"
                                icon={(props) => (
                                  <Icon
                                    as={HiOutlineSquares2x2}
                                    boxSize="$6"
                                  ></Icon>
                                )}
                              ></Avatar>
                            </AvatarGroup>
                            <Flex direction="column" alignItems="flex-start">
                              <Text size="base" fontWeight="$semibold">
                                {item.name}
                              </Text>
                              <Text
                                size="sm"
                                fontWeight="$medium"
                                opacity="0.8"
                              >
>>>>>>> 75f4020 (feat: add storage service)
                                {item.client}
                              </Text>
                            </Flex>
                          </Flex>
                          <Text size="base" fontWeight="$normal">
                            {item.description}
                          </Text>
                          <Text size="sm" fontWeight="$normal" opacity=".8">
                            URL: {item.link}
                          </Text>
<<<<<<< HEAD
                          <IconButton aria-label="Icon Name" variant="outline" colorScheme="danger" position="absolute" top="$2" right="$2" borderRadius="$full" size="sm" icon={
                            <FaSolidMinus />
                          } onClick={(e) => {
                            e.stopPropagation()
                            up_profile({
                              token: authc.data.token, id: profile.latest.id,
                              profile: {
                                ...profile.latest,
                                projects: profile.latest.projects.filter((p) => p.name != item.name)
                              }
                            })
                            onClsPrj()
                          }} />
=======
                          <IconButton
                            aria-label="Icon Name"
                            variant="outline"
                            colorScheme="danger"
                            position="absolute"
                            top="$2"
                            right="$2"
                            borderRadius="$full"
                            size="sm"
                            icon={<FaSolidMinus />}
                            onClick={(e) => {
                              e.stopPropagation();
                              up_profile({
                                token: authc.data.token,
                                id: profile.latest.id,
                                profile: {
                                  ...profile.latest,
                                  projects: profile.latest.projects.filter(
                                    (p) => p.name != item.name
                                  ),
                                },
                              });
                              onClsPrj();
                            }}
                          />
>>>>>>> 75f4020 (feat: add storage service)
                        </Button>
                      </GridItem>
                    )}
                  </For>
                </Grid>
              </Show>
              <Show when={project()}>
                <Grid
                  id="fprj"
                  as="form"
                  gap="$4"
<<<<<<< HEAD
                  onSubmit={(evt) => {
                    evt.preventDefault()
                    const data = project();
                    if (!data.id) {
                      profile.latest.projects.push(data)
                    } else {
                      profile.latest.projects = profile.latest.projects.map((p) => {
                        if (p.name == data.id) {
                          return data;
                        }
                        return p
                      })
                    }
                    delete data.id
                    up_profile({
                      token: authc.data.token, id: profile.latest.id,
                      profile: {
                        ...profile.latest,
                        projects: profile.latest.projects,
                      }
                    })
                    onClsPrj()
                  }}
                >
                  <GridItem>
                    <FormControl>
                      <FormLabel for="name">Name</FormLabel>
                      <Input id="name" type="text" placeholder="Name" value={project().name} onInput={handle_input((v) => {
                        set_project({ ...project(), name: v })
                      })} />
=======
                  onSubmit={async (evt) => {
                    evt.preventDefault();
                    const data = project()!;
                    if (!data.id) {
                      profile.latest!.projects.push(data);
                    } else {
                      const file = oidm.get(pimage());
                      let image = "";
                      if (file) {
                        loading.load();
                        image = await upload(
                          "images/" +
                            pname() +
                            "/" +
                            data.id + "." +
                            file.name.split(".").pop(),
                          file
                        ).finally(loading.loaded);
                        data.image = image;
                      }
                      profile.latest!.projects = profile.latest!.projects.map(
                        (p) => {
                          if (p.name == data.id) {
                            return data;
                          }
                          return p;
                        }
                      );
                    }
                    delete data.id;
                    up_profile({
                      token: authc.data.token,
                      id: profile.latest!.id,
                      profile: {
                        ...profile.latest!,
                        projects: profile.latest!.projects,
                      },
                    });
                    onClsPrj();
                  }}
                >
                   <GridItem>
                    <FormControl>
                      <FormLabel
                        for="image"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        gap="$2"
                        cursor="pointer"
                      >
                        <Show
                          when={pimage()}
                          fallback={
                            <Avatar
                              size="lg"
                              icon={() => (
                                <Icon as={FaRegularImage} boxSize="$7"></Icon>
                              )}
                            />
                          }
                        >
                          <Image
                            alt="image"
                            src={pimage()}
                            style={{"aspect-ratio": "16 / 9", "object-fit": "cover", "object-position": "center"}}
                            imageProps={{ crossorigin: "use-credentials" }}
                          />
                        </Show>
                        <Text>Image</Text>
                      </FormLabel>
                      <Input
                        hidden
                        id="image"
                        type="file"
                        accept="image/*"
                        onInput={handle_input(set_pimage, pimage)}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl>
                      <FormLabel for="name">Name</FormLabel>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Name"
                        value={project().name}
                        onInput={handle_input((v) => {
                          set_project({ ...project(), name: v });
                        })}
                      />
>>>>>>> 75f4020 (feat: add storage service)
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl>
                      <FormLabel for="client">Client</FormLabel>
<<<<<<< HEAD
                      <Input id="client" type="text" placeholder="Client" value={project().client} onInput={handle_input((v) => {
                        set_project({ ...project(), client: v })
                      })} />
=======
                      <Input
                        id="client"
                        type="text"
                        placeholder="Client"
                        value={project().client}
                        onInput={handle_input((v) => {
                          set_project({ ...project(), client: v });
                        })}
                      />
>>>>>>> 75f4020 (feat: add storage service)
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl>
                      <FormLabel for="description">Description</FormLabel>
<<<<<<< HEAD
                      <Textarea id="description" cols={2} placeholder="Description" value={project().description} onInput={handle_input((v) => {
                        set_project({ ...project(), description: v })
                      })} />
=======
                      <Textarea
                        id="description"
                        cols={2}
                        placeholder="Description"
                        value={project().description}
                        onInput={handle_input((v) => {
                          set_project({ ...project(), description: v });
                        })}
                      />
>>>>>>> 75f4020 (feat: add storage service)
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl>
                      <FormLabel for="link">Link</FormLabel>
<<<<<<< HEAD
                      <Input id="link" type="text" placeholder="Link" value={project().link} onInput={handle_input((v) => {
                        set_project({ ...project(), link: v })
                      })} />
=======
                      <Input
                        id="link"
                        type="text"
                        placeholder="Link"
                        value={project().link}
                        onInput={handle_input((v) => {
                          set_project({ ...project(), link: v });
                        })}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl>
                      <FormLabel for="tags">Tags</FormLabel>
                      <Select
                        multiple
                        value={project().tags}
                        onChange={(v) => {
                          set_project({ ...project(), tags: v });
                        }}
                      >
                        <SelectTrigger>
                          <SelectPlaceholder>
                            Choose some tags
                          </SelectPlaceholder>
                          <SelectValue />
                          <SelectIcon />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectListbox>
                            <For
                              each={profile.latest.skills.map((v) => v.name)}
                            >
                              {(item) => (
                                <SelectOption value={item}>
                                  <SelectOptionText>{item}</SelectOptionText>
                                  <SelectOptionIndicator />
                                </SelectOption>
                              )}
                            </For>
                          </SelectListbox>
                        </SelectContent>
                      </Select>
>>>>>>> 75f4020 (feat: add storage service)
                    </FormControl>
                  </GridItem>
                </Grid>
              </Show>
            </ModalBody>
            <ModalFooter>
              <Show when={project()}>
<<<<<<< HEAD
                <Button type="submit" form="fprj" fullWidth>Submit</Button>
              </Show>
              <Show when={!project()}>
                <Button fullWidth onClick={() => set_project({ id: "", photo: "", name: "", client: "", description: "", link: "" })}>Add</Button>
=======
                <Button type="submit" form="fprj" fullWidth>
                  Submit
                </Button>
              </Show>
              <Show when={!project()}>
                <Button
                  fullWidth
                  onClick={() =>
                    set_project({
                      id: "",
                      image: "",
                      name: "",
                      client: "",
                      description: "",
                      link: "",
                      tags: [],
                    })
                  }
                >
                  Add
                </Button>
>>>>>>> 75f4020 (feat: add storage service)
              </Show>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
<<<<<<< HEAD
      <>
        <Modal
          centered
          blockScrollOnMount={false}
=======
      {/* !SECTION */}

      {/* SECTION Certificates */}
      <>
        <Modal
          centered
          blockScrollOnMount
          scrollBehavior="inside"
>>>>>>> 75f4020 (feat: add storage service)
          opened={isOpnCert()}
          onClose={onClsCert}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalHeader>Edit Certificates</ModalHeader>
            <ModalBody>
              <Show when={!certificate()}>
                <Grid gap="$2">
                  <For each={profile.latest.certificates}>
                    {(item, index) => (
<<<<<<< HEAD
                      <GridItem data-index={index()}
                      >
=======
                      <GridItem data-index={index()}>
>>>>>>> 75f4020 (feat: add storage service)
                        <Button
                          variant="outline"
                          w="$full"
                          h="$full"
                          display="flex"
                          flexDirection="column"
                          gap="$2"
                          padding="$2"
                          alignItems="start"
                          color="inherit"
                          borderWidth="thin"
                          borderStyle="solid"
                          borderColor="$neutral7"
                          borderRadius="$lg"
<<<<<<< HEAD
                          onClick={() => set_certificate({ ...item, id: item.name })}
=======
                          onClick={() =>
                            set_certificate({ ...item, id: item.name })
                          }
>>>>>>> 75f4020 (feat: add storage service)
                        >
                          <Flex
                            gap="$2"
                            alignItems="center"
                            position="relative"
                          >
                            <AvatarGroup avatarBorderRadius="$xl">
<<<<<<< HEAD
                              <Avatar size="md" icon={(props) => (
                                <Icon as={RiDocumentBookLine} boxSize="$6"></Icon>
                              )}>
                              </Avatar>
                            </AvatarGroup>
                            <Flex direction="column">
                              <Text size="base" fontWeight="$semibold">
                                {item.name}
                              </Text>
                              <Text size="sm" fontWeight="$medium" opacity="0.8">
=======
                              <Avatar
                                size="md"
                                icon={(props) => (
                                  <Icon as={TbOutlineCertificate} boxSize="$6"></Icon>
                                )}
                              ></Avatar>
                            </AvatarGroup>
                            <Flex direction="column" alignItems="flex-start">
                              <Text size="base" fontWeight="$semibold">
                                {item.name}
                              </Text>
                              <Text
                                size="sm"
                                fontWeight="$medium"
                                opacity="0.8"
                              >
>>>>>>> 75f4020 (feat: add storage service)
                                {item.publisher}
                              </Text>
                            </Flex>
                          </Flex>
                          <Text size="base" fontWeight="$normal">
                            {item.published}
                          </Text>
<<<<<<< HEAD
                          <IconButton aria-label="Icon Name" variant="outline" colorScheme="danger" position="absolute" top="$2" right="$2" borderRadius="$full" size="sm" icon={
                            <FaSolidMinus />
                          } onClick={(e) => {
                            e.stopPropagation()
                            up_profile({
                              token: authc.data.token, id: profile.latest.id,
                              profile: {
                                ...profile.latest,
                                certificates: profile.latest.certificates.filter((p) => p.name != item.name)
                              }
                            })
                            onClsCert()
                          }} />
=======
                          <IconButton
                            aria-label="Icon Name"
                            variant="outline"
                            colorScheme="danger"
                            position="absolute"
                            top="$2"
                            right="$2"
                            borderRadius="$full"
                            size="sm"
                            icon={<FaSolidMinus />}
                            onClick={(e) => {
                              e.stopPropagation();
                              up_profile({
                                token: authc.data.token,
                                id: profile.latest.id,
                                profile: {
                                  ...profile.latest,
                                  certificates:
                                    profile.latest.certificates.filter(
                                      (p) => p.name != item.name
                                    ),
                                },
                              });
                              onClsCert();
                            }}
                          />
>>>>>>> 75f4020 (feat: add storage service)
                        </Button>
                      </GridItem>
                    )}
                  </For>
                </Grid>
              </Show>
              <Show when={certificate()}>
                <Grid
                  id="fcert"
                  as="form"
                  gap="$4"
                  onSubmit={(evt) => {
<<<<<<< HEAD
                    evt.preventDefault()
                    const data = certificate();
                    if (!data.id) {
                      profile.latest.certificates.push(data)
                    } else {
                      profile.latest.certificates = profile.latest.certificates.map((p) => {
                        if (p.name == data.id) {
                          return data;
                        }
                        return p
                      })
                    }
                    delete data.id
                    up_profile({
                      token: authc.data.token, id: profile.latest.id,
                      profile: {
                        ...profile.latest,
                        certificates: profile.latest.certificates,
                      }
                    })
                    onClsCert()
=======
                    evt.preventDefault();
                    const data = certificate();
                    if (!data.id) {
                      profile.latest.certificates.push(data);
                    } else {
                      profile.latest.certificates =
                        profile.latest.certificates.map((p) => {
                          if (p.name == data.id) {
                            return data;
                          }
                          return p;
                        });
                    }
                    delete data.id;
                    up_profile({
                      token: authc.data.token,
                      id: profile.latest.id,
                      profile: {
                        ...profile.latest,
                        certificates: profile.latest.certificates,
                      },
                    });
                    onClsCert();
>>>>>>> 75f4020 (feat: add storage service)
                  }}
                >
                  <GridItem>
                    <FormControl>
                      <FormLabel for="name">Name</FormLabel>
<<<<<<< HEAD
                      <Input id="name" type="text" placeholder="Name" value={certificate().name} onInput={handle_input((v) => {
                        set_certificate({ ...certificate(), name: v })
                      })} />
=======
                      <Input
                        id="name"
                        type="text"
                        placeholder="Name"
                        value={certificate().name}
                        onInput={handle_input((v) => {
                          set_certificate({ ...certificate(), name: v });
                        })}
                      />
>>>>>>> 75f4020 (feat: add storage service)
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl>
                      <FormLabel for="publisher">Publisher</FormLabel>
<<<<<<< HEAD
                      <Input id="publisher" type="text" placeholder="Publisher" value={certificate().publisher} onInput={handle_input((v) => {
                        set_certificate({ ...certificate(), publisher: v })
                      })} />
=======
                      <Input
                        id="publisher"
                        type="text"
                        placeholder="Publisher"
                        value={certificate().publisher}
                        onInput={handle_input((v) => {
                          set_certificate({ ...certificate(), publisher: v });
                        })}
                      />
>>>>>>> 75f4020 (feat: add storage service)
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl>
                      <FormLabel for="published">Published</FormLabel>
<<<<<<< HEAD
                      <Textarea id="published" cols={2} placeholder="Published" value={certificate().published} onInput={handle_input((v) => {
                        set_certificate({ ...certificate(), published: v })
                      })} />
=======
                      <Textarea
                        id="published"
                        cols={2}
                        placeholder="Published"
                        value={certificate().published}
                        onInput={handle_input((v) => {
                          set_certificate({ ...certificate(), published: v });
                        })}
                      />
>>>>>>> 75f4020 (feat: add storage service)
                    </FormControl>
                  </GridItem>
                </Grid>
              </Show>
            </ModalBody>
            <ModalFooter>
              <Show when={certificate()}>
<<<<<<< HEAD
                <Button type="submit" form="fcert" fullWidth>Submit</Button>
              </Show>
              <Show when={!certificate()}>
                <Button fullWidth onClick={() => set_certificate({ id: "", photo: "", name: "", publisher: "", published: "" })}>Add</Button>
=======
                <Button type="submit" form="fcert" fullWidth>
                  Submit
                </Button>
              </Show>
              <Show when={!certificate()}>
                <Button
                  fullWidth
                  onClick={() =>
                    set_certificate({
                      id: "",
                      icon: "",
                      name: "",
                      publisher: "",
                      published: "",
                    })
                  }
                >
                  Add
                </Button>
>>>>>>> 75f4020 (feat: add storage service)
              </Show>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
<<<<<<< HEAD
      <>
        <Modal
          centered
          blockScrollOnMount={false}
=======
      {/* !SECTION */}

      {/* SECTION Educations */}
      <>
        <Modal
          centered
          blockScrollOnMount
          scrollBehavior="inside"
>>>>>>> 75f4020 (feat: add storage service)
          opened={isOpnEdu()}
          onClose={onClsEdu}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
<<<<<<< HEAD
            <ModalHeader>Edit Certificates</ModalHeader>
=======
            <ModalHeader>Edit Educations</ModalHeader>
>>>>>>> 75f4020 (feat: add storage service)
            <ModalBody>
              <Show when={!education()}>
                <Grid gap="$2">
                  <For each={profile.latest.educations}>
                    {(item, index) => (
<<<<<<< HEAD
                      <GridItem data-index={index()}
                      >
=======
                      <GridItem data-index={index()}>
>>>>>>> 75f4020 (feat: add storage service)
                        <Button
                          variant="outline"
                          w="$full"
                          h="$full"
                          display="flex"
                          flexDirection="column"
                          gap="$2"
                          padding="$2"
                          alignItems="start"
                          color="inherit"
                          borderWidth="thin"
                          borderStyle="solid"
                          borderColor="$neutral7"
                          borderRadius="$lg"
<<<<<<< HEAD
                          onClick={() => set_education({ ...item, id: item.name })}
=======
                          onClick={() =>
                            set_education({ ...item, id: item.name })
                          }
>>>>>>> 75f4020 (feat: add storage service)
                        >
                          <Flex
                            gap="$2"
                            alignItems="center"
                            position="relative"
                          >
                            <AvatarGroup avatarBorderRadius="$xl">
<<<<<<< HEAD
                              <Avatar size="md" icon={(props) => (
                                <Icon as={RiDocumentBookLine} boxSize="$6"></Icon>
                              )}>
                              </Avatar>
                            </AvatarGroup>
                            <Flex direction="column">
                              <Text size="base" fontWeight="$semibold">
                                {item.name}
                              </Text>
                              <Text size="sm" fontWeight="$medium" opacity="0.8">
=======
                              <Avatar
                                size="md"
                                icon={(props) => (
                                  <Icon
                                    as={HiOutlinePencilSquare}
                                    boxSize="$6"
                                  ></Icon>
                                )}
                              ></Avatar>
                            </AvatarGroup>
                            <Flex direction="column" alignItems="flex-start">
                              <Text size="base" fontWeight="$semibold">
                                {item.name}
                              </Text>
                              <Text
                                size="sm"
                                fontWeight="$medium"
                                opacity="0.8"
                              >
>>>>>>> 75f4020 (feat: add storage service)
                                {item.title}
                              </Text>
                            </Flex>
                          </Flex>
                          <Text size="base" fontWeight="$normal">
                            {item.graduated}
                          </Text>
<<<<<<< HEAD
                          <IconButton aria-label="Icon Name" variant="outline" colorScheme="danger" position="absolute" top="$2" right="$2" borderRadius="$full" size="sm" icon={
                            <FaSolidMinus />
                          } onClick={(e) => {
                            e.stopPropagation()
                            up_profile({
                              token: authc.data.token, id: profile.latest.id,
                              profile: {
                                ...profile.latest,
                                educations: profile.latest.educations.filter((p) => p.name != item.name)
                              }
                            })
                            onClsEdu()
                          }} />
=======
                          <IconButton
                            aria-label="Icon Name"
                            variant="outline"
                            colorScheme="danger"
                            position="absolute"
                            top="$2"
                            right="$2"
                            borderRadius="$full"
                            size="sm"
                            icon={<FaSolidMinus />}
                            onClick={(e) => {
                              e.stopPropagation();
                              up_profile({
                                token: authc.data.token,
                                id: profile.latest.id,
                                profile: {
                                  ...profile.latest,
                                  educations: profile.latest.educations.filter(
                                    (p) => p.name != item.name
                                  ),
                                },
                              });
                              onClsEdu();
                            }}
                          />
>>>>>>> 75f4020 (feat: add storage service)
                        </Button>
                      </GridItem>
                    )}
                  </For>
                </Grid>
              </Show>
              <Show when={education()}>
                <Grid
                  id="fcert"
                  as="form"
                  gap="$4"
                  onSubmit={(evt) => {
<<<<<<< HEAD
                    evt.preventDefault()
                    const data = education();
                    if (!data.id) {
                      profile.latest.educations.push(data)
                    } else {
                      profile.latest.educations = profile.latest.educations.map((p) => {
                        if (p.name == data.id) {
                          return data;
                        }
                        return p
                      })
                    }
                    delete data.id
                    up_profile({
                      token: authc.data.token, id: profile.latest.id,
                      profile: {
                        ...profile.latest,
                        educations: profile.latest.educations,
                      }
                    })
                    onClsEdu()
=======
                    evt.preventDefault();
                    const data = education();
                    if (!data.id) {
                      profile.latest.educations.push(data);
                    } else {
                      profile.latest.educations = profile.latest.educations.map(
                        (p) => {
                          if (p.name == data.id) {
                            return data;
                          }
                          return p;
                        }
                      );
                    }
                    delete data.id;
                    up_profile({
                      token: authc.data.token,
                      id: profile.latest.id,
                      profile: {
                        ...profile.latest,
                        educations: profile.latest.educations,
                      },
                    });
                    onClsEdu();
>>>>>>> 75f4020 (feat: add storage service)
                  }}
                >
                  <GridItem>
                    <FormControl>
                      <FormLabel for="name">Name</FormLabel>
<<<<<<< HEAD
                      <Input id="name" type="text" placeholder="Name" value={education().name} onInput={handle_input((v) => {
                        set_education({ ...education(), name: v })
                      })} />
=======
                      <Input
                        id="name"
                        type="text"
                        placeholder="Name"
                        value={education().name}
                        onInput={handle_input((v) => {
                          set_education({ ...education(), name: v });
                        })}
                      />
>>>>>>> 75f4020 (feat: add storage service)
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl>
                      <FormLabel for="title">Title</FormLabel>
<<<<<<< HEAD
                      <Input id="title" type="text" placeholder="Title" value={education().title} onInput={handle_input((v) => {
                        set_education({ ...education(), title: v })
                      })} />
=======
                      <Input
                        id="title"
                        type="text"
                        placeholder="Title"
                        value={education().title}
                        onInput={handle_input((v) => {
                          set_education({ ...education(), title: v });
                        })}
                      />
>>>>>>> 75f4020 (feat: add storage service)
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl>
                      <FormLabel for="graduated">Graduated</FormLabel>
<<<<<<< HEAD
                      <Textarea id="graduated" cols={2} placeholder="Graduated" value={education().graduated} onInput={handle_input((v) => {
                        set_education({ ...education(), graduated: v })
                      })} />
=======
                      <Textarea
                        id="graduated"
                        cols={2}
                        placeholder="Graduated"
                        value={education().graduated}
                        onInput={handle_input((v) => {
                          set_education({ ...education(), graduated: v });
                        })}
                      />
>>>>>>> 75f4020 (feat: add storage service)
                    </FormControl>
                  </GridItem>
                </Grid>
              </Show>
            </ModalBody>
            <ModalFooter>
              <Show when={education()}>
<<<<<<< HEAD
                <Button type="submit" form="fcert" fullWidth>Submit</Button>
              </Show>
              <Show when={!education()}>
                <Button fullWidth onClick={() => set_education({ id: "", photo: "", name: "", title: "", graduated: "" })}>Add</Button>
=======
                <Button type="submit" form="fcert" fullWidth>
                  Submit
                </Button>
              </Show>
              <Show when={!education()}>
                <Button
                  fullWidth
                  onClick={() =>
                    set_education({
                      id: "",
                      icon: "",
                      name: "",
                      title: "",
                      graduated: "",
                    })
                  }
                >
                  Add
                </Button>
>>>>>>> 75f4020 (feat: add storage service)
              </Show>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
<<<<<<< HEAD
      <>
        <Modal
          centered
          blockScrollOnMount={false}
=======
      {/* !SECTION */}

      {/* SECTION Languages */}
      <>
        <Modal
          centered
          blockScrollOnMount
          opened={isOpnLang()}
          onClose={onClsLang}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalHeader>Edit Languages</ModalHeader>
            <ModalBody>
              <Show when={!language()}>
                <Grid gap="$2">
                  <For each={profile.latest.languages}>
                    {(item, index) => (
                      <GridItem data-index={index()}>
                        <Button
                          variant="outline"
                          w="$full"
                          h="$full"
                          display="flex"
                          flexDirection="column"
                          gap="$2"
                          padding="$2"
                          alignItems="start"
                          color="inherit"
                          borderWidth="thin"
                          borderStyle="solid"
                          borderColor="$neutral7"
                          borderRadius="$lg"
                          onClick={() =>
                            set_language({ ...item, id: item.name })
                          }
                        >
                          <Flex
                            gap="$2"
                            alignItems="center"
                            position="relative"
                          >
                            <AvatarGroup avatarBorderRadius="$xl">
                              <Avatar
                                size="md"
                                icon={(props) => (
                                  <Icon as={AiOutlineFlag} boxSize="$6"></Icon>
                                )}
                              ></Avatar>
                            </AvatarGroup>
                            <Flex direction="column" alignItems="flex-start">
                              <Text size="base" fontWeight="$semibold">
                                {item.name}
                              </Text>
                              <Text
                                size="sm"
                                fontWeight="$medium"
                                opacity="0.8"
                              >
                                {item.level}
                              </Text>
                            </Flex>
                          </Flex>
                          <IconButton
                            aria-label="Icon Name"
                            variant="outline"
                            colorScheme="danger"
                            position="absolute"
                            top="$2"
                            right="$2"
                            borderRadius="$full"
                            size="sm"
                            icon={<FaSolidMinus />}
                            onClick={(e) => {
                              e.stopPropagation();
                              up_profile({
                                token: authc.data.token,
                                id: profile.latest.id,
                                profile: {
                                  ...profile.latest,
                                  languages: profile.latest.languages.filter(
                                    (p) => p.name != item.name
                                  ),
                                },
                              });
                              onClsLang();
                            }}
                          />
                        </Button>
                      </GridItem>
                    )}
                  </For>
                </Grid>
              </Show>
              <Show when={language()}>
                <Grid
                  id="fcert"
                  as="form"
                  gap="$4"
                  onSubmit={(evt) => {
                    evt.preventDefault();
                    const data = language();
                    if (!data.id) {
                      profile.latest.languages.push(data);
                    } else {
                      profile.latest.languages = profile.latest.languages.map(
                        (p) => {
                          if (p.name == data.id) {
                            return data;
                          }
                          return p;
                        }
                      );
                    }
                    delete data.id;
                    up_profile({
                      token: authc.data.token,
                      id: profile.latest.id,
                      profile: {
                        ...profile.latest,
                        languages: profile.latest.languages,
                      },
                    });
                    onClsLang();
                  }}
                >
                  <GridItem>
                    <FormControl>
                      <FormLabel for="name">Name</FormLabel>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Name"
                        value={language().name}
                        onInput={handle_input((v) => {
                          set_language({ ...language(), name: v });
                        })}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl>
                      <FormLabel for="level">Level</FormLabel>
                      <Input
                        id="level"
                        type="text"
                        placeholder="Level"
                        value={language().level}
                        onInput={handle_input((v) => {
                          set_language({ ...language(), level: v });
                        })}
                      />
                    </FormControl>
                  </GridItem>
                </Grid>
              </Show>
            </ModalBody>
            <ModalFooter>
              <Show when={language()}>
                <Button type="submit" form="fcert" fullWidth>
                  Submit
                </Button>
              </Show>
              <Show when={!language()}>
                <Button
                  fullWidth
                  onClick={() =>
                    set_language({ id: "", icon: "", name: "", level: "" })
                  }
                >
                  Add
                </Button>
              </Show>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
      {/* !SECTION */}

      {/* SECTION Positions */}
      <>
        <Modal
          centered
          blockScrollOnMount
          scrollBehavior="inside"
>>>>>>> 75f4020 (feat: add storage service)
          opened={isOpnAPs()}
          onClose={onClsAPs}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalHeader>Edit Active Positions</ModalHeader>
            <ModalBody>
              <Show when={!active_position()}>
                <Grid gap="$2">
                  <For each={profile.latest.active_positions}>
                    {(item, index) => (
<<<<<<< HEAD
                      <GridItem data-index={index()}
                      >
=======
                      <GridItem data-index={index()}>
>>>>>>> 75f4020 (feat: add storage service)
                        <Button
                          variant="outline"
                          w="$full"
                          h="$full"
                          display="flex"
                          flexDirection="column"
                          gap="$2"
                          padding="$2"
                          alignItems="start"
                          color="inherit"
                          borderWidth="thin"
                          borderStyle="solid"
                          borderColor="$neutral7"
                          borderRadius="$lg"
<<<<<<< HEAD
                          onClick={() => set_active_position({ ...item, id: item.name })}
=======
                          onClick={() =>
                            set_active_position({ ...item, id: item.name })
                          }
>>>>>>> 75f4020 (feat: add storage service)
                        >
                          <Flex alignItems="self-start" gap="$2">
                            <AvatarGroup>
                              <Avatar
                                size="md"
                                icon={(props) => (
<<<<<<< HEAD
                                  <Icon as={HiOutlineTemplate} boxSize="$6"></Icon>
                                )}
                              ></Avatar>
                            </AvatarGroup>
                            <Flex direction="column" textAlign="left">
=======
                                  <Icon
                                    as={HiOutlineBuildingOffice}
                                    boxSize="$6"
                                  ></Icon>
                                )}
                              ></Avatar>
                            </AvatarGroup>
                            <Flex direction="column" alignItems="flex-start">
>>>>>>> 75f4020 (feat: add storage service)
                              <Text size="base" fontWeight="$semibold">
                                {item.name}
                              </Text>
                              <Text
                                size="base"
                                fontWeight="$normal"
                                opacity="0.9"
                              >
                                {item.company}
                              </Text>
<<<<<<< HEAD
                              <Button w="fit-content" mt="$1_5" variant="subtle" size="sm">
=======
                              <Button
                                w="fit-content"
                                mt="$1_5"
                                fontSize="$xs"
                                variant="subtle"
                                size="sm"
                                compact
                              >
>>>>>>> 75f4020 (feat: add storage service)
                                {item.status}
                              </Button>
                            </Flex>
                          </Flex>
<<<<<<< HEAD
                          <IconButton aria-label="Icon Name" variant="outline" colorScheme="danger" position="absolute" top="$2" right="$2" borderRadius="$full" size="sm" icon={
                            <FaSolidMinus />
                          } onClick={(e) => {
                            e.stopPropagation()
                            up_profile({
                              token: authc.data.token, id: profile.latest.id,
                              profile: {
                                ...profile.latest,
                                active_positions: profile.latest.active_positions.filter((p) => p.name != item.name)
                              }
                            })
                            onClsCert()
                          }} />
=======
                          <IconButton
                            aria-label="Icon Name"
                            variant="outline"
                            colorScheme="danger"
                            position="absolute"
                            top="$2"
                            right="$2"
                            borderRadius="$full"
                            size="sm"
                            icon={<FaSolidMinus />}
                            onClick={(e) => {
                              e.stopPropagation();
                              up_profile({
                                token: authc.data.token,
                                id: profile.latest.id,
                                profile: {
                                  ...profile.latest,
                                  active_positions:
                                    profile.latest.active_positions.filter(
                                      (p) => p.name != item.name
                                    ),
                                },
                              });
                              onClsCert();
                            }}
                          />
>>>>>>> 75f4020 (feat: add storage service)
                        </Button>
                      </GridItem>
                    )}
                  </For>
                </Grid>
              </Show>
              <Show when={active_position()}>
                <Grid
                  id="fcert"
                  as="form"
                  gap="$4"
                  onSubmit={(evt) => {
<<<<<<< HEAD
                    evt.preventDefault()
                    const data = active_position();
                    if (!data.id) {
                      profile.latest.active_positions.push(data)
                    } else {
                      profile.latest.active_positions = profile.latest.active_positions.map((p) => {
                        if (p.name == data.id) {
                          return data;
                        }
                        return p
                      })
                    }
                    delete data.id
                    up_profile({
                      token: authc.data.token, id: profile.latest.id,
                      profile: {
                        ...profile.latest,
                        active_positions: profile.latest.active_positions,
                      }
                    })
                    onClsAPs()
=======
                    evt.preventDefault();
                    const data = active_position();
                    if (!data.id) {
                      profile.latest.active_positions.push(data);
                    } else {
                      profile.latest.active_positions =
                        profile.latest.active_positions.map((p) => {
                          if (p.name == data.id) {
                            return data;
                          }
                          return p;
                        });
                    }
                    delete data.id;
                    up_profile({
                      token: authc.data.token,
                      id: profile.latest.id,
                      profile: {
                        ...profile.latest,
                        active_positions: profile.latest.active_positions,
                      },
                    });
                    onClsAPs();
>>>>>>> 75f4020 (feat: add storage service)
                  }}
                >
                  <GridItem>
                    <FormControl>
                      <FormLabel for="name">Name</FormLabel>
<<<<<<< HEAD
                      <Input id="name" type="text" placeholder="Name" value={active_position().name} onInput={handle_input((v) => {
                        set_active_position({ ...active_position(), name: v })
                      })} />
=======
                      <Input
                        id="name"
                        type="text"
                        placeholder="Name"
                        value={active_position().name}
                        onInput={handle_input((v) => {
                          set_active_position({
                            ...active_position(),
                            name: v,
                          });
                        })}
                      />
>>>>>>> 75f4020 (feat: add storage service)
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl>
                      <FormLabel for="company">Company</FormLabel>
<<<<<<< HEAD
                      <Input id="company" type="text" placeholder="Company" value={active_position().company} onInput={handle_input((v) => {
                        set_active_position({ ...active_position(), company: v })
                      })} />
=======
                      <Input
                        id="company"
                        type="text"
                        placeholder="Company"
                        value={active_position().company}
                        onInput={handle_input((v) => {
                          set_active_position({
                            ...active_position(),
                            company: v,
                          });
                        })}
                      />
>>>>>>> 75f4020 (feat: add storage service)
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormLabel for="status">Status</FormLabel>
<<<<<<< HEAD
                    <Select value={active_position().status} onChange={(v) => {
                      set_active_position({ ...active_position(), status: v })
                    }}>
=======
                    <Select
                      value={active_position().status}
                      onChange={(v) => {
                        set_active_position({
                          ...active_position(),
                          status: v,
                        });
                      }}
                    >
>>>>>>> 75f4020 (feat: add storage service)
                      <SelectTrigger id="status">
                        <SelectPlaceholder>Choose a Status</SelectPlaceholder>
                        <SelectValue />
                        <SelectIcon />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectListbox>
                          <For each={active_position_statuses}>
<<<<<<< HEAD
                            {item => (
=======
                            {(item) => (
>>>>>>> 75f4020 (feat: add storage service)
                              <SelectOption value={item}>
                                <SelectOptionText>{item}</SelectOptionText>
                                <SelectOptionIndicator />
                              </SelectOption>
                            )}
                          </For>
                        </SelectListbox>
                      </SelectContent>
                    </Select>
                  </GridItem>
                </Grid>
              </Show>
            </ModalBody>
            <ModalFooter>
              <Show when={active_position()}>
<<<<<<< HEAD
                <Button type="submit" form="fcert" fullWidth>Submit</Button>
              </Show>
              <Show when={!active_position()}>
                <Button fullWidth onClick={() => set_active_position({ id: "", photo: "", name: "", company: "", status: "" })}>Add</Button>
=======
                <Button type="submit" form="fcert" fullWidth>
                  Submit
                </Button>
              </Show>
              <Show when={!active_position()}>
                <Button
                  fullWidth
                  onClick={() =>
                    set_active_position({
                      id: "",
                      photo: "",
                      name: "",
                      company: "",
                      status: "",
                    })
                  }
                >
                  Add
                </Button>
>>>>>>> 75f4020 (feat: add storage service)
              </Show>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
      <>
        <Modal
          centered
<<<<<<< HEAD
          blockScrollOnMount={false}
=======
          blockScrollOnMount
          scrollBehavior="inside"
>>>>>>> 75f4020 (feat: add storage service)
          opened={isOpnPPs()}
          onClose={onClsPPs}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalHeader>Edit Preferred Positions</ModalHeader>
            <ModalBody>
              <Show when={!preferred_position()}>
                <Grid gap="$2">
                  <For each={profile.latest.preferred_positions}>
                    {(item, index) => (
<<<<<<< HEAD
                      <GridItem data-index={index()}
                      >
=======
                      <GridItem data-index={index()}>
>>>>>>> 75f4020 (feat: add storage service)
                        <Button
                          variant="outline"
                          w="$full"
                          h="$full"
                          display="flex"
                          gap="$2"
                          padding="$2"
                          justifyContent="space-between"
                          alignItems="center"
                          color="inherit"
                          borderWidth="thin"
                          borderStyle="solid"
                          borderColor="$neutral7"
                          borderRadius="$lg"
<<<<<<< HEAD
                          onClick={() => set_preferred_position({ ...item, id: item.name })}
=======
                          onClick={() =>
                            set_preferred_position({ ...item, id: item.name })
                          }
>>>>>>> 75f4020 (feat: add storage service)
                        >
                          <Flex
                            gap="$2"
                            alignItems="center"
                            px="$2"
                            borderWidth="2px"
                            borderStyle="solid"
                            borderColor="$neutral7"
                            borderRadius="$lg"
                          >
<<<<<<< HEAD
                            <Flex justifyContent="space-between" w="$full" gap="$4">
                              <Text py="$1" size="base" fontWeight="$normal" flexGrow="1">
                                {item.name}
                              </Text>
                              <Divider orientation="vertical" thickness="2px" w="0" h="auto">
=======
                            <Flex
                              justifyContent="space-between"
                              w="$full"
                              gap="$4"
                            >
                              <Text
                                py="$1"
                                size="base"
                                fontWeight="$normal"
                                flexGrow="1"
                              >
                                {item.name}
                              </Text>
                              <Divider
                                orientation="vertical"
                                thickness="2px"
                                w="0"
                                h="auto"
                              >
>>>>>>> 75f4020 (feat: add storage service)
                                {"\u2800"}
                              </Divider>
                              <Text py="$1" size="base" fontWeight="$normal">
                                {item.experience}
                              </Text>
                            </Flex>
                          </Flex>
<<<<<<< HEAD
                          <IconButton aria-label="Icon Name" variant="outline" colorScheme="danger" borderRadius="$full" size="sm" icon={
                            <FaSolidMinus />
                          } onClick={(e) => {
                            e.stopPropagation()
                            up_profile({
                              token: authc.data.token, id: profile.latest.id,
                              profile: {
                                ...profile.latest,
                                preferred_positions: profile.latest.preferred_positions.filter((p) => p.name != item.name)
                              }
                            })
                            onClsPPs()
                          }} />
=======
                          <IconButton
                            aria-label="Icon Name"
                            variant="outline"
                            colorScheme="danger"
                            borderRadius="$full"
                            size="sm"
                            icon={<FaSolidMinus />}
                            onClick={(e) => {
                              e.stopPropagation();
                              up_profile({
                                token: authc.data.token,
                                id: profile.latest.id,
                                profile: {
                                  ...profile.latest,
                                  preferred_positions:
                                    profile.latest.preferred_positions.filter(
                                      (p) => p.name != item.name
                                    ),
                                },
                              });
                              onClsPPs();
                            }}
                          />
>>>>>>> 75f4020 (feat: add storage service)
                        </Button>
                      </GridItem>
                    )}
                  </For>
                </Grid>
              </Show>
              <Show when={preferred_position()}>
                <Grid
                  id="fcert"
                  as="form"
                  gap="$4"
                  onSubmit={(evt) => {
<<<<<<< HEAD
                    evt.preventDefault()
                    const data = preferred_position();
                    if (!data.id) {
                      profile.latest.preferred_positions.push(data)
                    } else {
                      profile.latest.preferred_positions = profile.latest.preferred_positions.map((p) => {
                        if (p.name == data.id) {
                          return data;
                        }
                        return p
                      })
                    }
                    delete data.id
                    up_profile({
                      token: authc.data.token, id: profile.latest.id,
                      profile: {
                        ...profile.latest,
                        preferred_positions: profile.latest.preferred_positions,
                      }
                    })
                    onClsPPs()
=======
                    evt.preventDefault();
                    const data = preferred_position();
                    if (!data.id) {
                      profile.latest.preferred_positions.push(data);
                    } else {
                      profile.latest.preferred_positions =
                        profile.latest.preferred_positions.map((p) => {
                          if (p.name == data.id) {
                            return data;
                          }
                          return p;
                        });
                    }
                    delete data.id;
                    up_profile({
                      token: authc.data.token,
                      id: profile.latest.id,
                      profile: {
                        ...profile.latest,
                        preferred_positions: profile.latest.preferred_positions,
                      },
                    });
                    onClsPPs();
>>>>>>> 75f4020 (feat: add storage service)
                  }}
                >
                  <GridItem>
                    <FormControl>
                      <FormLabel for="name">Name</FormLabel>
<<<<<<< HEAD
                      <Input id="name" type="text" placeholder="Name" value={preferred_position().name} onInput={handle_input((v) => {
                        set_preferred_position({ ...preferred_position(), name: v })
                      })} />
=======
                      <Input
                        id="name"
                        type="text"
                        placeholder="Name"
                        value={preferred_position().name}
                        onInput={handle_input((v) => {
                          set_preferred_position({
                            ...preferred_position(),
                            name: v,
                          });
                        })}
                      />
>>>>>>> 75f4020 (feat: add storage service)
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl>
                      <FormLabel for="experience">Experience</FormLabel>
<<<<<<< HEAD
                      <Input id="experience" type="text" placeholder="Experience" value={preferred_position().experience} onInput={handle_input((v) => {
                        set_preferred_position({ ...preferred_position(), experience: v })
                      })} />
=======
                      <Input
                        id="experience"
                        type="text"
                        placeholder="Experience"
                        value={preferred_position().experience}
                        onInput={handle_input((v) => {
                          set_preferred_position({
                            ...preferred_position(),
                            experience: v,
                          });
                        })}
                      />
>>>>>>> 75f4020 (feat: add storage service)
                    </FormControl>
                  </GridItem>
                </Grid>
              </Show>
            </ModalBody>
            <ModalFooter>
              <Show when={preferred_position()}>
<<<<<<< HEAD
                <Button type="submit" form="fcert" fullWidth>Submit</Button>
              </Show>
              <Show when={!preferred_position()}>
                <Button fullWidth onClick={() => set_preferred_position({ id: "", name: "", experience: "" })}>Add</Button>
=======
                <Button type="submit" form="fcert" fullWidth>
                  Submit
                </Button>
              </Show>
              <Show when={!preferred_position()}>
                <Button
                  fullWidth
                  onClick={() =>
                    set_preferred_position({ id: "", name: "", experience: "" })
                  }
                >
                  Add
                </Button>
>>>>>>> 75f4020 (feat: add storage service)
              </Show>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
<<<<<<< HEAD
      <>
        <Modal
          centered
          blockScrollOnMount={false}
=======
      {/* !SECTION */}

      {/* SECTION Skills */}
      <>
        <Modal
          centered
          blockScrollOnMount
          scrollBehavior="inside"
>>>>>>> 75f4020 (feat: add storage service)
          opened={isOpnSkl()}
          onClose={onClsSkl}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalHeader>Edit Skills</ModalHeader>
            <ModalBody>
              <Show when={!skill()}>
                <Flex wrap="wrap" gap="$2">
                  <For each={profile.latest.skills}>
                    {(item, index) => (
                      <Button
                        data-index={index()}
                        variant="outline"
                        fontSize="base"
                        fontWeight="$normal"
                        display="flex"
                        gap="$2"
                        padding="$2"
                        justifyContent="space-between"
                        alignItems="center"
                        color="inherit"
                        borderWidth="2px"
                        borderStyle="solid"
                        borderColor="$neutral7"
                        borderRadius="$lg"
                        onClick={() => set_skill({ ...item, id: item.name })}
                      >
                        {item.name}
<<<<<<< HEAD
                        <IconButton aria-label="Icon Name" variant="outline" colorScheme="danger" borderRadius="$full" size="xs" icon={
                          <FaSolidMinus />
                        } onClick={(e) => {
                          e.stopPropagation()
                          up_profile({
                            token: authc.data.token, id: profile.latest.id,
                            profile: {
                              ...profile.latest,
                              skills: profile.latest.skills.filter((p) => p.name != item.name)
                            }
                          })
                          onClsSkl()
                        }} />
=======
                        <IconButton
                          aria-label="Icon Name"
                          variant="outline"
                          colorScheme="danger"
                          borderRadius="$full"
                          size="xs"
                          icon={<FaSolidMinus />}
                          onClick={(e) => {
                            e.stopPropagation();
                            up_profile({
                              token: authc.data.token,
                              id: profile.latest.id,
                              profile: {
                                ...profile.latest,
                                skills: profile.latest.skills.filter(
                                  (p) => p.name != item.name
                                ),
                              },
                            });
                            onClsSkl();
                          }}
                        />
>>>>>>> 75f4020 (feat: add storage service)
                      </Button>
                    )}
                  </For>
                </Flex>
              </Show>
              <Show when={skill()}>
                <Grid
<<<<<<< HEAD
                  id="fcert"
                  as="form"
                  gap="$4"
                  onSubmit={(evt) => {
                    evt.preventDefault()
                    const data = skill();
                    if (!data.id) {
                      profile.latest.skills.push(data)
=======
                  id="fskl"
                  as="form"
                  gap="$4"
                  onSubmit={(evt) => {
                    evt.preventDefault();
                    const data = skill();
                    if (!data.id) {
                      profile.latest.skills.push(data);
>>>>>>> 75f4020 (feat: add storage service)
                    } else {
                      profile.latest.skills = profile.latest.skills.map((p) => {
                        if (p.name == data.id) {
                          return data;
                        }
<<<<<<< HEAD
                        return p
                      })
                    }
                    delete data.id
                    up_profile({
                      token: authc.data.token, id: profile.latest.id,
                      profile: {
                        ...profile.latest,
                        skills: profile.latest.skills,
                      }
                    })
                    onClsSkl()
=======
                        return p;
                      });
                    }
                    delete data.id;
                    up_profile({
                      token: authc.data.token,
                      id: profile.latest.id,
                      profile: {
                        ...profile.latest,
                        skills: profile.latest.skills,
                      },
                    });
                    onClsSkl();
>>>>>>> 75f4020 (feat: add storage service)
                  }}
                >
                  <GridItem>
                    <FormControl>
                      <FormLabel for="name">Name</FormLabel>
<<<<<<< HEAD
                      <Input id="name" type="text" placeholder="Name" value={skill().name} onInput={handle_input((v) => {
                        set_skill({ ...skill(), name: v })
                      })} />
=======
                      <Input
                        id="name"
                        type="text"
                        placeholder="Name"
                        value={skill().name}
                        onInput={handle_input((v) => {
                          set_skill({ ...skill(), name: v });
                        })}
                      />
>>>>>>> 75f4020 (feat: add storage service)
                    </FormControl>
                  </GridItem>
                </Grid>
              </Show>
            </ModalBody>
            <ModalFooter>
              <Show when={skill()}>
<<<<<<< HEAD
                <Button type="submit" form="fcert" fullWidth>Submit</Button>
              </Show>
              <Show when={!skill()}>
                <Button fullWidth onClick={() => set_skill({ id: "", name: "" })}>Add</Button>
=======
                <Button type="submit" form="fskl" fullWidth>
                  Submit
                </Button>
              </Show>
              <Show when={!skill()}>
                <Button
                  fullWidth
                  onClick={() => set_skill({ id: "", name: "" })}
                >
                  Add
                </Button>
>>>>>>> 75f4020 (feat: add storage service)
              </Show>
            </ModalFooter>
          </ModalContent>
        </Modal>
<<<<<<< HEAD
      </>
      <>
        <Modal
          centered
          blockScrollOnMount={false}
          opened={isOpnLang()}
          onClose={onClsLang}
=======
        <Modal
          centered
          blockScrollOnMount
          opened={isOpnDoc()}
          onClose={onClsDoc}
>>>>>>> 75f4020 (feat: add storage service)
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
<<<<<<< HEAD
            <ModalHeader>Edit Languages</ModalHeader>
            <ModalBody>
              <Show when={!language()}>
                <Grid gap="$2">
                  <For each={profile.latest.languages}>
                    {(item, index) => (
                      <GridItem data-index={index()}
                      >
                        <Button
                          variant="outline"
                          w="$full"
                          h="$full"
                          display="flex"
                          flexDirection="column"
                          gap="$2"
                          padding="$2"
                          alignItems="start"
                          color="inherit"
                          borderWidth="thin"
                          borderStyle="solid"
                          borderColor="$neutral7"
                          borderRadius="$lg"
                          onClick={() => set_language({ ...item, id: item.name })}
                        >
                          <Flex
                            gap="$2"
                            alignItems="center"
                            position="relative"
                          >
                            <AvatarGroup avatarBorderRadius="$xl">
                              <Avatar size="md" icon={(props) => (
                                <Icon as={RiDocumentBookLine} boxSize="$6"></Icon>
                              )}>
                              </Avatar>
                            </AvatarGroup>
                            <Flex direction="column" textAlign="left">
                              <Text size="base" fontWeight="$semibold">
                                {item.name}
                              </Text>
                              <Text size="sm" fontWeight="$medium" opacity="0.8">
                                {item.level}
                              </Text>
                            </Flex>
                          </Flex>
                          <IconButton aria-label="Icon Name" variant="outline" colorScheme="danger" position="absolute" top="$2" right="$2" borderRadius="$full" size="sm" icon={
                            <FaSolidMinus />
                          } onClick={(e) => {
                            e.stopPropagation()
                            up_profile({
                              token: authc.data.token, id: profile.latest.id,
                              profile: {
                                ...profile.latest,
                                languages: profile.latest.languages.filter((p) => p.name != item.name)
                              }
                            })
                            onClsLang()
                          }} />
                        </Button>
                      </GridItem>
                    )}
                  </For>
                </Grid>
              </Show>
              <Show when={language()}>
                <Grid
                  id="fcert"
                  as="form"
                  gap="$4"
                  onSubmit={(evt) => {
                    evt.preventDefault()
                    const data = language();
                    if (!data.id) {
                      profile.latest.languages.push(data)
                    } else {
                      profile.latest.languages = profile.latest.languages.map((p) => {
                        if (p.name == data.id) {
                          return data;
                        }
                        return p
                      })
                    }
                    delete data.id
                    up_profile({
                      token: authc.data.token, id: profile.latest.id,
                      profile: {
                        ...profile.latest,
                        languages: profile.latest.languages,
                      }
                    })
                    onClsLang()
                  }}
                >
                  <GridItem>
                    <FormControl>
                      <FormLabel for="name">Name</FormLabel>
                      <Input id="name" type="text" placeholder="Name" value={language().name} onInput={handle_input((v) => {
                        set_language({ ...language(), name: v })
                      })} />
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl>
                      <FormLabel for="level">Level</FormLabel>
                      <Input id="level" type="text" placeholder="Level" value={language().level} onInput={handle_input((v) => {
                        set_language({ ...language(), level: v })
                      })} />
                    </FormControl>
                  </GridItem>
                </Grid>
              </Show>
            </ModalBody>
            <ModalFooter>
              <Show when={language()}>
                <Button type="submit" form="fcert" fullWidth>Submit</Button>
              </Show>
              <Show when={!language()}>
                <Button fullWidth onClick={() => set_language({ id: "", photo: "", name: "", level: "" })}>Add</Button>
              </Show>
=======
            <ModalHeader>Upload Document</ModalHeader>
            <ModalBody>
              <Grid
                id="fdocument"
                as="form"
                gap="$4"
                onSubmit={async (evt) => {
                  evt.preventDefault();
                  const file_cv = oidm.get(cv());
                  let url_cv = "";
                  if (file_cv) {
                    loading.load();
                    url_cv = await upload(
                      "documents/" +
                        profile.latest.name +
                        "/resume" +
                        "." +
                        file_cv.name.split(".").pop(),
                      file_cv
                    ).finally(loading.loaded);
                  }
                  up_profile({
                    token: authc.data.token,
                    id: profile.latest.id,
                    profile: {
                      ...profile.latest,
                      resume: url_cv,
                    },
                  });
                  onClsDoc();
                }}
              >
                <GridItem>
                  <FormControl>
                    {/* <FormLabel for="photo" display="flex" flexDirection="column" alignItems="center" gap="$2" cursor="pointer">
                      <Show when={pphoto()} fallback={
                        <Avatar size="lg" icon={(props) => (
                          <Icon
                            as={HiOutlineUser}
                            boxSize="$7"
                          ></Icon>
                        )} />
                      }>
                        <Avatar size="lg" name="photo" src={pphoto()} imageProps={{crossorigin: 'use-credentials'}} />
                      </Show>
                      <Text>Photo</Text>
                    </FormLabel> */}
                    <Input
                      hidden
                      id="input-cv"
                      type="file"
                      accept="application/pdf"
                      onInput={handle_input(set_cv, cv)}
                    />
                    <FormLabel for="cv">Resume</FormLabel>
                    <InputGroup>
                      <Input
                        id="cv"
                        placeholder="Choose File"
                        value={oidm.get(cv())?.name}
                        readonly
                      />
                      <InputRightElement>
                        <IconButton
                          zIndex={1}
                          variant="ghost"
                          aria-label="Upload"
                          compact
                          icon={
                            <Icon
                              as={HiOutlineDocument}
                              boxSize="$5"
                              color="$neutral9"
                            />
                          }
                          onclick={() =>
                            document
                              .querySelector<HTMLInputElement>("#input-cv")
                              .click()
                          }
                        />
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                </GridItem>
              </Grid>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" form="fdocument" fullWidth>
                Update
              </Button>
>>>>>>> 75f4020 (feat: add storage service)
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
      {/* !SECTION */}
<<<<<<< HEAD
    </Box >
=======

      {/* !SECTION */}
    </Box>
>>>>>>> 75f4020 (feat: add storage service)
  );
};

export default function (props: ProfileProps) {
  return (
    <AuthenticationProvider guest>
      <HopeProvider config={config}>
<<<<<<< HEAD
        <Profile {...props}></Profile>
=======
        <LoadingProvider>
          <Profile {...props}></Profile>
        </LoadingProvider>
>>>>>>> 75f4020 (feat: add storage service)
      </HopeProvider>
    </AuthenticationProvider>
  );
}
