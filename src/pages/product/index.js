import Layout from "@/components/Layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "@/features/productSlice";
import Tableproducts from "@/components/Tableproducts";
import Filterproduct from "@/components/Filterproduct";
import { updatePage } from "@/features/activePageSlice";
import Loadingindicator from "@/components/Loadingindicator";

const Product = () => {
  const product = useSelector((state) => state.Product);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!product.dataProduct.length) {
      dispatch(fetchProductData());
    }
    dispatch(
      updatePage({ title: "Product", icon: "fluent-mdl2:product-variant" })
    );
  }, []);

  return (
    <Layout pageTitle='Product'>
      {product.loading && <Loadingindicator txt={"product"} />}
      {!product.loading && product.error ? (
        <div>Error: {product.error}</div>
      ) : null}
      {!product.loading && product.dataProduct.length ? (
        <>
          <Filterproduct />

          <Tableproducts
            dataProduct={
              product.filterBrandKey != 0 ||
              product.filterCategoryKey != 0 ||
              product.filterPrice.min !== null ||
              product.filterPrice.max !== null ||
              product.queryProductName !== null
                ? product.filteredDataProduct
                : product.dataProduct
            }
          />
        </>
      ) : null}
    </Layout>
  );
};

export default Product;
