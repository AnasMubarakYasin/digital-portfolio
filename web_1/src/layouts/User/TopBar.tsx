import { JSX, ParentComponent, For } from "solid-js";

import AppBar from "@components/Bar/App";
import Link from "@components/Link";
import Avatar from "@components/Avatar";

export interface TopBarProps {
  nav: {
    text: string;
    href: string;
  }[];
  path: string;
}

const TopBar: ParentComponent<TopBarProps> = function ({
  nav,
  path,
  children,
}) {
  return (
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
            <For each={nav}>
              {(item, index) => (
                <li data-index={index()}>
                  <Link
                    href={item.href}
                    classList={{
                      "!text-tetrary": item.href == path,
                      "!text-opacity-60 !hover:text-opacity-100":
                        item.href != path,
                    }}
                    sx-text="on-surface"
                    sx-font="medium"
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
      nav={<div sx-display="flex" class="gap-[1rem]">
        <div sx-display="flex" sx-align="items-center" class="gap-[0.5rem]">
          <Avatar src="/favicon.ico"></Avatar>
          <div sx-text="!opacity-90" sx-font="medium">Anas</div>
        </div>
      </div>}
    ></AppBar>
  );
};

export default TopBar;
