import THEME_MODE from "../enums/theme-mode";

export interface HandleProps {
    width: number;
    height: number;
}

export interface ClockCenterProps {
    color: string;
    radius: number;
}

export interface ClockNumbersProps {
    majorNumbersFontSize: number;
    primaryNumbersFontSize: number;
    type: string;
    majorNumbersColor: string;
    primaryNumbersColor: string;
}

export interface ClockBaseProps {
    clockMode: 'analog' | 'digital';
    hasAlarm?: boolean
    onAlarm: () => void
}

export interface AnalogClockProps extends ClockBaseProps {
    clockMode: 'analog';
    analogColorThemeMode?: `${THEME_MODE}`
    clockBackgroundColor?: string
    clockBorderColor?:string
    hourHandColor?: string
    minuteHandColor?: string
    secondHandColor?: string
    majorNumbersColor?: string;
    primaryNumbersColor?: string;
    clockBorderThickness?: number;
    clockNumbersType?: string;
    clockLogoSrcAndOffset?: { cmp: React.ReactNode; offset: number };
    hasPrimaryTicks?: boolean;
    hasMajorTicks?: boolean;
    hasMinorTicks?: boolean;
    hasPrimaryNumbers?: boolean;
    hasMajorNumbers?: boolean;
    majorNumbersFontSize?: number;
    primaryNumbersFontSize?: number;
    UserPrimaryTicksComponent?: React.ReactNode;
    UserMajorTicksComponent?: React.ReactNode;
    UserMinorTicksComponent?: React.ReactNode;
    PrimaryNumbersComponent?: React.ReactNode;
    MajorNumbersComponent?: React.ReactNode;
    ClockCenterComponent?: React.ReactNode;

}

export interface DigitalClockProps extends ClockBaseProps {
    clockMode: 'digital';
    digitalColorThemeMode?: `${THEME_MODE}`
    backgroundColor?: string
    activeSegmentColor?: string
    inactiveSegmentColor? : string
    dotsColor?: string
    twentyFourHours?: boolean
    padding?: number
}

export type ClockProps = AnalogClockProps | DigitalClockProps;