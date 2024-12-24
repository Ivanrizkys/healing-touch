import * as Dialog from "@radix-ui/react-dialog";
import { collection, doc, getDocs, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, storage } from "../config/firebase";
import { v4 as uuidv4 } from "uuid";
import {
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";
import useEventListeners from "../hooks/useEventListener";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function Doctor() {
  const [doctors, setDoctors] = useState([]);
    const [editLoading, setEditLoading] = useState(false)
  const [selectedEditId, setSelectedEditId] = useState("");
  const [editDoctorDialog, setEditDoctorDialog] = useState(false);
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const dataCollectionRef = collection(db, "doctors");

  useEventListeners()
  
  useEffect(() => {
    const unSubscribe = onSnapshot(dataCollectionRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.data().id,
        name: doc.data().name,
        image: doc.data().image,
        role: doc.data().role,
        open_hours: doc.data().open_hours,
        closed_hours: doc.data().closed_hours,
      }));
      console.log("doctorsnya adalah", data);
      setDoctors(data);
    });

    return () => unSubscribe();
  }, []);

  const handleEditDoctor = (e) => {
    e.preventDefault();

    setEditLoading(true)
    const formData = new FormData(e.target);
    const name = formData.get("doctor-name");
    const role = formData.get("doctor-role");
    const openHours = formData.get("doctor-open-hours");
    const closedHours = formData.get("doctor-closed-hours");

    if (!image) {
        console.error("image cannot be empty")
        return
    }
    const imageRef = storageRef(storage, `doctors/${uuidv4()}`);
    uploadBytes(imageRef, image)
        .then((snapshot) => {
            getDownloadURL(snapshot.ref)
                .then(async (url) => {
                    const q = query(dataCollectionRef, where("id", "==", selectedEditId));
                    const querySnapshot = await getDocs(q);
                    querySnapshot.forEach((document) => {
                        updateDoc(doc(db, "doctors", document.id), {
                            name: name,
                            image: url,
                            role: role,
                            open_hours: openHours,
                            closed_hours: closedHours,
                        });
                      });
                      setImagePreview("")
                    setEditLoading(false)
                    setEditDoctorDialog(false)
                })
                .catch((err) => {
                    console.error("error get storage url", err)
                    setEditLoading(false)
                })
        })
        .catch((err) => {
            console.error("error upload image", err)
            setEditLoading(false)
        })
  };

  return (
    <>
      <Sidebar />
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
          <section className="doctor-section">
            <div className="doctor-list">
              {doctors?.map((doctor) => (
                <article key={doctor?.id} className="doctor-card">
                  <div>
                    <img
                      className="doctor-image"
                      src={
                        doctor?.image ??
                        "https://placehold.co/64x64?text=Doctor"
                      }
                      alt="Doctor Image"
                      width={88}
                      height={88}
                    />
                  </div>
                  <div>
                    <h4 className="doctor-name">{doctor?.name}</h4>
                    <p className="doctor-specialized">{doctor?.role}</p>
                  </div>
                  <div className="doctor-operational">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 20.0001C4.48 20.0001 0 15.5301 0 10.0001C0 4.4801 4.48 9.98974e-05 10 9.98974e-05C15.53 9.98974e-05 20 4.4801 20 10.0001C20 15.5301 15.53 20.0001 10 20.0001ZM13.19 13.7101C13.31 13.7801 13.44 13.8201 13.58 13.8201C13.83 13.8201 14.08 13.6901 14.22 13.4501C14.43 13.1001 14.32 12.6401 13.96 12.4201L10.4 10.3001V5.6801C10.4 5.2601 10.06 4.9301 9.65 4.9301C9.24 4.9301 8.9 5.2601 8.9 5.6801V10.7301C8.9 10.9901 9.04 11.2301 9.27 11.3701L13.19 13.7101Z"
                        fill="#FFA500"
                      />
                    </svg>
                    <span>
                      {doctor?.open_hours} - {doctor?.closed_hours}
                    </span>
                  </div>
                  <button
                    className="doctor-edit-btn"
                    onClick={() => {
                      setSelectedEditId(doctor?.id);
                      setEditDoctorDialog(true);
                    }}
                  >
                    Edit Profile
                  </button>
                </article>
              ))}
            </div>
          </section>
        </main>
        <Footer />

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

      <Dialog.Root open={editDoctorDialog} onOpenChange={setEditDoctorDialog}>
        <Dialog.Portal>
          <Dialog.Overlay className="dialog-edit-doctor-overlay" />
          <Dialog.Content className="dialog-edit-doctor-content">
            <Dialog.Title className="dialog-edit-doctor-content-title">
              My Profile
            </Dialog.Title>
            <Dialog.Description asChild>
              <form
                className="dialog-edit-doctor-content-desc"
                onSubmit={(e) => handleEditDoctor(e)}
              >
                <div className="dialog-edit-doctor-input-image">
                  <img
                    src={imagePreview}
                    alt="Doctor Preview"
                    onError={(e) => {
                      e.target.src =
                        "https://placehold.co/64x64?text=Select+Image";
                    }}
                  />
                  <div>
                    <label htmlFor="doctor-image">Upload Image</label>
                    <input
                      type="file"
                      id="doctor-image"
                      name="doctor-image"
                      onChange={(e) => {
                        setImagePreview(URL.createObjectURL(e.target.files[0]));
                        setImage(e.target.files[0]);
                      }}
                    />
                  </div>
                </div>
                <input
                  className="dialog-edit-input-normal"
                  type="text"
                  placeholder="Name"
                  id="doctor-name"
                  name="doctor-name"
                />
                <input
                  className="dialog-edit-input-normal"
                  type="text"
                  placeholder="Role"
                  id="doctor-role"
                  name="doctor-role"
                />
                <input
                  className="dialog-edit-input-normal"
                  type="text"
                  placeholder="Open Hours"
                  id="doctor-open-hours"
                  name="doctor-open-hours"
                />
                <input
                  className="dialog-edit-input-normal"
                  type="text"
                  placeholder="Closed Hours"
                  id="doctor-closed-hours"
                  name="doctor-closed-hours"
                />
                <div className="dialog-edit-doctor-content-action">
                  <button type="button" className="cancel">
                    Cancel
                  </button>
                  <button type="submit" disabled={editLoading} className="saved">
                    {editLoading ? "Loading ..." : "Saved"}
                  </button>
                </div>
              </form>
            </Dialog.Description>
            <Dialog.Close asChild>
              <button className="dialog-edit-doctor-content-close">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L15.9977 16"
                    stroke="#FF0000"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 2L2.00228 16"
                    stroke="#FF0000"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

export default Doctor;
