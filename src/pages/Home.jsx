import "tiny-slider/dist/tiny-slider.css";
import TinySlider from "tiny-slider-react";
import useEventListeners from "../hooks/useEventListener";

const settings = {
  items: 1,
  slideBy: 1,
  gutter: 16,
  loop: false,
  mouseDrag: true,
  nav: false,
  prevButton: ".btn-prev-carousel",
  nextButton: ".btn-next-carousel",
  responsive: {
    1200: {
      items: 3,
    },
    600: {
      items: 2,
    },
  },
};

function Home() {

  useEventListeners();
  
  return (
    <>
      <div className="sidebar">
        <a className="sidebar-header" href="/">
          <img src="/images/logo.png" alt="Logo" width="87" height="54.49" />
          <img src="/images/logo2.png" alt="Nuvance Health" width="135" />
        </a>
        <nav className="sidebar-navigation">
          <a href="#">Services & Treatments</a>
          <div className="sidebar-navigation-divider"></div>
          <a href="#">Consultation Fee Structure</a>
          <div className="sidebar-navigation-divider"></div>
          <a href="#">About Us</a>
          <a href="#" className="with-icon">
            <img
              src="/images/calendar.png"
              alt="Calendar"
              width="16"
              height="18"
            />
            Content
          </a>
          <a href="#" className="with-icon">
            <img
              src="/images/padlock.png"
              alt="Padlock"
              width="16"
              height="18"
            />
            Content
          </a>
          <a href="#" className="with-icon">
            <img src="/images/dollar.png" alt="Dollar" width="12" height="19" />
            Content
          </a>
          <a href="#" className="with-icon">
            <img
              src="/images/giving-love.png"
              alt="Giving Love"
              width="16"
              height="15"
            />
            Content
          </a>
        </nav>
      </div>
      <div className="content">
        <div className="space-top-mobile"></div>
        <div className="navbar">
          <a href="#" className="navbar-logo">
            <img src="/images/logo.png" alt="Logo" height="54.49" />
            <img src="/images/logo2.png" alt="Nuvance Health" width="135" />
          </a>
          <button className="navbar-action-search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search open"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x close"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
          <button className="navbar-action-menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu open"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x close"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <div className="hero-bar-action-location mobile">
          <button className="hero-bar-action-location-triger mobile search-location-mobile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-map-pin"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Set My Location
          </button>
          <div
            className="hero-bar-action-location-pop-up mobile"
            style={{ display: "none" }}
            id="locMobPopup"
          >
            <div className="hero-bar-action-location-pop-up-header mobile">
              <h5>
                Providing your location allows us to show you nearby locations
                and doctors
              </h5>
              <button className="locMobPopupClose">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
            <form className="hero-bar-action-location-pop-up-form">
              <label htmlFor="city-or-zipcode">City or Zip Code</label>
              <div className="hero-bar-action-location-pop-up-input-button mobile">
                <input
                  type="text"
                  name="city-or-zipcode"
                  id="city-or-zipcode"
                />
                <button type="submit" className="mobile">
                  Set
                </button>
              </div>
            </form>
            <button className="hero-bar-action-location-pop-up-button-current-location btn-current-location">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.4354 3.08198C20.9352 2.5686 20.1949 2.37734 19.5046 2.57866L3.408 7.25952C2.6797 7.46186 2.16349 8.04269 2.02443 8.78055C1.88237 9.5315 2.37858 10.4848 3.02684 10.8834L8.0599 13.9768C8.57611 14.2939 9.24238 14.2144 9.66956 13.7835L15.4329 7.9843C15.723 7.68231 16.2032 7.68231 16.4934 7.9843C16.7835 8.27623 16.7835 8.74935 16.4934 9.05134L10.72 14.8516C10.2918 15.2814 10.2118 15.9508 10.5269 16.4702L13.6022 21.5538C13.9623 22.1577 14.5826 22.5 15.2628 22.5C15.3429 22.5 15.4329 22.5 15.513 22.4899C16.2933 22.3893 16.9135 21.8558 17.1436 21.1008L21.9156 5.02479C22.1257 4.34028 21.9356 3.59537 21.4354 3.08198Z"
                  fill="currentColor"
                />
              </svg>
              Use my current location
            </button>
          </div>
        </div>
        <main>
          <section className="hero">
            <div className="hero-bar">
              <div className="hero-bar-breadcrumb">
                <a href="/" className="hero-bar-breadcrumb-item">
                  <img
                    src="/images/home.webp"
                    alt="Home Icon"
                    width="16"
                    height="16"
                  />
                </a>

                <span className="hero-bar-breadcrumb-item">/</span>
                <a href="/" className="hero-bar-breadcrumb-item">
                  Healing Touch Polyclinic
                </a>
              </div>
              <div className="hero-bar-actions">
                <div className="hero-bar-action-location">
                  <div
                    className="hero-bar-action-location-pop-up"
                    id="locDeksPopup"
                    style={{ display: "none" }}
                  >
                    <div className="hero-bar-action-location-pop-up-header">
                      <h5>
                        Providing your location allows us to show you nearby
                        locations and doctors
                      </h5>
                      <button className="locDeksPopupClose">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-x"
                        >
                          <path d="M18 6 6 18" />
                          <path d="m6 6 12 12" />
                        </svg>
                      </button>
                    </div>
                    <form className="hero-bar-action-location-pop-up-form">
                      <label htmlFor="city-or-zipcode">City or Zip Code</label>
                      <div className="hero-bar-action-location-pop-up-input-button">
                        <input
                          type="text"
                          name="city-or-zipcode"
                          id="city-or-zipcode"
                        />
                        <button type="submit">Set</button>
                      </div>
                    </form>
                    <button className="hero-bar-action-location-pop-up-button-current-location btn-current-location">
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.4354 3.08198C20.9352 2.5686 20.1949 2.37734 19.5046 2.57866L3.408 7.25952C2.6797 7.46186 2.16349 8.04269 2.02443 8.78055C1.88237 9.5315 2.37858 10.4848 3.02684 10.8834L8.0599 13.9768C8.57611 14.2939 9.24238 14.2144 9.66956 13.7835L15.4329 7.9843C15.723 7.68231 16.2032 7.68231 16.4934 7.9843C16.7835 8.27623 16.7835 8.74935 16.4934 9.05134L10.72 14.8516C10.2918 15.2814 10.2118 15.9508 10.5269 16.4702L13.6022 21.5538C13.9623 22.1577 14.5826 22.5 15.2628 22.5C15.3429 22.5 15.4329 22.5 15.513 22.4899C16.2933 22.3893 16.9135 21.8558 17.1436 21.1008L21.9156 5.02479C22.1257 4.34028 21.9356 3.59537 21.4354 3.08198Z"
                          fill="currentColor"
                        />
                      </svg>
                      Use my current location
                    </button>
                  </div>
                </div>
                <div className="hero-bar-action-language">
                  <img
                    src="/images/earth.png"
                    alt="Earth Icon"
                    width="16"
                    height="16"
                  />
                  <select
                    name="language"
                    id="language"
                    className="hero-bar-action-language-select"
                  >
                    <option value="">Select language</option>
                    <option value="spain">Malayalam</option>
                  </select>
                  <img
                    src="/images/rectangle-down.png"
                    alt="Rectangle Down"
                    width="9"
                    height="9"
                  />
                </div>
              </div>
            </div>
            <div className="hero-content">
              <div className="hero-content-header">
                <h1>HEALING TOUCH POLYCLINIC</h1>
                <button className="button-request-appoinment" type="button">
                  Request an Appoinment
                </button>
              </div>
              <div className="hero-content-address">
                <h3>PHYSIOTHERAPY CENTER</h3>
                <p>
                  1161,Blue sky Building,Beach road,2 cross,Kannur,Kerala 670001
                </p>
                <p>0497-2761444</p>
              </div>
            </div>
          </section>
          <section className="about">
            <aside className="about-content">
              <p>
                Healing Touch Polyclinic is a specialized healthcare facility
                that offers comprehensive physiotherapy services to individuals
                seeking recovery, rehabilitation, and improved mobility. With a
                focus on personalized care, the center employs modern
                physiotherapy techniques and state-of-the-art equipment to
                address a wide range of conditions, including musculoskeletal
                injuries, neurological disorders, and post-surgical recovery
                needs. Their approach combines evidence-based treatments with
                compassionate care, ensuring patients receive effective
                therapies tailored to their unique requirements.
              </p>
              <p>
                The clinic is staffed by experienced physiotherapists and
                healthcare professionals dedicated to enhancing patient
                outcomes. They offer various services, such as pain management,
                therapeutic exercises, manual therapy, and posture correction
                programs. Additionally, the facility might provide advanced
                treatments like electrotherapy, ultrasound therapy, and
                ergonomic advice to help patients regain strength, flexibility,
                and functionality. The focus is not only on alleviating pain but
                also on preventing recurrence and promoting long-term health.
              </p>
              <p>
                Healing Touch Polyclinic positions itself as a hub for holistic
                wellness, emphasizing patient education and empowerment. Through
                individualized treatment plans and consistent support, the
                clinic aims to improve the quality of life for its clients.
                Whether it’s helping athletes recover from sports injuries or
                aiding individuals with chronic conditions, the clinic strives
                to be a trusted partner in health and rehabilitation.
              </p>
            </aside>
            <div></div>
            <aside className="about-schedule">
              <article className="about-schedule-item">
                <h3>HOURS</h3>
                <h3>Physical Therapy :</h3>
                <p>Monday - Saturday: 7 am - 8 pm</p>
                <p>Friday: 7 am - 5 pm</p>
              </article>
              <article className="about-schedule-item">
                <h3>Acupunture :</h3>
                <p>Monday, Tuesday, Thursday: 7 am - 6 pm</p>
                <p>Doctor: USHA</p>
              </article>
              <article className="about-schedule-item">
                <h3>Sports Injuries :</h3>
                <p>Monday, Tuesday, Thursday: 7 am - 6 pm</p>
                <p>Doctor: Sindu</p>
              </article>
              <article className="about-schedule-item">
                <h3>Rehabilitation :</h3>
                <p>Monday, Tuesday, Thursday: 7 am - 6 pm</p>
                <p>Doctor: Thejas</p>
              </article>
            </aside>
          </section>
          <section className="about-mobile">
            <details className="about-accordion">
              <summary className="about-accordion-header">
                <span className="about-accordion-header-title">Overview</span>
                <span className="about-accordion-header-icon about-accordion-header-icon-open">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-plus"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                </span>
                <span className="about-accordion-header-icon about-accordion-header-icon-hide">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-minus"
                  >
                    <path d="M5 12h14" />
                  </svg>
                </span>
              </summary>
              <div className="about-accordion-content">
                <p>
                  Healing Touch Polyclinic is a specialized healthcare facility
                  that offers comprehensive physiotherapy services to
                  individuals seeking recovery, rehabilitation, and improved
                  mobility. With a focus on personalized care, the center
                  employs modern physiotherapy techniques and state-of-the-art
                  equipment to address a wide range of conditions, including
                  musculoskeletal injuries, neurological disorders, and
                  post-surgical recovery needs. Their approach combines
                  evidence-based treatments with compassionate care, ensuring
                  patients receive effective therapies tailored to their unique
                  requirements.
                </p>
                <p>
                  The clinic is staffed by experienced physiotherapists and
                  healthcare professionals dedicated to enhancing patient
                  outcomes. They offer various services, such as pain
                  management, therapeutic exercises, manual therapy, and posture
                  correction programs. Additionally, the facility might provide
                  advanced treatments like electrotherapy, ultrasound therapy,
                  and ergonomic advice to help patients regain strength,
                  flexibility, and functionality. The focus is not only on
                  alleviating pain but also on preventing recurrence and
                  promoting long-term health.
                </p>
                <p>
                  Healing Touch Polyclinic positions itself as a hub for
                  holistic wellness, emphasizing patient education and
                  empowerment. Through individualized treatment plans and
                  consistent support, the clinic aims to improve the quality of
                  life for its clients. Whether it’s helping athletes recover
                  from sports injuries or aiding individuals with chronic
                  conditions, the clinic strives to be a trusted partner in
                  health and rehabilitation.
                </p>
              </div>
            </details>
            <details className="about-accordion">
              <summary className="about-accordion-header">
                <span className="about-accordion-header-title">Hours</span>
                <span className="about-accordion-header-icon about-accordion-header-icon-open">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-plus"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                </span>
                <span className="about-accordion-header-icon about-accordion-header-icon-hide">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-minus"
                  >
                    <path d="M5 12h14" />
                  </svg>
                </span>
              </summary>
              <div className="about-accordion-content hours">
                <article>
                  <h4>Physical Therapy :</h4>
                  <p>Monday - Saturday: 7 am - 8 pm</p>
                  <p>Friday: 7 am - 5 pm</p>
                </article>
                <article>
                  <h4>Acupunture :</h4>
                  <p>Monday, Tuesday, Thursday: 7 am - 6 pm</p>
                  <p>Doctor: Neha</p>
                </article>
                <article>
                  <h4>Sports Injuries :</h4>
                  <p>Monday, Tuesday, Thursday: 7 am - 6 pm</p>
                  <p>Doctor: Alkha</p>
                </article>
                <article>
                  <h4></h4>
                  <p>Monday, Tuesday, Thursday: 7 am - 6 pm</p>
                  <p>Doctor: Radha</p>
                </article>
              </div>
            </details>
          </section>
          <section className="service">
            <h2>Learn More About Healing Touch Services</h2>
            <div className="service-items">
              <article className="service-card">
                <img
                  src="/images/physical-icon.webp"
                  alt="Physical Theraphy Icon"
                  height="82"
                />
                <a
                  className="service-card-link"
                  href="/physical-theraphy"
                >
                  <h3>Pyshical Therapy</h3>
                  <svg
                    width="23"
                    height="16"
                    viewBox="0 0 23 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM22.7071 8.70711C23.0976 8.31658 23.0976 7.68342 22.7071 7.2929L16.3431 0.928934C15.9526 0.538409 15.3195 0.538409 14.9289 0.928933C14.5384 1.31946 14.5384 1.95262 14.9289 2.34315L20.5858 8L14.9289 13.6569C14.5384 14.0474 14.5384 14.6805 14.9289 15.0711C15.3195 15.4616 15.9526 15.4616 16.3431 15.0711L22.7071 8.70711ZM1 9L22 9L22 7L1 7L1 9Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <p className="service-card-desc">
                  Physical therapists combine extensive education, clinical
                  experience and current research to create a treatment plan
                  tailored specifically to you.
                </p>
              </article>
              <article className="service-card">
                <img
                  src="/images/acu.png"
                  alt="Occupational Theraphy Icon"
                  height="82"
                />
                <a
                  className="service-card-link"
                  href="/occupational-theraphy"
                >
                  <h3>Acupuncture</h3>
                  <svg
                    width="23"
                    height="16"
                    viewBox="0 0 23 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM22.7071 8.70711C23.0976 8.31658 23.0976 7.68342 22.7071 7.2929L16.3431 0.928934C15.9526 0.538409 15.3195 0.538409 14.9289 0.928933C14.5384 1.31946 14.5384 1.95262 14.9289 2.34315L20.5858 8L14.9289 13.6569C14.5384 14.0474 14.5384 14.6805 14.9289 15.0711C15.3195 15.4616 15.9526 15.4616 16.3431 15.0711L22.7071 8.70711ZM1 9L22 9L22 7L1 7L1 9Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <p className="service-card-desc">
                  The Acupuncture is an ancient healing practice rooted in
                  traditional Chinese medicine TCM
                </p>
              </article>
              <article className="service-card">
                <img
                  src="/images/plus.png"
                  alt="Speech Language And Shalowing Theraphy Icon"
                  height="82"
                />
                <a className="service-card-link" href="/speech-language">
                  <h3 className="text-down">Rehabilitation</h3>
                  <svg
                    width="23"
                    height="16"
                    viewBox="0 0 23 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM22.7071 8.70711C23.0976 8.31658 23.0976 7.68342 22.7071 7.2929L16.3431 0.928934C15.9526 0.538409 15.3195 0.538409 14.9289 0.928933C14.5384 1.31946 14.5384 1.95262 14.9289 2.34315L20.5858 8L14.9289 13.6569C14.5384 14.0474 14.5384 14.6805 14.9289 15.0711C15.3195 15.4616 15.9526 15.4616 16.3431 15.0711L22.7071 8.70711ZM1 9L22 9L22 7L1 7L1 9Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <p className="service-card-desc">
                  Rehabilitation is a process aimed at restoring an individual’s
                  physical, mental, and emotional well-being after injury,
                  illness, or surgery
                </p>
              </article>
              <article className="service-card">
                <img
                  src="/images/sports.png"
                  alt="Specialized Theraphy Icon"
                  height="82"
                />
                <a
                  className="service-card-link"
                  href="/specialized-theraphy"
                >
                  <h3>Sports Injuries</h3>
                  <svg
                    width="23"
                    height="16"
                    viewBox="0 0 23 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM22.7071 8.70711C23.0976 8.31658 23.0976 7.68342 22.7071 7.2929L16.3431 0.928934C15.9526 0.538409 15.3195 0.538409 14.9289 0.928933C14.5384 1.31946 14.5384 1.95262 14.9289 2.34315L20.5858 8L14.9289 13.6569C14.5384 14.0474 14.5384 14.6805 14.9289 15.0711C15.3195 15.4616 15.9526 15.4616 16.3431 15.0711L22.7071 8.70711ZM1 9L22 9L22 7L1 7L1 9Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <p className="service-card-desc">
                  Sports injuries reffer to physical injuries that occur during
                  sports exercise or other physical activities
                </p>
              </article>
            </div>
          </section>
          <section className="related-locations">
            <div className="related-locations-headers">
              <h2>Related Locations</h2>
              <div className="related-locations-navigations">
                <button className="btn-carousel btn-prev-carousel">
                  <svg
                    width="12"
                    height="20"
                    viewBox="0 0 12 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: "rotate(180deg)" }}
                  >
                    <path
                      d="M1.625 1.25L10.375 10L1.625 18.75"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button className="btn-carousel btn-next-carousel">
                  <svg
                    width="12"
                    height="20"
                    viewBox="0 0 12 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.625 1.25L10.375 10L1.625 18.75"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <TinySlider settings={settings}>
              <article className="related-location-card">
                <img
                  src="/images/banner-preview.png"
                  alt="Banner Preview"
                  width="219"
                  height="123"
                />
                <div className="related-location-card-content">
                  <h3>Lorem Ipsum</h3>
                  <p className="related-location-card-content-address">
                    551 Route 22, Pawling, NY 12564 (845) 855-7300 TTY (800)
                    421-1220
                  </p>
                  <p className="related-location-card-content-services">
                    Services: <a href="#">Outpatient Rehabilitation</a>
                    <a href="#">Occupational Theraphy</a>
                    <a href="#">Physical Theraphy</a>
                    <a href="#">Speech Theraphy</a>
                    <a href="#">Vestibular Theraphy</a>
                    <a href="#">Specialized Therapies</a>
                    <a href="#">Hand Theraphy</a>
                  </p>
                </div>
              </article>
              <article className="related-location-card">
                <img
                  src="/images/banner-preview.png"
                  alt="Banner Preview"
                  width="219"
                  height="123"
                />
                <div className="related-location-card-content">
                  <h3>Lorem Ipsum</h3>
                  <p className="related-location-card-content-address">
                    551 Route 22, Pawling, NY 12564 (845) 855-7300 TTY (800)
                    421-1220
                  </p>
                  <p className="related-location-card-content-services">
                    Services: <a href="#">Outpatient Rehabilitation</a>
                    <a href="#">Occupational Theraphy</a>
                    <a href="#">Physical Theraphy</a>
                    <a href="#">Speech Theraphy</a>
                    <a href="#">Vestibular Theraphy</a>
                    <a href="#">Specialized Therapies</a>
                    <a href="#">Hand Theraphy</a>
                  </p>
                </div>
              </article>
              <article className="related-location-card">
                <img
                  src="/images/banner-preview.png"
                  alt="Banner Preview"
                  width="219"
                  height="123"
                />
                <div className="related-location-card-content">
                  <h3>Lorem Ipsum</h3>
                  <p className="related-location-card-content-address">
                    551 Route 22, Pawling, NY 12564 (845) 855-7300 TTY (800)
                    421-1220
                  </p>
                  <p className="related-location-card-content-services">
                    Services: <a href="#">Outpatient Rehabilitation</a>
                    <a href="#">Occupational Theraphy</a>
                    <a href="#">Physical Theraphy</a>
                    <a href="#">Speech Theraphy</a>
                    <a href="#">Vestibular Theraphy</a>
                    <a href="#">Specialized Therapies</a>
                    <a href="#">Hand Theraphy</a>
                  </p>
                </div>
              </article>
              <article className="related-location-card">
                <img
                  src="/images/banner-preview.png"
                  alt="Banner Preview"
                  width="219"
                  height="123"
                />
                <div className="related-location-card-content">
                  <h3>Lorem Ipsum</h3>
                  <p className="related-location-card-content-address">
                    551 Route 22, Pawling, NY 12564 (845) 855-7300 TTY (800)
                    421-1220
                  </p>
                  <p className="related-location-card-content-services">
                    Services: <a href="#">Outpatient Rehabilitation</a>
                    <a href="#">Occupational Theraphy</a>
                    <a href="#">Physical Theraphy</a>
                    <a href="#">Speech Theraphy</a>
                    <a href="#">Vestibular Theraphy</a>
                    <a href="#">Specialized Therapies</a>
                    <a href="#">Hand Theraphy</a>
                  </p>
                </div>
              </article>
            </TinySlider>
          </section>
        </main>
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-content-work-with">
              <h2>JOIN US ON SOCIAL MEDIA</h2>
              <div className="footer-content-social-media">
                <a href="#">
                  <img
                    src="/icons/instagram.svg"
                    alt="Instagram"
                    width="70"
                    height="70"
                  />
                </a>
                <a href="#">
                  <img
                    src="/icons/facebook.svg"
                    alt="Facebook"
                    width="70"
                    height="70"
                  />
                </a>
                <a href="#">
                  <img
                    src="/icons/linkedin.svg"
                    alt="Linkedin"
                    width="70"
                    height="70"
                  />
                </a>
                <a href="#">
                  <img
                    src="/icons/youtube.svg"
                    alt="Youtube"
                    width="70"
                    height="70"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-term-links">
            <div className="footer-term-links-copyright">
              <p>@2024 Healing Touch Polyclinic</p>
            </div>
            <div className="footer-term-links-item">
              <a href="#">Term of Use</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Sitemap</a>
              <a href="#">Compliance</a>
              <a href="#">Price Transparancy</a>
            </div>
          </div>
        </footer>

        <div className="popup-search">
          <button className="popup-search-button-close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
          <form className="popup-search-form">
            <label htmlFor="search" className="popup-search-input-label">
              Search
            </label>
            <div className="popup-search-input-search">
              <input
                type="text"
                name="search"
                placeholder="Find a doctor, location or service"
                className="popup-search-input-search-field"
              />
              <span className="popup-search-input-search-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-search"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </span>
            </div>
          </form>
        </div>

        <div className="menu-mobile">
          <nav className="menu-mobile-navigation">
            <a href="#">Services & Treatments</a>
            <div className="menu-mobile-navigation-divider"></div>
            <a href="#">Consultation Fee Structure</a>

            <div className="menu-mobile-navigation-divider"></div>
            <a href="#">About Us</a>
            <a href="#" className="with-icon">
              <img
                src="./assets/images/calendar.png"
                alt="Calendar"
                width="16"
                height="18"
              />
              Content
            </a>
            <a href="#" className="with-icon">
              <img
                src="./assets/images/padlock.png"
                alt="Padlock"
                width="16"
                height="18"
              />
              Content
            </a>
            <a href="#" className="with-icon">
              <img
                src="./assets/images/dollar.png"
                alt="Dollar"
                width="12"
                height="19"
              />
              Content
            </a>
            <a href="#" className="with-icon">
              <img
                src="./assets/images/giving-love.png"
                alt="Giving Love"
                width="16"
                height="15"
              />
              Content
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Home;
