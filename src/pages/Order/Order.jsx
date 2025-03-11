import { useState } from "react";
import { customStorage } from "../../localStorage/customStorage";
import Modal from "../../modal/Modal";
import Counter from "../../counter/Counter";

const Order = ({ orders, setOrders, totalPrice, increase, decrease }) => {
  const [modalActive, setModalActive] = useState(true);
  const [modalOrderText, setModalOrderText] = useState("");

  //удаление товара из корзины
  const removeOrders = (orderId) => {
    const basketOrders = orders.filter((el) => el !== orderId);
    setOrders(basketOrders);
    customStorage(basketOrders);
  };

  //кнопка оформить заказ
  const orderPlaced = () => {
    if (orders.length > 0) {
      setModalActive(false);
      setModalOrderText(
        `Ваш заказ на сумму: ${totalPrice} $ оформлен! Спасибо за ваш заказ`
      );
    } else {
      setModalActive(false);
      setModalOrderText("Корзина пустая! Сначала добавьте товары в корзину");
    }
  };

  return (
    <>
      <Modal
        text={modalOrderText}
        modalActive={modalActive}
        setModalActive={setModalActive}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        {orders.map((el) => (
          <div key={el.id}>
            <img src={el.image} />
            <h4>{el.name}</h4>
            <p>Цена: {el.priceTotal}$</p>
            <button
              onClick={() => removeOrders(el)}
              style={{ width: "80px", height: "40px" }}
            >
              Удалить товар
            </button>
            <Counter
              id={el.id}
              increase={increase}
              decrease={decrease}
              count={el.count}
            />
          </div>
        ))}
      </div>
      <div>
        <div>
          Добавленное кол-во в корзину: <b>{orders.length}</b>
        </div>
        <div>
          Итоговая цена:&nbsp;
          <b>
            {totalPrice}&nbsp;
            <span>$</span>
          </b>
        </div>
        <button onClick={orderPlaced}>Оформить заказ</button>
      </div>
    </>
  );
};

export default Order;
