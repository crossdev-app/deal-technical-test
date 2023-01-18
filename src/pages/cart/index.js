import Layout from "@/components/Layout";
import Loadingindicator from "@/components/Loadingindicator";
import Tablecart from "@/components/Tablecart";
import { updatePage } from "@/features/activePageSlice";
import { fetchCartData } from "@/features/cartSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const index = () => {
  const cart = useSelector((state) => state.Cart);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!cart.dataCart.length) {
      dispatch(fetchCartData());
    }
    dispatch(updatePage({ title: "Cart", icon: "ic:outline-shopping-cart" }));
  }, []);
  return (
    <Layout pageTitle={"Cart"}>
      {cart.loading && <Loadingindicator txt={"cart"} />}
      {!cart.loading && cart.error ? <div>Error: {cart.error}</div> : null}
      {!cart.loading && cart.dataCart.length ? (
        <Tablecart dataCart={cart.dataCart} />
      ) : null}
    </Layout>
  );
};

export default index;
