import React from "react";
import { Input } from "./Input";
import { Selection } from "./Selection";
import { IReadonlyProps } from "../interfaces";

export const PartComponent: React.FC<IReadonlyProps> = ({ isReadonly }) => {
  return (
    <div className={"w-1/2 mx-2"}>
      <Input isReadonly={isReadonly} />
      <Selection isReadonly={isReadonly} />
    </div>
  );
};
