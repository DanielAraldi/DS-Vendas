import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="text-primary">Hello World!</div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
