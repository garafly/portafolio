export type AboutModalHighlight = {
  id: string;
  text: string;
};

export type AboutModalAction =
  | {
      id: string;
      label: string;
      type: "download";
      href: string;
      variant: "primary" | "secondary";
    }
  | {
      id: string;
      label: string;
      type: "link";
      href: string;
      variant: "primary" | "secondary";
      external?: boolean;
    }
  | {
      id: string;
      label: string;
      type: "email";
      email: string;
      subject?: string;
      variant: "primary" | "secondary";
    };

export type AboutModalContent = {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  metaLabel: string;
  location: string;
  name: string;
  role: string;
  paragraphs: string[];
  highlights: AboutModalHighlight[];
  actions: AboutModalAction[];
};