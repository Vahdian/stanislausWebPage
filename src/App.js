import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./core/routes/Routes";
import Menu from "./shared/menu/Menu";
import Header from "./shared/header/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Menu></Menu>
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
