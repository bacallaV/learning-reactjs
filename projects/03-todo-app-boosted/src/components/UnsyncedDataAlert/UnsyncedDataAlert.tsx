import { useLocalStorageListener } from './useLocalStorageListener';

import './UnsyncedDataAlert.css';

type UnsyncedDataAlertProps = {
  sync: () => void;
}
export default function UnsyncedDataAlert({ sync }: UnsyncedDataAlertProps) {
  const [ isUnsynced, setIsUnsynced ] = useLocalStorageListener();

  function handleSync(event: React.MouseEvent) {
    event.preventDefault();

    setIsUnsynced(false);
    sync();
  }

  if (!isUnsynced) {
    return null;
  }

  return (
    <div className='unsynced-data-alert'>
      <p>
        Hay datos sin <a href="#" onClick={handleSync}>sincronizar</a>
      </p>
    </div>
  )

}