import Content from "./Component/pages/home/Content/Content";
import "./assets/style.css"
import { BrowserRouter , Router , Route } from 'react-router-dom';
import Nav from "./Component/pages/home/Header/Nav";
import SearchWrapper from "./Component/pages/home/Header/Search";



function App() {
  return (
    <>
    {/* <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Content} />
        <Route path="/Search" component={SearchWrapper} />       
      </Switch>
    </Router> */}
    <Content />
    </>
  );
}

export default App;
