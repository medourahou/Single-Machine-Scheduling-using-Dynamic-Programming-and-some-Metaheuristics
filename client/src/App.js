import { Routes, Route, Link,Switch } from "react-router-dom";
import NotFound from "./Views/404";
import Home from "./Views/Home";
import Playground from "./Views/playground";
import Samples from "./Views/Samples";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="playground" element={<Playground />} />
        <Route exact path="samples" element={<Samples />} />
      </Routes>
    </div>
  );
}

export default App;
