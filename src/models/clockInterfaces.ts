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
}

export interface AnalogClockProps extends ClockBaseProps {
    clockMode: 'analog';
    analogColorThemeMode?: `${THEME_MODE}`
    clockBorderThikness?: number;
    clockNumbersType?: string;
    clockLogoSrcAndOffset?: { cmp: React.ReactNode; offset: number };
    hasPrimaryTicks?: boolean;
    hasMajorTicks?: boolean;
    hasMinorTicks?: boolean;
    hasPrimaryNumbers?: boolean;
    hasMajorNumbers?: boolean;
    majorNumbersFontSize?: number;
    primaryNumbersFontSize?: number;
    majorNumbersColor?: string;
    primaryNumbersColor?: string;
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
    padding?: number
    twentyFourHours?: boolean
    backgroundColor?: string
    activeSegmentColor?: string
    inactiveSegmentColor? : string
    dotsColor?: string
    digitalClockLogoComponent?: React.ReactNode;

}

export type ClockProps = AnalogClockProps | DigitalClockProps;