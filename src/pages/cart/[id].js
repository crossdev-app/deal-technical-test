import Cartdetail from "@/components/Cartdetail";
import Layout from "@/components/Layout";
import { updatePage } from "@/features/activePageSlice";
import {
  fetchCartData,
  getDataDetailCart,
  getDataDetailCartUsers,
} from "@/features/cartSlice";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Detailcart = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { id } = router.query;
  useEffect(() => {
    if (!router.isReady) return;
    dispatch(getDataDetailCart(id));

    if (!cart.detailedCartPage.userId) return;
    dispatch(getDataDetailCartUsers(cart.detailedCartPage.userId));

    dispatch(updatePage({ title: "Cart", icon: "ic:outline-shopping-cart" }));
  }, [router.isReady, cart.detailedCartPage.userId]);

  return (
    <Layout pageTitle={"Cart Detail"}>
      <div className='d-flex'>
        <button
          className='btn btn-sm btn-outline-primary mb-2'
          onClick={() => {
            history.back();
          }}>
          <Icon
            icon='ion:chevron-back'
            style={{ fontSize: "18px", marginBottom: "3px" }}
          />{" "}
          Back
        </button>
      </div>
      <Cartdetail
        cart={cart.detailedCartPage}
        user={cart.userDetail}
      />
    </Layout>
  );
};

export default Detailcart;
