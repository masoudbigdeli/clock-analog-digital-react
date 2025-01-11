import ANALOG_THEME_MODE from '../../enums/theme-mode'
import AppThemeModel from '../../models/theme-model'
import redDarkColor from './red-dark-color'
import radiousTheme from './radious-theme'
import spacingTheme from './spacing-theme'

const redDarkTheme: AppThemeModel = {
  mode: ANALOG_THEME_MODE.RED_DARK,
  color: redDarkColor,
  spacing: spacingTheme,
  radious: radiousTheme,
}

export default redDarkTheme