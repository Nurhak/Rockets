export interface Status {
  id: number;
  name: string;
  abbrev: string;
  description: string;
}

export interface LaunchServiceProvider {
  id: number;
  url: string;
  name: string;
  type: string;
}

export interface Configuration {
  id: number;
  url: string;
  name: string;
  family: string;
  full_name: string;
  variant: string;
}

export interface Rocket {
  id: number;
  configuration: Configuration;
}

export interface Orbit {
  id: number;
  name: string;
  abbrev: string;
}

export interface Mission {
  id: number;
  name: string;
  description: string;
  launch_designator?: any;
  type: string;
  orbit: Orbit;
}

export interface Location {
  id: number;
  url: string;
  name: string;
  country_code: string;
  map_image: string;
  total_launch_count: number;
  total_landing_count: number;
}

export interface Pad {
  id: number;
  url: string;
  agency_id: number;
  name: string;
  info_url?: any;
  wiki_url: string;
  map_url: string;
  latitude: string;
  longitude: string;
  location: Location;
  map_image: string;
  total_launch_count: number;
  orbital_launch_attempt_count: number;
}

export interface Launch {
  id: string;
  url: string;
  slug: string;
  name: string;
  status: Status;
  last_updated: Date;
  net: Date;
  window_end: Date;
  window_start: Date;
  probability?: any;
  holdreason: string;
  failreason: string;
  hashtag?: any;
  launch_service_provider: LaunchServiceProvider;
  rocket: Rocket;
  mission: Mission;
  pad: Pad;
  webcast_live: boolean;
  image: string;
  infographic?: any;
  program: any[];
  orbital_launch_attempt_count: number;
  location_launch_attempt_count: number;
  pad_launch_attempt_count: number;
  agency_launch_attempt_count: number;
  orbital_launch_attempt_count_year: number;
  location_launch_attempt_count_year: number;
  pad_launch_attempt_count_year: number;
  agency_launch_attempt_count_year: number;
}
