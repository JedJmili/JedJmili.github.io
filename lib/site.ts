export const siteConfig = {
  name: "Jed Jmili",
  title: "Jed Jmili | Cybersecurity & Networking",
  description:
    "Cybersecurity & Networking student focused on penetration testing, offensive security, Active Directory security, CTFs, reverse engineering and security research.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  availability:
    process.env.NEXT_PUBLIC_AVAILABILITY_STATUS || "open",
  locale: "en_US",
} as const;

export interface AvailabilityStatus {
  label: string;
  online: boolean;
}

export function getAvailabilityStatus(): AvailabilityStatus {
  const status = siteConfig.availability;
  switch (status) {
    case "limited":
      return { label: "Available for select opportunities", online: true };
    case "unavailable":
      return { label: "Currently unavailable", online: false };
    case "open":
    default:
      return { label: "Open to cybersecurity opportunities", online: true };
  }
}
