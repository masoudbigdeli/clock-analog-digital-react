
# Clock React Component

`clock-analog-digital-react` is a React component that provides two modes for displaying a clock: **Analog** and **Digital**. All inner components are customizable by the user, and you can easily configure your desired clock.

![Analog Mode](./public/analog-d-b.jpg?raw=true "Analog Mode")
![Digital Mode](./public/digital-d-r.jpg?raw=true "Digital Mode")

You can view a live demo and configure your clock [here](https://react-clock-analog-digital-demo.vercel.app).

## Installation

To install the package, run the following command:

```bash
npm i clock-analog-digital-react
```

## Importing the Component

You can import the `Clock` component into your React project like this:

```typescript
import Clock from 'clock-analog-digital-react';
```

## Usage

### Analog Clock

To display the analog clock, set the `clockMode` prop to `'analog'`.

```tsx
import Clock from 'clock-analog-digital-react';

const App = () => {
  return (
    <Clock clockMode="analog" />
  );
};

export default App;
```

### Digital Clock

To display the digital clock, set the `clockMode` prop to `'digital'`.

```tsx
import Clock from 'clock-analog-digital-react';

const App = () => {
  return (
    <Clock clockMode="digital" />
  );
};

export default App;
```

## Props

Below is a list of available props for both **Analog** and **Digital** clocks. The `clockMode` prop must be either `'analog'` or `'digital'`.

| Prop Name                     | Type                                      | Description                                                                 |
|-------------------------------|-------------------------------------------|-----------------------------------------------------------------------------|
| `clockMode`                    | `'analog' \| 'digital'`                  | Mode for the clock. Choose either `'analog'` or `'digital'`.                |

### Analog Clock Props

| Prop Name                     | Type                                      | Description                                                                 |
|-------------------------------|-------------------------------------------|-----------------------------------------------------------------------------|
| `analogColorThemeMode`         | `string`                                  | Defines the color theme for the analog clock (`'DARK'`, `'LIGHT', 'BLUE_DARK','RED_DARK','AUTUMN'`).|
| `clockBorderThikness`          | `number`                                  | Defines the thickness of the analog clock's border.                         |
| `clockNumbersType`             | `string`                                  | Defines the numbering system for the analog clock (e.g., `'ENGLISH'`, `'ROMAN'`). |
| `clockLogoSrcAndOffset`        | `{ cmp: React.ReactNode; offset: number }` | Defines a logo component and its offset position on the analog clock.        |
| `hasPrimaryTicks`              | `boolean`                                 | Whether the analog clock shows primary ticks (default: `false`).             |
| `hasMajorTicks`                | `boolean`                                 | Whether the analog clock shows major ticks (default: `false`).               |
| `hasMinorTicks`                | `boolean`                                 | Whether the analog clock shows minor ticks (default: `false`).               |
| `hasPrimaryNumbers`            | `boolean`                                 | Whether the analog clock shows primary numbers (default: `false`).           |
| `hasMajorNumbers`              | `boolean`                                 | Whether the analog clock shows major numbers (default: `false`).             |
| `majorNumbersFontSize`         | `number`                                  | Defines the font size for major numbers on the analog clock.                 |
| `primaryNumbersFontSize`       | `number`                                  | Defines the font size for primary numbers on the analog clock.               |
| `majorNumbersColor`            | `string`                                  | Defines the color of the major numbers (e.g., `'#FFFFFF'`).                  |
| `primaryNumbersColor`          | `string`                                  | Defines the color of the primary numbers (e.g., `'#e6272d'`).                |
| `UserPrimaryTicksComponent`    | `React.ReactNode`                         | Custom component for primary ticks.                                          |
| `UserMajorTicksComponent`      | `React.ReactNode`                         | Custom component for major ticks.                                            |
| `UserMinorTicksComponent`      | `React.ReactNode`                         | Custom component for minor ticks.                                            |
| `PrimaryNumbersComponent`      | `React.ReactNode`                         | Custom component for primary numbers.                                        |
| `MajorNumbersComponent`        | `React.ReactNode`                         | Custom component for major numbers.                                          |
| `ClockCenterComponent`         | `React.ReactNode`                         | Custom component for the clock center.                                       |

### Digital Clock Props

| Prop Name                     | Type                                      | Description                                                                 |
|-------------------------------|-------------------------------------------|-----------------------------------------------------------------------------|
| `digitalColorThemeMode`        | `string`                                  | Defines the color theme for the digital clock (`'DARK'`, `'LIGHT', 'BLUE_DARK','RED_DARK','AUTUMN'`).|
| `padding`                      | `number`                                  | Defines the padding around the digital clock.                               |
| `twentyFourHours`              | `boolean`                                 | Whether the digital clock shows in 24-hour format (default: `false`).        |
| `backgroundColor`              | `string`                                  | Defines the background color of the digital clock.                          |
| `activeSegmentColor`           | `string`                                  | Defines the color of the active segment in the digital clock.                |
| `inactiveSegmentColor`         | `string`                                  | Defines the color of the inactive segments in the digital clock.             |
| `dotsColor`                    | `string`                                  | Defines the color of the dots in the digital clock.                          |
| `digitalClockLogoComponent`    | `React.ReactNode`                         | Custom logo component for the digital clock.                                |


