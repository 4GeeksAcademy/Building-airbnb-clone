import Link from "next/link";

interface AppHeaderProps {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
}

export const AppHeader = ({ searchValue = "", onSearchChange }: AppHeaderProps) => {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-3">
        <Link href="/" className="text-lg font-bold text-rose-500">
          airbnb
        </Link>
        {onSearchChange ? (
          <input
            value={searchValue}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search destination"
            className="h-10 w-full rounded-full border border-zinc-300 px-4 text-sm outline-none focus:border-zinc-500"
          />
        ) : (
          <div className="h-10 grow rounded-full border border-zinc-300 px-4 text-sm text-zinc-500">
            <div className="flex h-full items-center">Stays for your next trip</div>
          </div>
        )}
        <div className="flex items-center gap-2 text-sm text-zinc-600">
          <span className="rounded-full border border-zinc-300 px-2 py-1">?</span>
          <span className="rounded-full border border-zinc-300 px-2 py-1">O</span>
        </div>
      </div>
    </header>
  );
};
