import { JSX, ParentComponent, For } from "solid-js";

import Theme from "@components/Theme";
import Box from "@components/Box";
import AppBar from "@components/Bar/App";
import Typography from "@components/Typography";
import Link from "@components/Link";

export interface ProfileProps {}

const nav_top = [
  { text: "Home", href: "/" },
  { text: "Profile", href: "/profile" },
  { text: "Blog", href: "/blog" },
];
const path = "/profile";
const Profile: ParentComponent<ProfileProps> = function ({ children }) {
  function is_active(href: string) {
    if (path == href) {
      return "";
    } else {
      return "!opacity-60";
    }
  }
  return (
    <Theme mode="light" sx-display="grid">
      <Box
        sx-container="block"
        sx-bg="color on-color"
        sx-display="grid"
        sx-w="max-screen"
        sx-h="min-screen"
        sx-shadow="sm"
      >
        <AppBar
          class="px-[1rem] sm:px-[2rem] md:px-[3rem] xl:px-[4rem] 2xl:px-[5rem]"
          brand={
            <div>
              <div sx-text="[1.125rem] primary" sx-font="bold">
                Digital Portfolio
              </div>
            </div>
          }
          center={
            <nav sx-flex="grow" sx-m="sm:l-[2rem] md:l-[4rem]">
              <ul sx-display="flex" class="gap-[2rem]">
                <For each={nav_top}>
                  {(item, index) => (
                    <li data-index={index()}>
                      <Link
                        href={item.href}
                        classList={{ "!text-opacity-60": item.href != path }}
                        sx-text="on-surface"
                        sx-font="semibold"
                        sx-hover="underline underline-2"
                      >
                        {item.text}
                      </Link>
                    </li>
                  )}
                </For>
              </ul>
            </nav>
          }
          nav={<nav></nav>}
        ></AppBar>
      </Box>
    </Theme>
  );
};

export default Profile;
