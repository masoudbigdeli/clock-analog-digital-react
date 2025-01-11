import React from "react"
import { CSSProperties } from "react"
import AppThemeModel from "../models/theme-model"

export type TickMarkType = "minor" | "major" | "primary"

export interface TickMarkStyle extends CSSProperties {
  type: TickMarkType
}

const useTickMarksStyles = (
  theme: AppThemeModel,
  radius: number,
  clockBorderThikness: number,
  hasPrimaryTicks: boolean,
  hasMajorTicks: boolean,
  hasMinorTicks: boolean,
  UserPrimaryTicksComponent?: React.ReactNode,
  UserMajorTicksComponent?: React.ReactNode,
  UserMinorTicksComponent?: React.ReactNode
): TickMarkStyle[] => {
  const tickMarks: TickMarkStyle[] = []
  const totalMarks = 60
  const primaryHourMarks = [0, 15, 30, 45]

  const resolveStyle = (
    component: React.ReactNode | undefined,
    defaultWidth: string,
    defaultHeight: string,
    defaultColor: string,
    visibility: boolean
  ) => {
    if (React.isValidElement(component) && component.props) {
      const { style } = component.props as { style?: React.CSSProperties }
      return {
        width: String(style?.width || defaultWidth),
        height: String(style?.height || defaultHeight),
        backgroundColor: String(style?.backgroundColor || defaultColor),
        display: visibility ? "block" : "none"
      }
    }
    return {
      width: defaultWidth,
      height: defaultHeight,
      backgroundColor: defaultColor,
      display: visibility ? "block" : "none"
    }
  }

  for (let i = 0; i < totalMarks; i++) {
    const angle = i * 6
    const angleRad = (angle * Math.PI) / 180
    const x = (radius - (clockBorderThikness ? clockBorderThikness * 8 : radius * 0.07)) * Math.cos(angleRad)
    const y = (radius - (clockBorderThikness ? clockBorderThikness * 8 : radius * 0.07)) * Math.sin(angleRad)

    let type: TickMarkType = "minor"
    let width: string
    let height: string
    let backgroundColor: string
    let display: string

    if (i % 5 !== 0) {
      type = "minor"
      const minorStyles = resolveStyle(
        UserMinorTicksComponent,
        `${0.001 * radius}rem`,
        `${0.002 * radius}rem`,
        theme.color.analogClockColors["minorTicks"],
        hasMinorTicks
      )
      width = minorStyles.width
      height = minorStyles.height
      backgroundColor = minorStyles.backgroundColor
      display = minorStyles.display
    } else if (!primaryHourMarks.includes(i)) {
      type = "major"
      const majorStyles = resolveStyle(
        UserMajorTicksComponent,
        `${0.0015 * radius}rem`,
        `${0.003 * radius}rem`,
        theme.color.analogClockColors["majorTicks"],
        hasMajorTicks
      )
      width = majorStyles.width
      height = majorStyles.height
      backgroundColor = majorStyles.backgroundColor
      display = majorStyles.display
    } else {
      type = "primary"
      const primaryStyles = resolveStyle(
        UserPrimaryTicksComponent,
        `${0.0015 * radius}rem`,
        `${0.0045 * radius}rem`,
        theme.color.analogClockColors["primaryTicks"],
        hasPrimaryTicks
      )
      width = primaryStyles.width
      height = primaryStyles.height
      backgroundColor = primaryStyles.backgroundColor
      display = primaryStyles.display
    }

    const style: TickMarkStyle = {
      type,
      position: "absolute",
      top: `calc(50% + ${y}px)`,
      left: `calc(50% + ${x}px)`,
      transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`,
      transformOrigin: "center",
      width: String(width),
      height: String(height),
      backgroundColor: String(backgroundColor),
      display
    }

    tickMarks.push(style)
  }

  return tickMarks
}

export default useTickMarksStyles
