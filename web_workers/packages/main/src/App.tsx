import React from "react";
import "./App.css";
//@ts-ignore
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { SimpleWorkerJS } from "./TestPages/SimpleWorkerJS";
import { SimpleWorkerTS } from "./TestPages/SimpleWorkerTS";
import { WasmTest} from "./TestPages/WasmTest";

function App() {
  return (
    <div className="App">
      <Router>
        <div
          style={{
            width: "100%",
            height: "30px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Link to="simple_worker_js">Simple worker js</Link>
          <Link to="simple_worker_ts">Simple worker ts</Link>
          <Link to="wasm">wasm test</Link>
        </div>
        <Switch>
          <Route path="/simple_worker_js"
            exact={true}
            component={SimpleWorkerJS}
          />
          <Route path="/simple_worker_ts"
            exact={true}
            component={SimpleWorkerTS}
          />
          <Route path="/wasm"
            exact={true}
            component={WasmTest}
          />

          <h1>Testing web workers</h1>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
