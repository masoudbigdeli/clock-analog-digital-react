import THEME_MODE from '../../enums/theme-mode'
import AppThemeModel from '../../models/theme-model'
import autumnColor from './autumn-color'
import radiousTheme from './radious-theme'
import spacingTheme from './spacing-theme'

const autumnTheme: AppThemeModel = {
  mode: THEME_MODE.AUTUMN,
  color: autumnColor,
  spacing: spacingTheme,
  radious: radiousTheme,
}

export default autumnTheme