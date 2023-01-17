import Layout from "@/components/Layout";
import { updatePage } from "@/features/activePageSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updatePage({ title: "Cart", icon: "ic:outline-shopping-cart" }));
  });
  return (
    <Layout pageTitle={"Cart"}>
      <span>Cart Page</span>
    </Layout>
  );
};

export default index;
