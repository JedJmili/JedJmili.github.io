import {
  Globe,
  Server,
  Binary,
  Lock,
  Smartphone,
  Search,
  Network,
  Cpu,
  type LucideIcon,
} from "lucide-react";

const iconRegistry: Record<string, LucideIcon> = {
  Globe,
  Server,
  Binary,
  Lock,
  Smartphone,
  Search,
  Network,
  Cpu,
};

export function getIcon(name: string): LucideIcon {
  return iconRegistry[name] ?? Globe;
}
