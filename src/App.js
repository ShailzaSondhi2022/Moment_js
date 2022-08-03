import "./styles.css";
import DisplayMethods from "./components/display";
import DurationsMethods from "./components/durations";
import GetSetMethods from "./components/getSet";
import ManipulateMethods from "./components/manipulate";
import ParseMethods from "./components/parse";
import QueryMethods from "./components/query";


export default function App() {
 

  return (
    <div className="App">
    <h2 style={{ fontSize: '40px'}}>Moment JS Examples</h2>
          <ParseMethods />
          <GetSetMethods />
          <ManipulateMethods />
          <DisplayMethods />
          <QueryMethods />
           <DurationsMethods />

    </div>
  );
}
