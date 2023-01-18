import { useDispatch, useSelector } from "react-redux";
import {
  setFilteredDataProduct,
  setFilteredBrandKey,
  setMinPrice,
  setMaxPrice,
  searchProductName,
  setFilteredCategoryKey,
} from "@/features/productSlice";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Link from "next/link";

const Filterproduct = () => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const filterCategory = (e) => {
    dispatch(setFilteredCategoryKey({ filterCategoryKey: e.target.value }));
    dispatch(setFilteredDataProduct());
  };
  const filterBrand = (e) => {
    dispatch(setFilteredBrandKey({ filterBrandKey: e.target.value }));
    dispatch(setFilteredDataProduct());
  };
  const setMin = (e) => {
    dispatch(setMinPrice({ min: e.target.value }));
    dispatch(setFilteredDataProduct());
  };
  const setMax = (e) => {
    dispatch(setMaxPrice({ max: e.target.value }));
    dispatch(setFilteredDataProduct());
  };

  const queryName = (e) => {
    dispatch(searchProductName({ name: e.target.value }));
    dispatch(setFilteredDataProduct());
  };

  //   Control modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='d-flex justify-content-between align-items-center'>
      <Link href='/product/chart'>
        <button className='btn btn-sm btn-outline-danger mb-3 text-nowrap'>
          <Icon
            icon='material-symbols:insert-chart-outline-rounded'
            style={{ fontSize: "18px", marginBottom: "3px" }}
          />{" "}
          Chart
        </button>
      </Link>
      <div className='col col-sm-8 d-flex justify-content-end'>
        <div className='col-8 col-sm-4 mb-3 me-2'>
          <div className='input-group input-group-sm'>
            <span className='input-group-text'>
              <Icon icon='mingcute:search-line' />
            </span>
            <input
              type='text'
              className='form-control'
              placeholder='Search product'
              onChange={(e) => {
                queryName(e);
              }}
            />
          </div>
        </div>

        <button
          className='btn btn-sm btn-outline-info mb-3 text-nowrap'
          onClick={handleShow}>
          <Icon
            icon='material-symbols:filter-list'
            style={{ fontSize: "18px", marginBottom: "3px" }}
          />{" "}
          Filter
        </button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}>
        <Modal.Header>
          <Modal.Title>Filter Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='mb-2 d-flex justify-content-between align-items-center flex-wrap'>
            <span className='col-4'>Category</span>
            <select
              className='form-select form-select-sm col'
              defaultValue={product.filterCategoryKey}
              onChange={(e) => {
                filterCategory(e);
              }}>
              <option value={0}>All</option>
              {product.listCategory.map((itm) => (
                <option
                  key={itm}
                  value={itm}>
                  {itm}
                </option>
              ))}
            </select>
          </div>
          <div className='mb-2 d-flex justify-content-between align-items-center flex-wrap'>
            <span className='col-4'>Brand</span>
            <select
              className='form-select form-select-sm col'
              defaultValue={product.filterBrandKey}
              onChange={(e) => {
                filterBrand(e);
              }}>
              <option value={0}>All</option>
              {product.listBrand.map((itm) => (
                <option
                  key={itm}
                  value={itm}>
                  {itm}
                </option>
              ))}
            </select>
          </div>
          <div className='mb-2'>
            <span>Price range :</span>
          </div>
          <div className='d-flex justify-content-between'>
            <div className='col-5'>
              <input
                className='form-control form-control-sm col-2'
                type='number'
                pattern='[0-9]*'
                placeholder='Min'
                min='0'
                defaultValue={
                  product.filterPrice.min != null && product.filterPrice.min
                }
                onChange={(e) => {
                  setMin(e);
                }}></input>
            </div>
            <span>to</span>
            <div className='col-5'>
              <input
                className='form-control form-control-sm col-2'
                type='number'
                placeholder='Max'
                defaultValue={
                  product.filterPrice.max != null && product.filterPrice.max
                }
                min='0'
                onChange={(e) => {
                  setMax(e);
                }}></input>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className='btn btn-sm btn-success'
            onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Filterproduct;
