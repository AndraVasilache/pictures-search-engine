import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../unsplash";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });

    console.log(this);
    this.setState({ images: response.data.results });

    console.log(response.data.results);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10 px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images = {this.state.images} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

// i2n8c8TVPCzuzcNUpdYjxNWrAxyqJFR3TwtgCbPYeuk

export default App;
