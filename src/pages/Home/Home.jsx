import { useState, useEffect } from "react";
import "./Home.css";
import FullItems from "../../components/FullItems";

const Home = ({ addToOrder }) => {
  const [data, setData] = useState([]);

  //подтягиваем пиццы с удаленного сервера
  useEffect(() => {
    try {
      fetch("https://67ab24cd65ab088ea7e8d8d7.mockapi.io/pizza_place")
        .then((response) => response.json())
        .then((json) => setData(json));
    } catch (error) {
      console.error(`error to fetch $(error)`);
    }
  }, []);

  return (
    <>
      <div className="home__picture">
        <p>
          <a href="#bottom" className="btn">
            Перейти к меню
          </a>
        </p>
      </div>
      <p>
        <a name="bottom"></a>
      </p>
      <FullItems addToOrder={addToOrder} data={data} />
    </>
  );
};

export default Home;
