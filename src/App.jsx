import React from 'react'

function App() {
  return (
    <main>
      <section
        className="rooms-page about section-padding2 imageabout"
      >
        <div className="container">
          <div className="row rev">
            <div
              className="col-md-8 mb-30 animate-box fadeInUp animated"
              data-animate-effect="fadeInUp"
            >
              <h1 className="section-title abt desktop_title">
                Hotel Runway Inn - Best place for your comfort just outside Varanasi
                International Airport{" "}
              </h1>
              <p>
                Welcome to Hotel Runway Inn,your gateway to Varanasi's spiritual
                allure! Step into modern elegance in rooms and suites, offering
                stunning views and a range of options from Economy to Maharaja Suite.
                Indulge in culinary delights at our restaurant Simply Benares or relax
                at our rooftop Aqua Lounge, where a swimming pool and scenic vistas
                await.
              </p>
              <p>
                With a stellar <strong>4.5-star rating on Google</strong>, join us for
                an unforgettable stay marked by unparalleled comfort and satisfaction!
              </p>
              <div className="reservations">
                <div className="icon">
                  <span className="flaticon-call" />
                </div>
                <div className="text">
                  <p>Reservation</p> <a href="tel:93058 04900">93058 04900</a>
                </div>
              </div>
            </div>
            <div
              className="col col-md-4 animate-box fadeInUp animated"
              data-animate-effect="fadeInUp"
            >
              <img
                src="img/varanasi-best-hotel-for-ghat.webp"
                alt="Hotel Runway inn best hotel near kashi vishwanath Temple"
                className="mb-5"
              />
              <img
                src="img/varanasi-hotel-logo.webp"
                alt="Hotel Runway inn best hotel near kashi vishwanath Temple"
                className="ms-5 ps-5  mobview"
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default App
