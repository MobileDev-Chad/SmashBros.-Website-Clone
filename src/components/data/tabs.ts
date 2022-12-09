export type TabType = {
  text: string;
  path: string;
  icon: string;
  theme: string;
};

export const tabs: TabType[] = [
  {
    text: "Home",
    path: "/",
    icon: "bi bi-house-door",
    theme: "white",
  },
  {
    text: "About",
    path: "/about",
    icon: "bi bi-globe-asia-australia",
    theme: "red",
  },
  {
    text: "Fighters",
    path: "/fighters",
    icon: "bi bi-person-fill",
    theme: "green",
  },
  {
    text: "How to Smash",
    path: "/howtosmash",
    icon: "bi bi-controller",
    theme: "blue",
  },
  {
    text: "Stages",
    path: "/stages",
    icon: "fa-solid fa-trophy",
    theme: "orange",
  },
  {
    text: "Items",
    path: "/items",
    icon: "fa-solid fa-trophy",
    theme: "Yellow",
  },
  {
    text: "Music",
    path: "/music",
    icon: "bi bi-music-note",
    theme: "cyan",
  },
  {
    text: "Videos",
    path: "/videos",
    icon: "bi bi-youtube",
    theme: "gray",
  },
  {
    text: "Blog",
    path: "/blog",
    icon: "bi bi-pencil",
    theme: "red",
  },
];
