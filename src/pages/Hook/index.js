import React, { useEffect, useState } from "react";

const App = () => {
  const [berita, setBerita] = useState([]);
  const [cari, setCari] = useState("");

  const handleChange = (e) => {
    setCari(e.target.value);
  };
  useEffect(() => {
    let link1 =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=999a027a1f944c04b2b07562a8623400";
    let link2 = `https://newsapi.org/v2/everything?q=${cari}&apiKey=999a027a1f944c04b2b07562a8623400`;
    const berita = (input) => {
      fetch(input)
        .then((response) => response.json())
        .then((data) => setBerita(data.articles));
    } ;
    if (cari.length === 0) {
      berita(link1);
    } else if (cari.length > 0) {
      berita(link2);
    }
  }, [cari]);

  return (
    <div>
      <form>
        <input
          id="cari"
          className="search"
          type="search"
          placeholder="Cari..."
          onChange={handleChange}

        />
        
        <input className="button mb-4 mt-3" type="button" value="Cari" />
        {cari}
      </form>

      <div className="container">
        <div className="row">
          {berita
            ? berita.map((item, index) => {
                return (
                  <div className="col-12	col-lg-6	col-xl-4	">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        src={item.urlToImage}
                        alt={item.title}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.author}</p>
                        <p className="card-text">{item.description}</p>
                        <a href={item.url} className="btn btn-primary">
                          {" "}
                          Selengkapnya{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
};

export default App;
