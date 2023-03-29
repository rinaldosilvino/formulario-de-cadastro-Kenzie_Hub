import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ContainerList } from "../../components/ContainerList";
import { TechAdd } from "../../components/TechAdd";
import { TechEditRemove } from "../../components/TechEditRemove";
import { Header } from "../../components/Header";
import { UserHome } from "../../components/UserHome";
import React from "react";


export const Dashboard = () => {
  const { userData, techAddModal, techEditRemoveModal } =
    useContext(AuthContext);

  return userData ? (
    <>
        <div>
    <Header/>
      <UserHome userData={userData}/>
      <ContainerList />
      
    </div>
      {techAddModal && <TechAdd />}
      {techEditRemoveModal && <TechEditRemove />}
    </>

  ) : (
    <Navigate to="/" replace />
  );
};
