import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import About from "./pages/About/About";
import Order from "./pages/Order/Order";
import Modal from "./modal/Modal";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { customStorage } from "./localStorage/customStorage";

function App() {
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  const [modalActive, setModalActive] = useState(true); //стейт для открытия модалки
  const [modalDoubleText, setModalDoubleText] = useState(""); //стейт для текста модалки

  //подсчет итоговой суммы
  const calculateTotalPrice = () => {
    return orders.reduce((acc, el) => acc + el.priceTotal, 0);
  };

  const totalPrice = calculateTotalPrice();

  //добавление товара в корзину
  const addToOrder = (el) => {
    let inArray = false;
    orders.forEach((item) => {
      if (el.id === item.id) {
        inArray = true;
        setModalActive(false);
        setModalDoubleText(
          `Вы уже добавили ${el.name} в корзину! Пожалуйста, выберите другой товар или оформите заказ.`
        );
      }
    });
    if (!inArray) {
      setOrders([...orders, el]);
      customStorage([...orders, el]);
    }
  };

  //Увеличение кол-ва товара в корзине
  const increase = (id) => {
    setOrders((order) =>
      order.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: item.count + 1,
            priceTotal: (item.count + 1) * item.price,
          };
        }
        return item;
      })
    );
  };

  //Уменьшение кол-ва товара в корзине

  const decrease = (id) => {
    setOrders((order) =>
      order.map((item) => {
        if (item.id === id) {
          const newCount = item.count - 1 > 1 ? item.count - 1 : 1;
          return {
            ...item,
            count: newCount,
            priceTotal: newCount * item.price,
          };
        }
        return item;
      })
    );
  };

  return (
    <>
      <BrowserRouter>
        <Header orders={orders} />
        <Modal
          text={modalDoubleText}
          modalActive={modalActive}
          setModalActive={setModalActive}
        />
        <Routes>
          <Route path="/" element={<Home addToOrder={addToOrder} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/order"
            element={
              <Order
                increase={increase}
                decrease={decrease}
                totalPrice={totalPrice}
                orders={orders}
                setOrders={setOrders}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
