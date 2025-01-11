import THEME_MODE from '../../enums/theme-mode'
import AppThemeModel from '../../models/theme-model'
import lightColor from './light-color'
import radiousTheme from './radious-theme'
import spacingTheme from './spacing-theme'

const lightTheme: AppThemeModel = {
    mode: THEME_MODE.LIGHT ,
    color: lightColor,
    spacing: spacingTheme,
    radious: radiousTheme,
}

export default lightTheme