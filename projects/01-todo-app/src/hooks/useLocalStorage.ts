import { useState } from "react";

export default function useLocalStorage<T = unknown>(key: string, defaultValue: T): [T, (newValues: T) => void] {
  function getInitialValues(): T {
    const value = localStorage.getItem(key);

    if (!value)
      localStorage.setItem(key, JSON.stringify(defaultValue));

    if (value)
      return JSON.parse(value);

    return defaultValue;
  };

  const [item, setItem] = useState<T>(getInitialValues());

  function setDefaultValues(newValues: T): void {
    localStorage.setItem(key, JSON.stringify(newValues));
    setItem(newValues);
  };

  return [item, setDefaultValues];
};