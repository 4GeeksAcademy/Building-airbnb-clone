import type { categories } from "@/data/listings";

type Category = (typeof categories)[number];

interface CategoryFilterProps {
  items: readonly Category[];
  activeCategory: string;
  onSelect: (categoryId: string) => void;
}

export const CategoryFilter = ({ items, activeCategory, onSelect }: CategoryFilterProps) => {
  return (
    <div className="overflow-x-auto border-b border-zinc-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl gap-2 px-4 py-3">
        {items.map((category) => {
          const active = activeCategory === category.id;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelect(category.id)}
              className={`rounded-full border px-3 py-2 text-sm ${
                active
                  ? "border-zinc-900 bg-zinc-900 text-white"
                  : "border-zinc-300 bg-white text-zinc-700"
              }`}
            >
              {category.icon} {category.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
