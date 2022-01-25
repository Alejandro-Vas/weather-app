import { useEffect, useState } from "react";

const useLocalStorage = (key: any, defaultValue: string = "") => {
  const [value, setValue] = useState(() => {
    return JSON.parse(localStorage.getItem(key) || defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
