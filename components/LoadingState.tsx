interface LoadingStateProps {
  label?: string;
}

export const LoadingState = ({ label = "Loading listings..." }: LoadingStateProps) => {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-600 shadow-sm">
      {label}
    </div>
  );
};
