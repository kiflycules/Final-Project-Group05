import { Button, Carousel } from "react-bootstrap";
import Products from "../components/Products";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            // src={ayamImg}
            src="https://img2.pngdownload.id/20180505/zow/kisspng-fashion-design-fashion-illustration-fashion-illustrations-5aee5531cb8303.3201572015255688178336.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image.similarpng.com/very-thumbnail/2021/01/Fashion-shop-logo-design-on-transparent-background-PNG.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQZsYMqbVPWC5dIoqTDZz0yI7LbsW6eJvNIw&usqp=CAU"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h1 style={{ margin: "30px 0", textAlign: "center" }}> Products </h1>
      <Products sumProduct={3} />
      <div style={{ margin: "30px 0", textAlign: "center" }}>
        <Button variant="outline-primary" onClick={() => navigate("/products")}>
          {" "}
          See All{" "}
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
