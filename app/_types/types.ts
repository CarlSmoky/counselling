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

export type ContentType = {
  component: ComponentType;
  subtitle?: string;
  isSubtitleBold?: boolean;
  paragraph?: string;
  title?: string;
  items?: string[];
  quote?: string;
  author?: string;
  isTitleBold?: boolean,
  isItemsBold? : boolean;
  isBulletPoint?: boolean;
  hasSideComponents?: boolean;
  htmlString?: string;
}

export type ComponentType = "header" | "paragraph" | "list" |"quote" | "htmlContent"


export type PageType = {
  home: ContentType[];
  psychotherapy: ContentType[];
  specialties: ContentType[];
  workshops: ContentType[];
  "clinical-supervision" : ContentType[];
  "about-bo-yih-thom": ContentType[];
};

export type PageKey = "home" | "psychotherapy" | "specialties" | "workshops" | "clinical-supervision" | "about-bo-yih-thom"
