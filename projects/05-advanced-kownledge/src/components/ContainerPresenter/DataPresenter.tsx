import { DataItem } from "./DataItem";

type DataPresenterProps = {
  data: Array<DataItem>
}
export function DataPresenter({ data }: DataPresenterProps) {
  return (
    <div>
      {data.map((item) => (
        <>
          <img src={item.image} alt={item.name} />
          <em>{item.description}</em>
        </>
      ))}
    </div>
  );
};
