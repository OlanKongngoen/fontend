import Image from "next/image";
import styles from "./page.module.css";
import natureImage from './/nature.jpg';
import lakeImage from './/Lake.jpg';
import desertImage from './/Desert.jpg'
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

        <div className="col md-12 p-5 ">
          <div className="card shadow-sm" style={{ width: '18rem' }}>
            <Image src={natureImage} className="card-img-top" alt="Logorina" width={286} height={180} />
            <div className="card-body">
              <h5 className="card-title">ธรรมชาติ</h5>
              <p className="card-text"> ปรากฏการณ์ของโลกกายภาพ และยังหมายถึงชีวิตโดยรวม มีขนาดตั้งแต่เล็กกว่าอะตอมไปจนถึงจักรวาล การศึกษาธรรมชาติเป็นส่วนประกอบใหญ่ส่วนหนึ่ง (และอาจเป็นหนึ่งเดียว) ของวิทยาศาสตร์ </p>
                {/* เพิ่มเติมปุ่มหรือลิงก์หากต้องการ */}
              </div>
            </div>
          </div>

          <div className="col md-12 p-5  ">
          <div className="card shadow-sm" style={{ width: '18rem' }}>
            <Image src={lakeImage} className="card-img-top" alt="Logorina" width={286} height={180} />
            <div className="card-body">
              <h5 className="card-title">ทะเลสาบ</h5>
              <p className="card-text">  เป็นแหล่งน้ำขนาดใหญ่ ที่ล้อมรอบด้วยผืนดิน โดยทั่วไปทะเลสาบจะไม่มีทางไหลออกสู่ทะเล และมีน้ำจืด</p>
                {/* เพิ่มเติมปุ่มหรือลิงก์หากต้องการ */}
              </div>
            </div>
          </div>

          <div className="col md-12 p-5">
          <div className="card shadow-sm" style={{ width: '18rem' }}>
            <Image src={desertImage} className="card-img-top" alt="Logorina" width={286} height={180} />
            <div className="card-body">
              <h5 className="card-title">ทะเลทราย</h5>
              <p className="card-text"> เป็นบริเวณแผ่นดินแห้งแล้งซึ่งเกิดหยาดน้ำฟ้าน้อยและทำให้สภาพการดำรงชีพไม่เอื้อสำหรับพืชและสัตว์ ประมาณหนึ่งในสามของพื้นผิวดินของโลกแห้งแล้งหรือกึ่งแห้งแล้ง ซึ่งรวมเขตขั้วโลกด้วยซึ่งเกิดหยาดน้ำฟ้าน้อย และบ้างเรียก "บริเวณแห้งแล้งเย็น" บริเวณแห้งแล้งสามารถจำแนกได้โดยปริมาณหยาดน้ำฟ้าที่ตก อุณหภูมิ </p>
                {/* เพิ่มเติมปุ่มหรือลิงก์หากต้องการ */}
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