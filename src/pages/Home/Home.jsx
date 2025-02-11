import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import { data } from "../../data/data";
import { useState, useEffect } from "react";
import "./Home.css";

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
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {data.map((el) => (
          <Card key={el.id} sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 350 }} image={el.image} title={el.name} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {el.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {el.description}
              </Typography>
              <p>
                <span>Price:</span>
                {el.price}$
              </p>
            </CardContent>
            <CardActions>
              <Button onClick={() => addToOrder(el)} size="small">
                Добавить в корзину
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Home;
