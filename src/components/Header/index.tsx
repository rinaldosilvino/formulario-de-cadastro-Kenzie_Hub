import { DivHeader } from "./styles";
import { ButtonExit } from "../Buttons";
import React from "react";

export const Header = () => {
  return (
    <>
      <DivHeader>
        <div id="headerHome">
          <h1>Kenziehub</h1>
          <ButtonExit />
        </div>
        <hr />
      </DivHeader>
    </>
  );
};
