import React from "react";
import { DataItem } from "./DataItem";
import { DataPresenter } from "./DataPresenter";

export const DataContainer = () => {
  const [data, setData] = React.useState<Array<DataItem>>([]);
  const [state, setState] = React.useState<'loading' | 'success' | 'error'>('loading');

  React.useEffect(() => {
    setState('loading');

    fetch('/data/data.json')
      .then(
        res => res.json()
      )
      .then(
        data => {
          setData(data as DataItem[]);
          setState('success');
        }
      )
      .catch(
        () => setState('error'),
      );
  }, []);

  if (state === 'loading') {
    return (
      <p>Cargando...</p>
    );
  } else if(state === 'error') {
    return (
      <p>Oops! Algo salió mal</p>
    );
  }

  return (
    <DataPresenter data={data} />
  );
};
