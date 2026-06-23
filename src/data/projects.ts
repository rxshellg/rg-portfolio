export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  techStack: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "allmail",
    title: "AllMail",
    description:
      "Email workspace that brings multiple inboxes into one clean, centralized dashboard.",
    images: ["/projects/AllMail-1.png"],
    techStack: ["TypeScript", "Java", "Spring Boot", "OAuth"],
    liveDemoUrl: "", // TO-DO: post live demo link
    githubUrl: "https://github.com/rxshellg/all-mail",
    featured: true,
  },
  {
    id: "treat-rush",
    title: "Treat Rush",
    description:
      "Small arcade-style game where the player controls a cat, catches falling treats, and avoids spray bottles.",
    images: [
      "/projects/TreatRush-1.png",
      "/projects/TreatRush-2.png",
      "/projects/TreatRush-3.png",
      "/projects/TreatRush-4.png",
      "/projects/TreatRush-5.png",
    ],
    techStack: ["Java", "libGDX", "Gradle"],
    liveDemoUrl: "", // TO-DO: post live demo link
    githubUrl: "https://github.com/rxshellg/treat-rush",
    featured: true,
  },
  {
    id: "bill-buddy",
    title: "Bill Buddy",
    description:
      "Receipt-splitting app that lets users upload a receipt, assign the items, and calculate each person’s share.",
    images: ["/projects/BillBuddy-1.png"],
    techStack: ["TypeScript", "Node.js", "Cloud Vision API"],
    liveDemoUrl: "", // TO-DO: post live demo link
    githubUrl: "https://github.com/rxshellg/bill-buddy",
    featured: true,
  },
  {
    id: "customer-manager",
    title: "Customer Manager",
    description: "Simple full-stack customer management application.",
    images: ["/projects/CustomerManager-1.jpeg"],
    techStack: ["Spring Boot", "Thymeleaf", "Bootstrap"],
    liveDemoUrl: "", // TO-DO: post live demo link
    githubUrl: "https://github.com/rxshellg/customer-manager",
    featured: true,
  },
];
