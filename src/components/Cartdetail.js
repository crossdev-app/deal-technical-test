import React from "react";
import { useSelector } from "react-redux";

const Cartdetail = ({ userProps, cartProps }) => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className='c-card'>
      <h4>Cart Detail</h4>
      <p className='sub-info'>Customer Info :</p>
      <div className='cust-box'>
        <table className='ms-4 table table-sm table-borderless'>
          <tbody>
            <tr>
              <td
                width={"5%"}
                className='text-muted'>
                Name
              </td>
              <td
                width={"1%"}
                className='text-muted'>
                :
              </td>
              <td width={"44%"}>
                {cart.userDetail.firstName + " " + cart.userDetail.lastName}
              </td>
              <td className='text-muted'>Address :</td>
            </tr>
            <tr>
              <td
                width={25}
                className='text-muted'>
                Phone
              </td>
              <td
                width={1}
                className='text-muted'>
                :
              </td>
              <td>{cart.userDetail.phone}</td>
              <td rowSpan={2}>
                {cart.userDetail.address.address},{" "}
                {cart.userDetail.address.city} <br></br>{" "}
                {cart.userDetail.address.postalCode}
              </td>
            </tr>
            <tr>
              <td
                width={25}
                className='text-muted'>
                Email
              </td>
              <td
                width={1}
                className='text-muted'>
                :
              </td>
              <td>{cart.userDetail.email}</td>{" "}
            </tr>
          </tbody>
        </table>
      </div>

      <p className='sub-info mb-2'>Order List :</p>
      <table className='table table-sm table-striped'>
        <thead>
          <tr>
            <th className='fit p-2'>No</th>
            <th className='p-2'>Product Name</th>
            <th className='fit p-2 text-center'>Qty</th>
            <th className='p-2 text-end'>Total</th>
            <th className='p-2 text-center'>Discount</th>
            <th className='fit p-2 text-end'>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.detailedCartPage.products.map((pr, index) => (
            <tr key={pr.id}>
              <td className='text-end p-2'>{index + 1}.</td>
              <td className='p-2'>{pr.title}</td>
              <td className='p-2 text-center'>{pr.quantity}</td>
              <td className='p-2 text-end'>$ {pr.total}</td>
              <td className='p-2 text-center'>{pr.discountPercentage}%</td>
              <td className='fit p-2 text-end text-nowrap'>
                $ {pr.discountedPrice}
              </td>
            </tr>
          ))}
          <tr>
            <td
              colSpan='2'
              className='py-3 text-end fw-bold'>
              Total Qty :
            </td>
            <td className='py-3 text-center fw-bold'>
              {cart.detailedCartPage.totalQuantity}
            </td>
            <td
              colSpan='2'
              className='py-3 text-end fw-bold'>
              Payment Amount :
            </td>
            <td className='py-3 text-end fw-bold text-nowrap'>
              ${" "}
              {new Intl.NumberFormat("en-US").format(
                cart.detailedCartPage.discountedTotal
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cartdetail;
