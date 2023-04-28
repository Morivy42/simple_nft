//import ListGroup from "./components/ListGroup";
import ImageUploader from "./components/ImageUploader";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <header
        style={{ margin: "32px auto", fontSize: "24px", fontWeight: "bold" }}
      >
        NFT Generator
      </header>
      <ImageUploader />
    </div>
  );
}

export default App;
