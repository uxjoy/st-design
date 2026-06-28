// config/navigation.ts
export interface NavItem {
  name: string;
  href: string; // Absolute path for parent, relative for children
  children?: Omit<NavItem, "children">[]; // Children don't need deeper nesting here
}

const sidebarData: NavItem[] = [
  {
    name: "B2C Emails",
    href: "/emails",
    children: [
      { name: "generic", href: "/generic" },
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
    ],
  },
  {
    name: "others",
    href: "/others",
    children: [
      { name: "ops", href: "/ops" },
      { name: "ST Rooms", href: "/st-rooms" },
      { name: "profile", href: "/profile" },
      { name: "in hourse proposal", href: "/in-house-proposal" },
      { name: "others", href: "/others" },
      // { name: "generic", href: "/generic" },
    ],
  },
  {
    name: "B2B Emails",
    href: "/b2b",
    children: [
      { name: "generic", href: "/b2bGeneric" },
      { name: "flight", href: "/b2bFlight" },
      { name: "lifestyle", href: "/b2bLifestyle" },
      { name: "visa", href: "/b2bVisa" },
    ],
  },
];

export default sidebarData;
