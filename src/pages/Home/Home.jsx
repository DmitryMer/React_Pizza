import { useState, useEffect } from "react";
import "./Home.css";
import FullItems from "../../components/FullItems";
import Preloader from "../../preloader/Preloader";

const Home = ({ addToOrder }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //подтягиваем пиццы с удаленного сервера
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      try {
        fetch("https://67ab24cd65ab088ea7e8d8d7.mockapi.io/pizza_place")
          .then((response) => response.json())
          .then((json) => setData(json));
      } catch (error) {
        console.error(`error to fetch ${error}`);
      }
    }, 700);
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
      <Preloader loading={isLoading}>
        <FullItems addToOrder={addToOrder} data={data} />
      </Preloader>
    </>
  );
};

export default Home;
