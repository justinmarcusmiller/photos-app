import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import ImageGrid from "./components/ImageGrid/ImageGrid.jsx";
import "./App.css";

function App() {
  let [text, setText] = useState("");
  const [images, setImages] = useState([]);
  let [page, setPage] = useState(1);
  let [bottomComponent, setBottomComponent] = useState('');
  const api =
    "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d333136e96d0d965f47b3f939d913fa8&text=";
  const api2 =
    "&safe_search=1&sort=relevance&content_type=1&extras=owner_name,url_l&per_page=25&format=json&nojsoncallback=1";
  useEffect(() => {
    if (text !== "") {
      fetch(api + text + "&page=" + page + api2)
        .then((res) => res.json())
        //.then((data) => console.log(data.photos))
        .then((data) => setImages(data.photos.photo));
    }
    //console.log("Rendering");
    //console.log(images)
    if (text !== "") {
      setBottomComponent(
        <Navigation page={page} handlePageChange={handlePageChange} />
      );
    } else {
      setBottomComponent(<p>Enter your search in the search-bar</p>);
    }
  }, [page, text]);

  const handleSearch = (e) => {
    let searchInput = document.getElementById("searchTermInput");
    e.preventDefault();
    //console.log(e);
    setText(searchInput.value);
  };

  const handlePageChange = (direction) => {
    if (direction === "forward") {
      setPage((page += 1));
      //console.log(page);
    } else if (direction === "back" && page > 1) {
      setPage((page -= 1));
      //console.log(page);
    }
  };
  

  return (
    <div className="App">
      <Header handleSearch={handleSearch} />
      <ImageGrid images={images} />
      {bottomComponent}
      <p id="disclaimer">This product uses the Flickr API but is not endorsed or certified by SmugMug, Inc.</p>
    </div>
  );
}

export default App;
