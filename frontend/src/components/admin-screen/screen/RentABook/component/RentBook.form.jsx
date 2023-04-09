import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const RentBookform = () => {
  const [isCancel, setCancel] = useState(false);
  const cancel = () => setCancel(true);
  const [data, setData] = useState({
    book_id: "",
    member_id: "",
    no_of_days: "",
    code: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const reSet = (e) => {
    setData({
      book_id: "",
      member_id: "",
      no_of_days: "",
      code: "",
    });
  };

  return (
    <div>
      {isCancel === false ? (
        <div className="flex justify-center my-3">
          <div className="bg-white h-[430px] w-[800px]">
            <div className=" flex justify-end py-4 m-3  ">
              <p
                className="border-[1px] border-black  cursor-pointer  py-3 rounded-md text-center font-semibold text-[1.2rem] w-[150px]"
                onClick={cancel}
              >
                cancel
              </p>
            </div>
            <p className="capitalize m-4 text-[1.4rem] font-medium">
              Rent A Book
            </p>

            <div className="mx-3">
              <div>
                <div className="grid grid-cols-3 grid-flow-row gap-3  ">
                  <div>
                    <select
                      className="w-full h-full bg-white border border-[gray]"
                      onChange={handleChange}
                      name="book_id"
                      value={data.book_id}
                    >
                      <option>Book</option>

                      {book.map((item, i) => {
                        return <option className="py-2">{item.name}</option>;
                      })}
                    </select>
                  </div>
                  <div>
                    <select
                      className="w-full h-full bg-white border border-[gray]"
                      onChange={handleChange}
                      name="member_id"
                      value={data.member_id}
                    >
                      <option>Member</option>
                      {member.map((item, i) => {
                        return <option className="py-2">{item.name}</option>;
                      })}
                    </select>
                  </div>

                  <div>
                    <TextField
                      id="outlined-basic"
                      label="Code"
                      name="code"
                      type="text"
                      value={data.code}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </div>
                  <div>
                    <TextField
                      id="outlined-basic"
                      label="No of Pages"
                      name="no_of_days"
                      type="number"
                      value={data.no_of_days}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 justify-start  m-3 py-3">
              <p className="border border-[red] bg-[#F8CECC] px-4 py-2 w-[150px] text-center rounded-[4px] cursor-pointer">
                Save
              </p>
              <p
                className="border border-[green] bg-[#D5E8D4] px-4 py-2 w-[150px] text-center rounded-[4px] cursor-pointer"
                onClick={reSet}
              >
                Reset
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const book = [
  {
    name: "book1",
  },
  {
    name: "book2",
  },
  {
    name: "book3",
  },
  {
    name: "book4",
  },
];
const member = [
  {
    name: "member1",
  },
  {
    name: "member2",
  },
  {
    name: "member3",
  },
  {
    name: "member4",
  },
];

export default RentBookform;
