import { Button, Carousel } from "react-bootstrap";
import Products from "../components/Products";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="m-4">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            // src={ayamImg}
            src="data:image/jpeg;base64,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"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Menu Spesial</h3>
            <h1>Ayam Bakar Taliwang</h1>
            <p>asakan yang di wariskan turun temurun dalam keluarga daerah Sumbawa</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmUZ9OJ37k5bXtk6JZ9jsInaWl2vud3BufNQ&usqp=CAU"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Menu Spesial</h3>
            <h1>Singang</h1>
            <p>Masakan yang di wariskan turun temurun dalam keluarga daerah Sumbawa</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="data:image/jpeg;base64,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"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Menu Spesial</h3>
            <h1>Sepat</h1>
            <p>
            Masakan yang di wariskan turun temurun dalam keluarga daerah Sumbawa
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <hr />
      <h1 style={{ margin: "30px 0", textAlign: "center" }}> Menu </h1>
      <Products sumProduct={3} />
      <div style={{ margin: "30px 0", textAlign: "center" }}>
        <Button onClick={() => navigate("/products")}>
          {" "}
          Semua{" "}
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
