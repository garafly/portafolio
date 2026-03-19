import type { ThemeMode, ViewMode } from "./index";

export type NavItem = {
  label: string;
  value: ViewMode;
};

export type LeftCardSize = "sm" | "md" | "lg" | "wide";

export type CardIcon =
| {
      type: "emoji";
      value: string;
    }
| {
      type: "image";
      src: string;
      alt: string;
      width?: number;
      height?: number;
    };
export type ToolItem = {
  id: string;
  label: string;
  icon: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
};


export type ToolPage = {
  id: string;
  tools: ToolItem[];
};

export type LeftCard =
  | {
      id: string;
      variant?: "text";
      text: string;
      icon?: CardIcon;
      size?: LeftCardSize;
    }
  | {
      id: string;
      variant: "toolGrid";
      title?: string;
      tools: ToolItem[];
      showLabels?: boolean;
      size?: LeftCardSize;
    }
  | {
      id: string;
      variant: "toolPager";
      title?: string;
      pages: ToolPage[];
      showLabels?: boolean;
      size?: LeftCardSize;
    }
| {
    id: string;
    variant: "animatedIcon";
    tool: ToolItem;
    size?: LeftCardSize;
  }

export type PillItem = {
  id: string;
  text: string;
  icon?: CardIcon;
};

export type WorkItem = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type RightPanelVariant = "profile" | "showcaseList";

export type ModeContent = {
  mode: ViewMode;
  navLabel: string;
  title: string;
  introLines: RichTextLine[];
  leftCards: LeftCard[];
  toolsText?: string;
  pills?: PillItem[];
  showcaseLabel: string;
  rightPanelVariant: RightPanelVariant;
  rightPanelTitle?: string;
  rightPanelTopText?: string;
  rightPanelBottomText?: string;
  workItems?: WorkItem[];
};

export type PortfolioContentConfig = {
  navItems: NavItem[];
  modes: Record<ViewMode, ModeContent>;
};

export type ThemeTokens = {
  mode: ThemeMode;
  pageBackgroundClass: string;
  navTextClass: string;
  navActiveClass: string;
  titleClass: string;
  bodyClass: string;
  bodyStrongClass: string;
  cardBgClass: string;
  cardBorderClass: string;
  cardTextClass: string;
  softTextClass: string;
  accentTextClass: string;
  accentSecondaryClass: string;
  showcaseOutlineClass: string;
  showcaseControlBgClass: string;
  panelBgClass: string;
  dividerClass: string;
  logoClass: string;
  footerTextClass: string;
  toggleShellClass: string;
  dotActiveClass: string;
  dotInactiveClass: string;
  emphasis:string
};

export type TextSize = "sm" | "md" | "lg" | "xl";

export type RichTextSegment = {
  text: string;
  italic?: boolean;
  bold?: boolean;
  underline?: boolean;
  accent?: boolean;
  muted?: boolean;
  size?: TextSize;
  className?: string;
};

export type RichTextLine = RichTextSegment[];


