import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import styles from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of fancy food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
