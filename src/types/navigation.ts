import type { ViewMode } from "./view-mode";

export type VerticalMenuItem =
  | {
      id: string;
      type: "internal-mode";
      label: string;
      mode: ViewMode;
      iconKind: "lucide" | "react-icons" | "text";
      iconName: string;
    }
  | {
      id: string;
      type: "action";
      label: string;
      action: "open-about-modal";
      iconKind: "lucide" | "react-icons" | "text";
      iconName: string;
    }
  | {
      id: string;
      type: "external";
      label: string;
      href: string;
      iconKind: "lucide" | "react-icons" | "text";
      iconName: string;
    }
  | {
      id: string;
      type: "email";
      label: string;
      email: string;
      subject?: string;
      iconKind: "lucide" | "react-icons" | "text";
      iconName: string;
    };