import { FC, useEffect, useMemo, useRef, useState, useCallback, useLayoutEffect } from 'react'
import AppThemeModel from '../../../models/theme-model'
import appTheme from '../../../configs/theme'
import { ThemeProvider } from '@emotion/react'
import { DigitalClockProps } from '../../../models/clockInterfaces'
import {
  DigitalClockBackground,
  ClockSection,
  RightSubSection,
  SecondsWrapper,
  LogoWrapper,
  SecondDigitWrapper,
  ClockDot,
} from '../../../styles/components/clock/digital-clock'
import SevenSegmentDigit from './seven-segment-digit'
import useTime from '../../../hooks/use-time'
import { timeToSegments } from '../../../utils/timeToSegments'

const DigitalClock: FC<DigitalClockProps> = (props) => {
  const {
    digitalColorThemeMode = 'LIGHT',
    padding = 0,
    twentyFourHours = false,
    backgroundColor,
    activeSegmentColor,
    inactiveSegmentColor,
    dotsColor,
    digitalClockLogoComponent = <>D-Clock</>
  } = props

  const { seconds, minutes, hours } = useTime()

  const usedHour = useMemo(() => (twentyFourHours ? hours : hours % 12), [twentyFourHours, hours])

  const timeDigits = useMemo(() => timeToSegments(usedHour, minutes, seconds), [usedHour, minutes, seconds])

  const theme: AppThemeModel = useMemo(() => appTheme(digitalColorThemeMode), [digitalColorThemeMode])

  const totalWidthRef = useRef<HTMLDivElement | null>(null)
  const [totalWidth, setTotalWidth] = useState(0)

  const updateClockSize = useCallback(() => {
    if (totalWidthRef.current) {
      setTotalWidth(totalWidthRef.current.offsetWidth)
    }
  }, [])

  useLayoutEffect(() => {
    const observer = new ResizeObserver(() => {
      updateClockSize()
    })

    if (totalWidthRef.current) {
      observer.observe(totalWidthRef.current)
    }

    return () => {
      if (totalWidthRef.current) {
        observer.unobserve(totalWidthRef.current)
      }
    }
  }, [updateClockSize])

  return (
    <ThemeProvider theme={theme}>
      <DigitalClockBackground padding={padding} ref={totalWidthRef} backgroundColor={backgroundColor || ''}>
        <ClockSection style={{ width: `${0.16 * totalWidth}px`, height: `${0.285714286 * totalWidth}px` }}>
          <SevenSegmentDigit
            activeSegmentColor={activeSegmentColor || ''}
            inactiveSegmentColor={inactiveSegmentColor || ''}
            segmentsOn={timeDigits?.hours[0]}
          />
        </ClockSection>
        <ClockSection style={{ width: `${0.16 * totalWidth}px`, height: `${0.285714286 * totalWidth}px` }}>
          <SevenSegmentDigit
            activeSegmentColor={activeSegmentColor || ''}
            inactiveSegmentColor={inactiveSegmentColor || ''}
            segmentsOn={timeDigits?.hours[1]}
          />
        </ClockSection>
        <ClockSection style={{ width: '3.5%', height: '100%' }}>
          <ClockDot backgroundColor={dotsColor || ''} style={{ top: '31.25%', left: 0 }} />
          <ClockDot backgroundColor={dotsColor || ''} style={{ top: '56.25%', left: 0 }} />
        </ClockSection>
        <ClockSection style={{ width: `${0.16 * totalWidth}px`, height: `${0.285714286 * totalWidth}px` }}>
          <SevenSegmentDigit
            activeSegmentColor={activeSegmentColor || ''}
            inactiveSegmentColor={inactiveSegmentColor || ''}
            segmentsOn={timeDigits?.minutes[0]}
          />
        </ClockSection>
        <ClockSection style={{ width: `${0.16 * totalWidth}px`, height: `${0.285714286 * totalWidth}px` }}>
          <SevenSegmentDigit
            activeSegmentColor={activeSegmentColor || ''}
            inactiveSegmentColor={inactiveSegmentColor || ''}
            segmentsOn={timeDigits?.minutes[1]}
          />
        </ClockSection>
        <ClockSection style={{ width: '22%', height: `${0.285714286 * totalWidth}px` }}>
          <RightSubSection>
            <SecondsWrapper style={{ color: 'red', gap: `${0.008 * totalWidth}px` }}>
              <SecondDigitWrapper>
                <SevenSegmentDigit
                  activeSegmentColor={activeSegmentColor || ''}
                  inactiveSegmentColor={inactiveSegmentColor || ''}
                  segmentsOn={timeDigits?.seconds[0]}
                />
              </SecondDigitWrapper>
              <SecondDigitWrapper>
                <SevenSegmentDigit
                  activeSegmentColor={activeSegmentColor || ''}
                  inactiveSegmentColor={inactiveSegmentColor || ''}
                  segmentsOn={timeDigits?.seconds[1]}
                />
              </SecondDigitWrapper>
            </SecondsWrapper>
            <LogoWrapper style={{ color: 'red' }}>{digitalClockLogoComponent}</LogoWrapper>
          </RightSubSection>
        </ClockSection>
      </DigitalClockBackground>
    </ThemeProvider>
  )
}

export default DigitalClock
