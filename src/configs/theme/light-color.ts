import AppThemeModel from '../../models/theme-model';

const lightColor: AppThemeModel['color'] = {
  analogClockColors: {
    hour: '#000000',
    minute: '#000000',
    second: '#FA0000',
    center: '#1c1c1c',
    background: '#FFFFFF',
    border: '#f0eded',
    primaryNumbers: '#333232',
    majorNumbers: '#403f3f',
    primaryTicks: '#000000',
    majorTicks: '#000000',
    minorTicks: '#000000',
    1000: '#0D0D0D',
  },
  digitalClockColors: {
    background: 'white',
    border: '#eeeeee',
    activeSegment: '#000000',
    inactiveSegment: 'white',
    dotsColor: '#000000'
  },
}

export default lightColor;