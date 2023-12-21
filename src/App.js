import "./App.css";
import IPOWebsite from "./components/IPOWebsite";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div id="root">
      <div className="Calculator">
        <Calculator />
      </div>
      <div className="IPOWebsite">
        <IPOWebsite />
      </div>
    </div>
  );
}

export default App;
