"use client";

import { useState } from "react";

interface BookingCardProps {
  pricePerNight: number;
  maxGuests: number;
}

export const BookingCard = ({ pricePerNight, maxGuests }: BookingCardProps) => {
  const [guests, setGuests] = useState(1);

  const decrease = () => setGuests((value) => Math.max(1, value - 1));
  const increase = () => setGuests((value) => Math.min(maxGuests, value + 1));

  return (
    <aside className="space-y-4 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
      <p className="text-lg font-semibold text-zinc-900">${pricePerNight} / night</p>
      <div className="flex items-center justify-between rounded-xl border border-zinc-200 p-2">
        <button type="button" onClick={decrease} className="rounded-lg border border-zinc-300 px-3 py-1 text-sm">
          -
        </button>
        <p className="text-sm text-zinc-700">Guests: {guests}</p>
        <button type="button" onClick={increase} className="rounded-lg border border-zinc-300 px-3 py-1 text-sm">
          +
        </button>
      </div>
      <button type="button" className="w-full rounded-xl bg-rose-500 px-4 py-3 text-sm font-semibold text-white">
        Reserve
      </button>
    </aside>
  );
};
