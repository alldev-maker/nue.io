import ResourceCard from "./ResourceCard";
export default function ResourceRows(props) {
  return (
    <div className="mb-12">
      <div className="mb-6">
        <h2 className="font-anMedium text-2xl md:text-5xl">
          {props.row.header}
        </h2>
      </div>
      <div className="flex -mx-2 flex-wrap justify-center">
        {props.row.items.map((item, i) => {
          return <ResourceCard key={i} item={item} />;
        })}
      </div>
    </div>
  );
}
