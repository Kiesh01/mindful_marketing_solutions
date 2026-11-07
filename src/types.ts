export type Audience = "commercial" | "ngo";

export interface AudienceLens {
  id: Audience;
  tab: string;
  eyebrow: string;
  headline: string;
  subline: string;
  primaryCta: string;
  secondaryCta: string;
  focus: { label: string; value: string }[];
}

export interface ServiceItem {
  title: string;
  summary: string;
  deliverables: string[];
  outcome: string;
}

export interface SectorTrack {
  id: Audience;
  label: string;
  headline: string;
  blurb: string;
  image: string;
  imageAlt: string;
  services: ServiceItem[];
}

export interface Usp {
  key: string;
  title: string;
  body: string;
  detail: string;
}

export interface Framework {
  name: string;
  reference: string;
  status: string;
  body: string;
  points: string[];
}

export interface Sdg {
  goal: string;
  title: string;
  note: string;
}

export interface RoadmapStage {
  stage: string;
  title: string;
  duration: string;
  detail: string;
  outputs: string[];
}

export interface PolicyDoc {
  slug: string;
  title: string;
  updated: string;
  sections: {
    heading: string;
    body: string;
  }[];
}

export interface InquiryForm {
  audience: Audience;
  name: string;
  organisation: string;
  email: string;
  objective: string;
  timeline: string;
  regions: string[];
  budget: string;
  message: string;
}
