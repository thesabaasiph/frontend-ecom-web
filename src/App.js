import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <div style={{ width: 1440, height: 100, background: "#e6dbba" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingInline: "54px",
            paddingBlock: "29px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <img
              src="logo.png"
              alt="Logo"
              style={{ width: "30px", height: "30px" }}
            />
            <span style={{ fontSize: "24px", fontWeight: "bold" }}>
              Furniro
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              paddingLeft: "350px",
              fontSize: "15px",
              marginTop: "10px",
            }}
          >
            <div>Home</div>
            <div>Shop</div>
            <div>About</div>
            <div>Contact</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
