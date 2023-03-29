import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { List, Tech } from "./styles";
import { FaEdit} from "react-icons/fa";
import React from "react";

export const TechList = () => {
  const { techList, setActualTech, setTechEditRemoveModal } =
    useContext(AuthContext);

  return (
    <List id="listContainer">
      {techList.length === 0 ? (
        <h3 id="emptyList" key={"1"}>
          Não possui nenhuma tecnologia registrada
        </h3>
      ) : (
        techList.map((elem) => {
          return (
            <Tech
              key={elem.id}
              id="listCard"
              title="Clique para editar esta Tech"
              onClick={() => {
                setActualTech({
                  id: elem.id,
                  title: elem.title,
                  status: elem.status,
                });
                setTechEditRemoveModal(true);
              }}
            >
                <h3>{elem.title}</h3>
                <div className="controls">
                  <span>{elem.status}</span>
                  <FaEdit/>
                </div>
            </Tech>
          );
        })
      )}
    </List>
  );
};
