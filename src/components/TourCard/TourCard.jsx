import { Link } from "react-router-dom";
import cl from "./TourCard.module.scss";
import img from "../../assets/img_70.JPG";
import { useEffect, useState } from "react";
import axios from "axios";

function TourCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/tours")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, []);

  const cards = data.slice(0, 4).map((item, index) => (
    <article className={cl.TourCard} key={index}>
      <img src={img} alt="imagesfsdf" />
      <h4>{item.title}</h4>
      <p>{item.description}</p>
      <p>{item.id}</p>
      <Link to={`/tours/${item.id}`}>See more</Link>
    </article>
  ));

  return <div className={cl.contCard}>{cards}</div>;
}

export default TourCard;
