import cl from "./TourCont.module.scss"
import TourCard from "../TourCard/TourCard";
function TourCont() {
  return (
    <div className={cl.TourCont}>
      <div>
        <h3>Small group travel that's good all over.</h3>
        <p className={cl.des}>
          GOOD VIEWS, GOOD FRIENDS AND GOOD TIMES ON OVER 1000 TRIPS IN MORE
          THAN 100 COUNTRIES
        </p>

        <div>
          <h4>WAYS TO TRAVEL</h4>
          <aside>
            <TourCard />
          </aside>
        </div>
        <div>
          <h4>GOOD TRIPS ONLY FOR 2023</h4>
          <aside>
            <TourCard />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default TourCont;
