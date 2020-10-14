import { Icon } from "@material-ui/core";
import React from "react";

function SidebarOption({ title, Icon }) {
  return (
    <div className="option">
      {Icon && <Icon className="option_icon"></Icon>}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SidebarOption;
