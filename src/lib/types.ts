import type { JSX } from "react";

export type Language = "en" | "es";

export type Certificate = {
  title: string;
  url?: string;
  original?: Language;
};

export type Skill = {
  icon: JSX.Element;
  name: string;
};
