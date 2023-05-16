
import TourCont from "../TourCont/TourCont";
import With from "../With/With";
import cl from "./Header.module.scss";
const Header = () => {
  return (
    <header className={cl.Header}>
      <main>
        <section className={cl.sec1}>
          <h2>
            Good Trips <br /> Only.
          </h2>
          <form>
            <input type="text" placeholder="ala archa" />
            <button>search</button>
          </form>
        </section>
      </main>
      <TourCont/>
      <With/>
    </header>
  );
};

export default Header;
