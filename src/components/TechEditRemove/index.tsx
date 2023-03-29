import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { InputTitleTechEdit } from "../Input";
import { SelectStatusTech } from "../Select";
import { formTechSchema } from "../../schemas/formSchema";
import { AuthContext } from "../../contexts/AuthContext";
import { ButtonStyle } from "../Buttons/styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { Section } from "./styles";
import { useForm } from "react-hook-form";
import React from "react";
import { IHandleTechEdit } from "../../contexts/AuthContext"

export const TechEditRemove = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IHandleTechEdit>({ resolver: yupResolver(formTechSchema) });

    const { setTechEditRemoveModal, handleTechEdit, handleTechRemove } =
        useContext(AuthContext);

    return (
        <Section>
            <div id="divTechRegister">
                <button id="closeModal" onClick={() => setTechEditRemoveModal(false)}>
                x
                </button>
                <h2>Editar Tecnologia</h2>
                <form onSubmit={handleSubmit(handleTechEdit)}>
                    <InputTitleTechEdit register={register} errors={errors} />
                    <SelectStatusTech register={register} />
                    <div id="divButtons">
                        <ButtonStyle
                            onSubmit={handleSubmit(handleTechEdit)}
                            id="edit"
                            title="Editar Tecnologia">
                            <FaEdit />
                        </ButtonStyle>
                        <ButtonStyle
                            onClick={handleSubmit(handleTechRemove)}
                            id="trash"
                            title="Remover Tecnologia">
                            <FaTrashAlt />
                        </ButtonStyle>
                    </div>
                </form>
            </div>
        </Section>
    );
};