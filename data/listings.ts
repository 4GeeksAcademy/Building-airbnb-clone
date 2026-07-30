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
    imageLabel: "https://picsum.photos/seed/ocean-loft/400/300",
    coordinates: { lat: 25.7617, lng: -80.1918 },
    photos: [
      "https://picsum.photos/seed/ocean-loft-1/800/600",
      "https://picsum.photos/seed/ocean-loft-2/800/600",
      "https://picsum.photos/seed/ocean-loft-3/800/600",
      "https://picsum.photos/seed/ocean-loft-4/800/600",
    ],
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
    imageLabel: "https://picsum.photos/seed/alpine-cabin/400/300",
    coordinates: { lat: 39.1911, lng: -106.8175 },
    photos: [
      "https://picsum.photos/seed/alpine-1/800/600",
      "https://picsum.photos/seed/alpine-2/800/600",
      "https://picsum.photos/seed/alpine-3/800/600",
      "https://picsum.photos/seed/alpine-4/800/600",
    ],
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
    imageLabel: "https://picsum.photos/seed/city-penthouse/400/300",
    coordinates: { lat: 40.7128, lng: -74.006 },
    photos: [
      "https://picsum.photos/seed/penthouse-1/800/600",
      "https://picsum.photos/seed/penthouse-2/800/600",
      "https://picsum.photos/seed/penthouse-3/800/600",
      "https://picsum.photos/seed/penthouse-4/800/600",
    ],
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
    imageLabel: "https://picsum.photos/seed/desert-villa/400/300",
    coordinates: { lat: 33.4942, lng: -111.9261 },
    photos: [
      "https://picsum.photos/seed/desert-1/800/600",
      "https://picsum.photos/seed/desert-2/800/600",
      "https://picsum.photos/seed/desert-3/800/600",
      "https://picsum.photos/seed/desert-4/800/600",
    ],
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
    imageLabel: "https://picsum.photos/seed/coastal-studio/400/300",
    coordinates: { lat: 32.7157, lng: -117.1611 },
    photos: [
      "https://picsum.photos/seed/coastal-1/800/600",
      "https://picsum.photos/seed/coastal-2/800/600",
      "https://picsum.photos/seed/coastal-3/800/600",
      "https://picsum.photos/seed/coastal-4/800/600",
    ],
    description:
      "Compact and stylish studio a short walk from the beach and local cafes.",
    amenities: ["Wi-Fi", "Self check-in", "Kitchenette", "TV", "Air conditioning"],
    host: { name: "Sofia", yearsHosting: 3, avatarLabel: "S" },
    maxGuests: 2,
  },
];

export const listings: Listing[] = rooms.map(
  ({ photos, description, amenities, host, maxGuests, ...listing }) => listing
);

export const findRoomById = (id: string): Room | undefined => rooms.find((room) => room.id === id);
