import Image from "next/image";
import styles from "./page.module.css";
import natureImage from './/nature.jpg';
import oceanImage from './/ocean.jpg'
import './/globals.css';
import Script from "next/script";

export default function Home() {
  return (
<>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">LOGO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">contact</a>
        </li>
      </ul>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button class="btn btn-primary me-md-2" type="button">Sign in</button>
        <button class="btn btn-primary" type="button">Sign Up</button>
      </div>
    </div>
  </div>
</nav>


      <div className="container">

        <div className="row my-3">
          <div className="col-md-12 text-center bg-success p-5 border rounded">
            <div id="carouselExampleRided" className="carousel Silde" data-bs-ride="true">
              <div className="carousel-inner">
                <div className="carousel-item active">
                <Image src={natureImage} className="d-clock w-100" alt="Nature" />
              </div>
              <div className="carousel-item">
              <Image src={oceanImage} className="d-clock w-100" alt="Ocean" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="perv">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
            </div>
          </div>

        <div className="row mb-3 ">
        <div className="col-md-4 text-center bg-light p-5  border rounded">
            Card
          </div>
          <div className="col-md-4 text-center bg-light p-5  border rounded">
            Card
          </div>
          <div className="col-md-4 text-center bg-light p-5  border rounded">
          Card
          </div>
        </div>

        <div className="row">
        <div className="col-md-12 text-center bg-success p-5 border rounded">
            FOOTER
          </div>
        </div>

      </div>

</>
  );
} 