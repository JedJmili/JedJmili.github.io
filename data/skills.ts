export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Offensive Security",
    description: "Offensive techniques across the security lifecycle",
    skills: [
      "Web Pentesting",
      "Network Pentesting",
      "Active Directory",
      "Enumeration",
      "Exploitation",
      "Privilege Escalation",
      "Password Attacks",
    ],
  },
  {
    title: "Reverse Engineering",
    description: "Static and dynamic analysis",
    skills: [
      "IDA",
      "GDB",
      "Frida",
      "Android Reverse Engineering",
    ],
  },
  {
    title: "Networking",
    description: "Foundational networking knowledge",
    skills: [
      "TCP/IP",
      "Routing",
      "Switching",
      "DNS",
      "HTTP",
      "Network Analysis",
      "Wireshark",
    ],
  },
  {
    title: "Programming",
    description: "Languages used across projects and tooling",
    skills: ["Python", "C", "C++", "Java", "JavaScript", "SQL"],
  },
  {
    title: "Security Tools",
    description: "Core tooling in my workflow",
    skills: [
      "Nmap",
      "Burp Suite",
      "Hashcat",
      "Impacket",
      "NetExec",
      "Kerbrute",
      "Metasploit",
      "Wireshark",
    ],
  },
];
