import { withLocalStorageListener } from './withLocalStorageListener';

import './UnsyncedDataAlert.css';

type UnsyncedDataAlertProps = {
  isUnsynced: boolean;
  sync: () => void;
}
function UnsyncedDataAlert({ isUnsynced, sync }: UnsyncedDataAlertProps) {
  if (!isUnsynced) {
    return null
  }

  return (
    <div className='unsynced-data-alert'>
      <p>
        Hay datos sin <a href="#" onClick={sync}>sincronizar</a>
      </p>
    </div>
  )
}

export const UnsyncedDataAlertWithLocalStorageListener = withLocalStorageListener(UnsyncedDataAlert);