import THEME_MODE from '../../enums/theme-mode'
import AppThemeModel from '../../models/theme-model'
import darkColor from './dark-color'
import radiousTheme from './radious-theme'
import spacingTheme from './spacing-theme'

const darkTheme: AppThemeModel = {
    mode: THEME_MODE.DARK,
    color: darkColor,
    spacing: spacingTheme,
    radious: radiousTheme,
}

export default darkTheme