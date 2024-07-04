import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          maxWidth: "520px",
          width: "100%",
          lineHeight: "1.4",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            height: "200px",
            margin: "0 auto 20px",
            zIndex: -1,
          }}
        >
          <h1
            style={{
              fontSize: "236px",
              fontWeight: 200,
              margin: 0,
              color: "#211b19",
              textTransform: "uppercase",
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            Oops!
          </h1>
          <h2
            style={{
              fontSize: "28px",
              textTransform: "uppercase",
              color: "#211b19",
              background: "#F3F3F3",
              padding: "10px 5px",
              margin: "auto",
              display: "inline-block",
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
            }}
          >
            404 - The Page can't be found
          </h2>
        </div>
        <Link
          to="/"
          style={{
            display: "inline-block",
            fontWeight: 700,
            textDecoration: "none",
            color: "#fff",
            textTransform: "uppercase",
            padding: "13px 23px",
            background: "#54BE96",
            fontSize: "18px",
          }}
        >
          Go to homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
