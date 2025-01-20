# Clock React Component

clock-analog-digital-react is a React component that provides two modes for displaying a clock: **Analog** and **Digital**. All inner components are customizable by the user, and you can easily configure your desired clock.

You can view a live demo and configure your clock [here](https://react-clock-analog-digital-demo.vercel.app).

## Installation

To install the package, run the following command:

bash
npm i clock-analog-digital-react


## Importing the Component

You can import the Clock component into your React project like this:

typescript
import Clock from 'clock-analog-digital-react';


## Usage

### Analog Clock

To display the analog clock, set the clockMode prop to 'analog'.

tsx
import Clock from 'clock-analog-digital-react';

const App = () => {
  return (
    <Clock clockMode="analog" />
  );
};

export default App;


### Digital Clock

To display the digital clock, set the clockMode prop to 'digital'.

tsx
import Clock from 'clock-analog-digital-react';

const App = () => {
  return (
    <Clock clockMode="digital" />
  );
};

export default App;

## Props

Below is a list of available props for both **Analog** and **Digital** clocks. The `clockMode` prop must be either `'analog'` or `'digital'`.

| Prop Name                     | Type                                      | Description                                                                 |
|-------------------------------|-------------------------------------------|-----------------------------------------------------------------------------|
| `clockMode`                    | `'analog' \| 'digital'`                  | Mode for the clock. Choose either `'analog'` or `'digital'`.                |

### Analog Clock Props

| Prop Name                     | Type                                      | Description                                                                 |
|-------------------------------|-------------------------------------------|-----------------------------------------------------------------------------|
| `colorConfiguration`           | `AnalogClockColorConfiguration`           | Defines the color configuration for the analog clock.                       |
| `clockBorderThickness`         | `number`                                  | Defines the thickness of the analog clock's border.                         |
| `clockNumbersType`             | `string`                                  | Defines the numbering system for the analog clock (e.g., `'ENGLISH'`, `'ROMAN'`). |
| `clockLogoSrcAndOffset`        | `{ cmp: React.ReactNode; offset: number }` | Defines a logo component and its offset position on the analog clock.        |
| `hasPrimaryTicks`              | `boolean`                                 | Whether the analog clock shows primary ticks (default: `false`).             |
| `hasMajorTicks`                | `boolean`                                 | Whether the analog clock shows major ticks (default: `false`).               |
| `hasMinorTicks`                | `boolean`                                 | Whether the analog clock shows minor ticks (default: `false`).               |
| `hasPrimaryNumbers`            | `boolean`                                 | Whether the analog clock shows primary numbers (default: `false`).           |
| `hasMajorNumbers`              | `boolean`                                 | Whether the analog clock shows major numbers (default: `false`).             |
| `majorNumbersFontSize`         | `number`                                  | Defines the font size for major numbers on the analog clock.                 |
| `primaryNumbersFontSize`       | `number`                                  | Defines the font size for primary numbers on the analog clock.               |
| `UserPrimaryTicksComponent`    | `React.ReactNode`                         | Custom component for primary ticks.                                          |
| `UserMajorTicksComponent`      | `React.ReactNode`                         | Custom component for major ticks.                                            |
| `UserMinorTicksComponent`      | `React.ReactNode`                         | Custom component for minor ticks.                                            |
| `PrimaryNumbersComponent`      | `React.ReactNode`                         | Custom component for primary numbers.                                        |
| `MajorNumbersComponent`        | `React.ReactNode`                         | Custom component for major numbers.                                          |
| `ClockCenterComponent`         | `React.ReactNode`                         | Custom component for the clock center.                                       |

### Digital Clock Props

| Prop Name                     | Type                                      | Description                                                                 |
|-------------------------------|-------------------------------------------|-----------------------------------------------------------------------------|
| `colorConfiguration`           | `DigitalClockColorConfiguration`          | Defines the color configuration for the digital clock.                      |
| `twentyFourHours`              | `boolean`                                 | Whether the digital clock shows in 24-hour format (default: `false`).        |
| `padding`                      | `number`                                  | Defines the padding around the digital clock.                               |

---

## Color Configuration

The `colorConfiguration` prop changes depending on whether the clock is set to **Analog** or **Digital** mode.

### AnalogClockColorConfiguration

This configuration controls various aspects of the analog clock's appearance, including the colors of the hands, numbers, ticks, and the clock background. Here's a detailed list of the available fields:

| Prop Name                   | Type    | Description                                                          |
|-----------------------------|---------|----------------------------------------------------------------------|
| `clockBackgroundColor`       | `string`| Defines the background color of the analog clock.                    |
| `clockBorderColor`           | `string`| Defines the color of the analog clock's border.                      |
| `hourHandColor`              | `string`| Defines the color of the hour hand.                                  |
| `minuteHandColor`            | `string`| Defines the color of the minute hand.                                |
| `secondHandColor`            | `string`| Defines the color of the second hand.                                |
| `majorNumbersColor`          | `string`| Defines the color of the major numbers on the clock.                 |
| `primaryNumbersColor`        | `string`| Defines the color of the primary numbers on the clock.               |
| `primaryTicksColor`          | `string`| Defines the color of the primary ticks on the clock.                 |
| `majorTicksColor`            | `string`| Defines the color of the major ticks on the clock.                   |
| `minorTicksColor`            | `string`| Defines the color of the minor ticks on the clock.                   |
| `centerCircleColor`          | `string`| Defines the color of the center circle of the analog clock.          |
| `alarmRingColor`             | `string`| Defines the color of the alarm ring (if any).                        |

### DigitalClockColorConfiguration

This configuration controls the colors specific to the digital clock's segments and display. Here's a breakdown:

| Prop Name                   | Type    | Description                                                          |
|-----------------------------|---------|----------------------------------------------------------------------|
| `backgroundColor`            | `string`| Defines the background color of the digital clock.                   |
| `activeSegmentColor`         | `string`| Defines the color of the active segments in the digital display.      |
| `inactiveSegmentColor`       | `string`| Defines the color of the inactive segments in the digital display.    |
| `dotsColor`                  | `string`| Defines the color of the dots (used for separating hours, minutes, etc.). |
| `alarmRingColor`             | `string`| Defines the color of the alarm ring for the digital clock.           |

---
