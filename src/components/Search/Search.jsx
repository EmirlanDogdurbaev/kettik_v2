import axios from "axios";
import { useState } from "react";
import cl from "./Search.module.scss";
const Search = ({ closeModal }) => {
  const [title, setTitle] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/api/search`, {
        params: { title: title },
      });
      setResults(response.data);
    } catch (error) {
      console.error("Error searching users:", error);
    }
  };
  return (
    <>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <ul>
          {results.map((tours) => (
            <li key={tours.id}>{tours.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Search;
