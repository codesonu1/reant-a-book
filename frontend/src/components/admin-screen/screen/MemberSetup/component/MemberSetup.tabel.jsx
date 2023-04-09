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
import { initialState } from "../../../../../store/store";
import { useDispatch } from "react-redux";
import { getAllMember } from "../../../../../store/member/member.thunk";

const columns = [
  { id: "SN", minWidth: 170 },

  {
    id: "Name",
    minWidth: 170,
  },
  {
    id: "Email",
    minWidth: 170,
  },
  {
    id: "Mobile",
    minWidth: 170,
  },
  {
    id: "Address",
    minWidth: 170,
  },
  {
    id: "Action",
    minWidth: 170,
  },
];

const rows = [
  {
    sn: "1",
    name: "sonu",
    email: "sonu@gmail.com",
    phone: 9807063379,
  },
  {
    sn: "2",
    name: "testing",
    email: "testing@gmail.com",
    phone: 9807063379,
  },
  {
    sn: "3",
    name: "testing",
    email: "testing@gmail.com",
    phone: 9807063379,
  },
  {
    sn: "4",
    name: "testing",
    email: "testing@gmail.com",
    phone: 9807063379,
  },
  {
    sn: "5",
    name: "testing",
    email: "testing@gmail.com",
    phone: 9807063379,
  },
];

export default function MemberSetupTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [member, setMember] = React.useState([]);

  const token = initialState.token.token;
  console.log(token);
  const dispatch = useDispatch();

  dispatch(getAllMember({ setMember, token }));
  console.log(member);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
            {member.map((row) => {
              return (
                <TableRow>
                  <TableCell>{row.memberId}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.mobileNo}</TableCell>
                  <TableCell>{row.address}</TableCell>
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
        count={member.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
