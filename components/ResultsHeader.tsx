import type { SortOrder } from "@/types/models";

interface ResultsHeaderProps {
  count: number;
  sortOrder: SortOrder;
  onSortChange: (value: SortOrder) => void;
}

export const ResultsHeader = ({ count, sortOrder, onSortChange }: ResultsHeaderProps) => {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-zinc-700">{count} stays found</p>
      <label className="flex items-center gap-2 text-sm text-zinc-700">
        Sort by
        <select
          value={sortOrder}
          onChange={(event) => onSortChange(event.target.value as SortOrder)}
          className="rounded-lg border border-zinc-300 px-2 py-1"
        >
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </label>
    </div>
  );
};
