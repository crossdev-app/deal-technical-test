import { setDetailedCartPage } from "@/features/cartSlice";
import { useRouter } from "next/router";
import React from "react";
import DataTable from "react-data-table-component";
import { useDispatch } from "react-redux";
const columns = [
  {
    name: "Cart ID",
    selector: (row) => "# " + row.id,
    width: "25%",
  },
  {
    name: "Total Product",
    selector: (row) => row.totalProducts,
    width: "25%",
    center: true,
  },
  {
    name: "Total Item",
    selector: (row) => row.totalQuantity + " pcs",
    width: "25%",
    center: true,
  },
  // {
  //   name: "Discount",
  //   selector: (row) =>
  //     "$ " + new Intl.NumberFormat("en-US").format(row.discountedTotal),
  //   width: "20%",
  // },
  {
    name: "Total Price",
    selector: (row) =>
      "$ " + new Intl.NumberFormat("en-US").format(row.discountedTotal),
    width: "25%",
  },
];

const paginationComponentOptions = {
  rowsPerPageText: "Cart per page",
};

const Tablecart = ({ dataCart }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const showDetail = (row) => {
    dispatch(setDetailedCartPage({ detailedCart: row }));
    router.push(`/cart/${row.id}`);
  };

  return (
    <DataTable
      columns={columns}
      data={dataCart}
      pagination
      fixedHeader
      fixedHeaderScrollHeight='69vh'
      paginationRowsPerPageOptions={[5, 10, 15, 20, 25]}
      highlightOnHover={true}
      pointerOnHover={true}
      paginationComponentOptions={paginationComponentOptions}
      responsive={true}
      onRowClicked={(row, ev) => {
        ev.preventDefault();
        showDetail(row);
      }}
    />
  );
};

export default Tablecart;
