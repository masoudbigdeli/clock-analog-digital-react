import AppThemeModel from '../../models/theme-model'

const redDarkColor: AppThemeModel['color'] = {
  analogClockColors: {
    hour: '#f0dadc',
    minute: '#eb969c',
    second: '#f0848b',
    center: '#9c8384',
    background: '#260101',
    border: '#140000',
    primaryNumbers: '#f5b5b5',
    majorNumbers: '#f27979',
    primaryTicks: '#e3989d',
    majorTicks: '#e3989d',
    minorTicks: '#f2ced0',
    ringColor: '#a3920f',
    1000: '#0D0D0D',
  },
  digitalClockColors: {
    background: '#260101',
    border: '#f2ced0',
    activeSegment: '#e3989d',
    inactiveSegment: '#260101',
    dotsColor: '#eb969c'
  },
}

export default redDarkColor