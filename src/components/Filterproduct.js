import { useDispatch, useSelector } from "react-redux";
import {
  activateFilter,
  setFilteredKey,
  setFilteredDataProduct,
} from "@/features/productSlice";

const Filterproduct = () => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const filterBy = (e) => {
    dispatch(activateFilter({ filterBy: e.target.value }));
  };
  const filterKey = (e) => {
    dispatch(setFilteredKey({ filterKey: e.target.value }));
    dispatch(setFilteredDataProduct());
  };
  return (
    <div className='d-flex align-items-center mb-3'>
      <span>Filter by :</span>
      <div className=' mx-2 col-2'>
        <select
          className='form-select form-select-sm col-2'
          onChange={(e) => {
            filterBy(e);
          }}
          defaultValue='0'>
          <option value={0}>None</option>
          <option value={1}>Brands</option>
          <option value={2}>Category</option>
        </select>
      </div>
      {product.filterStatus > 0 && (
        <div className='col-2'>
          <select
            className='form-select form-select-sm col-2'
            defaultValue='0'
            onChange={(e) => {
              filterKey(e);
            }}>
            <option value={0}>None</option>
            {product.filterStatus == 1 &&
              product.listBrand.map((itm) => (
                <option
                  key={itm}
                  value={itm}>
                  {itm}
                </option>
              ))}
            {product.filterStatus == 2 &&
              product.listCategory.map((itm) => (
                <option
                  key={itm}
                  value={itm}>
                  {itm}
                </option>
              ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Filterproduct;
