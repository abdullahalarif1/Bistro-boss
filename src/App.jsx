import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./Shared/Footer";
import Header from "./Shared/Header";

function App() {
  const location = useLocation();
  console.log(location);

  const noHeaderFooter =
    location.pathname.includes("/login") ||
    location.pathname.includes("/signup");

  return (
    <>
      {noHeaderFooter ? "" : <Header></Header>}
      <Outlet></Outlet>
      {noHeaderFooter ? "" : <Footer></Footer>}
    </>
  );
}

export default App;
