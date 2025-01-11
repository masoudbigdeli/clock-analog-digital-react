import AppThemeModel from '../../models/theme-model';

const autumnColor: AppThemeModel['color'] = {
  analogClockColors: {
    hour: '#8C0909',
    minute: '#B90B0B',
    second: '#FB9935',
    center: '#76453B',
    background: '#FFF8DC',
    border: '#cf5d06',
    primaryNumbers: '#d18904',
    majorNumbers: '#917106',
    primaryTicks: '#632626',
    majorTicks: '#F89D13',
    minorTicks: '#FFFFEC',
    1000: '#0D0D0D',
  },
  digitalClockColors: {
    background: '#FFFFEC',
    border: '#eeeeee',
    activeSegment: '#cf5d06',
    inactiveSegment: '#FFFFEC',
    dotsColor: '#632626'
  },
}

export default autumnColor;