import { toggleSidebar } from "@/features/activePageSlice";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const { title, icon } = useSelector((state) => state.activePage);
  const dispatch = useDispatch();

  return (
    <div className='c-header'>
      <Icon
        onClick={() => {
          dispatch(toggleSidebar());
        }}
        icon='charm:menu-hamburger'
        className='sidebar-toggler me-3'
      />
      <div>
        <Icon
          icon={icon}
          className='icnyfy me-2'
        />
        <span className='text-muted'>{title}</span>
      </div>
      <div>
        <span className='header-profile-text'>Hi, Admin!</span>
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
