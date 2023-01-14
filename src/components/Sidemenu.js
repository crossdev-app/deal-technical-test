import { Icon } from "@iconify/react";
import React from "react";

const Sidemenu = ({ icon, title }) => {
  return (
    <div className='c-sidemenu'>
      <Icon
        icon={icon}
        className='c-side-menu-icon'
      />
      <span>{title}</span>
    </div>
  );
};

export default Sidemenu;
