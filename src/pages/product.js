import Layout from "@/components/Layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "@/features/productSlice";
import Tableproducts from "@/components/Tableproducts";
import Filterproduct from "@/components/Filterproduct";

const product = () => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!product.dataProduct.length) {
      dispatch(fetchProductData());
    }
  }, []);

  return (
    <Layout pageTitle='Product'>
      {product.loading && <div>Loading product</div>}
      {!product.loading && product.error ? (
        <div>Error: {product.error}</div>
      ) : null}
      {!product.loading && product.dataProduct.length ? (
        <>
          <Filterproduct />

          <Tableproducts
            dataProduct={
              product.filterStatus > 0 && product.filterKey !== 0
                ? product.filteredDataProduct
                : product.dataProduct
            }
          />
        </>
      ) : null}
    </Layout>
  );
};

export default product;
