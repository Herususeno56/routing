import "./index.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            Heru Suseno
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              &nbsp
              <li>
                <Link to="/login"> Login </Link>
              </li>
              &nbsp
              <li>
                <Link to="/lifecycle"> Lifecycle </Link>
              </li>
              &nbsp
              <li>
                <Link to="/hook"> Hook </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="p-5 mb-4 bg-ligt rounded-3 jumbotron">
        <div className="container-fluid py-5 text-center">
          <p className="fs-5 fst-italic mt-5">Selamat Datang di Biografi</p>
          <h1 className="display-4"> Heru Suseno</h1>
          <button className="btn btn-primary border border-dark btn-sm mt-5 shadow-sm text-white px-3 py2">
            Instagram
          </button>
        </div>
      </div>

      <div className="container text-center" id="bio">
        <h3 className="fs-bold fs-2"> Tentang Saya</h3>
        <p className="fs-6 fst-italic fw-light">
          Namaku Heru Suseno, lahir di Kab.Klaten tanggal 16 Juli 1998. Aku
          adalah anak pertama dan satu-satunya. Menjadi seseorang yang sukses
          menurutku tidak bisa digapai dengan mudah. Harus ada usaha ekstra jika
          kita menginginkan sesuatu yang besar pula. Aku sangat mempercayai
          pepatah, usaha tak akan mengkhianati hasil, karena setiap usaha yang
          kita perjuangkan akan membuahkan hasil yang memuaskan.
        </p>
        <div className="row">
          <div className="col-lg-4 col-sm-md-4 col-sm-12">
            <h6 className="fs-5"> Buku</h6>
            <p className="fw-light">
              Benda yang paling saya suka, Buku adalah kumpulan kertas berisi
              informasi, tercetak, disusun secara sistematis, dijilid serta
              bagian luarnya diberi pelindung terbuat dari kertas tebal, karton
              atau bahan lain.
            </p>
          </div>
          <div className="col-lg-4 col-sm-md-4 col-sm-12">
            <h6 className="fs-5"> Membaca Buku</h6>
            <p className="fw-light">
              Membaca buku merupakan kegiatan paling menyenangkan karena
              aktivitas itu memiliki banyak manfaat untuk kehidupan sehari-hari.
              Hal ini karena buku menjadi salah satu sumber pengetahuan yang
              mampu menambah dan memperbarui wawasan. Bahkan, rutin membaca buku
              juga dipercaya mampu meningkatkan konsentrasi dan empati
            </p>
          </div>
          <div className="col-lg-4 col-sm-md-4 col-sm-12">
            <h6 className="fs-5">Web Development</h6>
            <p className="fw-light">
              web development atau pengembangan web, adalah sebuah proses
              pembangunan dan pemeliharaan situs web. Pekerjaan ini dilakukan di
              balik layar dengan tujuan untuk membuat situs web yang tampak
              apik, dan dapat bekerja dengan cepat.
            </p>
          </div>
        </div>
      </div>

      <div className="contrainer mb-5" id="kontak">
        <h3 className="fs-bold fs-2 text-center mb-3"> Kontak</h3>
        <div className="card mx-auto" style={{ width: "500px" }}>
          <div className="card-body">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                {" "}
                pesan
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>{" "}
            <div className="d-grid gap-2">
              <button
                className="btn btn-primary border border-dark btn-sm text-white px-3 py-2"
                type="button"
              >
                Kirim
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark mb-0 mt-5">
        <footer>
          {" "}
          <p className="text-white text-center footer">
            &copy; 2022 Heru Suseno
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
