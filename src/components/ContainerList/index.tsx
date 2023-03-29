import { DivContainer } from "./styles";
import { ButtonOpenModalTech } from "../Buttons";
import { TechList } from "../TechList";
import React from "react";

export const ContainerList = () => {
    return (
    <DivContainer>
        <div id="divHeaderTech">
            <h2>Tecnologias</h2>
            <ButtonOpenModalTech/>
        </div>
            <TechList />
    </DivContainer>
);
};