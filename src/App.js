import "./App.css";
import background from "./toucan.jpg";

function App() {
  return (
    // <div className="head-text">
    //   <div className="head-img">
    //     <img src={background} alt="toucan" />
    //   </div>
    //   <div className="text-on-image">
    //     <h1>Toucan.</h1>
    //   </div>
    // </div>

    <div
      className="bg_image"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "#f5f5f5",
      }}
    >
      <h1 className="text-on-image">Toucan.</h1>
    </div>
  );
}

export default App;
