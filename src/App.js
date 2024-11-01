import "./App.css";
import Banner from "./Banner";
import account from "./assets-images/account.png";
import search from "./assets-images/search.png";
import heart from "./assets-images/heart.png";
import cart from "./assets-images/cart.png";
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
              gap: "60px",
              paddingLeft: "350px",
              fontSize: "16px",
              marginTop: "10px",
            }}
          >
            <div>Home</div>
            <div>Shop</div>
            <div>About</div>
            <div>Contact</div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "60px",
              paddingLeft: "150px",
              marginTop: "10px",
            }}
          >
            <img
              src={account}
              alt="account"
              style={{ width: "25px", height: "25px" }}
            />
            <img
              src={search}
              alt="search"
              style={{ width: "25px", height: "25px" }}
            />
            <img
              src={heart}
              alt="heart"
              style={{ width: "25px", height: "25px" }}
            />
            <img
              src={cart}
              alt="cart"
              style={{ width: "25px", height: "25px" }}
            />
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
}

export default App;
