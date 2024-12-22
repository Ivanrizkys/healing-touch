import Doctor from "./pages/Doctor";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import PhysicalTheraphy from "./pages/PhisicalTheraphy";
import OccupationalTheraphy from "./pages/OccupationalTheraphy";
import SpeechLanguage from "./pages/SpeechLanguage";
import SpecializedTheraphy from "./pages/SpecializedTheraphy";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/physical-theraphy" element={<PhysicalTheraphy />} />
          <Route path="/occupational-theraphy" element={<OccupationalTheraphy />} />
          <Route path="/speech-language" element={<SpeechLanguage />} />
          <Route path="/specialized-theraphy" element={<SpecializedTheraphy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
