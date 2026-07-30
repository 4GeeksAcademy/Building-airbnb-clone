"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface BookingCardProps {
  pricePerNight: number;
  maxGuests: number;
}

export const BookingCard = ({ pricePerNight, maxGuests }: BookingCardProps) => {
  const [guests, setGuests] = useState(1);
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);

  const decrease = () => setGuests((value) => Math.max(1, value - 1));
  const increase = () => setGuests((value) => Math.min(maxGuests, value + 1));

  const nights =
    checkIn && checkOut
      ? Math.max(0, Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)))
      : 0;

  const total = nights * pricePerNight;

  return (
    <aside className="space-y-4 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
      <p className="text-lg font-semibold text-zinc-900">${pricePerNight} / night</p>

      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-700">Check-in</label>
        <DatePicker
          selected={checkIn}
          onChange={(date: Date | null) => setCheckIn(date)}
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          minDate={new Date()}
          placeholderText="Select date"
          className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-700">Check-out</label>
        <DatePicker
          selected={checkOut}
          onChange={(date: Date | null) => setCheckOut(date)}
          selectsEnd
          startDate={checkIn}
          endDate={checkOut}
          minDate={checkIn || new Date()}
          placeholderText="Select date"
          className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm"
        />
      </div>

      <div className="flex items-center justify-between rounded-xl border border-zinc-200 p-2">
        <button type="button" onClick={decrease} className="rounded-lg border border-zinc-300 px-3 py-1 text-sm">
          -
        </button>
        <p className="text-sm text-zinc-700">Guests: {guests}</p>
        <button type="button" onClick={increase} className="rounded-lg border border-zinc-300 px-3 py-1 text-sm">
          +
        </button>
      </div>

      {nights > 0 && (
        <div className="space-y-1 border-t border-zinc-200 pt-3 text-sm text-zinc-700">
          <div className="flex justify-between">
            <span>${pricePerNight} × {nights} {nights === 1 ? "night" : "nights"}</span>
            <span>${total}</span>
          </div>
          <div className="flex justify-between font-semibold text-zinc-900">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>
      )}

      <button type="button" className="w-full rounded-xl bg-rose-500 px-4 py-3 text-sm font-semibold text-white">
        Reserve
      </button>
    </aside>
  );
};
