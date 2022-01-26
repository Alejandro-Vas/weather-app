import { useEffect, useState } from "react";

// TODO fix or delete file useLocalStorage

const useLocalStorage = (key: any, defaultValue = ["58.5966", "49.6601"]) => {
  const [value, setValue] = useState(() => {
    return JSON.parse(localStorage.getItem(key) || "");
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
