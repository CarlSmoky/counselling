export type LinkInfo = {
  name: string;
  link: string;
  submenu: boolean;
  sublinks?: Sublink[];
}

export type Sublink = {
  name: string;
  link: string;
}

export type PageInfo = {
  component: ComponentType;
  subtitle?: string;
  isSubtitleBold?: boolean;
  paragraph?: string;
  title?: string;
  items?: string[];
  quote?: string;
  author?: string;
  isTitleBold: boolean,
  isItemsBold? : boolean;
  isBulletPoint?: boolean;
}

export type ComponentType = "paragraph" | "list" |"quote"

