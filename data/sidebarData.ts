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
      { name: "profile", href: "/profile" },
      { name: "generic", href: "/generic" },
    ],
  },
];

export default sidebarData;
