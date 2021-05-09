import imgLoading from "../../assets/images/loading.gif";

function Loading() {
  return (
    <div className="d-flex justify-content-center pt-3">
      <img src={imgLoading} alt="Carregando..." title="Carregando..." />
    </div>
  );
}

export default Loading;
