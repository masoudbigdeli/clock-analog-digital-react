import { segmentMapper } from "./segmentMapper";

export const timeToSegments = (hours: number, minutes: number, seconds: number): Record<string, boolean[][]> => {
    const ensureTwoDigits = (num: number): [number, number] => {
        return num < 10 ? [0, num] : [Math.floor(num / 10), num % 10];
    };

    const [hourTens, hourOnes] = ensureTwoDigits(hours);
    const [minuteTens, minuteOnes] = ensureTwoDigits(minutes);
    const [secondTens, secondOnes] = ensureTwoDigits(seconds);

    return {
        hours: [segmentMapper(hourTens), segmentMapper(hourOnes)],
        minutes: [segmentMapper(minuteTens), segmentMapper(minuteOnes)],
        seconds: [segmentMapper(secondTens), segmentMapper(secondOnes)],
    };
};
