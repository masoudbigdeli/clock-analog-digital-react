import { ClockProps } from "../../models/clockInterfaces"
import AnalogClock from "./analog-clock/analog-clock"
import DigitalClock from "./digital-clock"

const Clock = (props: ClockProps) => {
    return props.clockMode === "analog"
        ? <AnalogClock {...props} />
        : <DigitalClock {...props} />
}

export default Clock
