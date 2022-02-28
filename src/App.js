import './App.css';
import {Homepage} from "./pages/homepage/homepage.component";
import {Route} from "react-router-dom";

const HatsPage = () => (
    <div className="hats-components">
        <h1>Hats Page</h1>
    </div>
)

function App() {
  return (
    <div className="App">
        <Route exact path="/" component={Homepage} />
        <Route path="/shop/hats" component={HatsPage} />
    </div>
  );
}

export default App;
