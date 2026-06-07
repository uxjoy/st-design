// config/navigation.ts
export interface NavItem {
  name: string;
  href: string; // Absolute path for parent, relative for children
  children?: Omit<NavItem, "children">[]; // Children don't need deeper nesting here
}

const sidebarData: NavItem[] = [
  {
    name: "emails",
    href: "/emails",
    children: [
      { name: "flight", href: "/flight" },
      { name: "hotel", href: "/hotel" },
      { name: "lifestyle", href: "/lifestyle" },
      { name: "visa", href: "/visa" },
      { name: "holiday", href: "/holiday" },
      { name: "car", href: "/car" },
      { name: "e-sim", href: "/e-sim" },
      { name: "gift card", href: "/gift-card" },
      { name: "lounge", href: "/lounge" },
      { name: "tour", href: "/tour" },
      { name: "bus", href: "/bus" },
      // { name: "ops", href: "/ops" },
      // { name: "st rooms", href: "/st-rooms" },
      // { name: "profile", href: "/profile" },
      { name: "generic", href: "/generic" },
    ],
  },
  {
    name: "others",
    href: "/others",
    children: [
      { name: "ops", href: "/ops" },
      { name: "ST Rooms", href: "/st-rooms" },
      { name: "profile", href: "/profile" },
      // { name: "generic", href: "/generic" },
    ],
  },
];

export default sidebarData;
