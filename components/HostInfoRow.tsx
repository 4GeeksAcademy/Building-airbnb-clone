interface HostInfoRowProps {
  hostName: string;
  yearsHosting: number;
  avatarLabel: string;
  avatarUrl?: string;
}

export const HostInfoRow = ({ hostName, yearsHosting, avatarLabel, avatarUrl }: HostInfoRowProps) => {
  return (
    <section className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-4">
      <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-zinc-200 text-sm font-semibold text-zinc-700">
        {avatarUrl ? (
          <img src={avatarUrl} alt={hostName} className="h-full w-full object-cover" />
        ) : (
          avatarLabel
        )}
      </div>
      <div>
        <p className="text-sm font-semibold text-zinc-900">Hosted by {hostName}</p>
        <p className="text-sm text-zinc-600">{yearsHosting} years hosting</p>
      </div>
    </section>
  );
};
