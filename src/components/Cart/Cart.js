import styles from "./Cart.module.css";
import { Modal } from "../";

const Cart = (props) => {
  const cartItems = [
    { id: "c1", name: "Sushi", quantity: 2, itemPrice: 22.99 },
    { id: "c2", name: "Schnitzel", quantity: 1, itemPrice: 16.5 },
  ].map((item) => <li>{item.name}</li>);

  return (
    <Modal>
      <ul className={styles["cart-items"]}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;