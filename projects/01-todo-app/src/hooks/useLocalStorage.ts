import { useEffect, useState } from "react";

export default function useLocalStorage<T = unknown>(key: string, defaultValue: T) {
  const [item, setItem] = useState<T>(defaultValue);
  const [status, setStatus] = useState<'initial' | 'loading' | 'failed' | 'success'>('initial');

  useEffect(() => {
    setStatus('loading');
    setTimeout(() => {
      if (Math.random() < 0.2) {
        setStatus('failed');
      } else {
        setDefaultValues(getInitialValues());
        setStatus('success');
      }
    }, 3000);
  }, []);

  function getInitialValues(): T {
    const value = localStorage.getItem(key);

    if (!value)
      localStorage.setItem(key, JSON.stringify(defaultValue));

    if (value)
      return JSON.parse(value);

    return defaultValue;
  };

  function setDefaultValues(newValues: T): void {
    localStorage.setItem(key, JSON.stringify(newValues));
    setItem(newValues);
  };

  return {
    item,
    setItem: setDefaultValues,
    status,
  };
};