"use client";

import { useEffect, useState } from "react";
import { AppFooter } from "@/components/AppFooter";
import { AppHeader } from "@/components/AppHeader";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ListingGrid } from "@/components/ListingGrid";
import { LoadingState } from "@/components/LoadingState";
import { categories, listings } from "@/data/listings";
import type { Listing } from "@/types/models";

const filterListings = (source: Listing[], searchValue: string, activeCategory: string) => {
  const query = searchValue.trim().toLowerCase();
  return source.filter((listing) => {
    const categoryMatch = activeCategory === "all" || listing.category === activeCategory;
    const searchMatch =
      !query ||
      listing.title.toLowerCase().includes(query) ||
      listing.location.toLowerCase().includes(query);
    return categoryMatch && searchMatch;
  });
};

const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [allListings, setAllListings] = useState<Listing[]>([]);
  const [visibleListings, setVisibleListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setAllListings(listings);
      setVisibleListings(listings);
      setLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  const onSearchChange = (value: string) => {
    setSearchValue(value);
    setVisibleListings(filterListings(allListings, value, activeCategory));
  };

  const onCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setVisibleListings(filterListings(allListings, searchValue, categoryId));
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      <AppHeader searchValue={searchValue} onSearchChange={onSearchChange} />
      <CategoryFilter items={categories} activeCategory={activeCategory} onSelect={onCategoryChange} />
      <main className="mx-auto w-full max-w-6xl px-4 py-6">
        {loading ? (
          <LoadingState label="Loading stays..." />
        ) : (
          <ListingGrid listings={visibleListings} emptyLabel="No stays match your search." />
        )}
      </main>
      <AppFooter />
    </div>
  );
};

export default HomePage;
