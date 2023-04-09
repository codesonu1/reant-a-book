import React, { useState } from "react";
import MemberSetupTable from "./component/MemberSetup.tabel";
import Membersetupform from "./component/MemberSetu.form";
import Modal from "@mui/material/Modal";

const Index = () => {
  const [isOpen, setOpen] = useState(false);

  const open = () => setOpen(true);
  const close = () => setOpen(false);

  return (
    <div>
      <p className="capitalize my-4 text-[1.4rem] font-medium">Member Setup </p>
      <div className=" flex justify-end my-3 ">
        <p
          className="border-[1px] border-black  cursor-pointer  py-3 rounded-md text-center font-semibold text-[1.2rem] w-[150px]"
          onClick={open}
        >
          Create
        </p>
      </div>
      <MemberSetupTable />
      <Modal open={isOpen} onClose={close}>
        <Membersetupform />
      </Modal>
    </div>
  );
};

export default Index;
