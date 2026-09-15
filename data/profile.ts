export const profile = {
  name: "Jed Jmili",
  fullName: "Jed Jmili",
  handle: "Zanpakto",
  ctfNickname: "Zanpakto",
  workstation: "Zanpakto",
  location: "Tunisia",
  role: "Cybersecurity / Networking Student",
  heroTagline: "Breaking Systems. Building Security.",
  image: "/images/profile.jpg",
  heroSubtitle:
    "Computer Networks & Telecommunications engineering student focused on offensive security, penetration testing, and security research.",
  about: {
    paragraphs: [
      "I'm a Computer Engineering student at INSAT and a cybersecurity enthusiast specializing in **Offensive Security & Penetration Testing**.",
      "My interests and expertise include **Reverse Engineering, Active Directory, Mobile Security, and Cryptography**. As a member of **Securinets**, I regularly participate in CTF competitions, exploring different areas of offensive security and deepening my practical skills. I enjoy breaking down systems, understanding how they work, and finding ways to exploit and secure them. Currently seeking opportunities in cybersecurity roles and internships where I can further develop my offensive security skills.",
    ],
  },
  education: {
    institution: "INSAT",
    degree:
      "Computer Networks and Telecommunications Engineering",
    specialization: "Real-Time Systems / Networking",
    location: "Tunisia",
  },
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "French", level: "Fluent" },
    { name: "Spanish", level: "Basic" },
  ],
  memberships: ["Securinets"],
  cta: {
    primary: { label: "View My Work", href: "#projects" },
    secondary: { label: "Contact Me", href: "#contact" },
  },
} as const;
