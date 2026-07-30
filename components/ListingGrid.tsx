import Link from "next/link";
import type { Listing } from "@/types/models";
import { ListingCard } from "@/components/ListingCard";

interface ListingGridProps {
  listings: Listing[];
  emptyLabel: string;
}

export const ListingGrid = ({ listings, emptyLabel }: ListingGridProps) => {
  if (!listings.length) {
    return <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-500">{emptyLabel}</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {listings.map((listing) => (
        <Link key={listing.id} href={`/rooms/${listing.id}`}>
          <ListingCard listing={listing} />
        </Link>
      ))}
    </div>
  );
};
