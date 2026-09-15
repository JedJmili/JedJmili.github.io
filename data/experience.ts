export interface ExperienceEntry {
  title: string;
  organization: string;
  range: string;
  description: string;
  tags?: string[];
}

export const experience: ExperienceEntry[] = [
  {
    title: "Network Engineering Student",
    organization: "INSAT",
    range: "Current",
    description:
      "Studying Computer Networks and Telecommunications Engineering, specialising in networks and real-time systems.",
    tags: ["Networking", "TCP/IP", "Security"],
  },
  {
    title: "Technical Team Member",
    organization: "Securinets — Cybersecurity Club",
    range: "Current",
    description:
      "Technical team member at Securinets, contributing to CTFs, security challenges and the club's technical community.",
    tags: ["CTF", "Community", "Security"],
  },
  {
    title: "CTF Competitor",
    organization: "Competitive Cybersecurity",
    range: "Active",
    description:
      "Participating in capture-the-flag competitions across web security, reverse engineering, Active Directory and crypto.",
    tags: ["CTF", "Offensive Security"],
  },
  {
    title: "CTF Author",
    organization: "Competitive Cybersecurity",
    range: "Active",
    description:
      "Authoring CTF challenges, including the MOJO-JOJO challenges, and contributing to the Securinets competition ecosystem.",
    tags: ["Challenge Authoring", "Offensive Security"],
  },
  {
    title: "Organisation Team",
    organization: "International CyberSec Olympiad",
    range: "2026",
    description:
      "Supported the organisation of the International CyberSec Olympiad, helping run the competition ecosystem.",
    tags: ["Competition", "Organisation"],
  },
  {
    title: "Security & Networking Projects",
    organization: "Independent Research",
    range: "Ongoing",
    description:
      "Building hands-on projects around onion routing, Active Directory auditing, and adversarial security research.",
    tags: ["Research", "Networking", "AD"],
  },
];
