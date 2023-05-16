import cl from "./Owner.module.scss"

const Owner = () => {
  return (
    <article className={cl.Owner}>
      <img
        src="https://static.wikia.nocookie.net/a4d6ed9a-5337-4947-8dd8-178593284dd9/scale-to-width/755"
        alt="owner"
        height={390}
        width={380}
      />
      <div>
        <h5>Name</h5>
        <p>posicion Lorem, ipsum.</p>
      </div>
    </article>
  );
};

export default Owner;
