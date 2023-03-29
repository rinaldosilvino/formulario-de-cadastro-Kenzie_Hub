import { SelectStyle } from "./styles";
import React from "react";
import { IInputProps } from "../Input";

export const SelectModulesCourse = ({ register, errors }: IInputProps) => {
    return (
    <>
        <label htmlFor="select">Selecionar módulo</label>
        <SelectStyle name="select" id="select" {...register("course_module")}>
            <option value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
                Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
                Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto módulo (Backend Avançado)">
                Quarto módulo (Backend Avançado)
            </option>
        </SelectStyle>
        <span className="errors">{errors.course_module?.message}</span>
    </>
    );
};

export const SelectStatusTech = ({ register }: IInputProps) => {
    return (
    <>
        <label htmlFor="select">Selecionar status</label>
        <SelectStyle name="select" id="select" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
        </SelectStyle>
    </>
    );
};