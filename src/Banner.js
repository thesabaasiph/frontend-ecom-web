import bannerImage from "./assets-images/banner.png";
function Banner() {
  return (
    <div
      style={{
        position: "relative",
        width: "1440px",
        height: "500px", // Adjust height as needed
        backgroundImage: `url(${bannerImage})`, // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 241, 221, 0.95)", // Light beige with opacity
          padding: "30px",
          maxWidth: "400px",
          textAlign: "left",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          marginLeft: "739px",
        }}
      >
        <p
          style={{
            fontSize: "14px",
            fontWeight: "500",
            color: "#8a7a63",
            margin: "0",
          }}
        >
          New Arrival
        </p>
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#9c7439",
            margin: "10px 0",
          }}
        >
          Discover Our New Collection
        </h1>
        <p style={{ fontSize: "14px", color: "#8a7a63", lineHeight: "1.5" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "14px",
            fontWeight: "600",
            color: "white",
            backgroundColor: "#9c7439",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          BUY NOW
        </button>
      </div>
    </div>
  );
}

export default Banner;
