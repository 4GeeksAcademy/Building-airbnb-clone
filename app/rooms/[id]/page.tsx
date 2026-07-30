import { RoomDetailView } from "@/components/RoomDetailView";

interface PageProps {
  params: Promise<{ id: string }>;
}

const RoomPage = async ({ params }: PageProps) => {
  const { id } = await params;
  return <RoomDetailView roomId={id} />;
};

export default RoomPage;
