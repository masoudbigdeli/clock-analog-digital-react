import React, { useMemo } from "react";
import IconWrapper from "../../styles/components/alarm";
import AlarmIcon from "../icons/icons-component/alarm";
interface AlarmProps {
    ringFillColor: string;
    iconSize: number
    onClick: () => void
}

const AlarmRing: React.FC<AlarmProps> = ({ iconSize, ringFillColor, onClick }) => {

    return (
        <IconWrapper onClick={onClick}>
            <AlarmIcon fillColor={ringFillColor ? ringFillColor : 'yellow'} iconSize={iconSize} />
        </IconWrapper>
    );
};

export default AlarmRing;
