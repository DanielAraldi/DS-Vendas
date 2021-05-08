import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">DS Vendas</h1>
          <p className="lead">
            Analise o desempenho das suas vendas por diferentes perspectivas!
          </p>
          <hr />
          <p>
            Esta aplicação consiste em exibir um dashboard a partir de dados
            fornecidos das vendas de seus produtos, listando as taxas de vendas
            por vendedor e seu sucesso.
          </p>
          <Link className="btn btn-primary btn-lg" to="/dashboard">
            Acessar Dashboard
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
