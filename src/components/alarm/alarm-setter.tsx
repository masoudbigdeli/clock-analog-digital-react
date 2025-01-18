import { FC, useState } from "react"
import { AlarmSetterItemsWrapper, AlarmSetterItemWrapper, AlarmSetterWrapper, BtnsWrapper, SetterBtn } from "../../styles/components/alarm"

interface AlarmSetterProps {
    width: number
    top: number
    left: number
    onAlarmSet: (alarmDate: Date) => void
    onCancel: () => void
}

const AlarmSetter: FC<AlarmSetterProps> = ({ top, left, width, onAlarmSet, onCancel }) => {
    const [time, setTime] = useState("00:00");

    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTime(e.target.value);
    };

    const handleSetAlarm = () => {
        const now = new Date();
        const [hours, minutes] = time.split(":").map(Number);
        const alarmDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
        onAlarmSet(alarmDate)
    };

    return (
        <AlarmSetterWrapper width={width} top={top} left={left}>
            <input
                id="time-picker"
                type="time"
                value={time}
                onChange={handleTimeChange}
                style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    padding: "0.25rem",
                    borderRadius: "1.5rem",
                }}
            />
            <BtnsWrapper>
                <SetterBtn onClick={handleSetAlarm}>Set</SetterBtn>
                <SetterBtn onClick={onCancel} style={{backgroundColor: '#8f3636'}}>Cancel</SetterBtn>
            </BtnsWrapper>
        </AlarmSetterWrapper>
    );
};

export default AlarmSetter