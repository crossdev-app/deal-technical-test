import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <div className='c-header'>
      <div>
        <Icon
          icon='material-symbols:home-outline-rounded'
          className='icnyfy me-2'
        />
        <span className='text-muted'>Home</span>
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
