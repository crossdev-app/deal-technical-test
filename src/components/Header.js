import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";

const Header = () => {
  const { pageTitle, pageIcon } = useSelector((state) => state.activePage);

  return (
    <div className='c-header'>
      <div>
        <Icon
          icon={pageIcon}
          className='icnyfy me-2'
        />
        <span className='text-muted'>{pageTitle}</span>
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
