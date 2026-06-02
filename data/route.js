const routes = [
  { name: "Home", href: "/" },
  { name: "Icons", href: "/icons" },
  {
    name: "DS",
    href: "/design-system",
    children: [
      {
        name: "Colors",
        href: "/colors",
      },
      {
        name: "Typography",
        href: "/typography",
      },
      {
        name: "Tokenization",
        href: "/tokenization",
      },
      {
        name: "Border Radius",
        href: "/border-radius",
      },
    ],
  },
  {
    name: "Emails",
    href: "/emails",
    children: [
      {
        name: "flight",
        href: "/flight",
      },
      {
        name: "hotel",
        href: "/hotel",
      },
      {
        name: "life style",
        href: "/lifestyle",
      },
      {
        name: "visa",
        href: "/visa",
      },
      {
        name: "holiday",
        href: "/holiday",
      },
      {
        name: "profile",
        href: "/profile",
      },
      {
        name: "generic",
        href: "/generic",
      },
    ],
  },
];

export default routes;
