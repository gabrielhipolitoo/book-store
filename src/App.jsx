import "./assets/styles/style.scss";
import Header from "./components/Header";
import { Outlet, Navigate } from "react-router-dom";
import Search from "./routes/Search";

function App() {

  return (
    <>
      <Header />
    </>
  );
}

export default App;
