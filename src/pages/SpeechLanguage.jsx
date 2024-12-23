import useEventListeners from "../hooks/useEventListener";

export default function SpeechLanguage() {
  useEventListeners()
  
  return (
    <>
      <div className="sidebar">
        <a className="sidebar-header" href="/">
          <img
            src="/images/logo.png"
            alt="Logo"
            width="87"
            height="54.49"
          />
          <img
            src="/images/logo2.png"
            alt="Nuvance Health"
            width="135"
          />
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
            <img
              src="/images/dollar.png"
              alt="Dollar"
              width="12"
              height="19"
            />
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
          <a href="/" className="navbar-logo">
            <img src="/images/logo.png" alt="Logo" height="42" />
            <img
              src="/icons/nuvance-health.svg"
              alt="Nuvance Health"
              height="42"
            />
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
                <a href="#" className="hero-bar-breadcrumb-item">
                  Rehabilitation
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
                <h1>REHABILITATION</h1>
              </div>
              <div className="hero-content-address">
                <div className="image">
                  <img src="/images/profile.jpg" />
                </div>
                <div className="usha">
                  <h1>Dr Radha</h1>
                </div>
                <h4>MBBS MD in Radiology </h4>
              </div>
            </div>
          </section>
          <section className="description"></section>
          <section className="description-title-desc">
            <h2>About Our Rehabilitation facilities and Expertise</h2>
            <p>
              Rehabilitation is a multidisciplinary healthcare process designed
              to help individuals recover from injury, illness, or disability
              and regain physical, mental, or emotional functionality. Its
              primary goal is to restore independence and quality of life while
              promoting overall well-being. Rehabilitation services are tailored
              to each person’s needs and often involve collaboration between
              physiotherapists, occupational therapists, medical professionals,
              and mental health specialists.
            </p>
          </section>
          <section className="description-title-desc">
            <h2>Rehabilitation Facilities</h2>
            <p>
              Curing sports injuries involves a combination of immediate first
              aid, medical intervention, and rehabilitation to ensure a safe and
              effective recovery. Treatment depends on the type and severity of
              the injury, ranging from minor strains to more serious fractures
              or ligament tears. Here’s a general approach to managing and
              curing sports injuries
            </p>
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
            <a href="#">Patients & Visitors</a>
            <div className="menu-mobile-navigation-divider"></div>
            <a href="#">Locations</a>
            <div className="menu-mobile-navigation-divider"></div>
            <a href="#">About Us</a>
            <a href="#" className="with-icon">
              <img
                src="/images/calendar.png"
                alt="Calendar"
                width="16"
                height="18"
              />
              Book Online
            </a>
            <a href="#" className="with-icon">
              <img
                src="/images/padlock.png"
                alt="Padlock"
                width="16"
                height="18"
              />
              Patient Portals
            </a>
            <a href="#" className="with-icon">
              <img
                src="/images/dollar.png"
                alt="Dollar"
                width="12"
                height="19"
              />
              Pay Bill
            </a>
            <a href="#" className="with-icon">
              <img
                src="/images/giving-love.png"
                alt="Giving Love"
                width="16"
                height="15"
              />
              Giving
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
