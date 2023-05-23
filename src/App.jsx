import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./Shared/Footer";
import Header from "./Shared/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
