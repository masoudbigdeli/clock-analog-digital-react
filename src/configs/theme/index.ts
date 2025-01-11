

import THEME_MODE from '../../enums/theme-mode';
import AppThemeModel from '../../models/theme-model';
import autumnTheme from './autumn-theme';
import blueDarkTheme from './blue-dark-theme';
import darkTheme from './dark-theme';
import lightTheme from './light-theme';
import redDarkTheme from './red-dark-theme';

const themeMap: Record<THEME_MODE, AppThemeModel> = {
    [THEME_MODE.LIGHT]: lightTheme,
    [THEME_MODE.DARK]: darkTheme,
    [THEME_MODE.BLUE_DARK]: blueDarkTheme,
    [THEME_MODE.RED_DARK]: redDarkTheme,
    [THEME_MODE.AUTUMN]: autumnTheme,

};

const appTheme = (themeMode: `${THEME_MODE}`): AppThemeModel => {
    return themeMap[themeMode] || lightTheme; // Default to lightTheme if the mode is not found
};

export default appTheme;


export const appColors = {
    analogClockColors: 'analogClockColors',
    digitalClockColors: 'digitalClockColors',

}

export type AppColors = keyof typeof appColors

export const analogClockColors = {
    hour: 0,
    minute: 50,
    second: 100,
    center: 200,
    background: 300,
    border: 400,
    primaryNumbers: 500,
    majorNumbers: 600,
    primaryTicks: 700,
    majorTicks: 800,
    minorTicks: 900,
    1000: 1000,
}
export const digitalClockColors = {
    background: 0,
    border: 50,
    activeSegment: 100,
    inactiveSegment: 200,
    dotsColor: 300
}

export type analogClockColorsKeys = keyof typeof analogClockColors
export type digitalClockColorssKeys = keyof typeof digitalClockColors

export const appSpacing = {
    spacingNone: 'spacingNone',
    spacingXxs: 'spacingXxs',
    spacingXs: 'spacingXs',
    spacingS: 'spacingS',
    spacingM: 'spacingM',
    spacingL: 'spacingL',
    spacingXl: 'spacingXl',
    spacingXxl: 'spacingXxl',
    spacingXxxl: 'spacingXxxl',
}

export type AppSpacing = keyof typeof appSpacing

export const appRadious = {
    radiousNone: 'radiousNone',
    radiousXxs: 'radiousXxs',
    radiousXs: 'radiousXs',
    radiousS: 'radiousS',
    radiousM: 'radiousM',
    radiousL: 'radiousL',
    radiousXl: 'radiousXl',
}

export type AppRadious = keyof typeof appRadious