import "./App.css";
import IPOWebsite from "./components/IPOWebsite";
import IPOCalculator from "./components/IPOCalculator";

function App() {
  return (
    <div id="root">
      <div className="IPOCalculator">
        <IPOCalculator />
      </div>
      <div className="IPOWebsite">
        <IPOWebsite />
      </div>
    </div>
  );
}

export default App;
