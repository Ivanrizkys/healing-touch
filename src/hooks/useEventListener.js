import { useEffect } from "react";

const useEventListeners = () => {
  useEffect(() => {
    const btnRequestAppointment = document.querySelector(".button-request-appoinment");
    const searchPopUp = document.querySelector(".popup-search");
    const btnSearchTrigger = document.querySelector(".action-search-triger");
    const btnCloseSearch = document.querySelector(".popup-search-button-close");
    const toggleSearchMobile = document.querySelector(".navbar-action-search");
    const mobileMenu = document.querySelector(".menu-mobile");
    const hamburgerTrigger = document.querySelector(".navbar-action-menu");
    const locationTriggerDesktop = document.querySelector(".search-location-dekstop");
    const locationTriggerDesktopPopUp = document.getElementById("locDeksPopup");
    const locationDesktopTriggerClose = document.querySelector(".locDeksPopupClose");
    const locationTriggerMobile = document.querySelector(".search-location-mobile");
    const locationTriggerMobilePopup = document.getElementById("locMobPopup");
    const locationMobileTriggerClose = document.querySelector(".locMobPopupClose");
    const btnCurrentLocations = document.querySelectorAll(".btn-current-location");

    // Ensure elements exist before attaching listeners
    if (btnRequestAppointment) {
      btnRequestAppointment.addEventListener("click", () => {
        window.open("https://api.whatsapp.com/send?phone=7558096800&text=Hai");
      });
    }

    if (btnSearchTrigger && searchPopUp) {
      btnSearchTrigger.addEventListener("click", () => searchPopUp.classList.add("active"));
    }

    if (btnCloseSearch && searchPopUp) {
      btnCloseSearch.addEventListener("click", () => searchPopUp.classList.remove("active"));
    }

    if (toggleSearchMobile && searchPopUp) {
      toggleSearchMobile.addEventListener("click", () => {
        toggleSearchMobile.classList.toggle("active");
        searchPopUp.classList.toggle("active");
      });
    }

    if (hamburgerTrigger && mobileMenu) {
      hamburgerTrigger.addEventListener("click", () => {
        hamburgerTrigger.classList.toggle("active");
        mobileMenu.classList.toggle("active");
      });
    }

    if (locationTriggerDesktop && locationTriggerDesktopPopUp) {
      locationTriggerDesktop.addEventListener("click", () => {
        locationTriggerDesktop.classList.toggle("active");
        locationTriggerDesktopPopUp.style.display = locationTriggerDesktop.classList.contains("active")
          ? "grid"
          : "none";
      });
    }

    if (locationDesktopTriggerClose && locationTriggerDesktop && locationTriggerDesktopPopUp) {
      locationDesktopTriggerClose.addEventListener("click", () => {
        locationTriggerDesktop.classList.remove("active");
        locationTriggerDesktopPopUp.style.display = "none";
      });
    }

    if (locationTriggerMobile && locationTriggerMobilePopup) {
      locationTriggerMobile.addEventListener("click", () => {
        locationTriggerMobile.classList.toggle("active");
        locationTriggerMobilePopup.style.display = locationTriggerMobile.classList.contains("active")
          ? "grid"
          : "none";
      });
    }

    if (locationMobileTriggerClose && locationTriggerMobile && locationTriggerMobilePopup) {
      locationMobileTriggerClose.addEventListener("click", () => {
        locationTriggerMobile.classList.remove("active");
        locationTriggerMobilePopup.style.display = "none";
      });
    }

    btnCurrentLocations.forEach((btnCurrentLocation) => {
      if (btnCurrentLocation) {
        btnCurrentLocation.addEventListener("click", () => {
          if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
              console.log(position);
            });
          } else {
            console.log("Geolocation is not available");
          }
        });
      }
    });

    // Cleanup event listeners
    return () => {
      if (btnRequestAppointment) btnRequestAppointment.removeEventListener("click", () => {});
      if (btnSearchTrigger) btnSearchTrigger.removeEventListener("click", () => {});
      if (btnCloseSearch) btnCloseSearch.removeEventListener("click", () => {});
      if (toggleSearchMobile) toggleSearchMobile.removeEventListener("click", () => {});
      if (hamburgerTrigger) hamburgerTrigger.removeEventListener("click", () => {});
      if (locationTriggerDesktop) locationTriggerDesktop.removeEventListener("click", () => {});
      if (locationDesktopTriggerClose) locationDesktopTriggerClose.removeEventListener("click", () => {});
      if (locationTriggerMobile) locationTriggerMobile.removeEventListener("click", () => {});
      if (locationMobileTriggerClose) locationMobileTriggerClose.removeEventListener("click", () => {});
      btnCurrentLocations.forEach((btnCurrentLocation) => {
        if (btnCurrentLocation) btnCurrentLocation.removeEventListener("click", () => {});
      });
    };
  }, []);
};

export default useEventListeners;
