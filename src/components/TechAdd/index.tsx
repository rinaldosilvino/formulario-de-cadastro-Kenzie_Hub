import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Section } from "./styles";
import { InputTitle } from "../Input";
import { SelectStatusTech } from "../Select";
import { ButtonAddTech } from "../Buttons";
import { formTechSchema } from "../../schemas/formSchema";
import React from "react";
import { IHandleTechEdit } from "../../contexts/AuthContext"

export const TechAdd = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IHandleTechEdit>({ resolver: yupResolver(formTechSchema) });

    const { onSubmitRegisterTechFunction, setTechAddModal } =
        useContext(AuthContext);

    return (
        <Section>
        <div id="divTechRegister">
            <button id="closeModal" onClick={() => setTechAddModal(false)}>
            x
            </button>
            <h2>Cadastrar Tecnologia</h2>
            <form action="" onSubmit={handleSubmit(onSubmitRegisterTechFunction)}>
            <InputTitle register={register} errors={errors} />
            <SelectStatusTech register={register} />
            <ButtonAddTech />
            </form>
        </div>
        </Section>
    );
};