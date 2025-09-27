import React from "react";
import { partner } from "../data";
import Partners from "./Partners";

const Partnerships = () => {
  return (
    <div>
      <Partners partners={partner} parentClass="partners-list" />
    </div>
  );
};

export default Partnerships;
