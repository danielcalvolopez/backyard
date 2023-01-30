export const menuElements = [
  {
    type: "menu item",
    text: "home",
    transition: { duration: 0.5 },
    initial: { opacity: 0, y: 100 },
    exit: { opacity: 0, y: 130, transition: { duration: 0.8 } },
  },
  {
    type: "menu item",
    text: "surfboards",
    transition: { duration: 0.6 },
    initial: { opacity: 0, y: 110 },
    exit: { opacity: 0, y: 120, transition: { duration: 0.7 } },
  },
  {
    type: "menu item",
    text: "zenia surf club",
    transition: { duration: 0.7 },
    initial: { opacity: 0, y: 120 },
    exit: { opacity: 0, y: 110, transition: { duration: 0.6 } },
  },
  {
    type: "menu item",
    text: "contact",
    transition: { duration: 0.8 },
    initial: { opacity: 0, y: 130 },
    exit: { opacity: 0, y: 100, transition: { duration: 0.5 } },
  },
];
