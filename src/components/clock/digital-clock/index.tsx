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
import AlarmRing from '../../alarm/alarm-ring'
import AlarmSetter from '../../alarm/alarm-setter'
import useCheckAlarm from '../../../hooks/use-check-alarm'

const DigitalClock: FC<DigitalClockProps> = (props) => {
  const {
    digitalColorThemeMode = 'LIGHT',
    hasAlarm = false,
    onAlarm = () => console.log('digital clock alarm!'),
    padding = 0,
    twentyFourHours = false,
    backgroundColor,
    activeSegmentColor,
    inactiveSegmentColor,
    dotsColor,
  } = props

  const { seconds, minutes, hours } = useTime()
  const [settingAlarm, setSettingAlarm] = useState<boolean>(false)
  const [alarmTime, setAlarmTime] = useState<Date>(new Date('2011-10-10T14:48:00'))


  const isAlarmTime = useCheckAlarm(alarmTime);

  useEffect(() => {
    if (isAlarmTime) {
      onAlarm()
    }
  }, [isAlarmTime]);


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

  const handleSetAlarm = useCallback((alarmTimeToSet: Date) => {
    setSettingAlarm(false)
    setAlarmTime(alarmTimeToSet)
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
            <LogoWrapper style={{ color: 'red' }}>
              {!settingAlarm && hasAlarm && <AlarmRing themeMode={digitalColorThemeMode} iconSize={totalWidth * 0.11} onClick={() => setSettingAlarm(true)} />}

            </LogoWrapper>
          </RightSubSection>
        </ClockSection>
        {settingAlarm && <AlarmSetter width={totalWidth} top={0.025} left={0.25} onAlarmSet={handleSetAlarm} onCancel={() => setSettingAlarm(false)} />}
      </DigitalClockBackground>
    </ThemeProvider>
  )
}

export default DigitalClock
