interface AmenitiesGridProps {
  amenities: string[];
}

export const AmenitiesGrid = ({ amenities }: AmenitiesGridProps) => {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold text-zinc-900">Amenities</h2>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {amenities.map((item) => (
          <div key={item} className="rounded-xl border border-zinc-200 bg-white p-3 text-sm text-zinc-700">
            + {item}
          </div>
        ))}
      </div>
    </section>
  );
};
