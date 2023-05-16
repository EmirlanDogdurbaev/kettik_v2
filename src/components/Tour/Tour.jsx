import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "../Comment/Comment";

const Tour = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8081/api/tours/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, [id]);

  return (
    <div>
      {data.title}
      <br />
      {data.miniDescription}
      <br />
      {data.fullDescription}
      adad
      <Comment />
    </div>
  );
};

export default Tour;
