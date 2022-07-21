import Card from "./Card";

export default function Results({ datas }) {
  const { results } = datas;

  return (
    <div className="bg-gray-700 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {results?.map((data) => (
        <Card data={data} key={data.id} />
      ))}
    </div>
  );
}
