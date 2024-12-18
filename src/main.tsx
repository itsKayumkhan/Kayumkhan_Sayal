import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Resume from "./Pages/Resume.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/resume-me" element={<Resume />} />
        </Routes>
      </BrowserRouter></>
);
