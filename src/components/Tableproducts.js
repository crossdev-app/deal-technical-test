import React from "react";
import DataTable from "react-data-table-component";
const columns = [
  //   {
  //     name: "No",
  //     selector: (row, index) => index + 1,
  //   },
  {
    name: "Name",
    selector: (row) => row.title,
  },
  {
    name: "Brand",
    selector: (row) => row.brand,
  },
  {
    name: "Price",
    selector: (row) =>
      new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "USD",
      }).format(row.price),
    width: "20%",
  },
  {
    name: "Stock",
    selector: (row) => row.stock,
    width: "10%",
    center: true,
  },
];

const paginationComponentOptions = {
  rowsPerPageText: "Product per page",
};

const Tableproducts = ({ dataProduct }) => {
  return (
    // <>
    //   <table className='table table-sm table-striped table-bordered'>
    //     <thead>
    //       <tr className='table-info'>
    //         <th className='fit p-2'>No</th>
    //         <th className='p-2'>Name</th>
    //         <th className='p-2 text-center'>Brands</th>
    //         <th className='p-2'>Price</th>
    //         <th className='p-2 text-center'>Stock</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {dataProduct.map((p, i) => (
    //         <tr>
    //           <td className='fit text-end'>{i + 1}.</td>
    //           <td className='text-nowrap'>{p.title}</td>
    //           <td className='text-center text-nowrap'>{p.brand}</td>
    //           <td>$ {p.price}</td>
    //           <td className='text-center'>{p.stock}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </>

    <DataTable
      columns={columns}
      data={dataProduct}
      pagination
      fixedHeader
      fixedHeaderScrollHeight='75vh'
      paginationRowsPerPageOptions={[5, 10, 15, 20, 25]}
      highlightOnHover={true}
      paginationComponentOptions={paginationComponentOptions}
    />
  );
};

export default Tableproducts;
