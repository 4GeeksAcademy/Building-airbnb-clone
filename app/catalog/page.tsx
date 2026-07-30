"use client";

import { useMemo, useState } from "react";
import { AppFooter } from "@/components/AppFooter";
import { AppHeader } from "@/components/AppHeader";
import { ListingGrid } from "@/components/ListingGrid";
import { MapPlaceholder } from "@/components/MapPlaceholder";
import { ResultsHeader } from "@/components/ResultsHeader";
import { listings } from "@/data/listings";
import type { SortOrder } from "@/types/models";

const CatalogPage = () => {
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const sortedListings = useMemo(() => {
    return [...listings].sort((a, b) => {
      return sortOrder === "asc" ? a.pricePerNight - b.pricePerNight : b.pricePerNight - a.pricePerNight;
    });
  }, [sortOrder]);

  return (
    <div className="min-h-screen bg-zinc-50">
      <AppHeader />
      <main className="mx-auto w-full max-w-6xl space-y-4 px-4 py-6">
        <ResultsHeader count={sortedListings.length} sortOrder={sortOrder} onSortChange={setSortOrder} />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[2fr_1fr]">
          <ListingGrid listings={sortedListings} emptyLabel="No stays available for this filter." />
          <MapPlaceholder />
        </div>
      </main>
      <AppFooter />
    </div>
  );
};

export default CatalogPage;
