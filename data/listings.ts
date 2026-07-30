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
    imageLabel: "https://loremflickr.com/400/300/beach,ocean,miami",
    coordinates: { lat: 25.7617, lng: -80.1918 },
    photos: [
      "https://loremflickr.com/800/600/beach,ocean,miami",
      "https://loremflickr.com/800/600/beach,house",
      "https://loremflickr.com/800/600/loft,interior",
      "https://loremflickr.com/800/600/miami,nightlife",
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
    imageLabel: "https://loremflickr.com/400/300/cabin,mountain,aspen",
    coordinates: { lat: 39.1911, lng: -106.8175 },
    photos: [
      "https://loremflickr.com/800/600/cabin,mountain",
      "https://loremflickr.com/800/600/fireplace,cabin",
      "https://loremflickr.com/800/600/mountain,landscape",
      "https://loremflickr.com/800/600/deck,forest",
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
    imageLabel: "https://loremflickr.com/400/300/penthouse,newyork,skyline",
    coordinates: { lat: 40.7128, lng: -74.006 },
    photos: [
      "https://loremflickr.com/800/600/penthouse,terrace,newyork",
      "https://loremflickr.com/800/600/dining,room,luxury",
      "https://loremflickr.com/800/600/bedroom,suite",
      "https://loremflickr.com/800/600/newyork,city,night",
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
    imageLabel: "https://loremflickr.com/400/300/villa,desert,pool",
    coordinates: { lat: 33.4942, lng: -111.9261 },
    photos: [
      "https://loremflickr.com/800/600/villa,pool,desert",
      "https://loremflickr.com/800/600/kitchen,modern",
      "https://loremflickr.com/800/600/bedroom,interior",
      "https://loremflickr.com/800/600/patio,bbq",
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
    imageLabel: "https://loremflickr.com/400/300/studio,beach,sandiego",
    coordinates: { lat: 32.7157, lng: -117.1611 },
    photos: [
      "https://loremflickr.com/800/600/studio,apartment,interior",
      "https://loremflickr.com/800/600/kitchenette,small",
      "https://loremflickr.com/800/600/street,cafe,sandiego",
      "https://loremflickr.com/800/600/beach,path,coastal",
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
