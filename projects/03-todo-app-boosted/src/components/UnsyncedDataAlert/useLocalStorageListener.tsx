import React, { useEffect } from "react";

export function useLocalStorageListener() {
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

  return [
    isUnsynced,
    setIsUnsynced,
  ] as const;
}