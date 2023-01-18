import { updatePage } from "@/features/activePageSlice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import Sidemenu from "./Sidemenu";

const Sidebar = () => {
  const { title, icon, sidebarShown } = useSelector(
    (state) => state.activePage
  );

  const dispatch = useDispatch();
  const changePage = (title, icon) => {
    dispatch(updatePage({ title, icon }));
  };

  return (
    <div className={sidebarShown ? "c-sidebar c-sidebar-shown" : "c-sidebar"}>
      <ul>
        <Link
          href='/'
          onClick={() => {
            changePage("Home", "material-symbols:home-outline-rounded");
          }}>
          <li className={title === "Home" ? "sidemenu-active" : ""}>
            <Sidemenu
              icon={"material-symbols:home-outline-rounded"}
              title='Home'
            />
          </li>
        </Link>
        <Link href='/product'>
          <li className={title === "Product" ? "sidemenu-active" : ""}>
            <Sidemenu
              icon={"fluent-mdl2:product-variant"}
              title='Product'
            />
          </li>
        </Link>
        <Link
          href='/cart'
          onClick={() => {
            changePage("Cart", "ic:outline-shopping-cart");
          }}>
          <li className={title === "Cart" ? "sidemenu-active" : ""}>
            <Sidemenu
              icon={"ic:outline-shopping-cart"}
              title='Cart'
            />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
