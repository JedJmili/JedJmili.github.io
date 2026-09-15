export interface Social {
  label: string;
  href: string; // set to "" if you don't want the link rendered
  sub?: string;
}

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/JedJmili", sub: "github.com/JedJmili" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jed-jmili-21620531b/",
    sub: "linkedin.com/in/jed-jmili",
  },
  { label: "TryHackMe", href: "https://tryhackme.com/p/JedJmili", sub: "tryhackme.com/p/JedJmili" },
];

export interface SocialLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const contact = {
  email: "Jed.jemili@insat.ucar.tn",
  socials,
} as const;
