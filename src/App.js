import { connect } from "react-redux";
import "./App.css";
import GifsGrid from "./components/GifsGrid";

function App({ gifs }) {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <GifsGrid data={gifs} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  gifs: state.gifs,
});

export default connect(mapStateToProps)(App);
