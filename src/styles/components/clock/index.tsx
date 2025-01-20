import styled from "@emotion/styled"

interface ClockBackgroundProps {
    borderThikness: number
    borderColor: string
    backgroundColor: string
}

const AnalogClockBackground = styled.div<ClockBackgroundProps>(({ borderThikness, backgroundColor, borderColor }) => {
    return {
        boxSizing: 'border-box',
        width: "100%",
        minWidth: "100%",
        maxWidth: "100%",
        position: "relative",
        aspectRatio: "1 / 1",
        borderRadius: "50%",
        border: `${borderThikness}rem solid ${borderColor ? borderColor : '#000105'}`,
        margin: "0 auto",
        backgroundColor: backgroundColor ? backgroundColor : '#01061a'
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
    userBackgroundColor: string
}

export const HourHand = styled.div<HourHandProps>(({ hourAngle, userBackgroundColor,  }) => {
    return {
        position: "absolute",
        top: "50%",
        left: "50%",
        width: '3%',
        height: '26%',
        backgroundColor: userBackgroundColor ? userBackgroundColor : '#82a7cf',
        transform: `translate(-50%, -100%) rotate(${hourAngle}deg)`,
        transformOrigin: "bottom",
        borderRadius: '5rem',
        zIndex: 6,
    }
})

interface MinuteHandProps {
    minuteAngle: number
    userBackgroundColor: string

}

export const MinuteHand = styled.div<MinuteHandProps>(({ minuteAngle, userBackgroundColor,  }) => {
    return {
        position: "absolute",
        top: "50%",
        left: "50%",
        width: '2%',
        height: '37%',
        backgroundColor: userBackgroundColor ? userBackgroundColor : '#046e5e',
        transform: `translate(-50%, -100%) rotate(${minuteAngle}deg)`,
        transformOrigin: "bottom",
        borderRadius: '5rem',
        zIndex: 7,
    }

})

interface SecondHandProps {
    secondAngle: number
    userBackgroundColor: string

}

export const SecondHand = styled.div<SecondHandProps>(({ secondAngle, userBackgroundColor,  }) => {
    return {
        position: "absolute",
        top: "50%",
        left: "50%",
        width: '1%',
        height: '45%',
        backgroundColor: userBackgroundColor ? userBackgroundColor : '#f0738c',
        transform: `translate(-50%, -100%) rotate(${secondAngle}deg)`,
        transformOrigin: "bottom",
        borderRadius: '4rem',
        opacity: 0.7,
        zIndex: 8,
        transition: `transform ${secondAngle === 0 ? '0.01s' : '0.25s'} ease-in-out`,
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
    backgroundColor?: string
}

export const CenterCircle = styled.div<CenterCircleProps>(({clockRadius, backgroundColor }) => {
    return {
        backgroundColor: backgroundColor ? backgroundColor : '#0c0338',
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



export const DigitalClockWrapper = styled.div({

        boxSizing: 'border-box',
        width: "100%",
        minWidth: "100%",
        maxWidth: "100%",
        aspectRatio: '3/1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: "0 auto",
        backgroundColor: 'blue',
        border: 'solid 2px red',
})

export const LargeDigitWrapper = styled.div({
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
        backgroundColor: 'white',
        border: 'solid 2px black',
})