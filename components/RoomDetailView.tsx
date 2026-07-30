"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AmenitiesGrid } from "@/components/AmenitiesGrid";
import { AppFooter } from "@/components/AppFooter";
import { AppHeader } from "@/components/AppHeader";
import { BookingCard } from "@/components/BookingCard";
import { HostInfoRow } from "@/components/HostInfoRow";
import { LoadingState } from "@/components/LoadingState";
import { PhotoGallery } from "@/components/PhotoGallery";
import { RoomListingHeader } from "@/components/RoomListingHeader";
import { findRoomById } from "@/data/listings";
import type { Room } from "@/types/models";

interface RoomDetailViewProps {
  roomId: string;
}

export const RoomDetailView = ({ roomId }: RoomDetailViewProps) => {
  const [room, setRoom] = useState<Room | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setRoom(findRoomById(roomId) ?? null);
      setLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, [roomId]);

  return (
    <div className="min-h-screen bg-zinc-50">
      <AppHeader />
      <main className="mx-auto w-full max-w-6xl space-y-4 px-4 py-6">
        <Link href="/catalog" className="inline-flex rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-700">
          Back to catalog
        </Link>
        {loading && <LoadingState label="Loading room details..." />}
        {!loading && !room && <LoadingState label="Room not found." />}
        {!loading && room && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[2fr_1fr]">
            <div className="space-y-5">
              <PhotoGallery photos={room.photos} />
              <RoomListingHeader title={room.title} rating={room.rating} reviews={room.reviews} location={room.location} />
              <HostInfoRow
                hostName={room.host.name}
                yearsHosting={room.host.yearsHosting}
                avatarLabel={room.host.avatarLabel}
                avatarUrl={`https://picsum.photos/seed/${room.host.name.toLowerCase()}/80/80`}
              />
              <p className="rounded-2xl border border-zinc-200 bg-white p-4 text-sm text-zinc-700">{room.description}</p>
              <AmenitiesGrid amenities={room.amenities} />
            </div>
            <div className="md:sticky md:top-24 md:h-fit">
              <BookingCard pricePerNight={room.pricePerNight} maxGuests={room.maxGuests} />
            </div>
          </div>
        )}
      </main>
      <AppFooter />
    </div>
  );
};
