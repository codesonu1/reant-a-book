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
import { initialState } from "../../../../../store/store";
import { getAllBook } from "../../../../../store/bookSetup/book.thunk";

const columns = [
  { id: "SN", minWidth: 170 },

  {
    id: "Book Name",
    minWidth: 170,
  },
  {
    id: "ISBN",
    minWidth: 170,
  },
  {
    id: "No Of Pages",
    minWidth: 170,
  },

  {
    id: "Rating",
    minWidth: 170,
  },
  {
    id: "Total Stock",
    minWidth: 170,
  },
  {
    id: "Category Id",
    minWidth: 170,
  },
  {
    id: "Author Id",
    minWidth: 170,
  },
  {
    id: "Publish Date",
    minWidth: 170,
  },
  {
    id: "Action",
    minWidth: 170,
  },
];

const rows = [
  /*
  bookName,
  isbn,
  noOfPages,
  rating,
  stockCount,
  bookImage,
  categoryId,
  authorId,
  publishedDate,
  */
  {
    sn: "1",
    name: "sonu",
    isbn: "ISBN_8970R ",
  },
  {
    sn: "2",
    name: "testing",
    isbn: "ISBN_8970E",
  },
  {
    sn: "3",
    name: "testing",
    isbn: "ISBN_8970P",
  },
  {
    sn: "4",
    name: "testing",
    isbn: "ISBN_8970R",
  },
  {
    sn: "5",
    name: "testing",
    isbn: "ISBN_8970S",
  },
];

export default function BookSetupTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [book, setBook] = React.useState([]);
  const dispatch = useDispatch();
  const token = initialState.token.token;

  dispatch(getAllBook({ setBook, token }));
  console.log(book);

  return (
    <Paper
      sx={{ overflow: "hidden", overflowX: "none" }}
      className="lg:w-full md:w-[395px]"
    >
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
            {rows.map((row) => {
              return (
                <TableRow>
                  <TableCell>{row.sn}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.isbn}</TableCell>
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
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
