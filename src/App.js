import { connect } from "react-redux";
import { useEffect } from "react";

import "./App.css";
import GifItems from "./components/GifItems";
import { getGifsAction } from "./store/gifs/actions";

function App(props) {
  const { data, isLoading, error } = props.gifs;

  useEffect(() => {
    props.getListGif();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return <h3 color="red">{error}</h3>;
  }

  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  console.log(data);
  return (
    <div className="App">
      <h1>Hello World</h1>
      <GifItems data={data} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  gifs: state.gifs,
});

const mapDispatchToProps = (dispatch) => ({
  getListGif: () => dispatch(getGifsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
