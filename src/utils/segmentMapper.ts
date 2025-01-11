export const segmentMapper = (digit: number): boolean[] => {
    const map: Record<number, boolean[]> = {
        0: [true, true, true, true, true, true, false],
        1: [false, false, false, true, true, false, false],
        2: [true, false, true, false, true, true, true],
        3: [true, false, false, true, true, true, true],
        4: [false, true, false, true, true, false, true],
        5: [true, true, false, true, false, true, true],
        6: [true, true, true, true, false, true, true],
        7: [true, false, false, true, true, false, false],
        8: [true, true, true, true, true, true, true],
        9: [true, true, false, true, true, true, true],
    };

    return map[digit] || [false, false, false, false, false, false, false];
};
