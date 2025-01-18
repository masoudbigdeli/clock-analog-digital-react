import { useEffect, useState } from "react";

const useCheckAlarm = (alarmTimeString: Date): boolean => {
    const [isAlarmTime, setIsAlarmTime] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            if (alarmTimeString) {
                const now = new Date();
                if (
                    now.getHours() === alarmTimeString.getHours() &&
                    now.getMinutes() === alarmTimeString.getMinutes() &&
                    now.getSeconds() === 0
                ) {
                    setIsAlarmTime(true);
                    clearInterval(interval);
                }
            }
        }, 1000);

        return () => {
            clearInterval(interval)
            };
    }, [alarmTimeString]);

    return isAlarmTime;
};

export default useCheckAlarm;
