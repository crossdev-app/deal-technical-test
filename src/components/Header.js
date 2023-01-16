import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";

const Header = () => {
  const { title, icon } = useSelector((state) => state.activePage);

  return (
    <div className='c-header'>
      <div>
        <Icon
          icon={icon}
          className='icnyfy me-2'
        />
        <span className='text-muted'>{title}</span>
      </div>
      <div>
        <span>Hi, Admin!</span>
        <Icon
          icon='healthicons:ui-user-profile'
          className='icnyfy ms-2'
          style={{ fontSize: "30px" }}
        />
      </div>
    </div>
  );
};

export default Header;
