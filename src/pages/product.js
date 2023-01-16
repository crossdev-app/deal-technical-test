import Layout from "@/components/Layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "@/features/productSlice";
import Tableproducts from "@/components/Tableproducts";

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
        // <ul>
        //   {product.dataProduct.map((product) => (
        //     <li key={product.id}>{product.title}</li>
        //   ))}
        // </ul>
        <Tableproducts dataProduct={product.dataProduct} />
      ) : null}
    </Layout>
  );
};

export default product;
