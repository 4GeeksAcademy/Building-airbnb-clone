interface RoomListingHeaderProps {
  title: string;
  rating: number;
  reviews: number;
  location: string;
}

export const RoomListingHeader = ({ title, rating, reviews, location }: RoomListingHeaderProps) => {
  return (
    <section className="space-y-2">
      <h1 className="text-2xl font-semibold text-zinc-900">{title}</h1>
      <p className="text-sm text-zinc-600">
        {rating.toFixed(2)} stars ({reviews} reviews) · {location}
      </p>
    </section>
  );
};
