import { connect } from "react-redux";

import "./App.css";
import GifItems from "./components/GifItems";

function App({ gifs }) {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <GifItems data={gifs} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  gifs: state.gifs,
});

export default connect(mapStateToProps)(App);
