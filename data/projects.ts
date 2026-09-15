export interface ProjectTech {
  name: string;
  category?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  year: string;
  status: "active" | "featured" | "archive" | "placeholder";
  highlights: string[];
  sections: {
    problem?: string;
    solution?: string;
    architecture?: string;
    results?: string;
    detection?: string;
    risk?: string;
    remediation?: string;
    tools?: string;
    securityConcepts?: string;
  };
  technologies: ProjectTech[];
  link?: string; // leave empty if no public link yet
}

export const projects: Project[] = [
  {
    slug: "veilr",
    title: "Veilr",
    tagline: "Onion-style routing mobile application",
    description:
      "An Android application inspired by Tor-style onion routing, implementing layered encryption, ephemeral key exchange and relay-based anonymity with ML-based anomaly detection.",
    year: "2025",
    status: "featured",
    highlights: [
      "3-node onion routing",
      "X25519 ephemeral key exchange",
      "AES-256-GCM layered encryption",
      "Relay registry",
      "ML-based anomaly detection",
    ],
    sections: {
      problem:
        "Build a mobile-first privacy framework demonstrating real onion-routing concepts — layered encryption, ephemeral key exchange and relay chains — without depending on a third-party anonymity network.",
      solution:
        "A self-contained 3-node relay network on Android. Each hop unwraps one layer of AES-256-GCM encryption keyed via X25519 ephemeral key exchange, so no single relay holds the full route.",
      architecture:
        "Android client app + relay registry + admin dashboard. A dynamic relay registry tracks available nodes and routes. The admin dashboard visualises relays and network health in real time.",
      securityConcepts:
        "Onion routing, layered symmetric encryption, ephemeral Diffie-Hellman (X25519), trust boundaries between relays, Sybil detection.",
      results:
        "Demonstrated end-to-end multi-layer encryption and anonymous relay traversal, with anomaly detection flagging unusual relay behaviour.",
    },
    technologies: [
      { name: "Android", category: "Platform" },
      { name: "Kotlin", category: "Language" },
      { name: "Python", category: "Language" },
      { name: "X25519", category: "Crypto" },
      { name: "AES-256-GCM", category: "Crypto" },
      { name: "Isolation Forest", category: "ML" },
      { name: "Local Outlier Factor", category: "ML" },
      { name: "Relay registry", category: "Networking" },
    ],
    link: "",
  },
  {
    slug: "ad-security-audit",
    title: "Active Directory Security Audit & Hardening Platform",
    tagline: "Automated AD auditing and hardening",
    description:
      "A security auditing and hardening platform for Microsoft Active Directory. It runs automated checks, scores risk, and recommends remediations — with Kali Linux integration over SSH.",
    year: "2025",
    status: "featured",
    highlights: [
      "Automated security checks",
      "Risk scoring",
      "Remediation recommendations",
      "Kali Linux + SSH execution",
      "AI-assisted remediation suggestions",
    ],
    sections: {
      detection:
        "Scans Windows Defender status, null sessions / SMB enumeration, Kerberoastable accounts, SPN enumeration and LDAP authentication configuration.",
      risk:
        "Aggregates findings into a per-host risk score so admins can prioritise the most impactful hardening actions first.",
      remediation:
        "Generates concrete, ordered remediation recommendations, with optional AI-assisted guidance, and reports back to an audit dashboard.",
      tools:
        "Node.js backend orchestrating Impacket and NetExec over SSH against Kali Linux, querying Active Directory and LDAP, with PowerShell-driven checks.",
    },
    technologies: [
      { name: "Node.js", category: "Backend" },
      { name: "JavaScript", category: "Language" },
      { name: "HTML", category: "Frontend" },
      { name: "CSS", category: "Frontend" },
      { name: "Kali Linux", category: "Platform" },
      { name: "Impacket", category: "Tool" },
      { name: "NetExec", category: "Tool" },
      { name: "LDAP", category: "Protocol" },
      { name: "Active Directory", category: "Domain" },
      { name: "PowerShell", category: "Language" },
      { name: "SSH", category: "Networking" },
    ],
    link: "",
  },
  {
    slug: "ctf-security-research",
    title: "CTF & Security Research",
    tagline: "Competitive security and research writeups",
    description:
      "My competitive security work: CTF challenges tackled across web exploitation, Active Directory, reverse engineering, cryptography and more — with inline writeups and research notes.",
    year: "2025",
    status: "featured",
    highlights: [
      "Web exploitation",
      "Active Directory",
      "Reverse engineering",
      "Cryptography",
      "Android security",
    ],
    sections: {
      problem:
        "Sharpen offensive and defensive skills, learn quickly, and document findings for the community.",
      solution:
        "A library of CTF writeups and security research spread across the Writeups section, tracking challenge, category, tools used and lessons learned.",
    },
    technologies: [
      { name: "Burp Suite", category: "Tool" },
      { name: "IDA", category: "Tool" },
      { name: "GDB", category: "Tool" },
      { name: "Rizin", category: "Tool" },
      { name: "Frida", category: "Tool" },
      { name: "Impacket", category: "Tool" },
      { name: "Metasploit", category: "Tool" },
    ],
    link: "",
  },
];
