import AppThemeModel from '../../models/theme-model';

const blueDarkColor: AppThemeModel['color'] = {
  analogClockColors: {
    hour: '#babbe3',
    minute: '#4449cf',
    second: '#9597db',
    center: '#b0b3f5',
    background: '#000229',
    border: '#000114',
    primaryNumbers: '#779ff7',
    majorNumbers: '#2e6cf2',
    primaryTicks: '#8ceaf5',
    majorTicks: '#038f9e',
    minorTicks: '#05dbf2',
    1000: '#0D0D0D',
  },
  digitalClockColors: {
    background: '#000229',
    border: '#038f9e',
    activeSegment: '#2e6cf2',
    inactiveSegment: '#000229',
    dotsColor: '#4449cf'
  },
}

export default blueDarkColor;