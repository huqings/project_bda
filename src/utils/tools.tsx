import { useEffect, useState } from 'react';

// 防抖
export const useDebounce = (value: any, delay?: number) => {
  const [debouncedPerson, setDebouncedPerson] = useState(value);
  useEffect(() => {
    const timeOut = setTimeout(() => setDebouncedPerson(value), delay);
    return () => clearTimeout(timeOut);
  }, [value]);
  return debouncedPerson;
};