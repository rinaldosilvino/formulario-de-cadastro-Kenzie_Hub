import toast from "react-hot-toast";

export const toastSuccessLogin = () =>{
    toast.success("Login efetuado com sucesso",{
        duration: 5000,
        position: "top-center",
        style: {},
        className: "",
        iconTheme:{
            primary: "#6fe600",
            secondary: "#fff",
        },
        ariaProps:{
            role: "status",
            "aria-live": "polite",
        },
    },
)}

export const  toastSuccessRegister = () =>
    toast.success("Usuário registrado com sucesso!",{
        duration: 5000,
        position: "top-center",
        style: {},
        className: "",
        iconTheme: {
            primary: "#6fe600",
            secondary: "#fff",
        },
        ariaProps: {
            role: "status",
            "aria-live": "polite",
        },
})

export const toastSuccessTechRegister = () =>
    toast.success("Tecnologia adicionada com sucesso!", {
        duration: 5000,
        position: "top-center",
        style: {},
        className: "",
        iconTheme: {
            primary: "#6fe600",
            secondary: "#fff",
        },
        ariaProps: {
            role: "status",
            "aria-live": "polite",
        },
})

export const toastSuccessTechRemove = () =>
    toast.success("Tecnologia removida com sucesso!", {
        duration: 5000,
        position: "top-center",
        style: {},
        className: "",
        iconTheme: {
            primary: "#6fe600",
            secondary: "#fff",
        },
        ariaProps: {
            role: "status",
            "aria-live": "polite",
        },
    });

export const toastSuccessTechEdit = () => 
    toast.success("Tecnologia Atualizada com sucesso!", {
        duration: 5000,
        position: "top-center",
        style: {},
        className: "",
        iconTheme: {
            primary: "#6fe600",
            secondary: "#fff",
        },
        ariaProps: {
            role: "status",
            "aria-live": "polite",
        },
});

export const toastFail = () =>
    toast.error("Ops! Algo deu errado", {
    duration: 5000,
    position: "top-center",
    style: {},
    className: "",
    iconTheme: {
        primary: "#ff2922",
        secondary: "#fff",
    },
    ariaProps: {
        role: "status",
        "aria-live": "polite",
    },
});

export const toastFailTechRegister = () =>
    toast.error("Esta Tecnologia já existe, tente atualizar o status dela.", {
    duration: 5000,
    position: "top-center",
    style: {},
    className: "",
    iconTheme: {
        primary: "#ff2922",
        secondary: "#fff",
    },
    ariaProps: {
        role: "status",
        "aria-live": "polite",
    },
});