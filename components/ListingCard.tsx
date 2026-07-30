import type { Listing } from "@/types/models";

interface ListingCardProps {
  listing: Listing;
}

export const ListingCard = ({ listing }: ListingCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
        <img
          src={listing.imageLabel}
          alt={listing.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="space-y-1 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-sm font-semibold text-zinc-900">{listing.title}</h3>
          <p className="text-xs font-medium text-zinc-700">{listing.rating.toFixed(2)} *</p>
        </div>
        <p className="text-sm text-zinc-500">{listing.location}</p>
        <p className="pt-1 text-sm text-zinc-900">
          <span className="font-semibold">${listing.pricePerNight}</span> night
        </p>
      </div>
    </div>
  );
};
