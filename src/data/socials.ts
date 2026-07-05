import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export const social = {
  email: {
    Icon: FiMail,
    label: "Email",
    value: "rashellguerrero123@gmail.com",
    href: "mailto:rashellguerrero123@gmail.com",
  },
  linkedin: {
    Icon: FiLinkedin,
    label: "LinkedIn",
    value: "/in/rashell-guerrero",
    href: "https://www.linkedin.com/in/rashell-guerrero/",
  },
  github: {
    Icon: FiGithub,
    label: "GitHub",
    value: "/rxshellg",
    href: "https://github.com/rxshellg",
  },
} as const;

export const socials = Object.values(social);
