import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">404</h1>
        <p className="lead">Oops, acho que essa página não existe!</p>
      </div>
      <Link className="btn btn-primary btn-lg" to="/">
        Ir para Home
      </Link>
    </div>
  );
}

export default NotFound;
