import { FC, useEffect, useMemo, useRef, useState, useCallback } from "react";
import { ThemeProvider } from '@emotion/react';
import { AnalogClockProps } from "../../models/clockInterfaces";
import appTheme from "../../configs/theme";
import useTime from "../../hooks/use-time";
import useTickMarksStyles from "../../hooks/use-tick-marks-styles";
import useClockNumbers from "../../hooks/use-clock-numbers";
import AnalogClockBackground, { CenterCircle, ClockCenterWapper, ClockLogoWrapper, ClockNumberWrapper, HourHand, MinuteHand, SecondHand } from "../../styles/components/clock";
import AppThemeModel from "../../models/theme-model";

const AnalogClock: FC<AnalogClockProps> = (props) => {
    const {
        analogColorThemeMode = 'DARK',
        clockBorderThickness = 2,
        clockLogoSrcAndOffset = { cmp: <></>, offset: 0 },
        clockNumbersType = 'ENGLISH',
        hasPrimaryTicks = true,
        hasMajorTicks = true,
        hasMinorTicks = true,
        hasPrimaryNumbers = true,
        hasMajorNumbers = true,
        primaryNumbersFontSize,
        majorNumbersFontSize,
        primaryNumbersColor,
        majorNumbersColor,
        UserPrimaryTicksComponent,
        UserMajorTicksComponent,
        UserMinorTicksComponent,
        ClockCenterComponent,
        PrimaryNumbersComponent,
        MajorNumbersComponent,
    } = props;

    const clockRef = useRef<HTMLDivElement | null>(null);
    const [radius, setRadius] = useState(0);

    const theme: AppThemeModel = useMemo(() => appTheme(analogColorThemeMode), [analogColorThemeMode]);

    const { seconds, minutes, hours } = useTime();

    const effectiveClockBorderThickness = useMemo(
        () => (clockBorderThickness <= 2 && clockBorderThickness >= 0 ? clockBorderThickness : 2),
        [clockBorderThickness]
    );

    const effectivePrimaryNumbersFontSize = useMemo(
        () => (!PrimaryNumbersComponent && primaryNumbersFontSize) || 0.2,
        [PrimaryNumbersComponent, primaryNumbersFontSize]
    );

    const effectivePrimaryNumbersColor = useMemo(
        () => (!PrimaryNumbersComponent ? primaryNumbersColor : ''),
        [PrimaryNumbersComponent, primaryNumbersColor]
    );

    const effectiveMajorNumbersFontSize = useMemo(
        () => (!MajorNumbersComponent && majorNumbersFontSize) || 0.15,
        [MajorNumbersComponent, majorNumbersFontSize]
    );

    const effectiveMajorNumbersColor = useMemo(
        () => (!MajorNumbersComponent ? majorNumbersColor : ''),
        [MajorNumbersComponent, majorNumbersColor]
    );

    const secondsAngle = useMemo(() => seconds * 6, [seconds]);
    const minutesAngle = useMemo(() => minutes * 6 + seconds * 0.1, [minutes, seconds]);
    const hourAngle = useMemo(() => (hours % 12) * 30 + minutes * 0.5, [hours, minutes]);

    const updateClockSize = useCallback(() => {
        if (clockRef.current) {
            const size = Math.min(clockRef.current.offsetWidth, clockRef.current.offsetHeight);
            setRadius(size / 2);
        }
    }, []);

    useEffect(() => {
        const observer = new ResizeObserver(() => updateClockSize());
        if (clockRef.current) {
            observer.observe(clockRef.current);
        }
        return () => {
            if (clockRef.current) {
                observer.unobserve(clockRef.current);
            }
        };
    }, [updateClockSize]);

    const tickMarks = useTickMarksStyles(
        theme,
        radius,
        clockBorderThickness,
        hasPrimaryTicks,
        hasMajorTicks,
        hasMinorTicks,
        UserPrimaryTicksComponent,
        UserMajorTicksComponent,
        UserMinorTicksComponent
    );

    const clockNumbers = useClockNumbers({
        theme,
        radius,
        clockNumbersType,
        effectiveClockBorderThickness,
        effectivePrimaryNumbersFontSize,
        effectiveMajorNumbersFontSize,
        effectivePrimaryNumbersColor,
        effectiveMajorNumbersColor,
        hasPrimaryNumbers,
        hasMajorNumbers,
        PrimaryNumbersComponent,
        MajorNumbersComponent,
    });

    return (
        <ThemeProvider theme={theme}>
            <AnalogClockBackground ref={clockRef} borderThikness={effectiveClockBorderThickness * (radius / 16 * 0.08)}>
                {tickMarks.map((tick, index) => (
                    <div style={{ ...tick }} key={index}>
                        {[0, 15, 30, 45].includes(index) ? UserPrimaryTicksComponent : index % 5 === 0 ? UserMajorTicksComponent : UserMinorTicksComponent}
                    </div>
                ))}
                {clockNumbers.map(({ num, x, y, fontSize, color, display, style }, index) => (
                    <ClockNumberWrapper key={index} topY={y} leftX={x} fontSize={fontSize} color={color} display={display} style={style}>
                        {num}
                    </ClockNumberWrapper>
                ))}
                <HourHand hourAngle={hourAngle} />
                <MinuteHand minuteAngle={minutesAngle} />
                <SecondHand secondAngle={secondsAngle} />
                <ClockCenterWapper>{ClockCenterComponent || <CenterCircle clockRadius={radius} />}</ClockCenterWapper>
                {clockLogoSrcAndOffset && <ClockLogoWrapper offset={clockLogoSrcAndOffset.offset}>{clockLogoSrcAndOffset.cmp}</ClockLogoWrapper>}
            </AnalogClockBackground>
        </ThemeProvider>
    );
};

export default AnalogClock;
