import cl from "./Header.module.scss"
const Header = () => {
  return (
    <header className={cl.Header}>
      <main>
        <section>
          <h2>Good Trips <br/> Only.</h2>
          <form>
            <input type="text" placeholder="ala archa"/>
            <input type="data" placeholder="11.12.2023" />
            <button>search</button>
          </form>
        </section>
      </main>
    </header>
  );
};

export default Header;
