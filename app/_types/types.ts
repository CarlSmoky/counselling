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
  component: string;
  paragraph?: string;
  title?: string;
  items?: string[];
  quote?: string;
  author?: string;
}