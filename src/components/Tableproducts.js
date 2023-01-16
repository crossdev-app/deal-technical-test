import React from "react";
import DataTable from "react-data-table-component";
const columns = [
  {
    name: "Product Name",
    selector: (row) => row.title,
    width: "30%",
  },
  {
    name: "Brand",
    selector: (row) => row.brand,
    width: "20%",
  },
  {
    name: "Price",
    selector: (row) => "$ " + new Intl.NumberFormat("en-US").format(row.price),
    width: "20%",
  },
  {
    name: "Stock",
    selector: (row) => row.stock,
    width: "10%",
    center: true,
  },
  {
    name: "Category",
    selector: (row) => row.category,
    width: "20%",
    center: true,
  },
];

const paginationComponentOptions = {
  rowsPerPageText: "Product per page",
};

const Tableproducts = ({ dataProduct }) => {
  return (
    <DataTable
      columns={columns}
      data={dataProduct}
      pagination
      fixedHeader
      fixedHeaderScrollHeight='69vh'
      paginationRowsPerPageOptions={[5, 10, 15, 20, 25]}
      highlightOnHover={true}
      paginationComponentOptions={paginationComponentOptions}
      responsive={true}
    />
  );
};

export default Tableproducts;
