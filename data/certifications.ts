export interface Certification {
  name: string;
  organization: string;
  date: string;
  credentialUrl?: string; // add the verification URL when available
  credentialId?: string; // add the credential ID when available
}

export const certifications: Certification[] = [
  {
    name: "Google Cybersecurity Professional Certificate",
    organization: "Google",
    date: "2024",
    credentialUrl: "",
    credentialId: "",
  },
  {
    name: "CCNA 1",
    organization: "Cisco Networking Academy",
    date: "2024",
    credentialUrl: "",
    credentialId: "",
  },
  {
    name: "CCNA 2",
    organization: "Cisco Networking Academy",
    date: "2024",
    credentialUrl: "",
    credentialId: "",
  },
  {
    name: "CPPS — Hack&Fix",
    organization: "Hack&Fix",
    date: "2024",
    credentialUrl: "",
    credentialId: "",
  },
];
