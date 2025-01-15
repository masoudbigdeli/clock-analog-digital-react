import { useMemo } from "react";
import AppThemeModel from "../models/theme-model";
import React from "react";

interface ClockNumbersProps {
  theme: AppThemeModel;
  radius: number;
  clockNumbersType: string;
  effectiveClockBorderThickness: number;
  effectivePrimaryNumbersFontSize: number;
  effectiveMajorNumbersFontSize: number;
  effectivePrimaryNumbersColor?: string;
  effectiveMajorNumbersColor?: string;
  hasPrimaryNumbers?: boolean;
  hasMajorNumbers?: boolean;
  PrimaryNumbersComponent?: React.ReactNode;
  MajorNumbersComponent?: React.ReactNode;
}

interface ClockNumber {
  num: React.ReactNode;
  x: number;
  y: number;
  fontSize: string;
  color: string;
  width: string;
  height: string;
  display: string;
  style?: React.CSSProperties;
}

const useClockNumbers = ({
  theme,
  radius,
  clockNumbersType,
  effectiveClockBorderThickness,
  effectivePrimaryNumbersFontSize,
  effectiveMajorNumbersFontSize,
  effectivePrimaryNumbersColor,
  effectiveMajorNumbersColor,
  hasPrimaryNumbers = true,
  hasMajorNumbers = true,
  PrimaryNumbersComponent,
  MajorNumbersComponent,
}: ClockNumbersProps): ClockNumber[] => {
  return useMemo(() => {
    const romanNumbers = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];

    const calculatePosition = (index: number): { x: number; y: number } => {
      const angle = (index + 1) * 30 - 90;
      const offset = radius - (effectiveClockBorderThickness > 1.4 ? effectiveClockBorderThickness * 3 : 0) - radius * 0.25;
      return {
        x: offset * Math.cos((angle * Math.PI) / 180),
        y: offset * Math.sin((angle * Math.PI) / 180),
      };
    };

    const extractStyles = (component: React.ReactNode, defaultStyles: React.CSSProperties): React.CSSProperties => {
      if (React.isValidElement(component) && component.props) {
        const { style } = component.props as { style?: React.CSSProperties } 
        return {
          ...defaultStyles,
          ...style,
          fontSize: `${style?.fontSize || defaultStyles.fontSize}`,
          color: `${style?.color || defaultStyles.color}`,
        };
      }
      return defaultStyles;
    };

    return [...Array(12)].map((_, i) => {
      const num =
        clockNumbersType === "ENGLISH"
          ? i + 1
          : clockNumbersType === "ROMAN"
          ? romanNumbers[i]
          : null;

      const { x, y } = calculatePosition(i);

      const isPrimary = [12, 3, 6, 9].includes(i + 1);
      const component = isPrimary ? PrimaryNumbersComponent : MajorNumbersComponent;
      const fontSize = isPrimary
        ? effectivePrimaryNumbersFontSize
        : effectiveMajorNumbersFontSize;
      const color = isPrimary
        ? effectivePrimaryNumbersColor || theme.color.analogClockColors.primaryNumbers
        : effectiveMajorNumbersColor || theme.color.analogClockColors.majorNumbers;
      const display = isPrimary ? (hasPrimaryNumbers ? "block" : "none") : (hasMajorNumbers ? "block" : "none");

      const styles = extractStyles(component, {
        fontSize: `${Math.min(fontSize, 0.18) * radius}px`,
        color,
        width: "auto",
        height: "auto",
      });

      return {
        num: component || num,
        x,
        y,
        fontSize: styles.fontSize as string,
        color: styles.color as string,
        width: styles.width as string,
        height: styles.height as string,
        display,
        style: styles,
      };
    });
  }, [
    radius,
    clockNumbersType,
    effectiveClockBorderThickness,
    effectivePrimaryNumbersFontSize,
    effectiveMajorNumbersFontSize,
    effectivePrimaryNumbersColor,
    effectiveMajorNumbersColor,
    hasPrimaryNumbers,
    hasMajorNumbers,
    PrimaryNumbersComponent,
    MajorNumbersComponent,
    theme,
  ]);
};

export default useClockNumbers;
