import type { IconType } from "react-icons";
import { AiFillApi } from "react-icons/ai";
import { FaJava } from "react-icons/fa";
import {
  FiCompass,
  FiDatabase,
  FiFlag,
  FiKey,
  FiMessageCircle,
  FiRefreshCw,
  FiSearch,
  FiZap,
} from "react-icons/fi";
import { PiFileCSharp } from "react-icons/pi";
import {
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJunit5,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTypescript,
  SiVercel,
  SiVite,
  SiVitest,
} from "react-icons/si";

type Skill = { name: string; Icon: IconType };
type SoftSkill = Skill & { description: string; level: number };

const s = (name: string, Icon: IconType): Skill => ({ name, Icon });

export const skills = {
  hardCategories: [
    {
      label: "Languages",
      skills: [
        s("TypeScript", SiTypescript),
        s("JavaScript", SiJavascript),
        s("Java", FaJava),
        s("Python", SiPython),
        s("C#", PiFileCSharp),
        s("SQL", FiDatabase),
        s("HTML", SiHtml5),
        s("CSS", SiCss),
      ],
    },
    {
      label: "Frameworks & Libraries",
      skills: [
        s("React", SiReact),
        s("Spring Boot", SiSpringboot),
        s("Node.js", SiNodedotjs),
        s("Express", SiExpress),
        s("GraphQL", SiGraphql),
        s("Vite", SiVite),
      ],
    },
    {
      label: "Databases",
      skills: [s("PostgreSQL", SiPostgresql), s("MySQL", SiMysql)],
    },
    {
      label: "Cloud & DevOps",
      skills: [
        s("Git", SiGit),
        s("GitHub", SiGithub),
        s("GitHub Actions", SiGithubactions),
        s("Vercel", SiVercel),
      ],
    },
    {
      label: "APIs & Auth",
      skills: [s("REST APIs", AiFillApi), s("OAuth 2.0", FiKey)],
    },
    {
      label: "Testing",
      skills: [s("JUnit", SiJunit5), s("Vitest", SiVitest)],
    },
  ],

  soft: [
    {
      name: "Problem Solving",
      Icon: FiZap,
      level: 95,
      description:
        "I enjoy breaking down complex problems and finding simple, effective solutions.",
    },
    {
      name: "Communication",
      Icon: FiMessageCircle,
      level: 80,
      description:
        "I explain ideas clearly and collaborate well with different teams.",
    },
    {
      name: "Attention to Detail",
      Icon: FiSearch,
      level: 98,
      description:
        "I notice the small things that make a product feel polished and trustworthy.",
    },
    {
      name: "Ownership",
      Icon: FiFlag,
      level: 95,
      description:
        "I take responsibility end-to-end and follow through without being asked twice.",
    },
    {
      name: "Adaptability",
      Icon: FiRefreshCw,
      level: 88,
      description:
        "I learn quickly, embrace change, and thrive in new environments.",
    },
    {
      name: "Curiosity",
      Icon: FiCompass,
      level: 95,
      description:
        "I ask good questions, dig into how things work, and stay hungry to learn.",
    },
  ] satisfies SoftSkill[],

  currentlyExploring:
    "Docker · AWS · System design · Open source contributions",
};
