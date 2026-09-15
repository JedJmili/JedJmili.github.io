export interface Achievement {
  number: string;
  title: string;
  detail: string;
  year: string;
  kind: "placement" | "authored" | "workshop";
}

// All entries below are based on the provided information.
// Verify dates / exact wording before publishing.
export const achievements: Achievement[] = [
  {
    number: "01",
    title: "1st Place",
    detail: "Cybersphere Advanced CTF",
    year: "2026",
    kind: "placement",
  },
  {
    number: "02",
    title: "1st Place",
    detail: "CyberCamp Android Reverse Engineering CTF",
    year: "2025",
    kind: "placement",
  },
  {
    number: "03",
    title: "Challenge Author",
    detail: "Created CTF challenges, including MOJO-JOJO",
    year: "2025",
    kind: "authored",
  },
];
