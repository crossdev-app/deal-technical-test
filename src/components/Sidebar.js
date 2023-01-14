import Link from "next/link";
import React from "react";
import Sidemenu from "./Sidemenu";

const Sidebar = () => {
  return (
    <div className='c-sidebar'>
      <ul>
        <Link href='/'>
          <li className='sidemenu-active'>
            <Sidemenu
              icon={"material-symbols:home-outline-rounded"}
              title={"Home"}
            />
          </li>
        </Link>
        <Link href='/product'>
          <li>
            <Sidemenu
              icon={"fluent-mdl2:product-variant"}
              title={"Product"}
            />
          </li>
        </Link>
        <Link href='/cart'>
          <li>
            <Sidemenu
              icon={"ic:outline-shopping-cart"}
              title={"Cart"}
            />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
