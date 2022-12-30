import { RiMapCompassDiscoverLine } from "solid-icons/ri";
import { FiCalendar } from "solid-icons/fi";
import { HiOutlineNewspaper } from "solid-icons/hi";

// import { BiCalendarEvent } from "solid-icons/bi";
// import { BsViewStacked } from "solid-icons/bs";
// import { HiOutlineViewGrid } from "solid-icons/hi";

export const main = [
  // { text: "Home", href: "/" },
  { text: "Discover", href: "/discover" },
  { text: "Event", href: "/event" },
  { text: "Blog", href: "/blog" },
];
export const main_bottom = [
  { icon: RiMapCompassDiscoverLine, text: "Discover", href: "/discover" },
  { icon: FiCalendar, text: "Event", href: "/event" },
  { icon: HiOutlineNewspaper, text: "Blog", href: "/blog" },
];
export const user = function (user: string | number) {
  return [
    { text: "Profile", href: `/user/${user}/profile` },
    { text: "Blog", href: `/user/${user}/blog` },
  ];
};
