import { useContextApp } from "../../../context/context";
import ItemList from "../../basics/ItemList/ItemList";
import styles from "./ListTodo.module.scss";

const ListTodo = () => {
  const { listTodo, setListTodo, setModifyItem } = useContextApp();

  const deleteItem = (id) => {
    setListTodo(listTodo.filter((item) => item.id != id));
  };

  const editItem = (id) => {
    const item = listTodo.find((item) => item.id == id);
    setModifyItem({
      id: item.id,
      nameTodo: item.name,
      description: item.description,
    });
  };

  return (
    <div className={styles.list_todo}>
      {listTodo.map((listItem, i) => (
        <ItemList
          name={listItem.name}
          description={listItem.description}
          deleteItem={() => deleteItem(listItem.id)}
          editItem={()=>editItem(listItem.id)}
          id={listItem.id}
          key={listItem.id}
        />
      ))}
    </div>
  );
};

export default ListTodo;
