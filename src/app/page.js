import Image from "next/image";
import styles from "./page.module.css";
import natureImage from './/nature.jpg';
import nature2Image from './/nature 2.jpg';
import nature3Image from './/nature 3.jpg';
import nature4Image from './/nature 4.jpg';
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
      <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/Contact">Contact</Link>
              </li>
              <li class="nav-item">
        <a href="/Signup" class="btn btn-outline-dark" tabindex="-1" role="button" aria-disabled="true">Signup</a>
        </li>&nbsp;
        <li class="nav-item">
        <a href="/Signin" class="btn btn-outline-dark" tabindex="-1" role="button" aria-disabled="true">Signin</a>
        </li>&nbsp;
      </ul>
      </div>
    </div>
</nav>


      <div className="container">

        <div className="row my-3">
          <div className="col-md-12 text-center bg-success p-5 border rounded">
            <div id="carouselExampleRided" className="carousel Silde" data-bs-ride="true">
              <div className="carousel-inner">
                <div className="carousel-item active">
                <Image src={nature4Image} className="d-clock w-100" alt="Nature" />
              </div>
              <div className="carousel-item">
              <Image src={nature2Image} className="d-clock w-100" alt="Lake" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
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
    <Image src={nature2Image} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">ที่มา</h5>
      <p className="card-text">คำว่า "ธรรมชาติ" มาจากภาษาสันสกฤต ซึ่งมีความหมายว่า "สิ่งที่เป็นไปตามธรรมดา" หรือ "สภาวะที่เป็นอยู่ตามธรรมชาติ" คำนี้สะท้อนให้เห็นถึงความเชื่อของคนโบราณที่เชื่อว่าธรรมชาติมีกฎเกณฑ์และระเบียบของตัวเอง ซึ่งมนุษย์ควรอยู่ร่วมกับธรรมชาติอย่างสอดคล้อง</p>
    </div>
  </div>
  <div className="card" style={{width: '30rem'}}>
    <Image src={nature3Image} className="card-img-top" alt="..." />
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
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Contact</a></li>
    </ul>
    <p class="text-center text-body-secondary">© Chiang Mai Technical ollege</p>
  </footer>

            </div>
          </div>

</>
  );
} 