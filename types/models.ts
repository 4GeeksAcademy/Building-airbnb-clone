export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Listing {
  id: string;
  title: string;
  location: string;
  category: string;
  pricePerNight: number;
  rating: number;
  reviews: number;
  imageLabel: string;
  coordinates: Coordinates;
}

export interface Host {
  name: string;
  yearsHosting: number;
  avatarLabel: string;
}

export interface Room extends Listing {
  photos: string[];
  description: string;
  amenities: string[];
  host: Host;
  maxGuests: number;
}

export type SortOrder = "asc" | "desc";
