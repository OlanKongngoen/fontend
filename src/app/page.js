import Image from "next/image";
import styles from "./page.module.css";
import natureImage from './/nature.jpg';
import lakeImage from './/Lake.jpg';
import './/globals.css';
import Script from "next/script";
import Link from "next/link";

export default function Home() {
  return (
<>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">NatureIsLife</a>
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
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Link href="/signup">
          <button className="btn btn-primary" type="button">
            Sign Up
          </button>
          </Link>
          <Link href="/signin">
          <button className="btn btn-primary me-md-2" type="button">
          Sign In
        </button>
        </Link>
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
              <Image src={lakeImage} className="d-clock w-100" alt="Lake" />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
          </button>
             <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
          </button>
        </div>
            </div>
          </div>

  <div className="d-flex flex-row">
  <div className="card" style={{width: '30rem'}}>
    <Image src={natureImage} className="card-img-top" alt="Nature" />
    <div className="card-body">
      <h5 className="card-title">ความหมาย</h5>
      <p className="card-text"> ธรรมชาติหมายถึงทุกสิ่งทุกอย่างที่เกิดขึ้นเองตามธรรมชาติ ไม่ว่าจะเป็นสิ่งมีชีวิต เช่น พืช สัตว์ มนุษย์ หรือสิ่งไม่มีชีวิต เช่น ภูเขา แม่น้ำ ท้องฟ้า ดวงดาว</p>
    </div>
  </div>
  <div className="card" style={{width: '30rem'}}>
    <Image src={natureImage} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">ที่มา</h5>
      <p className="card-text">คำว่า "ธรรมชาติ" มาจากภาษาสันสกฤต ซึ่งมีความหมายว่า "สิ่งที่เป็นไปตามธรรมดา" หรือ "สภาวะที่เป็นอยู่ตามธรรมชาติ" คำนี้สะท้อนให้เห็นถึงความเชื่อของคนโบราณที่เชื่อว่าธรรมชาติมีกฎเกณฑ์และระเบียบของตัวเอง ซึ่งมนุษย์ควรอยู่ร่วมกับธรรมชาติอย่างสอดคล้อง</p>
    </div>
  </div>
  <div className="card" style={{width: '30rem'}}>
    <Image src={natureImage} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">ความสำคัญ</h5>
      <p className="card-text">ธรรมชาติเปรียบเสมือนบ้านของเรา การดูแลธรรมชาติก็เหมือนกับการดูแลบ้านของเราเอง เพื่อให้ลูกหลานได้อยู่อาศัยในโลกที่สวยงามและยั่งยืน</p>
    </div>
  </div>
</div>

        <div className="row">
        <footer class="bg-success py-3 my-4 border rounded">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
    </ul>
    <p class="text-center text-body-secondary">© 2024 Company, Inc</p>
  </footer>

            </div>
          </div>

</>
  );
} 