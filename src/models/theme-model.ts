import THEME_TYPE from '../enums/theme-mode'
import {
    AppRadious,
    AppSpacing,
    analogClockColorsKeys,
    digitalClockColorssKeys
} from '../configs/theme'

interface AppThemeModel {
    mode: `${THEME_TYPE}`
    color: { analogClockColors: Record<analogClockColorsKeys, string>, digitalClockColors: Record<digitalClockColorssKeys, string> }
    spacing: Record<AppSpacing, string>
    radious: Record<AppRadious, string>
}

export default AppThemeModel