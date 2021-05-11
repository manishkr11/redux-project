import './App.css';
import Counter from "./Counter";
import {Provider} from "react-redux";
import store from "./redux/store";
import CounterWithRedux from "./CounterWithRedux";

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <h2>welcome to React JS</h2>
            <Counter />
            <CounterWithRedux />
        </div>
      </Provider>
  );
}

export default App;
