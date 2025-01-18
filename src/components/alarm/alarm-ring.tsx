import React, { useMemo } from "react";
import IconWrapper from "../../styles/components/alarm";
import AlarmIcon from "../icons/icons-component/alarm";
import AppThemeModel from "../../models/theme-model";
import appTheme from "../../configs/theme";
import THEME_MODE from "../../enums/theme-mode";

interface AlarmProps {
    themeMode: `${THEME_MODE}`;
    iconSize: number
    onClick: () => void
}

const AlarmRing: React.FC<AlarmProps> = ({ themeMode, iconSize, onClick }) => {
    const theme: AppThemeModel = useMemo(() => appTheme(themeMode), [themeMode]);

    return (
        <IconWrapper onClick={onClick}>
            <AlarmIcon fillColor={theme?.color.analogClockColors.ringColor} iconSize={iconSize}/>
            {/* <AlarmIcon fillColor='white' /> */}
        </IconWrapper>
    );
};

export default AlarmRing;
