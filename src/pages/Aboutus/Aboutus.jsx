import Owner from "../../components/Owner/Owner";
import cl from "./Aboutus.module.scss";

const Aboutus = () => {
  return (
    <main className={cl.Aboutus}>
      <section className={cl.sec_header}>
        <h2>jskdjksdfkl</h2>
        <p>lkoprefew</p>
      </section>
      <section className={cl.sec_title}>
        <img
          src="https://avatars.mds.yandex.net/i?id=6eb4bf0d425ce22a17ad72af327e602a-4470847-images-thumbs&ref=rim&n=33&w=471&h=300"
          alt="axax"
          height={300}
        />
        <article>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
            reiciendis voluptatibus dignissimos, deserunt commodi explicabo ipsa
            rerum architecto enim assumenda.
          </p>
        </article>
      </section>
      <section className={cl.sec_owners}>
        <h3>Owners</h3>
        <div className={cl.owner}>
            <Owner/>
            <Owner/>
            <Owner/>
        </div>
      </section>
    </main>
  );
};

export default Aboutus;
