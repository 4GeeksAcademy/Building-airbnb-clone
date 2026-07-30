"use client";

import { useState } from "react";

interface PhotoGalleryProps {
  photos: string[];
}

export const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
  const [index, setIndex] = useState(0);
  const previous = () => setIndex((value) => (value - 1 + photos.length) % photos.length);
  const next = () => setIndex((value) => (value + 1) % photos.length);

  return (
    <section className="space-y-3">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-100">
        <img
          src={photos[index]}
          alt={`Photo ${index + 1}`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex items-center justify-between">
        <button type="button" onClick={previous} className="rounded-lg border border-zinc-300 px-3 py-2 text-sm">
          Previous
        </button>
        <p className="text-sm text-zinc-600">
          {index + 1} / {photos.length}
        </p>
        <button type="button" onClick={next} className="rounded-lg border border-zinc-300 px-3 py-2 text-sm">
          Next
        </button>
      </div>
    </section>
  );
};
