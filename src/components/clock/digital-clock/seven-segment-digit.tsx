import React, { useCallback, useMemo } from "react";
import { useTheme } from "@emotion/react";
import AppThemeModel from "../../../models/theme-model";

declare module "@emotion/react" {
  export interface Theme extends AppThemeModel {}
}

type SevenSegmentDigitProps = {
  segmentsOn: boolean[];
  activeSegmentColor: string;
  inactiveSegmentColor: string;
};

const SevenSegmentDigit: React.FC<SevenSegmentDigitProps> = ({ segmentsOn, activeSegmentColor, inactiveSegmentColor }) => {
  const theme = useTheme();

  if (segmentsOn.length !== 7) {
    throw new Error("segmentsOn must have exactly 7 boolean values.");
  }

  // Memoized colors based on props and theme
  const activeColor = useMemo(
    () => activeSegmentColor || theme.color?.digitalClockColors?.activeSegment || "black",
    [activeSegmentColor, theme.color?.digitalClockColors?.activeSegment]
  );

  const inactiveColor = useMemo(
    () => inactiveSegmentColor || theme.color?.digitalClockColors?.inactiveSegment || "gray",
    [inactiveSegmentColor, theme.color?.digitalClockColors?.inactiveSegment]
  );

  // Callback for determining the fill color of a segment
  const getFillColor = useCallback(
    (isOn: boolean) => (isOn ? activeColor : inactiveColor),
    [activeColor, inactiveColor]
  );

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 250" style={{ width: "100%" }}>
      {/* Top segment */}
      <polygon
        points="25,0 115,0 125,10 105,30 35,30 15,10"
        stroke="black"
        strokeWidth="0"
        fill={getFillColor(segmentsOn[0])}
      />

      {/* Top left segment */}
      <polygon
        points="0,25 0,115 10,125 30,105 30,35 10,15"
        stroke="black"
        strokeWidth="0"
        fill={getFillColor(segmentsOn[1])}
      />

      {/* Bottom left segment */}
      <polygon
        points="0,135 0,225 10,235 30,215 30,145 10,125"
        stroke="black"
        strokeWidth="0"
        fill={getFillColor(segmentsOn[2])}
      />

      {/* Bottom right segment */}
      <polygon
        points="140,225 140,135 130,125 110,145 110,215 130,235"
        stroke="black"
        strokeWidth="0"
        fill={getFillColor(segmentsOn[3])}
      />

      {/* Top right segment */}
      <polygon
        points="140,115 140,25 130,15 110,35 110,105 130,125"
        stroke="black"
        strokeWidth="0"
        fill={getFillColor(segmentsOn[4])}
      />

      {/* Bottom segment */}
      <polygon
        points="115,250 25,250 15,240 35,220 105,220 125,240"
        stroke="black"
        strokeWidth="0"
        fill={getFillColor(segmentsOn[5])}
      />

      {/* Center segment */}
      <polygon
        points="35,110 105,110 120,125 105,140 35,140 20,125"
        stroke="black"
        strokeWidth="0"
        fill={getFillColor(segmentsOn[6])}
      />
    </svg>
  );
};

export default SevenSegmentDigit;
