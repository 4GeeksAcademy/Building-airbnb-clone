import type { Listing, Room } from "@/types/models";

export const categories = [
  { id: "all", icon: "*", label: "All" },
  { id: "beach", icon: "~", label: "Beach" },
  { id: "mansions", icon: "#", label: "Mansions" },
  { id: "trending", icon: "^", label: "Trending" },
  { id: "cabins", icon: "A", label: "Cabins" },
] as const;

export const rooms: Room[] = [
  {
    id: "ocean-view-loft",
    title: "Ocean View Loft",
    location: "Miami Beach, Florida",
    category: "beach",
    pricePerNight: 245,
    rating: 4.89,
    reviews: 128,
    imageLabel: "Sunset balcony",
    photos: ["Balcony at sunset", "Living room", "Bedroom", "Kitchen"],
    description:
      "Bright loft with ocean views, two blocks from the beach, and walkable nightlife.",
    amenities: ["Wi-Fi", "Pool", "Kitchen", "Air conditioning", "Washer"],
    host: { name: "Maria", yearsHosting: 6, avatarLabel: "M" },
    maxGuests: 4,
  },
  {
    id: "alpine-cabin-retreat",
    title: "Alpine Cabin Retreat",
    location: "Aspen, Colorado",
    category: "cabins",
    pricePerNight: 310,
    rating: 4.95,
    reviews: 84,
    imageLabel: "Wooden cabin",
    photos: ["Cabin front", "Fireplace", "Mountain view", "Deck"],
    description:
      "Quiet mountain cabin with fireplace and hiking trails starting at the doorstep.",
    amenities: ["Fireplace", "Hot tub", "Parking", "Kitchen", "Heating"],
    host: { name: "Noah", yearsHosting: 9, avatarLabel: "N" },
    maxGuests: 6,
  },
  {
    id: "city-penthouse-suite",
    title: "City Penthouse Suite",
    location: "New York, New York",
    category: "mansions",
    pricePerNight: 520,
    rating: 4.78,
    reviews: 201,
    imageLabel: "Skyline terrace",
    photos: ["Terrace", "Dining area", "Primary suite", "City night view"],
    description:
      "High-floor penthouse with skyline terrace, ideal for business or luxury city stays.",
    amenities: ["Doorman", "Gym", "Elevator", "Wi-Fi", "Workspace"],
    host: { name: "Evelyn", yearsHosting: 4, avatarLabel: "E" },
    maxGuests: 5,
  },
  {
    id: "desert-modern-villa",
    title: "Desert Modern Villa",
    location: "Scottsdale, Arizona",
    category: "trending",
    pricePerNight: 380,
    rating: 4.91,
    reviews: 67,
    imageLabel: "Courtyard pool",
    photos: ["Pool deck", "Open kitchen", "Master room", "Patio"],
    description:
      "Architectural villa with private pool and indoor-outdoor living in the desert.",
    amenities: ["Private pool", "BBQ", "Wi-Fi", "Parking", "Dryer"],
    host: { name: "Leo", yearsHosting: 5, avatarLabel: "L" },
    maxGuests: 8,
  },
  {
    id: "coastal-studio-flat",
    title: "Coastal Studio Flat",
    location: "San Diego, California",
    category: "beach",
    pricePerNight: 175,
    rating: 4.73,
    reviews: 96,
    imageLabel: "Studio near coast",
    photos: ["Studio interior", "Kitchenette", "Street view", "Beach path"],
    description:
      "Compact and stylish studio a short walk from the beach and local cafes.",
    amenities: ["Wi-Fi", "Self check-in", "Kitchenette", "TV", "Air conditioning"],
    host: { name: "Sofia", yearsHosting: 3, avatarLabel: "S" },
    maxGuests: 2,
  },
];

export const listings: Listing[] = rooms.map(({ photos, description, amenities, host, maxGuests, ...listing }) => listing);

export const findRoomById = (id: string): Room | undefined => rooms.find((room) => room.id === id);
