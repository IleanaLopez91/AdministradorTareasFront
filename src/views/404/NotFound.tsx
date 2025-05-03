import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1 className=" font-black text-center text-xl text-white">
        Pagina no encontrada
      </h1>
      <p className=" mt-10 text-center text-white">
        Tal vez quieras volver a{" "}
        <Link className=" text-fuchsia-500" to={"/"}>
          Proyectos
        </Link>
      </p>
    </>
  );
}

export default NotFound;
