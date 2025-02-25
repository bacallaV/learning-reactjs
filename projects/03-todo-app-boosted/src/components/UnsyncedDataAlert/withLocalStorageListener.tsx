import React, { JSX, useEffect } from "react";

export function withLocalStorageListener<P>(WrappedComponent: React.ComponentType<P>) {
  return function WithLocalStorageListener(props: P & { sync: () => void }): JSX.Element {
    const [isUnsynced, setIsUnsynced] = React.useState(false);

    useEffect(() => {
      const handleStorageChange = (event: StorageEvent) => {
        if (event.key === "react-todos") {
          setIsUnsynced(true);
        }
      };

      window.addEventListener("storage", handleStorageChange);

      return () => {
        window.removeEventListener("storage", handleStorageChange);
      };
    }, []);

    function sync() {
      setIsUnsynced(false);
      props.sync();
    }

    return <WrappedComponent {...props} isUnsynced={isUnsynced} sync={sync} />;
  };
}