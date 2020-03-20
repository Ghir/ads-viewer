export interface CampaignInfo {
  id: number;
  name: string;
  goal: string;
  status: string;
  budget: number;
}

export interface Platforms {
  [name: string]: Platform;
}

export interface Platform {
  status: string;
  total_budget: number;
  remaining_budget: number;
  start_date: number;
  end_date: number;
  target_audience: Audience;
  creatives: Creatives;
  insights: Insights;
}

export interface Creatives {
  header?: string;
  header_1?: string;
  header_2?: string;
  description: string;
  url: string;
  image: string;
}

export interface Audience {
  languages: string[];
  genders: string[];
  age_range: number[];
  locations: string[];
  keywords?: string[];
  interests?: string[];
}

export interface Insights {
  impressions?: number;
  clicks?: number;
  website_visits?: number;
  nanos_score?: number;
  cost_per_click?: number;
  click_through_rate?: number;
  advanced_kpi_1?: number;
  advanced_kpi_2?: number;
}