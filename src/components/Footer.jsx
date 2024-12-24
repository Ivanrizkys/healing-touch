export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-content-work-with">
          <h2>JOIN US ON SOCIAL MEDIA</h2>
          <div className="footer-content-social-media">
            <a href="#">
              <img
                src="/icons/instagram.svg"
                alt="Instagram"
                width="35"
                height="35"
              />
            </a>
            <a href="#">
              <img
                src="/icons/facebook.svg"
                alt="Facebook"
                width="35"
                height="35"
              />
            </a>
            <a href="#">
              <img
                src="/icons/linkedin.svg"
                alt="Linkedin"
                width="35"
                height="35"
              />
            </a>
            <a href="#">
              <img
                src="/icons/youtube.svg"
                alt="Youtube"
                width="35"
                height="35"
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
  );
}
