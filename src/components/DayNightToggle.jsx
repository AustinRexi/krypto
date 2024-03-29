import React from "react";
import { Switch } from "antd";

const DayNightToggle = ({ theme, toggleTheme }) => {
  return (
    <div style={{ padding: "5px" }}>
      <span style={{ marginRight: "120px" }}>Day</span>
      <Switch
        checked={theme === "night"}
        onChange={toggleTheme}
        checkedChildren="Night"
        unCheckedChildren="Day"
      />
      <span style={{ marginLeft: "20px" }}>Night</span>
    </div>
  );
};

export default DayNightToggle;
