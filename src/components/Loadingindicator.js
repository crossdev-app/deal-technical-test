import { Icon } from "@iconify/react";
import React from "react";

const Loadingindicator = ({ txt }) => {
  return (
    <div className='loading-indicator'>
      <Icon
        icon={"eos-icons:loading"}
        style={{ fontSize: "24px" }}
        className="mb-2"
      />
      <span>Loading {txt} ...</span>
    </div>
  );
};

export default Loadingindicator;
