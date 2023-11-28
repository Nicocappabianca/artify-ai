export default function ImagePage({ params }: { params: { id: string } }) {
  return <section className="pt-8 sm:pt-12 ">{params.id}</section>;
}
