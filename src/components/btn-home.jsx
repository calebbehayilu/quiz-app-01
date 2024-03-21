import Link from "next/link";
import React from "react";

const BtnHome = ({ name, link, icon }) => {
  return (
    <Link href={`${link}`} className="flex items-center text-slate-200">
      {icon} <div className="px-2">{name}</div>
    </Link>
  );
};

export default BtnHome;
