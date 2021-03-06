import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SeethruBox from "./components/SeethruBox/SeethruBox";
import background from "./toucan.jpg";

function App() {
  return (
    <>
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
        <Navbar />

        <h1 className="text-on-image font-base">Toucan.</h1>
        <SeethruBox />
      </div>
    </>
  );
}

export default App;
