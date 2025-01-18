import AppThemeModel from '../../models/theme-model'

const darkColor: AppThemeModel['color'] = {
    analogClockColors: {
        hour: '#FFFFFF',
        minute: '#F7DFE0',
        second: '#F5B8BC',
        center: '#E1E1E1',
        background: '#000000',
        border: '#000000',
        primaryNumbers: '#f0eded',
        majorNumbers: '#a3a2a2',
        primaryTicks: '#edf5f3',
        majorTicks: '#dcf2ee',
        minorTicks: '#FFFFFF',
        ringColor: '#a1974d',
        1000: '#0D0D0D',
    },
    digitalClockColors: {
        background: '#000000',
        border: '#eeeeee',
        activeSegment: '#FFFFFF',
        inactiveSegment: '#000000',
        dotsColor: '#FFFFFF'
    },
}

export default darkColor