"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Listing } from "@/types/models";

// Fix default marker icon path issue with bundlers
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

interface FitBoundsOnListings {
  listings: Listing[];
}

const FitBoundsOnListings = ({ listings }: FitBoundsOnListings) => {
  const map = useMap();

  useEffect(() => {
    if (listings.length === 0) return;
    const bounds = L.latLngBounds(
      listings.map((l) => [l.coordinates.lat, l.coordinates.lng] as [number, number])
    );
    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [40, 40] });
    }
  }, [listings, map]);

  return null;
};

interface CatalogMapProps {
  listings: Listing[];
}

export const CatalogMap = ({ listings }: CatalogMapProps) => {
  const center: [number, number] =
    listings.length > 0
      ? [listings[0].coordinates.lat, listings[0].coordinates.lng]
      : [39.8283, -98.5795];

  return (
    <aside className="overflow-hidden rounded-2xl border border-zinc-200 md:sticky md:top-24 md:h-[600px]">
      <MapContainer
        center={center}
        zoom={4}
        className="h-64 w-full md:h-full"
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FitBoundsOnListings listings={listings} />
        {listings.map((listing) => (
          <Marker
            key={listing.id}
            position={[listing.coordinates.lat, listing.coordinates.lng]}
          >
            <Popup>
              <span className="text-sm font-medium">
                {listing.title} — ${listing.pricePerNight}/night
              </span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </aside>
  );
};