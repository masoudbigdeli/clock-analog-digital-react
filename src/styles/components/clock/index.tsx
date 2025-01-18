import styled from "@emotion/styled"
import AppThemeModel from "../../../models/theme-model"

interface ClockBackgroundProps {
    borderThikness: number
}

const AnalogClockBackground = styled.div<ClockBackgroundProps & { theme?: AppThemeModel }>(({ borderThikness, theme }) => {
    return {
        boxSizing: 'border-box',
        width: "100%",
        minWidth: "100%",
        maxWidth: "100%",
        position: "relative",
        aspectRatio: "1 / 1",
        borderRadius: "50%",
        border: `${borderThikness}rem solid ${theme.color.analogClockColors['border']}`,
        margin: "0 auto",
        backgroundColor: theme.color.analogClockColors['background']
    }
})

export default AnalogClockBackground

interface ClockNumberWrapperProps {
    topY: number
    leftX: number
    fontSize: string
    color: string
    display: string
}

export const ClockNumberWrapper = styled.div<ClockNumberWrapperProps>(({ topY, leftX, fontSize, color, display }) => {
    return {
        position: "absolute",
        top: `calc(50% + ${topY}px)`,
        left: `calc(50% + ${leftX}px)`,
        fontSize: fontSize,
        color: color,
        fontWeight: "bold",
        transform: "translate(-50%, -50%)",
        zIndex: 2,
        display: display
    }
})

interface HourHandProps {
    hourAngle: number
}

export const HourHand = styled.div<HourHandProps & { theme?: AppThemeModel }>(({ hourAngle, theme }) => {
    return {
        position: "absolute",
        top: "50%",
        left: "50%",
        width: '3%',
        height: '26%',
        backgroundColor: theme?.color.analogClockColors['hour'],
        transform: `translate(-50%, -100%) rotate(${hourAngle}deg)`,
        transformOrigin: "bottom",
        borderRadius: '5rem',
        zIndex: 6,
    }
})

interface MinuteHandProps {
    minuteAngle: number
}

export const MinuteHand = styled.div<MinuteHandProps & { theme?: AppThemeModel }>(({ minuteAngle, theme }) => {
    return {
        position: "absolute",
        top: "50%",
        left: "50%",
        width: '2%',
        height: '37%',
        backgroundColor: theme?.color.analogClockColors['minute'],
        transform: `translate(-50%, -100%) rotate(${minuteAngle}deg)`,
        transformOrigin: "bottom",
        borderRadius: '5rem',
        zIndex: 7,
    }

})

interface SecondHandProps {
    secondAngle: number
}

export const SecondHand = styled.div<SecondHandProps & { theme?: AppThemeModel }>(({ secondAngle, theme }) => {
    return {
        position: "absolute",
        top: "50%",
        left: "50%",
        width: '1%',
        height: '45%',
        backgroundColor: theme?.color.analogClockColors['second'],
        transform: `translate(-50%, -100%) rotate(${secondAngle}deg)`,
        transformOrigin: "bottom",
        borderRadius: '4rem',
        opacity: 0.7,
        zIndex: 8,
        transition: `transform ${secondAngle === 0 ? '0.01s' :'0.25s'} ease-in-out`, 
       }
})


export const ClockCenterWapper = styled.div({
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 'max-content',
    aspectRatio: '1/1',
    transform: "translate(-50%, -50%)",
    zIndex: 8,
})

interface CenterCircleProps {
    clockRadius: number
}

export const CenterCircle = styled.div<CenterCircleProps & { theme?: AppThemeModel }>(({ theme, clockRadius }) => {
    return {
        backgroundColor: theme?.color.analogClockColors['center'],
        width: `${clockRadius * 0.0055}rem`,
        borderRadius: "50%",
        aspectRatio: '1/1',
    }
})

interface ClockLogoWrapper {
    offset: number,
}

export const ClockLogoWrapper = styled.div<ClockLogoWrapper>(({ offset }) => {
    return {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -${offset}%)`,
        zIndex: 1,
    }
})



export const DigitalClockWrapper = styled.div<{theme?:AppThemeModel}>(({theme}) => {
    return {
    boxSizing: 'border-box',
    width: "100%",
    minWidth: "100%",
    maxWidth: "100%",
    aspectRatio: '3/1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: "0 auto",
    backgroundColor: theme?.color?.digitalClockColors['background'],
    border: `solid 2px ${theme?.color?.digitalClockColors.border}`,
}
})

export const LargeDigitWrapper = styled.div<{theme?:AppThemeModel}>(({theme}) => {
    return {
    boxSizing: 'border-box',
    width: "max-content",
    minWidth: "max-content",
    maxWidth: "max-content",
    height: "max-content",
    minHeight: "max-content",
    maxHeight: "max-content",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme?.color?.digitalClockColors['background'],
    border: `solid 2px ${theme?.color?.digitalClockColors.border}`,
}
})