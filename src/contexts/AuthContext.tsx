import { useState, useEffect, ReactNode } from "react";
import { createContext } from "react";
import api from "../services/api";
import {
  toastFail,
  toastFailTechRegister,
  toastSuccessLogin,
  toastSuccessRegister,
  toastSuccessTechEdit,
  toastSuccessTechRegister,
  toastSuccessTechRemove,
} from "../components/Toasts";
import { useNavigate } from "react-router-dom";
import React from "react"

interface IAuthProviderProps{
  children: ReactNode
}

export interface IUser{
  id: string;
  name: string;
  email: string;
  course_module: string;
}

interface IAtualTech{
  id: string;
  title: string;
  status: string;
}

interface ITech{
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface ISubmitLoginFunction{
  email: string;
  password: string;
}

export interface IHandleTechEdit{
  title: string;
  status: string;
}

export interface ISubmitRegisterFunction{
    name: string;
    email: string;
    bio: string;
    password: string;
    confirmPassword:string;
    course_module: string;
}

interface IAuthContext{
  logout: () => void;
  loading: boolean;
  techList: ITech[];
  userData: IUser;
  actualTech: IAtualTech;
  techAddModal: boolean;
  setUserData: React.Dispatch<React.SetStateAction<IUser>>;
  handleTechRemove: () => Promise<void>;
  setActualTech: React.Dispatch<React.SetStateAction<IAtualTech>>;
  handleTechEdit: (data: IHandleTechEdit) => Promise<void>;
  setTechAddModal: React.Dispatch<React.SetStateAction<boolean>>;
  techEditRemoveModal: boolean;
  setTechEditRemoveModal: React.Dispatch<React.SetStateAction<boolean>>
  onSubmitLoginFunction: (data: ISubmitLoginFunction) => Promise<void>
  onSubmitRegisterFunction: (data: ISubmitRegisterFunction) => Promise<void>
  onSubmitRegisterTechFunction: (data: IHandleTechEdit) => Promise<void>

}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [userData, setUserData] = useState<IUser>({} as IUser);
  const [userDefault] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState<boolean>(true);
  const [techAddModal, setTechAddModal] = useState(false);
  const [techEditRemoveModal, setTechEditRemoveModal] = useState(false);
  const [techList, setTechList] = useState([] as ITech[]);
  const [newTechList, setNewTechList] = useState([] as ITech[]);
  const [actualTech, setActualTech] = useState<IAtualTech>({} as IAtualTech);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@KenzieHub-token");
      if (token) {
        try {
          api.defaults.headers.common.Authorization = `Bearer ${token}`;
          const { data } = await api.get("/profile");
          setUserData(data); 
          setTechList(data.techs);
        } catch (error) {
          console.log(error);
        } finally {
        }
      }
      setLoading(false);
    }
    loadUser();
  }, []);

  useEffect(() => {
    setTechList(newTechList);
  }, [newTechList]);

  async function onSubmitLoginFunction(data: ISubmitLoginFunction) {
    await api
      .post("sessions", data)
      .then((response) => {
        const { user, token } = response.data;
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        setUserData(user);
        localStorage.setItem("@KenzieHub-token", token);
        setTechList(response.data.user.techs);
        navigate("/Dashboard", { replace: true });
        toastSuccessLogin();
      })
      .catch((response) => {
        console.log(response);
        toastFail();
      });
  }

  async function onSubmitRegisterFunction(data: ISubmitRegisterFunction) {
    await api
      .post("users", data)
      .then((res) => {
        toastSuccessRegister();
      })
      .catch((res) => {
        console.error(res);
        toastFail();
      });
    navigate("../");
  }

  async function actTechList() {
    const { id } = userData;
    await api.get(`/users/${id}`).then((res) => {
      setNewTechList(res.data.techs);
    });
  }

  async function onSubmitRegisterTechFunction(data: IHandleTechEdit) {
    api
      .post("/users/techs", data)
      .then((res) => {
        setNewTechList([...techList, res.data]);
        toastSuccessTechRegister();
        setTechAddModal(false);
      })
      .catch((res) => {
        console.error(res);
        toastFailTechRegister();
      });
  }

  async function handleTechEdit(data: IHandleTechEdit) {
    const { id } = actualTech;
    await api.put(`/users/techs/${id}`, { status: data.status }).then(() => {
      actTechList();
      const newList = techList.filter((elem) => elem);
      setNewTechList(newList);
      setTechEditRemoveModal(false);
      toastSuccessTechEdit();
    });
  }

  async function handleTechRemove() {
    const { id } = actualTech;
    await api.delete(`/users/techs/${id}`).then(() => {
      const newList = techList.filter((elem) => elem.id !== id);
      setNewTechList(newList);
      toastSuccessTechRemove();
      setTechEditRemoveModal(false);
    });
  }

  function logout() {
    setUserData(userDefault);
    setTechList([]);
    localStorage.removeItem("@KenzieHub-token");
    navigate("../", { replace: true });
  }
  

  return (
    <AuthContext.Provider
      value={{
        logout,
        loading,
        techList,
        userData,
        actualTech,
        setUserData,
        techAddModal,
        handleTechRemove,
        setActualTech,
        handleTechEdit,
        setTechAddModal,
        techEditRemoveModal,
        setTechEditRemoveModal,
        onSubmitLoginFunction,
        onSubmitRegisterFunction,
        onSubmitRegisterTechFunction,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
