import styled from '@emotion/styled'
import AppThemeModel from '../../../models/theme-model'


const IconWrapper = styled.div({
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    maxHeight: '100%',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5,
    position: 'absolute',
    top: '70%',
    left: '50%',
    transform: `translate(-50%, -50%)`,

})

export default IconWrapper

interface AlarmSetterWrapperProps {
    width: number
    top: number
    left: number
}

export const AlarmSetterWrapper = styled.div<AlarmSetterWrapperProps & { theme?: AppThemeModel }>(({ width, top, left, theme }) => {
    return {
        boxSizing: 'border-box',
        width: `${width * 0.50}px`,
        minWidth: `${width * 0.50}px`,
        maxWidth: `${width * 0.50}px`,
        aspectRatio: `${width * 0.374}px`,
        padding: '0.2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: `${width * 0.0274}px`,
        backgroundColor: theme.color.analogClockColors.background,
        position: 'absolute',
        top: `${width * top}px`,
        left: `${width * left}px`,
        borderRadius: '1rem',
        boxShadow: `0px 0px 14px 1px ${theme.color.analogClockColors.primaryNumbers}`,
        zIndex: 8
    }

})


export const AlarmSetterItemsWrapper = styled.div({
    boxSizing: 'border-box',
    width: '100%',
    minWidth: '100%',
    maxWidth: '100%',
    height: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
})

export const AlarmSetterItemWrapper = styled.div({
    boxSizing: 'border-box',
    width: '30%',
    minWidth: '30%',
    maxWidth: '30%',
    aspectRatio: '1.4/1',
    backgroundColor: 'blue',
    borderRadius: '1rem',
    zIndex: 8
})

export const BtnsWrapper = styled.div({
    boxSizing: 'border-box',
    width: '100%',
    minWidth: '100%',
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 8
})

export const SetterBtn = styled.div({
    boxSizing: 'border-box',
    width: '45%',
    minWidth: '45%',
    maxWidth: '45%',
    backgroundColor: '#4f8f36',
    borderRadius: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBlock: '2%',
    cursor: 'pointer',
    fontWeight: 600,
})

