import axios from "axios";
import { useState } from "react";
import cl from "./Booked.module.scss";

const Booked = ({ closeModal }) => {
  const [bookingData, setBookingData] = useState({
    name: "",
    surname: "",
    tourName: "",
    phone: "",
    email: "",
  });
  const [bookingResult, setBookingResult] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8081/api/booked`, bookingData);
      setBookingResult(response.data);
    } catch (error) {
      console.error("Error creating booking:", error);
    }
  };

  return (
    <div className={cl.back}>
      <form onSubmit={handleSubmit} className={cl.Booked}>
        <div>
          Имя:
          <input
            type="text"
            name="name"
            value={bookingData.name}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          Фамилия:
          <input
            type="text"
            name="surname"
            value={bookingData.surname}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          Название тура:
          <input
            type="text"
            name="tourName"
            value={bookingData.tourName}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          Номер телефона:
          <input
            type="tel"
            name="phone"
            value={bookingData.phone}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          Электронная почта:
          <input
            type="email"
            name="email"
            value={bookingData.email}
            onChange={handleChange}
          />
        </div>
        <br />
        <span>
          <button type="submit" onClick={closeModal}>
            Отмена
          </button>
          <button type="submit">Забронировать</button>
        </span>
      </form>
      {bookingResult && (
        <div>
          <h3>Booking Result</h3>
          <p>Booking ID: {bookingResult.id}</p>
          <p>Item ID: {bookingResult.itemId}</p>
          <p>Booking Date: {bookingResult.bookingDate}</p>
        </div>
      )}
    </div>
  );
};

export default Booked;
