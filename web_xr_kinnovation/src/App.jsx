import "./App.css";
import Simulator3d from "./Simulator3d/components/Simulator3d";

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Simulator3d
        designId={1}
        viewport={{ x: 0, y: 0 }}
        downloadFile={() => null}
        setDownloadFile={() => null}
      />
    </div>
  );
}

export default App;
