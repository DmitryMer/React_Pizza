import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import About from "./pages/About";
import Order from "./pages/Order";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { customStorage } from "./localStorage/customStorage";
import Modal from './modal/Modal'

function App() {
    const [orders, setOrders] = useState(
        JSON.parse(localStorage.getItem("data")) || []
    );
    const [modalActive, setModalActive] = useState(true) //стейт для открытия модалки
    const [modalDoubleText, setModalDoubleText] = useState('') //стейт для текста модалки

    //подсчет итоговой суммы
    const calculateTotalPrice = () => {
        return orders.reduce((acc, el) => acc + el.price, 0);
    };

    const totalPrice = calculateTotalPrice();

    //добавление товара в корзину
    const addToOrder = (el) => {
        let inArray = false;
        orders.forEach((item) => {
            if (el.id === item.id) {
                inArray = true;
                setModalActive(false)
                setModalDoubleText(`Вы уже добавили ${el.name} в корзину! Пожалуйста, выберите другой товар или оформите заказ.`)
            }
        });
        if (!inArray) {
            setOrders([...orders, el]);
            customStorage([...orders, el]);
        }
    };

    useEffect(() => {
        console.log(orders);
    });

    return (
        <>
            <BrowserRouter>
                <Header orders={orders} />
                <Modal text={modalDoubleText} modalActive={modalActive} setModalActive={setModalActive} />
                <Routes>
                    <Route
                        path="/"
                        element={<Home addToOrder={addToOrder} />}
                    />
                    <Route path="/about" element={<About />} />
                    <Route
                        path="/order"
                        element={
                            <Order
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
