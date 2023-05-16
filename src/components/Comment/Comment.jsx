import axios from "axios";
import { useState } from "react";

const Comment = () => {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  const handleCommentChange = (event) => {
    setText(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Создание объекта комментария
    const newComment = {
      text,
      author,
    };

    // Отправка комментария на сервер
    axios
      .post("http://localhost:8081/api/comments", newComment)
      .then((response) => {
        console.log("Комментарий успешно создан:", response.data);
        setText("");
        setAuthor("");
      })
      .catch((error) => {
        console.error("Ошибка при создании комментария:", error);
      });
  };
  return (
    <div>
      <h2>Создать комментарий</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="comment">Комментарий:</label>
          <textarea
            id="comment"
            value={text}
            onChange={handleCommentChange}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="author">Автор:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={handleAuthorChange}
            required
          />
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default Comment;
