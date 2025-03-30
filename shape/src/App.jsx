import GreenCircle from "./Greencircle";
import RedCircle from "./RedCircle";
import YellowCircle from "./YellowCircle";

function App() {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <RedCircle></RedCircle>
      <YellowCircle></YellowCircle>
      <GreenCircle></GreenCircle>
    </div>
  );
}

export default App;
