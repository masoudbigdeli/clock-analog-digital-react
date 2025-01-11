import THEME_MODE from '../../enums/theme-mode'
import AppThemeModel from '../../models/theme-model'
import blueDarkColor from './blue-dark-color'
import radiousTheme from './radious-theme'
import spacingTheme from './spacing-theme'

const blueDarkTheme: AppThemeModel = {
  mode: THEME_MODE.BLUE_DARK,
  color: blueDarkColor,
  spacing: spacingTheme,
  radious: radiousTheme,
}

export default blueDarkTheme