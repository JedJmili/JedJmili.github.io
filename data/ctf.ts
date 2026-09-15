export interface CtfCategory {
  name: string;
  icon: string; // lucide icon key
}

export interface CtfRecord {
  competition: string;
  result: string;
  year: string;
}

// Configure your CTF profile here.
export const ctf = {
  intro:
    "I participate in CTF competitions with Securinets and on my own, focused on exploiting and defending real-world systems.",
  categories: [
    { name: "Web Security", icon: "Globe" },
    { name: "Active Directory", icon: "Server" },
    { name: "Reverse Engineering", icon: "Binary" },
    { name: "Cryptography", icon: "Lock" },
    { name: "Android Security", icon: "Smartphone" },
    { name: "OSINT", icon: "Search" },
    { name: "Network Security", icon: "Network" },
  ] as CtfCategory[],
  records: [
    { competition: "Cybersphere Advanced CTF", result: "1st Place", year: "2026" },
    { competition: "CyberCamp Android RE CTF", result: "1st Place", year: "2025" },
    { competition: "Securinets CTF Qualifiers", result: "Top 4 in Africa", year: "2025" },
    { competition: "Securinets International Finals", result: "Top 7 Worldwide", year: "2025" },
    { competition: "Cybears Algeria Qualifiers", result: "Top 8 Global", year: "2025" },
  ] as CtfRecord[],
} as const;
