import {
    InputBio,
    InputConfirmPassword,
    InputContact,
    InputEmail,
    InputName,
    InputPassword,
} from "../../components/Input";
import { ButtonGoToLogin, ButtonRegister } from "../../components/Buttons";
import { SelectModulesCourse } from "../../components/Select";
import { formRegisterSchema } from "../../schemas/formSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { Section } from "./styles";
import { useForm } from "react-hook-form";
import React from "react";
import { ISubmitRegisterFunction } from "../../contexts/AuthContext"

export const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ISubmitRegisterFunction>({
        resolver: yupResolver(formRegisterSchema),
});

const { onSubmitRegisterFunction } = useContext(AuthContext);

return (
    <Section>
    <div id="divTitle">
        <h1>Kenzie hub</h1>
        <ButtonGoToLogin />
    </div>
    <div id="divRegister">
        <p>Crie sua conta</p>
        <span>Rápido e grátis, vamos nessa</span>
        <form onSubmit={handleSubmit(onSubmitRegisterFunction)}>
        <InputName register={register} errors={errors} />
        <InputEmail register={register} errors={errors} />
        <InputPassword register={register} errors={errors} />
        <InputConfirmPassword register={register} errors={errors} />
        <InputContact register={register} errors={errors} />
        <InputBio register={register} errors={errors} />
        <SelectModulesCourse register={register} errors={errors} />
        <ButtonRegister />
        </form>
    </div>
    </Section>
);
};
