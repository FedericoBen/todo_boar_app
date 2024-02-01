import { useState } from "react";
import styles from "./FormTodoList.module.scss";
import InputForm from "components/basics/InputForm/InputForm";
import { useContextApp } from "../../../context/context";
import Button from "../../basics/Button/Button";

const FormTodoList = () => {
  const { setListTodo, modifyItem, setModifyItem } = useContextApp();

  const [valuesForm, setValuesForm] = useState({
    nameTodo: "",
    description: "",
  });

  const changeForm = (value, name) => {
    setValuesForm({
      ...valuesForm,
      [name]: value,
    });
  };

  const editItem = () => {
    const { description } = valuesForm;
    if (!description) return;
    setListTodo((listTodo) =>
      listTodo.map((item) => {
        if (item.id == modifyItem.id)
          return {
            ...item,
            description,
          };
        return item;
      })
    );

    setModifyItem(null);

    setValuesForm({
      nameTodo: "",
      description: "",
    });
  };

  const addItemToList = () => {
    const { nameTodo, description } = valuesForm;
    if (!nameTodo || !description) return;
    setListTodo((listTodo) => [
      ...listTodo,
      {
        id: `${listTodo.length}-${nameTodo}`,
        name: nameTodo,
        description: description,
      },
    ]);

    setValuesForm({
      nameTodo: "",
      description: "",
    });
  };

  return (
    <div className={styles.form_item}>
      <h3>Add todo</h3>
      <InputForm
        name="nameTodo"
        value={modifyItem?.nameTodo || valuesForm.nameTodo}
        onChange={(value) => changeForm(value, "nameTodo")}
        placeholder="Name"
        inputClass={styles.input}
        placeholderClass={styles.placeholder}
        disable={modifyItem}
      />
      <InputForm
        name="description"
        value={valuesForm.description}
        onChange={(value) => changeForm(value, "description")}
        placeholder="Description"
        inputClass={styles.input}
        placeholderClass={styles.placeholder}
      />
      <Button
        onClick={modifyItem ? editItem : addItemToList}
        disable={!valuesForm.description && !valuesForm.nameTodo}
      >
        Add
      </Button>
    </div>
  );
};

export default FormTodoList;
