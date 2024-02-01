import styles from "./ItemList.module.scss";

import React from "react";

const ItemList = ({ name, description, deleteItem, editItem }) => {
  const getRandomArbitrary = () => {
    return Math.random() * 10;
  };

  return (
    <div
      className={styles.item_todo}
      style={{
        transform: `rotate(${getRandomArbitrary()}deg)`,
      }}
    >
      <div className={styles.container_buttons}>
        <button className={styles.delete_button} onClick={deleteItem}>
          <span className="material-symbols-outlined">delete</span>
        </button>
        <button className={styles.edit_button} onClick={editItem}>
          <span className="material-symbols-outlined">edit</span>
        </button>
      </div>
      <div className={styles.pushpin} />
      <h3 className={styles.name_todo}>{name}</h3>
      <span className={styles.description_todo}>{description}</span>
    </div>
  );
};

export default ItemList;
