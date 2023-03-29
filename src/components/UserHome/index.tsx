import { DivUserHome } from "./styles";
import React from "react";
import { IUser } from "../../contexts/AuthContext";

interface IUserHomeProps{
    userData: IUser;
}

export const UserHome= ({userData}: IUserHomeProps) => {
    return (
        <>
        <DivUserHome>
            <div id="userHome">
                <h2>Olá, {userData.name}</h2>
                <span>{userData.course_module}</span>
            </div>
            <hr />
        </DivUserHome>
        </>
    );
}
;