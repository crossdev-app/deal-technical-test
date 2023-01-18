import Layout from "@/components/Layout";
import Productchart from "@/components/Productchart";
import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePage } from "@/features/activePageSlice";
import { fetchProductData } from "@/features/productSlice";

const Chart = () => {
  const product = useSelector((state) => state.Product);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!product.dataProduct.length) {
      dispatch(fetchProductData());
    }

    dispatch(
      updatePage({ title: "Product", icon: "fluent-mdl2:product-variant" })
    );
  });
  return (
    <Layout pageTitle='Product Chart'>
      <div className='d-flex'>
        {/* <Link href='/product'> */}
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
        {/* </Link> */}
      </div>
      <h2 className='text-center mb-3'>Product Stock</h2>
      <Productchart dataProduct={product.dataChart} />
    </Layout>
  );
};

export default Chart;
