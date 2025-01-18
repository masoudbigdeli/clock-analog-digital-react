import styled from '@emotion/styled'
import AppThemeModel from '../../../../models/theme-model'
import { CSSProperties } from 'react'

interface DigitalClockBackgroundProps {
  padding: number
  backgroundColor: string
}

export const DigitalClockBackground = styled.div<DigitalClockBackgroundProps & { theme?: AppThemeModel }>(
  ({ theme, padding, backgroundColor }) => ({
    boxSizing: 'border-box',
    width: '100%',
    aspectRatio: '3.5 / 1',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: `${padding}rem`,
    direction: 'ltr',
    backgroundColor: backgroundColor || theme.color.digitalClockColors.background,
    position: 'relative'
  })
)

interface ClockSectionProps {
  style: CSSProperties
}

export const ClockSection = styled.div<ClockSectionProps>(
  ({ style }) => ({
    boxSizing: 'border-box',
    aspectRatio: '1/2',
    position: 'relative',
    ...style
  })
)

interface ClockDotProps {
  backgroundColor: string
}

export const ClockDot = styled.div<ClockDotProps & { theme?: AppThemeModel }>(
  ({ theme, backgroundColor }) => ({
    boxSizing: 'border-box',
    width: '100%',
    height: '12.5%',
    backgroundColor: backgroundColor || theme.color.digitalClockColors.dotsColor,
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    position: 'absolute',
    top: '31.25%',
    left: 0
  })
)

export const RightSectionElement = styled.div(
  {
    boxSizing: 'border-box',
    height: '45%',
    border: '2px solid blue'
  })


interface DigitalClockDigitWrapperProps {
  style?: CSSProperties
}

export const DigitalClockDigitWrapper = styled.div<DigitalClockDigitWrapperProps>(
  ({ style }) => ({
    boxSizing: 'border-box',
    position: 'relative',
    ...style
  })
)

export const RightSubSection = styled.div(
  {
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
)

export const SecondsWrapper = styled.div(
  {
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '200px'
  }
)

export const SecondDigitWrapper = styled.div(
  {
    boxSizing: 'border-box',
    width: '27%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  })


export const LogoWrapper = styled.div({
  boxSizing: 'border-box',
  width: '70%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

