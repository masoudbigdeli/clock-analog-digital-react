import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface UseTime {
  seconds: number;
  minutes: number;
  hours: number;
}

const useTime = (): UseTime => {
  const intervalRef = useRef<number | null>(null);
  const [date, setDate] = useState(() => new Date());

  const startInterval = useCallback(() => {
    intervalRef.current = window.setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  const clearIntervalRef = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    startInterval();
    return clearIntervalRef;
  }, [startInterval, clearIntervalRef]);

  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  return { seconds, minutes, hours };
};

export default useTime;
