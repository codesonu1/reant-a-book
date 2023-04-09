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
import { api } from "../../../../../utils/api";
import { initialState } from "../../../../../store/store";
import { useDispatch } from "react-redux";
import {
  dltItemById,
  getAllAuthor,
} from "../../../../../store/author/author.thunk";

const columns = [
  { id: "authorId", minWidth: 170 },

  {
    id: "authorName",
    minWidth: 170,
  },
  {
    id: "authorEmail",
    minWidth: 170,
  },
  {
    id: "authorMobile",
    minWidth: 170,
  },
  {
    id: "Action",
    minWidth: 170,
  },
];

export default function AuthSetupTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [author, setAuthor] = React.useState([]);

  const token = initialState.token.token;
  console.log(token);

  const dispatch = useDispatch();
  dispatch(getAllAuthor({ setAuthor, token }));
  console.log(author);

  const deleteItem = ({ id }) => {
    console.log("hit", id);
    dispatch(dltItemById({ id, token }));
  };

  return (
    <Paper sx={{ overflow: "hidden" }} className="lg:w-[100%] md:w-[395px]">
      <TableContainer sx={{ maxHeight: 250, maxWidth: "100%" }}>
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
            {author.map((row, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{row.authorId}</TableCell>
                  <TableCell>{row.authorName}</TableCell>
                  <TableCell>{row.authorEmail}</TableCell>
                  <TableCell>{row.authorMobile}</TableCell>
                  <TableCell className="flex gap-4">
                    <p>
                      <AiOutlineDelete
                        className="text-[red] hover:bg-[gray] text-[2rem] hover:border hover:rounded-full hover:p-1 hover:cursor-pointer hover:opacity-70 "
                        onClick={() => deleteItem({ id: row.authorId })}
                      />
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
        count={author.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
