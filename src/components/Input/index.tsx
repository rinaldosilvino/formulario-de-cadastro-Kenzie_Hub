import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { InputStyle } from "./styles";
import React from "react";

export interface IInputProps{
    register: any;
    errors?: any;
}

export const InputName = ({ register, errors }: IInputProps) => {
    return (
    <>
        <label htmlFor="name">Nome</label>
        <InputStyle placeholder="Digite aqui o seu nome" id="name" {...register("name")} />
        <span>{errors.name?.message}</span>
    </>
    );
    };

export const InputEmail = ({ register, errors }: IInputProps) => {
    return (
    <>
        <label htmlFor="email">Email</label>
        <InputStyle placeholder="Digite aqui seu email" id="email" {...register("email")} />
        <span>{errors.email?.message}</span>
    </>
    );
    };

export const InputPassword = ({ register, errors }: IInputProps) => {
    return (
    <>
        <label htmlFor="password">Senha</label>
        <InputStyle
        type="password"
        placeholder="Digite aqui sua senha"
        id="password"
        {...register("password")}
        />
        <span>{errors.password?.message}</span>
    </>
    );
    };

export const InputConfirmPassword = ({ register, errors }: IInputProps) => {
    return (
    <>
        <label htmlFor="confirmPassword">Confirmar Senha</label>
        <InputStyle
        type="password"
        placeholder="Digite novamente sua senha"
        id="confirmPassword"
        {...register("confirmPassword")}
        />
        <span>{errors.confirmPassword?.message}</span>
    </>
    );
    };

export const InputContact = ({ register, errors }: IInputProps) => {
    return (
    <>
        <label htmlFor="contact">Contato</label>
        <InputStyle
        placeholder="Opção de contato"
        id="contact"
        {...register("contact")}
        />
        <span>{errors.contact?.message}</span>
    </>
    );
    };

export const InputBio = ({ register, errors }: IInputProps) => {
    return (
    <>
        <label htmlFor="bio">Bio</label>
        <InputStyle placeholder="Fale sobre você" id="bio" {...register("bio")} />
    </>
    );
    };

export const InputTitle = ({ register, errors }: IInputProps) => {
    return (
    <>
        <label htmlFor="title">Nome</label>
        <InputStyle placeholder="Nome" id="title" {...register("title")} />
        <span>{errors.status?.message}</span>
    </>
    );
    };

export const InputTitleTechEdit = ({ register, errors }: IInputProps) => {
    const { actualTech } = useContext(AuthContext);
    const { id, title } = actualTech;
    return (
    <>
        <label htmlFor="title">Nome</label>
        <InputStyle
        placeholder="Nome"
        id={`${id}`}
        value={`${title}`}
        {...register("title")}
        />
        <span>{errors.status?.message}</span>
    </>
    );
    }