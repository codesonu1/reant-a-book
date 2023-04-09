import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { AiOutlineDelete, AiFillEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { getAllCategorie } from "../../../../../store/category/category.thunk";
import { initialState } from "../../../../../store/store";

const columns = [
  { id: "SN", minWidth: 170 },

  {
    id: "Name",
    minWidth: 170,
  },
  {
    id: "Description",
    minWidth: 170,
  },

  {
    id: "Action",
    minWidth: 170,
  },
];

export default function CategorySetupTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [categorie, setCategorie] = React.useState([]);
  const dispatch = useDispatch();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const token = initialState.token.token;
  dispatch(getAllCategorie({ token, setCategorie }));
  console.log(categorie);

  return (
    <Paper sx={{ overflow: "hidden" }} className="lg:w-[100%] md:w-[395px]">
      <TableContainer sx={{ maxHeight: 270, maxWidth: "100%" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.id}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {categorie.map((row) => {
              return (
                <TableRow>
                  <TableCell>{row.categoryId}</TableCell>
                  <TableCell>{row.categoryName}</TableCell>
                  <TableCell>{row.categoryDescription}</TableCell>
                  <TableCell className="flex gap-4">
                    <p>
                      <AiOutlineDelete className="text-[red] hover:bg-[gray] text-[2rem] hover:border hover:rounded-full hover:p-1 hover:cursor-pointer hover:opacity-70 " />
                    </p>
                    <p>
                      <AiFillEdit className="text-[blue]   hover:bg-[gray] text-[2rem] hover:border hover:rounded-full hover:p-1 hover:cursor-pointer hover:opacity-70" />
                    </p>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={categorie.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
